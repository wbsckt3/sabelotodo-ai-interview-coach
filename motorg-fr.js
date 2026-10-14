/* EN PAUSA. Este motor no entra en el turno. El archivo se conserva. */
/* Motorg francés: reglas gramaticales y rasgos verbales. Referencia para el skill; no escribe el feedback. */
const PAST_MARKER=/(?<![\p{L}])(?:hier|avant-hier|la semaine derni[eè]re|le mois dernier|l'ann[eé]e derni[eè]re|il y a\s+\d+\s+(?:jours|semaines|mois|ans))(?![\p{L}])/iu;
const PRESENT_TO_PARTICIPLE=[['corrige','corrigé'],['corriges','corrigé'],['corrigent','corrigé'],['déploie','déployé'],['deploie','déployé'],['deploye','déployé'],['implémente','implémenté'],['implemente','implémenté'],['teste','testé'],['testes','testé'],['testent','testé'],['crée','créé'],['cree','créé'],['creent','créé'],['trouve','trouvé'],['trouves','trouvé'],['trouvent','trouvé'],['fais','fait'],['vais','allé'],['redémarre','redémarré'],['redemarre','redémarré'],['vérifie','vérifié'],['verifie','vérifié'],['résous','résolu'],['resous','résolu']];
const FUTURE_IN_SI=[['échouera','échoue'],['echouera','échoue'],['corrigera','corrige'],['fera','fait'],['ira','va'],['aura','a'],['sera','est'],['déploiera','déploie'],['deploiera','déploie'],['testera','teste']];
const AUX='ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|etes|sont';
const PARTICIPLE='\\p{L}+(?:é|ée|és|ées|i|ie|is|u|ue|us)|fait|faits|été|eu|pris|mis|dit|écrit|ecrit|vu|su|pu|dû|du|voulu|résolu|resolu|appris|compris';
const IMPERATIVE_START=/^(?:fais|faites|ferme|fermez|envoie|envoyez|corrige|corrigez|dis|dites|donne|donnez|allez|va|regarde|regardez|ouvre|ouvrez|redémarre|redémarrez|vérifie|vérifiez|explique|expliquez|raconte|racontez)(?![\p{L}])/iu;
const TEMPORAL=/(?<![\p{L}])(?:hier|avant-hier|aujourd'hui|demain|maintenant|en ce moment|actuellement|la semaine (?:derni[eè]re|prochaine)|le mois (?:dernier|prochain)|l'ann[eé]e (?:derni[eè]re|prochaine)|toujours|jamais|d'habitude|souvent|chaque (?:jour|semaine|sprint)|tous les jours|d[eé]j[aà]|encore|depuis|pendant|il y a\s+\d+\s+\p{L}+)(?![\p{L}])/giu;
const SPATIAL=/(?<![\p{L}])(?:en production|sur le serveur|dans le d[eé]p[oô]t|dans le cloud|en staging|dans le code|dans la base de donn[eé]es|dans l'[eé]quipe|au bureau|chez le client|dans le pipeline|ici|l[aà]-bas)(?![\p{L}])/giu;
const CAUSAL=/(?<![\p{L}])(?:parce que|parce qu'|car|puisque|[aà] cause de|gr[aâ]ce [aà]|c'est pourquoi|donc|du coup|en raison de)(?![\p{L}])/giu;
const PURPOSE=/(?<![\p{L}])(?:pour que|pour qu'|pour|afin de|afin que|dans le but de|en vue de)(?![\p{L}])/giu;
const POLITENESS=/(?<![\p{L}])(?:s'il (?:vous|te) pla[iî]t|pourriez-vous|pourrais-tu|auriez-vous|voudriez-vous|merci de)(?![\p{L}])/giu;
const WARNING=/(?<![\p{L}])(?:attention|risque|danger|sinon|faites gaffe|prudence)(?![\p{L}])/giu;
const ENTITIES=/(?<![\p{L}])(?:bug|bogue|erreur|panne|d[eé]ploiement|service|serveur|base de donn[eé]es|api|endpoint|test|tests|incident|production|version|code|[eé]quipe|client|requ[eê]te|cache|pipeline|pull request|revue de code|microservice|conteneur|docker|kubernetes|logs?|surveillance|alerte|latence|m[eé]moire|rollback|rapport|porte)(?![\p{L}])/giu;
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const word=s=>new RegExp(`(?<![\\p{L}])${esc(s)}(?![\\p{L}])`,'iu');
const fold=s=>String(s??'').normalize('NFD').replace(/\p{M}/gu,'').toLowerCase();
const all=(re,t)=>[...new Set((String(t).match(re)||[]).map(s=>s.toLowerCase()))];
export function questionExpectationFrench(question){
 const q=fold(question);
 const pick=(code,label)=>({code,label});
 if(/as-tu appris|qu'avez-vous appris|avez-vous appris/.test(q))return pick('passe_compose_experience','Passé composé de experiencia');
 if(/\ben ce moment\b|en train de|\bsur quoi\b/.test(q))return pick('present_progressif','Presente progresivo');
 if(/\bque feras\b|\bque ferais\b/.test(q)||(/\bsi\b/.test(q)&&/\bechoue\b|\bdeploiement\b/.test(q)))return pick('futur_proposition_principale','Futuro en la oración principal');
 if(/\bhier\b|\bavant-hier\b|as-tu fait|avez-vous fait|\bla semaine derniere\b|\ble mois dernier\b|annee derniere/.test(q))return pick('passe_compose','Passé composé');
 if(/que fais-tu|que fais tu|que faites-vous|\bdans ton poste\b/.test(q))return pick('present','Presente');
 return pick('temps_selon_la_question','Tiempo acorde a la pregunta');
}
function verbFeatures(text){
 const t=String(text||''), f=fold(t);
 const tokens=f.split(/[^\p{L}']+/u).filter(Boolean);
 const verbs=[];
 const compound=new RegExp(`(?<![\\p{L}])(?:j'|je\\s+|tu\\s+|il\\s+|elle\\s+|on\\s+|nous\\s+|vous\\s+|ils\\s+|elles\\s+)?(${AUX})\\s+(?:pas\\s+|jamais\\s+|d[eé]j[aà]\\s+)?(${PARTICIPLE})(?![\\p{L}])`,'iu').exec(t);
 const progressive=/(?<![\p{L}])en train de\s+\p{L}+(?:er|ir|re)(?![\p{L}])/iu.exec(t);
 const nearFuture=/(?<![\p{L}])(vais|vas|va|allons|allez|vont)\s+(?:pas\s+)?(\p{L}+(?:er|ir|re))(?![\p{L}])/iu.exec(t);
 const passive=new RegExp(`(?<![\\p{L}])(?:a été|ont été|été|est|sont|était|étaient|sera|seront)\\s+(?:${PARTICIPLE})\\s+par(?![\\p{L}])`,'iu').test(t);
 let tense='unknown',aspect='unknown';
 if(compound){tense='past';aspect='perfective';verbs.push({form:compound[0].trim(),tense,aspect,compound:true});}
 if(progressive){verbs.push({form:progressive[0],tense:'present',aspect:'progressive'});if(tense==='unknown'){tense='present';aspect='progressive';}}
 if(nearFuture){verbs.push({form:nearFuture[0],tense:'future',aspect:'prospective'});if(tense==='unknown'){tense='future';aspect='prospective';}}
 for(const tok of tokens){
  if(tok.length<4)continue;
  if(/(?:rais|rait|rions|riez|raient)$/.test(tok)){verbs.push({form:tok,tense:'conditional',aspect:'unknown'});continue;}
  if(/(?:rai|ras|ra|rons|rez|ront)$/.test(tok)&&/(?:era|ira|dra|rra|fera|sera|aura|ira|vra|cra)$|(?:erai|irai|drai|rrai|ferai|serai|aurai|vrai)$|(?:eras|iras|dras|feras|seras|auras)$|(?:erons|irons|ferons|serons|aurons)$|(?:erez|irez|ferez|serez|aurez)$|(?:eront|iront|feront|seront|auront)$/.test(tok)&&!/^(?:entre|autre|notre|votre|offre|ouvre|vraiment|cadre|ordre|propre|libre|lettre|mettre|metre)$/.test(tok)){verbs.push({form:tok,tense:'future',aspect:'unknown'});continue;}
  if(/(?:ais|ait|aient)$/.test(tok)&&!/(?:rais|rait|raient)$/.test(tok)&&!/^(?:mais|jamais|vrai|frais|anglais|francais|palais|relais|delais|essais)$/.test(tok)){verbs.push({form:tok,tense:'past',aspect:'imperfective'});continue;}
 }
 const PRESENT_FORMS=new Set([...PRESENT_TO_PARTICIPLE.map(([p])=>fold(p)),'suis','es','est','sommes','etes','sont','ai','avons','avez','ont','travaille','travailles','travaillons','travaillez','travaillent','utilise','utilises','utilisons','peux','peut','pouvons','pouvez','peuvent','dois','doit','devons','devez','doivent','veux','veut','voulons','voulez','ferme','fermes','livre','livres','envoie','envoies','developpe','gere','geres','maintiens','dirige','coordonne','ecris','ecrit']);
 const habitual=/(?<![\p{L}])(?:toujours|d'habitude|souvent|chaque|tous les jours|habituellement)(?![\p{L}])/iu.test(f);
 const covered=new Set(verbs.flatMap(v=>fold(v.form).split(/[\s'’]+/)));
 for(const tok of tokens){const bare=tok.replace(/^[a-z]['’]/,'');if(PRESENT_FORMS.has(bare)&&!covered.has(bare)){verbs.push({form:bare,tense:'present',aspect:habitual?'habitual':'unknown'});covered.add(bare);}}
 const pos=v=>{const i=f.search(new RegExp(`(?<![\\p{L}])${esc(fold(v.form))}(?![\\p{L}])`,'u'));return i<0?1e9:i;};
 verbs.sort((a,b)=>pos(a)-pos(b));
 if(verbs.length){tense=verbs[0].tense;aspect=verbs[0].aspect;}
 const subjunctive=/(?<![\p{L}])(?:pour que|pour qu'|afin que|bien que|il faut que|il faut qu'|avant que|sans que|je veux que|j'aimerais que)\s*\p{L}+/iu.test(t)||/(?<![\p{L}])qu['e]\s*(?:il|elle|on|ils|elles|je|tu|nous|vous)?\s*(?:sois|soit|soyons|soyez|soient|aie|ait|ayons|fasse|fasses|fassions|puisse|puissent|aille|ailles|vienne|sache)(?![\p{L}])/iu.test(t);
 const imperative=IMPERATIVE_START.test(t.trim());
 const mood=imperative?'imperative':subjunctive?'subjunctive':verbs.length||tense!=='unknown'?'indicative':'unknown';
 const modality=[];
 if(/(?<![\p{L}])(?:peux|peut|pouvons|pouvez|peuvent|pourrais|pourrait|pourrions|pourriez|pourraient|suis capable|sais (?:faire|coder|utiliser))(?![\p{L}])/iu.test(t))modality.push('ability');
 if(/(?<![\p{L}])(?:peut-[eê]tre|possiblement|il se peut|[eé]ventuellement)(?![\p{L}])/iu.test(t))modality.push('possibility');
 if(/(?<![\p{L}])(?:dois|doit|devons|devez|doivent|devrais|devrait|il faut|il faudrait|j'ai besoin|nous avons besoin|oblig[eé])(?![\p{L}])/iu.test(t))modality.push('obligation');
 if(/(?<![\p{L}])(?:puis-je|est-ce que je peux|ai-je le droit|permettez-moi|autoris[eé])(?![\p{L}])/iu.test(t))modality.push('permission');
 if(nearFuture||/(?<![\p{L}])(?:veux|voulons|compte|comptons|pr[eé]vois|pr[eé]voyons|j'ai l'intention|mon id[eé]e est)(?![\p{L}])/iu.test(t))modality.push('intention');
 if(/(?<![\p{L}])(?:s[uû]rement|certainement|sans doute|clairement|probablement|je pense que|je crois que)(?![\p{L}])/iu.test(t))modality.push('certainty');
 const negative=/(?<![\p{L}])(?:ne|n')\s*\p{L}*\s*(?:pas|jamais|plus|rien|personne|aucun|aucune)(?![\p{L}])|(?<![\p{L}])(?:pas|jamais|aucun|aucune|rien|personne)(?![\p{L}])/iu.test(t);
 const partial=/(?<![\p{L}])(?:pas tout|pas toujours|pas compl[eè]tement|[aà] peine|presque pas|en partie|partiellement)(?![\p{L}])/iu.test(t);
 const polarity=partial?'partial_negation':negative?'negative':'affirmative';
 let person='unknown';
 if(/(?<![\p{L}])(?:je|nous|me|moi|mon|ma|mes|notre|nos)(?![\p{L}])|(?<![\p{L}])[jm]['’]/iu.test(t))person='first';
 else if(/(?<![\p{L}])(?:tu|vous|te|t'|toi|ton|ta|tes|votre|vos)(?![\p{L}])/iu.test(t)||/-(?:tu|vous)(?![\p{L}])/iu.test(t))person='second';
 else if(/(?<![\p{L}])(?:il|elle|on|ils|elles|l'[eé]quipe|le client|le service|le syst[eè]me)(?![\p{L}])/iu.test(t)||verbs.length)person='third';
 return {sentenceType:/\?/.test(t)?'interrogative':imperative?'imperative':'declarative',verbs:verbs.slice(0,6),tense,aspect,mood,modality,polarity,agency:{person,addressee:/(?<![\p{L}])(?:tu|te|toi|vous)(?![\p{L}])|(?<![\p{L}])t['’]|-(?:tu|vous)(?![\p{L}])/iu.test(t),passive,agentMentioned:passive,reportedDirective:/(?<![\p{L}])(?:t['’]|vous\s+)?(?:ai|avons)\s+(?:dit|demand[eé]|rappel[eé])\s+(?:de|d['’]|que|qu['’])/iu.test(t)},markers:{temporal:all(TEMPORAL,t),spatial:all(SPATIAL,t),causal:all(CAUSAL,t),purpose:all(PURPOSE,t),politeness:all(POLITENESS,t),warning:all(WARNING,t)},entities:all(ENTITIES,t),contentWords:[...new Set(tokens.filter(w=>w.length>4))].slice(0,20)};
}
function finish(input,question,findings,suggestedCorrection){
 const objective=questionExpectationFrench(question);
 return {input,language:'fr',engine:'motorg-fr',questionContext:question||null,questionExpectation:[objective.code],grammaticalObjective:objective,features:verbFeatures(input),questionFeatures:verbFeatures(question),findings,overallStatus:!input?'empty':findings.length?'possible_issue':'no_rule_matched',confidence:!input?1:findings.length?Math.max(...findings.map(f=>f.confidence)):0.35,suggestedCorrection,limitations:['Reglas heurísticas de francés para entrevista técnica; no equivalen a un análisis sintáctico completo.','La IA escribe el feedback y usa este análisis como referencia.']};
}
export function analyzeFrench(input,options={}){
 const original=String(input??'').trim(), findings=[];let suggestedCorrection=original;
 const question=options.question||'';
 if(!original)return finish(original,question,findings,suggestedCorrection);
 if(PAST_MARKER.test(original)){
  for(const [present,participle] of PRESENT_TO_PARTICIPLE){
   if(!word(present).test(original)||word(participle).test(original))continue;
   const withEtre=present==='vais';
   const subject=new RegExp(`((?:j['’]|je|tu|il|elle|on|nous|vous|ils|elles)\\s*)${esc(present)}(?![\\p{L}])`,'iu').exec(suggestedCorrection);
   let suggestedForm=`ai ${participle}`;
   if(subject){
    const who=fold(subject[1]).trim();
    const aux=withEtre?(who.startsWith('j')?'suis':who==='tu'?'es':who==='nous'?'sommes':who==='vous'?'êtes':/^(?:ils|elles)$/.test(who)?'sont':'est'):(who.startsWith('j')?'ai':who==='tu'?'as':who==='nous'?'avons':who==='vous'?'avez':/^(?:ils|elles)$/.test(who)?'ont':'a');
    suggestedForm=who.startsWith('j')?(withEtre?`je ${aux} ${participle}`:`j'${aux} ${participle}`):`${who} ${aux} ${participle}`;
    suggestedCorrection=suggestedCorrection.replace(subject[0],suggestedForm);
   }else suggestedCorrection=suggestedCorrection.replace(word(present),suggestedForm);
   findings.push({type:'possible_tense_mismatch',rule:'past_time_marker_passe_compose',dimension:'cuando',observedForm:present,suggestedForm,explanation:'El marcador temporal sitúa la acción en el pasado. En francés de entrevista, esa jugada suele ir en passé composé.',confidence:0.8});
   break;
  }
 }
 const si=/(?<![\p{L}])si\s+([^,.!?]{0,120})/iu.exec(original);
 if(si){
  for(const [future,present] of FUTURE_IN_SI){
   if(!word(future).test(si[0]))continue;
   suggestedCorrection=suggestedCorrection.replace(word(future),present);
   findings.push({type:'possible_conditional_mismatch',rule:'si_clause_present',dimension:'cuando',observedForm:future,suggestedForm:present,explanation:'En una condición real, la cláusula con si va en presente. El futuro queda en la otra cláusula.',confidence:0.76});
   break;
  }
 }
 const auxAgreement=/(?<![\p{L}])(?:je|j')\s*(?:a|as)\s+\p{L}+(?:é|i|u|is|it)(?![\p{L}])/iu.exec(original);
 if(auxAgreement){
  findings.push({type:'possible_agreement_mismatch',rule:'avoir_first_person',dimension:'estructura',observedForm:auxAgreement[0],suggestedForm:"j'ai + participio",explanation:"Con je, el auxiliar avoir va en primera persona: j'ai.",confidence:0.82});
 }
 return finish(original,question,findings,suggestedCorrection);
}
