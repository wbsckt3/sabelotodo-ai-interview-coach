/* Motorg: reglas gramaticales del idioma a aprender y lógica difusa común. Referencia para el skill; no escribe el feedback. */
import {analyzeSpanish} from './motorg-es.js';
import {analyzeFrench} from './motorg-fr.js';
const VERBS={fix:{past:'fixed'},deploy:{past:'deployed'},implement:{past:'implemented'},debug:{past:'debugged'},test:{past:'tested'},create:{past:'created'},build:{past:'built'},write:{past:'wrote'},find:{past:'found'},make:{past:'made'},do:{past:'did'},go:{past:'went'},have:{past:'had'},see:{past:'saw'},send:{past:'sent'},run:{past:'ran'},break:{past:'broke'},take:{past:'took'},lead:{past:'led'},learn:{past:'learned'},restart:{past:'restarted'},review:{past:'reviewed'},solve:{past:'solved'},work:{past:'worked'},use:{past:'used'},close:{past:'closed'},deliver:{past:'delivered'}};
const IRREGULAR_PAST=new Set(['built','wrote','found','made','did','went','had','saw','sent','ran','broke','took','led','was','were','got','gave','knew','said','told','thought','began','chose','spent','kept','left','met','paid','put','read','set','understood','won','fought','caught','brought','bought']);
const IRREGULAR_PARTICIPLE='built|written|found|made|done|gone|had|seen|sent|run|broken|taken|led|been|got|gotten|given|known|said|told|thought|begun|chosen|spent|kept|left|met|paid|put|read|set|understood|learnt|won';
const PAST_MARKER=/\b(yesterday|last night|last week|last month|last year|\d+\s+(?:day|week|month|year)s?\s+ago|in\s+20\d{2})\b/i;
const IMPERATIVE_START=/^(?:please\s+)?(?:fix|deploy|send|close|open|check|review|run|tell|explain|describe|give|make|restart|show|write|deliver|stop|start|let's)\b/i;
const TEMPORAL=/\b(?:yesterday|today|tomorrow|now|right now|currently|at the moment|last (?:night|week|month|year|sprint)|next (?:week|month|year|sprint)|always|never|usually|often|sometimes|every (?:day|week|sprint)|already|yet|just|since|for \d+ \w+|\d+ \w+ ago|ever)\b/gi;
const SPATIAL=/\b(?:in production|on the server|in the repo(?:sitory)?|in the cloud|in staging|in the code(?:base)?|in the database|on the team|at work|in the office|on the client|in the pipeline|here|there)\b/gi;
const CAUSAL=/\b(?:because|since|due to|as a result(?: of)?|that's why|therefore|so)\b/gi;
const PURPOSE=/\b(?:in order to|so that|to make sure|to avoid|to prevent|to ensure|to reduce|to improve|the goal was|aiming to|for the purpose of)\b/gi;
const POLITENESS=/\b(?:please|could you|would you|would you mind|kindly|if possible)\b/gi;
const WARNING=/\b(?:careful|be careful|risk|danger|otherwise|watch out|warning)\b/gi;
const ENTITIES=/\b(?:bugs?|deployments?|deploys?|releases?|services?|servers?|databases?|api|apis|endpoints?|tests?|pull requests?|code reviews?|incidents?|production|versions?|code|team|clients?|customers?|quer(?:y|ies)|cache|pipelines?|ci\/cd|microservices?|containers?|docker|kubernetes|logs?|monitoring|alerts?|latency|memory leak|outages?|rollback|reports?|door)\b/gi;
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const all=(re,t)=>[...new Set((String(t).match(re)||[]).map(s=>s.toLowerCase()))];
const fold=s=>String(s??'').normalize('NFD').replace(/\p{M}/gu,'').toLowerCase();
function questionExpectationEnglish(question){
 const q=String(question||'').toLowerCase();
 const pick=(code,label)=>({code,label});
 if(/\bwhat have you\b|\bhave you ever\b/.test(q))return pick('present_perfect','Presente perfecto');
 if(/\bwhat are you\b|\bright now\b/.test(q))return pick('present_continuous','Presente continuo');
 if(/\bwhat will you\b|\bif\b.*\b(fails|fail)\b/.test(q))return pick('future_will_main_clause','Futuro con will en la oración principal');
 if(/\bwhat did you\b|\byesterday\b|\blast week\b|\blast month\b|\blast year\b|\bprevious project\b|\bin the past\b/.test(q))return pick('simple_past','Pasado simple');
 if(/\bwhat do you\b|\bcurrent role\b|\bin your role\b/.test(q))return pick('present_simple','Presente simple');
 return pick('context_appropriate_tense','Tiempo acorde a la pregunta');
}
function verbFeaturesEnglish(text){
 const t=String(text||''), low=t.toLowerCase();
 const tokens=low.split(/[^a-z']+/).filter(Boolean);
 const verbs=[];
 const perfect=new RegExp(`\\b(have|has|'ve|had)\\s+(?:not\\s+|never\\s+|already\\s+|just\\s+)?([a-z]+ed|${IRREGULAR_PARTICIPLE})\\b`,'i').exec(low);
 const progressive=/\b(am|is|are|'m|'re|was|were)\s+(?:not\s+)?([a-z]+ing)\b/i.exec(low);
 const future=/\b(?:will|'ll|shall|won't)\s+(?:not\s+)?([a-z]+)\b|\b(?:am|is|are|'m|'re)\s+going\s+to\s+([a-z]+)\b/i.exec(low);
 const conditional=/\b(?:would|could|'d)\s+(?:not\s+)?([a-z]+)\b/i.exec(low);
 const passive=new RegExp(`\\b(?:was|were|is|are|been|be|being)\\s+([a-z]+ed|${IRREGULAR_PARTICIPLE})\\b`,'i').test(low);
 let tense='unknown',aspect='unknown';
 if(perfect){tense=perfect[1]==='had'?'past':'present';aspect='perfect';verbs.push({form:perfect[0],tense,aspect});}
 if(progressive){const past=/^(?:was|were)$/.test(progressive[1]);verbs.push({form:progressive[0],tense:past?'past':'present',aspect:'progressive'});if(tense==='unknown'){tense=past?'past':'present';aspect='progressive';}}
 if(future){verbs.push({form:future[0],tense:'future',aspect:/going to/.test(future[0])?'prospective':'unknown'});if(tense==='unknown'){tense='future';aspect=/going to/.test(future[0])?'prospective':'unknown';}}
 if(conditional&&tense==='unknown'){verbs.push({form:conditional[0],tense:'conditional',aspect:'unknown'});tense='conditional';}
 const pastSet=new Set([...Object.values(VERBS).map(v=>v.past),...IRREGULAR_PAST]);
 for(const tok of tokens){if(pastSet.has(tok)||(/ed$/.test(tok)&&tok.length>4&&!/(?:need|speed|seed|feed|bleed|breed|indeed|embed)$/.test(tok)))verbs.push({form:tok,tense:'past',aspect:'perfective'});}
 if(/\b(?:did|didn't)\b/.test(low))verbs.push({form:'did',tense:'past',aspect:'perfective'});
 if(tense==='unknown'&&verbs.some(v=>v.tense==='past')){tense='past';aspect='perfective';}
 if(tense==='unknown'){
  const present=/\b(?:i|we|you|they|he|she|it|the team|our team)\s+(?:usually\s+|always\s+|often\s+|also\s+)?([a-z]+)\b/i.exec(low)||/\b(am|is|are|do|does|don't|doesn't|'m|'re)\b/i.exec(low)||(IMPERATIVE_START.test(t.trim())?[t.trim().split(/\s+/)[0],t.trim().split(/\s+/)[0]]:null);
  if(present){tense='present';aspect=/\b(?:usually|always|often|every|normally|typically|sometimes)\b/i.test(low)?'habitual':'unknown';verbs.push({form:present[0],tense,aspect});}
 }
 const imperative=IMPERATIVE_START.test(t.trim())&&!/^\s*(?:i|we|you|they)\b/i.test(t);
 const subjunctive=/\bif\s+(?:i|he|she|it)\s+were\b|\b(?:suggest|recommend|insist|important|essential)\s+that\s+\w+\s+be\b/i.test(low);
 const mood=imperative?'imperative':subjunctive?'subjunctive':verbs.length?'indicative':'unknown';
 const modality=[];
 if(/\b(?:can|could|can't|cannot|able to)\b/i.test(low))modality.push('ability');
 if(/\b(?:may|might|maybe|perhaps|possibly)\b/i.test(low))modality.push('possibility');
 if(/\b(?:must|have to|has to|had to|need to|needs to|should|ought to)\b/i.test(low))modality.push('obligation');
 if(/\b(?:may i|can i|could i|am i allowed|is it ok if)\b/i.test(low))modality.push('permission');
 if(/\b(?:will|'ll|going to|want to|plan to|intend to|i'd like to|we'd like to)\b/i.test(low))modality.push('intention');
 if(/\b(?:definitely|certainly|surely|clearly|probably|i think|i believe|i'm sure)\b/i.test(low))modality.push('certainty');
 const negative=/\b(?:not|never|no|nothing|nobody|none)\b|n't\b/i.test(low);
 const partial=/\b(?:not all|not always|not fully|not completely|hardly|barely|partially|only partly)\b/i.test(low);
 let person='unknown';
 if(/\b(?:i|we|me|my|our|i'm|i've|i'll|we're|we've)\b/i.test(low))person='first';
 else if(/\byou\b|\byour\b/i.test(low))person='second';
 else if(verbs.length)person='third';
 return {sentenceType:/\?\s*$/.test(t)||/^\s*(?:can|could|would|will|do|does|did|is|are|what|how|why|when|where)\b.*\?/i.test(t)?'interrogative':imperative?'imperative':'declarative',verbs:verbs.slice(0,6),tense,aspect,mood,modality,polarity:partial?'partial_negation':negative?'negative':'affirmative',agency:{person,addressee:/\byou\b|\byour\b/i.test(low),passive,agentMentioned:passive&&/\bby\b/i.test(low),reportedDirective:/\b(?:told|asked|reminded)\s+(?:you|him|her|them)\s+to\b/i.test(low)},markers:{temporal:all(TEMPORAL,t),spatial:all(SPATIAL,t),causal:all(CAUSAL,t),purpose:all(PURPOSE,t),politeness:all(POLITENESS,t),warning:all(WARNING,t)},entities:all(ENTITIES,t),contentWords:[...new Set(tokens.filter(w=>w.length>4))].slice(0,20)};
}
function analyzeEnglish(input,options={}){
 const original=String(input??'').trim(), findings=[];let suggestedCorrection=original;
 const question=options.question||'';
 if(original){
  if(PAST_MARKER.test(original)){
   const match=/\b(i|you|we|they|he|she|it)\s+([a-z]+)\b/i.exec(original);
   const auxiliaryBeforeParticiple=match&&new RegExp(`\\b${esc(match[1])}\\s+${esc(match[2])}\\s+(?:already\\s+|just\\s+)?(?:[a-z]+ed|${IRREGULAR_PARTICIPLE})\\b`,'i').test(original)&&/^(?:have|has|had|do)$/i.test(match[2]);
   if(match&&!auxiliaryBeforeParticiple){const subject=match[1],verb=match[2].toLowerCase(),entry=VERBS[verb];const hasAux=new RegExp(`\\b${subject}\\s+(?:did|didn't|was|were|had|have|has|will|would|can|could|should|might|must)\\s+${esc(verb)}\\b`,'i').test(original);
    if(entry&&!hasAux){const pattern=new RegExp(`(\\b${esc(subject)}\\s+)${esc(verb)}\\b`,'i');if(pattern.test(original)){suggestedCorrection=original.replace(pattern,(_m,prefix)=>prefix+entry.past);findings.push({type:'possible_tense_mismatch',rule:'past_time_marker_simple_past',dimension:'cuando',observedForm:verb,suggestedForm:entry.past,explanation:'El marcador temporal parece situar la acción en el pasado; revisa si corresponde usar simple past.',confidence:0.86});}}
   }
   const perfect=new RegExp(`\\b(?:have|has|'ve)\\s+(?:already\\s+|just\\s+)?([a-z]+ed|${IRREGULAR_PARTICIPLE})\\b`,'i').exec(original);
   if(perfect)findings.push({type:'possible_aspect_mismatch',rule:'present_perfect_with_finished_time',dimension:'cuando',observedForm:perfect[0],suggestedForm:'simple past',explanation:'Un marcador de tiempo terminado como yesterday no suele ir con present perfect. Ese marcador pide simple past.',confidence:0.8});
  }
  const conditional=/\bif\s+([^,.!?]{0,100}?)\bwill\s+([a-z]+)\b/i.exec(original);
  if(conditional){findings.push({type:'possible_conditional_mismatch',rule:'first_conditional_if_clause',dimension:'cuando',observedForm:`if ${conditional[1]} will ${conditional[2]}`,suggestedForm:`if ${conditional[1]} ${conditional[2]}`,explanation:'En una condición real sobre el futuro, normalmente se usa present simple en la cláusula con if y will en la cláusula principal.',confidence:0.78});suggestedCorrection=suggestedCorrection.replace(/(\bif\s+[^,.!?]{0,100}?)\s+will\s+([a-z]+)\b/i,'$1 $2');}
  const didPast=/\b(did|didn't|did not)\s+([a-z]+ed)\b/i.exec(original);
  if(didPast){const base=Object.keys(VERBS).find(k=>VERBS[k].past===didPast[2].toLowerCase())||didPast[2].replace(/ed$/i,'');suggestedCorrection=suggestedCorrection.replace(didPast[0],`${didPast[1]} ${base}`);findings.push({type:'possible_structure_mismatch',rule:'did_with_base_form',dimension:'estructura',observedForm:didPast[0],suggestedForm:`${didPast[1]} ${base}`,explanation:'Con did, el pasado ya está marcado en el auxiliar; el verbo principal va en forma base.',confidence:0.82});}
  const nowSimple=/\b(?:right now|at the moment|currently)\b/i.test(original)&&/\b(?:i|we)\s+(work|fix|build|write|test|deploy|review|debug|implement)\b/i.exec(original);
  if(nowSimple)findings.push({type:'possible_aspect_mismatch',rule:'now_marker_present_continuous',dimension:'cuando',observedForm:nowSimple[0],suggestedForm:`${/\bwe\b/i.test(nowSimple[0])?'we are':'I am'} ${nowSimple[1]}ing`,explanation:'Con right now o at the moment, una acción en curso suele ir en present continuous.',confidence:0.72});
 }
 const objective=questionExpectationEnglish(question);
 return {input:original,language:'en',engine:'motorg',questionContext:question||null,questionExpectation:[objective.code],grammaticalObjective:objective,features:verbFeaturesEnglish(original),questionFeatures:verbFeaturesEnglish(question),findings,overallStatus:!original?'empty':findings.length?'possible_issue':'no_rule_matched',confidence:!original?1:findings.length?Math.max(...findings.map(f=>f.confidence)):0.35,suggestedCorrection,limitations:['Reglas heurísticas de inglés para entrevista técnica; no equivalen a un análisis sintáctico completo.','La IA escribe el feedback y usa este análisis como referencia.']};
}
const clamp=x=>Math.max(0,Math.min(1,x));
const r2=x=>Math.round(clamp(x)*100)/100;
const AND=(...xs)=>Math.min(...xs), OR=(...xs)=>Math.max(...xs), NOT=x=>1-x;
const EXPECTED={present_simple:{tense:'present',aspect:['habitual','unknown']},presente:{tense:'present',aspect:['habitual','unknown']},present:{tense:'present',aspect:['habitual','unknown','progressive']},simple_past:{tense:'past',aspect:['perfective']},preterito:{tense:'past',aspect:['perfective']},passe_compose:{tense:'past',aspect:['perfective']},present_continuous:{tense:'present',aspect:['progressive']},presente_continuo:{tense:'present',aspect:['progressive']},present_progressif:{tense:'present',aspect:['progressive','unknown']},future_will_main_clause:{tense:'future'},futuro_oracion_principal:{tense:'future'},futur_proposition_principale:{tense:'future'},present_perfect:{tense:'present',aspect:['perfect']},preterito_perfecto:{tense:'present',aspect:['perfect']},passe_compose_experience:{tense:'past',aspect:['perfective']}};
const EXPECTED_ACT={simple_past:'informar',preterito:'informar',passe_compose:'informar',present_simple:'informar',presente:'informar',present:'informar',present_continuous:'informar',presente_continuo:'informar',present_progressif:'informar',future_will_main_clause:'comprometerse',futuro_oracion_principal:'comprometerse',futur_proposition_principale:'comprometerse',present_perfect:'informar',preterito_perfecto:'informar',passe_compose_experience:'informar'};
function tenseFit(features,objective){
 const exp=EXPECTED[objective?.code];
 if(!features.verbs.length&&features.tense==='unknown')return {mu:0.35,reason:'sin verbo reconocido'};
 if(!exp)return {mu:0.6,reason:'la pregunta no fija un tiempo; decide el hilo'};
 const tenseOk=features.tense===exp.tense||(exp.tense==='future'&&features.verbs.some(v=>v.tense==='future'));
 const aspectOk=!exp.aspect||exp.aspect.includes(features.aspect);
 if(tenseOk&&aspectOk)return {mu:1,reason:'tiempo y aspecto coinciden con la pregunta'};
 if(tenseOk)return {mu:0.65,reason:'el tiempo coincide; el aspecto no'};
 if(exp.tense==='past'&&features.aspect==='perfect')return {mu:0.55,reason:'perfecto donde la pregunta pide pasado cerrado'};
 if(exp.aspect?.includes('perfect')&&features.tense==='past')return {mu:0.5,reason:'pasado cerrado donde la pregunta pide experiencia'};
 if(exp.aspect?.includes('progressive')&&features.tense==='present')return {mu:0.6,reason:'presente sin aspecto en curso'};
 if(exp.tense==='future'&&features.modality.includes('intention'))return {mu:0.7,reason:'intención sin futuro gramatical'};
 return {mu:0.2,reason:`la pregunta pide ${objective.label}`};
}
function hypotheses(f,context){
 const interrog=f.sentenceType==='interrogative'?1:0, imper=f.sentenceType==='imperative'?1:0, decl=f.sentenceType==='declarative'?1:0;
 const has=m=>f.modality.includes(m)?1:0;
 const first=f.agency.person==='first'?1:f.agency.person==='unknown'?0.3:0;
 const second=f.agency.person==='second'||f.agency.addressee?1:f.agency.person==='unknown'?0.3:0;
 const third=f.agency.person==='third'?1:0;
 const actionable=f.verbs.length?1:0.4;
 const past=f.tense==='past'?1:0, present=f.tense==='present'?1:0, future=f.tense==='future'?1:0, cond=f.tense==='conditional'?1:0;
 const neg=f.polarity==='negative'?1:f.polarity==='partial_negation'?0.6:0;
 const polite=f.markers.politeness.length?1:0, causal=f.markers.causal.length?1:0, purpose=f.markers.purpose.length?1:0, warn=f.markers.warning.length?1:0;
 const subj=f.mood==='subjunctive'?1:0, reported=f.agency.reportedDirective?1:0;
 const rules=[
  ['solicitar','pregunta por capacidad + acción ejecutable por el interlocutor + contexto pertinente',AND(interrog,has('ability'),second,actionable,context)*0.95],
  ['solicitar','modo imperativo + acción ejecutable',AND(imper,actionable)*0.85],
  ['solicitar','marcador de cortesía dirigido al interlocutor',AND(polite,second)*0.8],
  ['solicitar','condicional interrogativo dirigido al interlocutor',AND(interrog,cond,second)*0.9],
  ['solicitar','afirmación en presente o futuro sobre una acción del interlocutor (instrucción indirecta)',AND(decl,second,OR(present,future),actionable,NOT(first))*0.55],
  ['preguntar','forma interrogativa leída literalmente',AND(interrog,OR(NOT(has('ability')),0.6))*0.7],
  ['consultar_capacidad','pregunta literal sobre capacidad',AND(interrog,has('ability'))*0.22],
  ['informar','afirmación sobre lo que hace o hizo el hablante o un tercero',AND(decl,OR(first,third),OR(past,present))*0.85],
  ['informar','afirmación sin otra marca',decl*0.55],
  ['explicar','conector causal explícito',AND(decl,causal)*0.85],
  ['explicar','conector de finalidad explícito',AND(decl,purpose)*0.6],
  ['comprometerse','primera persona + futuro o intención',AND(decl,first,OR(future,has('intention')))*0.85],
  ['predecir','futuro sin primera persona',AND(decl,future,NOT(first))*0.6],
  ['advertir','marcador de advertencia',warn*0.75],
  ['advertir','futuro negativo dirigido al interlocutor',AND(future,second,neg)*0.55],
  ['reprochar','pasado + interlocutor + orden previa referida',AND(decl,past,second,OR(subj,reported,has('obligation')))*0.75],
  ['recordar_hecho','pasado + orden previa referida',AND(decl,past,OR(reported,subj))*0.6],
  ['rechazar','primera persona + negación + capacidad, intención o futuro',AND(decl,first,neg,OR(has('ability'),has('intention'),future))*0.75]
 ];
 const best={},fired=[];
 for(const [label,rule,mu] of rules){if(mu<=0.05)continue;fired.push({hypothesis:label,rule,mu:r2(mu)});if(!best[label]||mu>best[label])best[label]=mu;}
 const ranked=Object.entries(best).map(([label,mu])=>({label,mu:r2(mu)})).sort((a,b)=>b.mu-a.mu);
 return {ranked:ranked.slice(0,4),fired:fired.sort((a,b)=>b.mu-a.mu).slice(0,5)};
}
function overlap(a,b){const B=new Set((b||[]).map(fold));return (a||[]).map(fold).filter(w=>B.has(w)).length;}
function domainHits(input,terms){
 const text=fold(input);
 return [...new Set((Array.isArray(terms)?terms:[]).map(term=>fold(String(term)).trim()).filter(Boolean))].filter(term=>new RegExp(`(?<![\\p{L}])${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}s?(?![\\p{L}])`,'u').test(text));
}
function fuzzyReading(result,options={}){
 const q=result.questionFeatures, objective=result.grammaticalObjective;
 if(!result.input)return null;
 const domain=domainHits(result.input,options.domainTerms);
 const f={...result.features,entities:[...new Set([...result.features.entities.map(fold),...domain])]};
 const shared=overlap(f.contentWords,q?.contentWords);
 const relevant=f.entities.length>0||shared>0;
 const context=relevant?1:0.9;
 const hyp=hypotheses(f,context);
 const top=hyp.ranked[0]||{label:'sin_hipotesis',mu:0};
 const second=hyp.ranked[1]||{label:null,mu:0};
 const margin=r2(top.mu-second.mu);
 const decision=top.mu<0.5||margin<0.15?'evidencia_insuficiente':top.label;
 const fit=tenseFit(f,objective);
 const temporalFinding=Math.max(0,...result.findings.filter(x=>x.dimension==='cuando').map(x=>x.confidence));
 const anyFinding=Math.max(0,...result.findings.map(x=>x.confidence));
 const V=temporalFinding?Math.min(fit.mu,1-0.8*temporalFinding):fit.mu;
 const G=anyFinding?1-0.85*anyFinding:f.verbs.length?0.8:0.5;
 const expectedAct=/\b(?:why|por que|pourquoi)\b/.test(fold(result.questionContext))?'explicar':EXPECTED_ACT[objective?.code]||'informar';
 const C=result.questionContext?Math.max(0.2,(hyp.ranked.find(h=>h.label===expectedAct)||{mu:0.2}).mu):0.6;
 const P=clamp(0.35+0.15*Math.min(f.entities.length,3)+0.15*Math.min(shared,2));
 const S=0.35*G+0.25*C+0.25*V+0.15*P;
 const cuandoLiteral=[f.tense!=='unknown'?`tiempo:${f.tense}`:null,f.aspect!=='unknown'?`aspecto:${f.aspect}`:null,...f.markers.temporal].filter(Boolean);
 const purposeMu=f.markers.purpose.length?0.75:Math.min(0.8,top.mu);
 const dimensions={
  que:{pregunta:'¿Qué contenido se comunica?',literal:[...f.entities,...f.verbs.map(v=>v.form)].slice(0,8),grado:r2(0.3+0.15*Math.min(f.entities.length,2)+0.15*Math.min(f.verbs.length,2)),fuente:f.entities.length||f.verbs.length?'literal':'sin_evidencia'},
  como:{pregunta:'¿Cómo se comunica?',literal:[{interrogative:'pregunta',imperative:'orden',declarative:'afirmación'}[f.sentenceType],f.polarity!=='affirmative'?`polaridad:${f.polarity}`:null,...f.markers.politeness.map(p=>`cortesía:${p}`),...f.markers.warning.map(w=>`advertencia:${w}`)].filter(Boolean),noDetectable:['ironía','metáfora'],grado:/[?¿]/.test(result.input)||f.sentenceType!=='declarative'?0.9:0.7,fuente:'literal'},
  cuando:{pregunta:'¿Cuándo ocurre la acción?',literal:cuandoLiteral,grado:f.tense!=='unknown'&&f.markers.temporal.length?0.9:f.tense!=='unknown'?0.7:f.markers.temporal.length?0.5:0.2,fuente:cuandoLiteral.length?'literal':'sin_evidencia'},
  donde:f.markers.spatial.length?{pregunta:'¿En qué lugar o ámbito?',literal:f.markers.spatial,grado:0.8,fuente:'literal'}:{pregunta:'¿En qué lugar o ámbito?',literal:[],inferido:options.domainLabel?`ámbito de la entrevista: ${options.domainLabel}`:'ámbito de la entrevista',grado:0.3,fuente:'inferido_del_dialogo'},
  por_que:f.markers.causal.length?{pregunta:'¿Qué motivo se expresa?',literal:f.markers.causal,grado:0.75,fuente:'literal'}:{pregunta:'¿Qué motivo se expresa?',literal:[],grado:0.1,fuente:'sin_evidencia',nota:'Sin conector causal ni antecedente no se infiere un motivo.'},
  para_que:{pregunta:'¿Qué efecto comunicativo se busca?',literal:f.markers.purpose,inferido:decision,grado:r2(purposeMu),fuente:f.markers.purpose.length?'literal':'inferido'}
 };
 return {
  verbAnalysis:{tiempo:f.tense,aspecto:f.aspect,modo:f.mood,modalidad:f.modality,polaridad:f.polarity,agencia:f.agency,formas:f.verbs.map(v=>v.form)},
  dimensions,
  fuzzy:{hypotheses:hyp.ranked,rulesFired:hyp.fired,decision,margin,abstentionThreshold:0.15,contextSource:relevant?'dialogo':'convencion_de_uso',note:'Grados de pertenencia a una categoría, no probabilidades. Sin contexto, las reglas usan convenciones de uso y no inventan la situación.'},
  scores:{G:r2(G),C:r2(C),V:r2(V),P:r2(P),S:r2(S),formula:'S = 0.35G + 0.25C + 0.25V + 0.15P',tenseFit:fit.reason,expectedAct}
 };
}
function asReference(result,options={}){
 const reading=fuzzyReading(result,options);
 const {features,questionFeatures,...rest}=result;
 return {...rest,role:'reference',workingLanguage:result.language,...(reading||{}),contextSupport:{engine:result.engine,workingLanguage:result.language,questionExpectation:result.questionExpectation,grammaticalObjective:result.grammaticalObjective,note:'Referencia para el skill y la IA: reglas del idioma a aprender, seis dimensiones y lectura difusa. La IA escribe el feedback.'}};
}
export function analyzeGrammar(input,options={}){
 const language=['es','en','fr'].includes(options.language)?options.language:'en';
 if(language==='es')return asReference(analyzeSpanish(input,options),options);
 if(language==='fr')return asReference(analyzeFrench(input,options),options);
 return asReference(analyzeEnglish(input,options),options);
}
