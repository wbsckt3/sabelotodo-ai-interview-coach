/* EN PAUSA. Este motor no entra en el turno. El archivo se conserva. */
/* Motorg español: reglas gramaticales y rasgos verbales. Referencia para el skill; no escribe el feedback. */
const PAST_MARKER=/(?<![\p{L}])(?:ayer|anoche|anteayer|la semana pasada|el mes pasado|el a[nñ]o pasado|hace\s+\d+\s+(?:d[ií]as|semanas|meses|a[nñ]os))(?![\p{L}])/iu;
const PRESENT_TO_PRETERITE=[['arreglo','arreglé'],['arreglas','arreglaste'],['arregla','arregló'],['arreglan','arreglaron'],['despliego','desplegué'],['despliegas','desplegaste'],['despliega','desplegó'],['despliegan','desplegaron'],['implemento','implementé'],['implementas','implementaste'],['implementa','implementó'],['implementan','implementaron'],['depuro','depuré'],['depuras','depuraste'],['depura','depuró'],['depuran','depuraron'],['pruebo','probé'],['pruebas','probaste'],['prueba','probó'],['prueban','probaron'],['creo','creé'],['creas','creaste'],['crea','creó'],['crean','crearon'],['construyo','construí'],['construyes','construiste'],['construye','construyó'],['construyen','construyeron'],['escribo','escribí'],['escribes','escribiste'],['escribe','escribió'],['escriben','escribieron'],['encuentro','encontré'],['encuentras','encontraste'],['encuentra','encontró'],['encuentran','encontraron'],['hago','hice'],['haces','hiciste'],['hacen','hicieron'],['voy','fui'],['vas','fuiste'],['van','fueron'],['tengo','tuve'],['tienes','tuviste'],['tiene','tuvo'],['tienen','tuvieron'],['veo','vi'],['ves','viste'],['ven','vieron'],['reviso','revisé'],['revisa','revisó'],['reinicio','reinicié'],['reinicia','reinició'],['corrijo','corregí'],['corrige','corrigió'],['soluciono','solucioné'],['soluciona','solucionó']];
const FUTURE_IN_SI=[['fallará','falla'],['fallara','falla'],['reiniciará','reinicia'],['reiniciara','reinicia'],['hará','hace'],['hara','hace'],['irá','va'],['ira','va'],['será','es'],['sera','es'],['tendrá','tiene'],['tendra','tiene'],['podrá','puede'],['podra','puede'],['desplegará','despliega'],['desplegara','despliega'],['implementará','implementa'],['implementara','implementa']];
const IRREGULAR_PRETERITE=new Set(['hice','hizo','hicimos','hicieron','fui','fue','fuimos','fueron','tuve','tuvo','tuvimos','tuvieron','dije','dijo','dijimos','dijeron','vi','vio','vimos','vieron','pude','pudo','pudimos','pudieron','puse','puso','supe','supo','quise','quiso','vine','vino','estuve','estuvo','di','dio']);
const PARTICIPLE_IRREGULAR='hecho|dicho|escrito|visto|puesto|vuelto|abierto|roto|resuelto|descubierto';
const IMPERATIVE_START=/^(?:¡\s*)?(?:haz|ve|ven|cierra|entrega|env[ií]a|revisa|dime|cu[eé]ntame|explica|explícame|mira|abre|reinicia|corrige|despliega|prueba|manda|pon|deja|sigue|aseg[uú]rate)(?![\p{L}])/iu;
const TEMPORAL=/(?<![\p{L}])(?:ayer|anoche|anteayer|hoy|ma[nñ]ana|ahora(?: mismo)?|en este momento|actualmente|la semana (?:pasada|pr[oó]xima|que viene)|el (?:mes|a[nñ]o) (?:pasado|pr[oó]ximo)|siempre|nunca|normalmente|a menudo|cada (?:d[ií]a|semana|sprint)|todos los d[ií]as|ya|todav[ií]a|a[uú]n|desde|durante|hace\s+\d+\s+\p{L}+)(?![\p{L}])/giu;
const SPATIAL=/(?<![\p{L}])(?:en producci[oó]n|en (?:el )?servidor|en (?:el )?repositorio|en la nube|en staging|en (?:el )?c[oó]digo|en la base de datos|en (?:el )?equipo|en la oficina|en (?:el )?cliente|en (?:el )?pipeline|aqu[ií]|all[ií]|ah[ií])(?![\p{L}])/giu;
const CAUSAL=/(?<![\p{L}])(?:porque|ya que|puesto que|debido a|a causa de|gracias a|por eso|por lo tanto|as[ií] que|como resultado)(?![\p{L}])/giu;
const PURPOSE=/(?<![\p{L}])(?:para que|para|con el fin de|a fin de|con el objetivo de|con la idea de)(?![\p{L}])/giu;
const POLITENESS=/(?<![\p{L}])(?:por favor|podr[ií]as|podr[ií]a usted|te importar[ií]a|ser[ií]as tan amable|si no es molestia)(?![\p{L}])/giu;
const WARNING=/(?<![\p{L}])(?:cuidado|ojo|riesgo|peligro|si no|de lo contrario|atenci[oó]n)(?![\p{L}])/giu;
const ENTITIES=/(?<![\p{L}])(?:bug|error|errores|fallo|despliegue|servicio|servidor|base de datos|api|endpoint|prueba|pruebas|test|tests|incidente|producci[oó]n|versi[oó]n|c[oó]digo|equipo|cliente|consulta|cach[eé]|pipeline|pull request|revisi[oó]n de c[oó]digo|microservicio|contenedor|docker|kubernetes|logs?|monitoreo|alerta|latencia|memoria|rollback|release|informe|puerta)(?![\p{L}])/giu;
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const word=s=>new RegExp(`(?<![\\p{L}])${esc(s)}(?![\\p{L}])`,'iu');
const fold=s=>String(s??'').normalize('NFD').replace(/\p{M}/gu,'').toLowerCase();
const all=(re,t)=>[...new Set((String(t).match(re)||[]).map(s=>s.toLowerCase()))];
export function questionExpectationSpanish(question){
 const q=fold(question);
 const pick=(code,label)=>({code,label});
 if(/\bque has\b|\bhas aprendido\b/.test(q))return pick('preterito_perfecto','Pretérito perfecto');
 if(/\ben que estas\b|\bestas trabajando\b|\bahora mismo\b/.test(q))return pick('presente_continuo','Presente continuo');
 if(/\bque haras\b|\bque harias\b/.test(q)||(/\bsi\b/.test(q)&&/\bfalla|\bdespliegue\b/.test(q)))return pick('futuro_oracion_principal','Futuro en la oración principal');
 if(/\bque hiciste\b|\bayer\b|\banoche\b|\bla semana pasada\b|\bel mes pasado\b|\bel ano pasado\b/.test(q))return pick('preterito','Pretérito');
 if(/\bque haces\b|\ba que te dedicas\b|\ben tu puesto\b/.test(q))return pick('presente','Presente');
 return pick('tiempo_acorde_a_la_pregunta','Tiempo acorde a la pregunta');
}
function verbFeatures(text){
 const t=String(text||''), f=fold(t);
 const tokens=f.split(/[^\p{L}']+/u).filter(Boolean);
 const verbs=[];
 const perfect=new RegExp(`(?<![\\p{L}])(he|has|ha|hemos|han|habia|habias|habiamos|habian)\\s+(\\p{L}+(?:ado|ido)|${PARTICIPLE_IRREGULAR})(?![\\p{L}])`,'iu').exec(f);
 const progressive=/(?<![\p{L}])(estoy|estas|esta|estamos|estan|estaba|estabas|estabamos|estaban)\s+(\p{L}+(?:ando|iendo|yendo))(?![\p{L}])/iu.exec(f);
 const periphrasticFuture=/(?<![\p{L}])(voy|vas|va|vamos|van)\s+a\s+(\p{L}+(?:ar|er|ir))(?![\p{L}])/iu.exec(f);
 const passive=/(?<![\p{L}])(fue|fueron|ha sido|han sido|es|son|era|eran)\s+\p{L}+(?:ado|ada|ados|adas|ido|ida|idos|idas)(?![\p{L}])/iu.test(f)||/(?<![\p{L}])se\s+\p{L}+(?:o|aron|ieron|a|an)(?![\p{L}])/iu.test(f);
 let tense='unknown',aspect='unknown';
 if(perfect){tense=/^hab/.test(perfect[1])?'past':'present';aspect='perfect';verbs.push({form:perfect[0],tense,aspect});}
 if(progressive){const past=/^estab/.test(progressive[1]);verbs.push({form:progressive[0],tense:past?'past':'present',aspect:'progressive'});if(tense==='unknown'){tense=past?'past':'present';aspect='progressive';}}
 if(periphrasticFuture){verbs.push({form:periphrasticFuture[0],tense:'future',aspect:'prospective'});if(tense==='unknown'){tense='future';aspect='prospective';}}
 const presentFolded=new Set(PRESENT_TO_PRETERITE.map(([p])=>fold(p)));
 const preteritePairs=new Set(PRESENT_TO_PRETERITE.map(([,p])=>fold(p)).filter(p=>!presentFolded.has(p)));
 for(const tok of tokens){
  if(tok.length<3)continue;
  if(/(?:ria|rias|riamos|rian)$/.test(tok)&&tok.length>4&&!/^(?:historia|memoria|categoria|libreria|bateria|frontera)$/.test(tok)){verbs.push({form:tok,tense:'conditional',aspect:'unknown'});continue;}
  if(IRREGULAR_PRETERITE.has(tok)||preteritePairs.has(tok)||/(?:aste|iste|aron|ieron)$/.test(tok)){verbs.push({form:tok,tense:'past',aspect:'perfective'});continue;}
  if(/(?:aba|abas|abamos|aban)$/.test(tok)&&tok.length>4){verbs.push({form:tok,tense:'past',aspect:'imperfective'});continue;}
 }
 const accented=t.match(/(?<![\p{L}])\p{L}{3,}(?:é|ó)(?![\p{L}])/giu)||[];
 for(const form of accented){const low=form.toLowerCase();if(/^(?:café|bebé|porqué|josé|comité|consomé|canapé)$/.test(low)||/[aeiou]ré$/.test(low)||preteritePairs.has(fold(low)))continue;verbs.push({form:low,tense:'past',aspect:'perfective'});}
 const futureSynthetic=t.match(/(?<![\p{L}])\p{L}+(?:aré|eré|iré|arás|erás|irás|ará|erá|irá|aremos|eremos|iremos|arán|erán|irán)(?![\p{L}])/giu)||[];
 for(const form of futureSynthetic)verbs.push({form:form.toLowerCase(),tense:'future',aspect:'unknown'});
 const PRESENT_FORMS=new Set([...PRESENT_TO_PRETERITE.map(([p])=>fold(p)),'es','son','esta','estan','estoy','estas','hay','soy','eres','somos','trabajo','trabajas','trabaja','trabajamos','trabajan','uso','usas','usa','usamos','usan','puedo','puedes','puede','podemos','pueden','debo','debes','debe','quiero','quieres','quiere','cierro','cierras','cierra','entrego','entregas','entrega','entregamos','envio','envias','envia','reviso','revisas','superviso','lidero','desarrollo','desarrollas','desarrolla','mantengo','manejo','gestiono','escribo','dirijo','coordino']);
 const habitual=/(?<![\p{L}])(?:siempre|normalmente|a menudo|cada|todos los dias|suelo|solemos)(?![\p{L}])/iu.test(f);
 const covered=new Set(verbs.flatMap(v=>fold(v.form).split(/[\s']+/)));
 for(const tok of tokens)if(PRESENT_FORMS.has(tok)&&!covered.has(tok)){verbs.push({form:tok,tense:'present',aspect:habitual?'habitual':'unknown'});covered.add(tok);}
 const pos=v=>{const i=f.search(new RegExp(`(?<![\\p{L}])${esc(fold(v.form))}(?![\\p{L}])`,'u'));return i<0?1e9:i;};
 verbs.sort((a,b)=>pos(a)-pos(b));
 if(verbs.length){tense=verbs[0].tense;aspect=verbs[0].aspect;}
 const subjunctive=/(?<![\p{L}])(?:para que|quiero que|espero que|ojal[aá]|es importante que|es necesario que|antes de que|sin que|aunque)\s+\p{L}+/iu.test(t)||/(?<![\p{L}])(?:dije|ped[ií]|pidi[oó]|quer[ií]a)\s+que\s+\p{L}+(?:ara|aras|ase|iera|ieras|iese)(?![\p{L}])/iu.test(t)||/(?<![\p{L}])si\s+\p{L}+(?:ara|iera|ase|iese)(?![\p{L}])/iu.test(t);
 const imperative=IMPERATIVE_START.test(t.trim());
 const mood=imperative?'imperative':subjunctive?'subjunctive':verbs.length||tense!=='unknown'?'indicative':'unknown';
 const modality=[];
 if(/(?<![\p{L}])(?:puedo|puedes|puede|podemos|pueden|podr[ií]a|podr[ií]as|podr[ií]amos|podr[ií]an|soy capaz|s[eé] (?:hacer|programar|usar))(?![\p{L}])/iu.test(t))modality.push('ability');
 if(/(?<![\p{L}])(?:quiz[aá]s?|tal vez|a lo mejor|puede que|posiblemente|podr[ií]a ser)(?![\p{L}])/iu.test(t))modality.push('possibility');
 if(/(?<![\p{L}])(?:debo|debes|debe|debemos|deben|deber[ií]a|tengo que|tienes que|tiene que|tenemos que|tienen que|hay que|es necesario|necesito|necesitamos)(?![\p{L}])/iu.test(t))modality.push('obligation');
 if(/(?<![\p{L}])(?:puedo\s+\p{L}+\s*\?|me permites|me dejas|se puede|est[aá] permitido|tengo permiso)(?![\p{L}])/iu.test(t))modality.push('permission');
 if(periphrasticFuture||/(?<![\p{L}])(?:quiero|queremos|pienso|pensamos|planeo|planeamos|voy a|vamos a|me propongo|mi idea es)(?![\p{L}])/iu.test(t))modality.push('intention');
 if(/(?<![\p{L}])(?:seguro|seguramente|sin duda|claramente|definitivamente|probablemente|creo que|me parece que)(?![\p{L}])/iu.test(t))modality.push('certainty');
 const negative=/(?<![\p{L}])(?:no|nunca|jam[aá]s|tampoco|ning[uú]n|ninguna|ninguno|nada|nadie)(?![\p{L}])/iu.test(t);
 const partial=/(?<![\p{L}])(?:no todo|no siempre|no del todo|casi no|apenas|solo en parte|parcialmente|no completamente)(?![\p{L}])/iu.test(t);
 const polarity=partial?'partial_negation':negative?'negative':'affirmative';
 let person='unknown';
 const firstForms=/(?<![\p{L}])(?:yo|nosotros|nosotras|me|mi|mis|nuestro|nuestra|he|hemos|estoy|estamos|voy|vamos|tengo|tenemos|puedo|podemos|debo|debemos|quiero|queremos|soy|somos|hice|fui|tuve|pude|dije|arreglo|despliego|implemento|reviso|reinicio|corrijo|trabajo|uso|desarrollo|mantengo|creo|pruebo)(?![\p{L}])/iu;
 const secondForms=/(?<![\p{L}])(?:t[uú]|usted|ustedes|vos|te|puedes|podr[ií]as|podr[ií]a usted|tienes|debes|est[aá]s|vas|has|haces|hiciste|quieres|sabes|entregas|cierras|env[ií]as|revisas|eres)(?![\p{L}])|(?<![\p{L}])\p{L}+(?:ar[aá]s|er[aá]s|ir[aá]s)(?![\p{L}])/iu;
 if(firstForms.test(t)||verbs.some(v=>/é$/.test(v.form)))person='first';
 else if(secondForms.test(t))person='second';
 else if(/(?<![\p{L}])(?:[eé]l|ella|ellos|ellas|el equipo|la empresa|el cliente|el servicio|el sistema)(?![\p{L}])/iu.test(t)||verbs.length)person='third';
 return {sentenceType:/[¿?]/.test(t)?'interrogative':imperative?'imperative':'declarative',verbs:verbs.slice(0,6),tense,aspect,mood,modality,polarity,agency:{person,addressee:/(?<![\p{L}])(?:te|ti|t[uú]|usted|ustedes|vos)(?![\p{L}])/iu.test(t)||secondForms.test(t),passive,agentMentioned:passive&&/(?<![\p{L}])por\s+(?:el|la|los|las|mi|un|una)(?![\p{L}])/iu.test(t),reportedDirective:/(?<![\p{L}])(?:te |le |les |os )?(?:dije|dijimos|ped[ií]|pedimos|avis[eé]|record[eé]|ped[ií]a)\s+que(?![\p{L}])/iu.test(t)},markers:{temporal:all(TEMPORAL,t),spatial:all(SPATIAL,t),causal:all(CAUSAL,t),purpose:all(PURPOSE,t),politeness:all(POLITENESS,t),warning:all(WARNING,t)},entities:all(ENTITIES,t),contentWords:[...new Set(tokens.filter(w=>w.length>4))].slice(0,20)};
}
function finish(input,question,findings,suggestedCorrection){
 const objective=questionExpectationSpanish(question);
 return {input,language:'es',engine:'motorg-es',questionContext:question||null,questionExpectation:[objective.code],grammaticalObjective:objective,features:verbFeatures(input),questionFeatures:verbFeatures(question),findings,overallStatus:!input?'empty':findings.length?'possible_issue':'no_rule_matched',confidence:!input?1:findings.length?Math.max(...findings.map(f=>f.confidence)):0.35,suggestedCorrection,limitations:['Reglas heurísticas de español para entrevista técnica; no equivalen a un análisis sintáctico completo.','La IA escribe el feedback y usa este análisis como referencia.']};
}
export function analyzeSpanish(input,options={}){
 const original=String(input??'').trim(), findings=[];let suggestedCorrection=original;
 const question=options.question||'';
 if(!original)return finish(original,question,findings,suggestedCorrection);
 if(PAST_MARKER.test(original)){
  for(const [present,past] of PRESENT_TO_PRETERITE){
   if(!word(present).test(original)||word(past).test(original))continue;
   suggestedCorrection=suggestedCorrection.replace(word(present),past);
   findings.push({type:'possible_tense_mismatch',rule:'past_time_marker_preterite',dimension:'cuando',observedForm:present,suggestedForm:past,explanation:'El marcador temporal sitúa la acción en el pasado. En español de entrevista, esa jugada suele ir en pretérito, no en presente.',confidence:0.84});
   break;
  }
 }
 const si=/(?<![\p{L}])si\s+([^,.!?]{0,120})/iu.exec(original);
 if(si){
  for(const [future,present] of FUTURE_IN_SI){
   if(!word(future).test(si[0]))continue;
   suggestedCorrection=suggestedCorrection.replace(word(future),present);
   findings.push({type:'possible_conditional_mismatch',rule:'si_clause_present',dimension:'cuando',observedForm:future,suggestedForm:present,explanation:'En una condición real, la cláusula con si va en presente. El futuro queda en la otra cláusula.',confidence:0.78});
   break;
  }
 }
 const perfectWithClosedPast=/(?<![\p{L}])(?:he|has|ha|hemos|han)\s+\p{L}+(?:ado|ido)(?![\p{L}])/iu.exec(original);
 if(perfectWithClosedPast&&PAST_MARKER.test(original)){
  findings.push({type:'possible_aspect_mismatch',rule:'closed_past_marker_with_perfect',dimension:'cuando',observedForm:perfectWithClosedPast[0],suggestedForm:'pretérito (por ejemplo, arreglé)',explanation:'Con un marcador de pasado cerrado como ayer, en buena parte del español se prefiere el pretérito. En España el pretérito perfecto también se oye; es una variante.',confidence:0.6});
 }
 return finish(original,question,findings,suggestedCorrection);
}
