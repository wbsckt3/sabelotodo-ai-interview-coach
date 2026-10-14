window.COACH_I18N_RESOURCES = {
  es: { translation: {
    ui: {
      docTitle: 'Sabelotodo AI · Coach de entrevista',
      title: 'Sabelotodo AI — Coach de entrevista',
      subtitle: 'Motor de inferencia gramatical',
      session: 'Sesión {{time}}',
      sessionActive: 'Sesión activa',
      sessionZero: 'Sesión 00:00',
      sessionLocal: 'Sesión local',
      noSession: 'Sin sesión activa.',
      usage: 'Consumo de IA',
      usageAria: 'Consumo de IA del día',
      close: 'Cerrar',
      reply: 'Responder',
      feedback: 'Feedback',
      learn: 'Aprende más de este motor LLM',
      type: 'Tipo de entrevista',
      target: 'Idioma a aprender',
      level: 'Nivel aproximado',
      explain: 'Idioma de explicación',
      interviewer: 'Entrevistador',
      student: 'Tu respuesta',
      interviewerPh: 'El entrevistador está preparando la primera pregunta…',
      feedbackPh: 'Tema del entrevistador\n\nTu respuesta\n\nCorrección\n\nQué dimensión falta aclarar\n\nAsí podría quedar la respuesta\n\nPregunta sobre tu respuesta',
      help: 'Ayuda',
      change: 'Cambiar',
      language: 'Idioma de la interfaz'
    },
    start: {
      title: 'Prepara tu clase',
      lead: 'Selecciona el tipo de entrevista, el lenguaje que quieres practicar, tu nivel y el idioma de las explicaciones.',
      begin: 'Comenzar entrevista',
      native: 'Idioma nativo',
      nativeHint: 'Toda la página y las explicaciones se muestran en tu idioma.',
      launchTitle: 'Iniciar la clase',
      summary: 'Entrevista: {{type}} · Idioma: {{lang}}',
      minutes: 'Duración de la clase (minutos)',
      minutesHint: 'Entre 5 y 180 minutos. El servidor se apaga solo al terminar.',
      back: 'Volver',
      launch: 'Iniciar la clase',
      requesting: 'Pidiendo un servidor para tu clase…',
      starting: 'Encendiendo el servidor del coach… {{time}}. Suele tardar 1 o 2 minutos.',
      failed: 'No se pudo iniciar la clase: {{message}}',
      expired: 'la sesión ya no existe.',
      serverDown: 'el servidor no arrancó.',
      tooMany: 'ya iniciaste varias clases en la última hora. Intenta más tarde.',
      full: 'todas las aulas están ocupadas. Intenta en unos minutos.',
      pick: 'Elige el tipo de entrevista y el idioma para iniciar la clase.',
      ended: 'La clase terminó. Inicia otra cuando quieras.'
    },
    hints: {
      type: 'Define el puesto, el tono y los temas de la entrevista. Cambiarlo abre otra conversación.',
      target: 'Idioma a aprender: {{lang}}. Es el idioma del entrevistador y de tu respuesta.',
      level: 'Nivel aproximado de tus respuestas.',
      explain: 'Idioma de explicación: {{lang}}. Es tu idioma y el del profesor en el feedback.',
      interviewer: 'Pregunta en {{lang}}. Si algo no se entiende, la siguiente pregunta es sobre tu respuesta: pide el qué, el cómo, el cuándo, el dónde, el porqué o el para qué, hasta que quede claro. Cambiar el idioma a aprender abre otra conversación.',
      student: 'Escribe en {{lang}} y pulsa Responder.',
      studentPh: 'Tu respuesta en {{lang}}',
      typeTitle: 'Tipo de entrevista',
      targetTitle: 'Idioma a aprender',
      levelTitle: 'Nivel aproximado',
      explainTitle: 'Idioma de explicación',
      interviewerTitle: 'Entrevistador',
      studentTitle: 'Tu respuesta'
    },
    status: {
      opening: 'Abriendo la entrevista…',
      preparing: 'El entrevistador está preparando una pregunta en {{lang}}…',
      ready: 'Pregunta lista. Responde en {{lang}}.',
      openError: 'No se pudo abrir la entrevista: {{message}}',
      noQuestionFromAi: 'El entrevistador no envió una pregunta.',
      noQuestion: 'Todavía no hay pregunta del entrevistador.',
      write: 'Escribe tu respuesta en {{lang}}.',
      thinking: 'El entrevistador y el profesor están respondiendo…',
      newQuestion: 'El entrevistador ya entendió. Nueva pregunta.',
      refine: 'El entrevistador pregunta sobre tu respuesta para aclarar una dimensión. Corrige, contextualiza o ajusta la oración.',
      sameQuestion: 'Llegó el feedback. El entrevistador sigue en el mismo tema.',
      error: 'Error: {{message}}'
    },
    usage: {
      calls: 'llamadas',
      quota: 'del cupo diario',
      cost: 'Costo',
      exhausted: 'agotado',
      none: 'Todavía no hay llamadas hoy.',
      last: 'Última llamada: {{input}} input · {{output}} output · Costo {{cost}}{{estimated}}',
      estimated: ' · estimado'
    },
    learn: {
      lead: 'Así decide este entrenador. Las notas sirven al profesor que va a enriquecer las reglas y al estudiante que quiere ver la fórmula con la que se lee su frase.',
      guide: 'Guía de uso',
      guideNote: '(Para el profesor)',
      dims: '6 dimensiones',
      dimsNote: '(Para el profesor que quiere profundizar en metodologías con IA)',
      verbs: 'Verbos y tiempos',
      verbsNote: '(Para los puristas)',
      fuzzy: 'Lógica difusa',
      fuzzyNote: '(Para los matemáticos)',
      witt: 'Wittgenstein y el uso',
      wittNote: '(Para los filósofos)'
    },
    modals: {
      learn: 'Aprende más de este motor LLM',
      guide: 'Guía de uso',
      profesor: 'Para el profesor: el motor y las 6 dimensiones de la intención',
      verbs: 'Verbos y tiempos: la pieza central',
      fuzzy: 'Lógica difusa: cómo se resuelve una interpretación',
      witt: 'Qué aporta Wittgenstein a este motor',
      feedback: 'Feedback',
      help: 'Ayuda'
    },
    levels: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' },
    langs: { es: 'español', en: 'inglés', fr: 'francés' },
    langOptions: { es: 'Español', en: 'Inglés', fr: 'Francés' },
    types: {
      software_engineer: 'Ingeniero/a de software (técnica)',
      call_center: 'Agente de call center (informal)',
      restaurant_waiter: 'Mesero/a de restaurante',
      retail_sales: 'Vendedor/a de tienda (retail)',
      hotel_receptionist: 'Recepcionista de hotel',
      nurse: 'Enfermero/a',
      administrative_assistant: 'Asistente administrativo/a',
      delivery_driver: 'Repartidor/a o conductor/a',
      teacher: 'Docente',
      sales_executive: 'Ejecutivo/a de ventas'
    }
  }},
  en: { translation: {
    ui: {
      docTitle: 'Sabelotodo AI · Interview Coach',
      title: 'Sabelotodo AI — Interview Coach',
      subtitle: 'Grammatical inference engine',
      session: 'Session {{time}}',
      sessionActive: 'Session active',
      sessionZero: 'Session 00:00',
      sessionLocal: 'Local session',
      noSession: 'No active session.',
      usage: 'AI usage',
      usageAria: 'AI usage today',
      close: 'Close',
      reply: 'Reply',
      feedback: 'Feedback',
      learn: 'Learn more about this LLM engine',
      type: 'Interview type',
      target: 'Language to learn',
      level: 'Approximate level',
      explain: 'Explanation language',
      interviewer: 'Interviewer',
      student: 'Your answer',
      interviewerPh: 'The interviewer is preparing the first question…',
      feedbackPh: 'Interviewer topic\n\nYour answer\n\nCorrection\n\nWhich dimension still needs clarifying\n\nHow the answer could read\n\nQuestion about your answer',
      help: 'Help',
      change: 'Change',
      language: 'Interface language'
    },
    start: {
      title: 'Set up your class',
      lead: 'Choose the interview type, the language you want to practice, your level and the language of the explanations.',
      begin: 'Start interview',
      native: 'Native language',
      nativeHint: 'The whole page and the explanations are shown in your language.',
      launchTitle: 'Start the class',
      summary: 'Interview: {{type}} · Language: {{lang}}',
      minutes: 'Class length (minutes)',
      minutesHint: 'Between 5 and 180 minutes. The server shuts down by itself when it ends.',
      back: 'Back',
      launch: 'Start the class',
      requesting: 'Requesting a server for your class…',
      starting: 'Starting the coach server… {{time}}. It usually takes 1 or 2 minutes.',
      failed: 'The class could not start: {{message}}',
      expired: 'the session no longer exists.',
      serverDown: 'the server did not start.',
      tooMany: 'you already started several classes in the last hour. Try again later.',
      full: 'all classrooms are busy. Try again in a few minutes.',
      pick: 'Choose the interview type and the language to start the class.',
      ended: 'The class is over. Start another one whenever you like.'
    },
    hints: {
      type: 'Sets the role, the tone, and the topics of the interview. Changing it starts another conversation.',
      target: 'Language to learn: {{lang}}. It is the interviewer\'s language and the language of your answer.',
      level: 'Approximate level of your answers.',
      explain: 'Explanation language: {{lang}}. It is your language and the teacher\'s language in the feedback.',
      interviewer: 'Question in {{lang}}. If something is unclear, the next question is about your answer: it asks what, how, when, where, why, or what for, until it is clear. Changing the language to learn starts another conversation.',
      student: 'Write in {{lang}} and press Reply.',
      studentPh: 'Your answer in {{lang}}',
      typeTitle: 'Interview type',
      targetTitle: 'Language to learn',
      levelTitle: 'Approximate level',
      explainTitle: 'Explanation language',
      interviewerTitle: 'Interviewer',
      studentTitle: 'Your answer'
    },
    status: {
      opening: 'Opening the interview…',
      preparing: 'The interviewer is preparing a question in {{lang}}…',
      ready: 'Question ready. Answer in {{lang}}.',
      openError: 'The interview could not be opened: {{message}}',
      noQuestionFromAi: 'The interviewer did not send a question.',
      noQuestion: 'There is no interviewer question yet.',
      write: 'Write your answer in {{lang}}.',
      thinking: 'The interviewer and the teacher are responding…',
      newQuestion: 'The interviewer understood. New question.',
      refine: 'The interviewer asks about your answer to clarify one dimension. Correct it, add context, or adjust the sentence.',
      sameQuestion: 'Feedback arrived. The interviewer is still on the same topic.',
      error: 'Error: {{message}}'
    },
    usage: {
      calls: 'calls',
      quota: 'of the daily quota',
      cost: 'Cost',
      exhausted: 'exhausted',
      none: 'No calls yet today.',
      last: 'Last call: {{input}} input · {{output}} output · Cost {{cost}}{{estimated}}',
      estimated: ' · estimated'
    },
    learn: {
      lead: 'This is how the trainer decides. The notes are for the teacher who will enrich the rules and for the student who wants to see the formula used to read their sentence.',
      guide: 'Usage guide',
      guideNote: '(For the teacher)',
      dims: '6 dimensions',
      dimsNote: '(For the teacher who wants to go deeper into AI methodologies)',
      verbs: 'Verbs and tenses',
      verbsNote: '(For the purists)',
      fuzzy: 'Fuzzy logic',
      fuzzyNote: '(For the mathematicians)',
      witt: 'Wittgenstein and use',
      wittNote: '(For the philosophers)'
    },
    modals: {
      learn: 'Learn more about this LLM engine',
      guide: 'Usage guide',
      profesor: 'For the teacher: the engine and the 6 dimensions of intention',
      verbs: 'Verbs and tenses: the central piece',
      fuzzy: 'Fuzzy logic: how an interpretation is resolved',
      witt: 'What Wittgenstein adds to this engine',
      feedback: 'Feedback',
      help: 'Help'
    },
    levels: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
    langs: { es: 'Spanish', en: 'English', fr: 'French' },
    langOptions: { es: 'Spanish', en: 'English', fr: 'French' },
    types: {
      software_engineer: 'Software engineer (technical)',
      call_center: 'Call center agent (informal)',
      restaurant_waiter: 'Restaurant server',
      retail_sales: 'Retail sales associate',
      hotel_receptionist: 'Hotel receptionist',
      nurse: 'Nurse',
      administrative_assistant: 'Administrative assistant',
      delivery_driver: 'Delivery driver',
      teacher: 'Teacher',
      sales_executive: 'Sales executive'
    },
    html: {
      guia: `<p>There are four controls above the interview: interview type, language to learn (Spanish, English, or French), level, and explanation language (Spanish, English, or French).</p>
<p>The interview type sets the role (software engineering, call center, restaurant server, retail, hotel reception, nursing, administrative assistant, delivery, teaching, or sales), the tone, and the topics of the questions. Changing it opens another conversation with a new question for that role. The grammar rules do not change: each question still asks for its own tense.</p>
<p>On the published site, the page does not call Groq from your computer. Each question goes to the Node server that the GitHub workflow starts, and that server is the one that calls Groq. The Session counter is the time left on that workflow. At 00:00 the session of that conversation ends.</p>
<p>The language to learn is the interviewer's language and the language of your answer. The explanation language is yours and the teacher's: feedback comes out there, and the suggestion stays in the language you are learning. Each turn sends both languages to the AI.</p>
<p>Changing the language to learn opens another conversation and asks for a new question. Changing only the explanation language keeps the current question and applies the new language on the next feedback.</p>
<p>The same AI carries the thread of one topic until the answer is understood the way it would be in a real interview. Feedback looks at the dimensions of that answer: what happened, how the sentence is built, when and with which tense, where or in what context, why, and what for. The tense alone is not enough. If one dimension is missing, the next question is about the answer and asks only for that clarification, that context, or that adjustment. A new question arrives only when the interviewer has understood. The grammar engine is only a reference for the skill of the language in progress. There is a context support in English, another in Spanish, and another in French; the one for the language to learn is the one that enters.</p>`,
      profesor: `<p>This is a language trainer for a concrete setting: the technical software interview. It simulates the conversation with a teacher. It corrects, explains one rule, and continues the interview. The student practices the language of that situation, not a loose list of exercises.</p>
<p>The same AI answers as interviewer and as teacher. The thread — the question, what that question expects, and the next turn — is built in that AI from the student's answer. There are three pieces, and each one is enriched in its own file:</p>
<ul>
<li><strong>Motorg</strong> (<code>motorg.js</code>, <code>motorg-es.js</code>, <code>motorg-fr.js</code>). A reference for the skill of the language in progress. Each language has a context support. It returns a finding and a degree of membership. It does not write the feedback.</li>
<li><strong>Skill</strong> (<code>skill.js</code>). Goal, level, scenario, and policy: encourage, correct a single material error, explain one rule, give a short example, and ask a follow-up question.</li>
<li><strong>Modc</strong> (<code>modc.js</code>). It is the voice of the interview. It writes the feedback and the next question. Motorg's rule reaches it as evidence of the language being learned, and the AI decides whether that evidence fits the thread.</li>
</ul>
<h3>What «intention» means here</h3>
<p>The intention the engine reads is public: what move the sentence makes inside the question that is open. The same string of words changes value when the question changes. That is why the analysis receives the question together with the answer.</p>
<h3>The six dimensions</h3>
<p>Each dimension is observed in the sentence and valued as a degree between 0 and 1. Later they are compressed into four scores (G, C, V, and P), which the fuzzy-logic button explains.</p>
<table>
<thead><tr><th>Dimension</th><th>What is observed</th><th>Example in the interview</th></tr></thead>
<tbody>
<tr><td>1. Temporal</td><td>When it places the action: markers such as yesterday, right now, last week, in 2024.</td><td>«Yesterday» places the incident in a closed past.</td></tr>
<tr><td>2. Aspectual</td><td>Whether the action is finished, still in progress, or a habit.</td><td>fixed (closed), am fixing (in progress), I fix bugs every sprint (habit).</td></tr>
<tr><td>3. Modal</td><td>Whether it states a fact, a hypothesis, or an obligation.</td><td>If the deployment fails, I will roll back. The condition is hypothetical; the plan uses will.</td></tr>
<tr><td>4. Illocutionary</td><td>What act the sentence performs: narrate, explain a cause, propose a step, ask for clarification.</td><td>«I restarted the service» narrates what was done. «I will restart it» proposes what would be done.</td></tr>
<tr><td>5. Pragmatic</td><td>Whether that act answers the current question and keeps the technical topic.</td><td>Faced with «what did you do to fix the bug?», talking about the incident answers. Switching to a hobby does not.</td></tr>
<tr><td>6. Structural</td><td>Whether the verb form is the one that intention requires in this game.</td><td>Simple past, present continuous, present perfect, or real conditional (present in if, will in the main clause).</td></tr>
</tbody>
</table>
<h3>Reading a sentence</h3>
<p>«Yesterday I fix a bug in production», with the question «Tell me about a challenging bug you fixed»:</p>
<ul>
<li>Temporal membership high toward the past, because of yesterday and because of previous project in the question.</li>
<li>Aspectual: the question asks for a finished action.</li>
<li>Modal: it is a fact, not a hypothesis.</li>
<li>Illocutionary: the student narrates an incident. The act is the right one.</li>
<li>Pragmatic membership high: they talk about the bug, not about another topic.</li>
<li>Structural membership low: fix is in base form. The structure that is due is the simple past, fixed.</li>
</ul>
<p>The content of the interview holds. One dimension fails. The teacher corrects that form and asks for the next step of the incident. If the six signals are not enough to decide, the valid result is insufficient evidence: a question is asked, and the sentence is not declared incorrect.</p>
<p class="note">When enriching the engine, each new rule must say which dimension it observes, which form it suggests, and with what degree of membership. The skill decides how to say it. The conversational model does not add rules on its own.</p>`,
      verbos: `<p>In this interview the verb carries the professional meaning. The candidate can use the correct technical vocabulary and still miss the move if the tense is not the one the question just asked for. The engine starts there: time marker, verb form, and expected structure.</p>
<h3>The question chooses the tense</h3>
<table>
<thead><tr><th>Interview question</th><th>Tense it asks for</th><th>Answer that fits</th></tr></thead>
<tbody>
<tr><td>What do you do in your current role?</td><td>Simple present. Habit or current responsibility.</td><td>I design APIs and review pull requests.</td></tr>
<tr><td>What did you do to fix the bug?</td><td>Simple past. Finished action.</td><td>I traced the logs and deployed a patch.</td></tr>
<tr><td>What are you working on right now?</td><td>Present continuous. Action in progress.</td><td>I am migrating the auth service.</td></tr>
<tr><td>What will you do if the deployment fails?</td><td>Real conditional: simple present in if, will in the main clause.</td><td>If it fails, I will roll back the release.</td></tr>
<tr><td>What have you learned from that experience?</td><td>Present perfect. The experience is still current in the professional present.</td><td>I have learned to ship a canary release first.</td></tr>
</tbody>
</table>
<h3>The case the prototype already recognizes</h3>
<p>Student input: <em>Yesterday I fix a bug in production.</em></p>
<p>Output the teacher should be able to explain: <em>Yesterday I fixed a bug in production.</em> The marker yesterday places the action in the past and fix is in base form. The past form of that verb is fixed. The explanation fits in one line: with yesterday the simple past is used, fix → fixed. The next question stays inside the incident: what you did to resolve it.</p>
<p>Another case already covered by the conditional rule: <em>If the deployment will fail, I will restart the service.</em> In a real future condition, will does not go in the if clause. The form of that clause is the present: <em>If the deployment fails, I will restart the service.</em></p>
<h3>Verbs the initial lexicon already conjugates in the past</h3>
<p>fix → fixed, deploy → deployed, implement → implemented, debug → debugged, test → tested, create → created, build → built, write → wrote, find → found, make → made, do → did, go → went, have → had, see → saw.</p>
<p>Irregulars matter because the past is not always «add -ed». built, wrote, went, and found belong to the past by the use of the verb, not by a shared suffix.</p>
<h3>A limit the teacher must respect</h3>
<p><em>Yesterday, I did fix the bug</em> is emphatic and grammatical: did already marks the past and fix stays in base form. Motorg checks whether there is an auxiliary (did, was, had, will, would) before proposing the past. The current rules are heuristics: they do not analyze every subordinate clause or every verb of the language. A sentence that no rule recognizes remains an unclassified sentence. It does not become an error because the engine is silent.</p>
<p class="note">When the setting is widened (another profession, another course), the lexicon and the question → tense map are widened. The central piece remains the verb inside the situation, not a list memorized outside the interview.</p>`,
      difusa: `<p>An interview sentence is almost never entirely correct or entirely incorrect. It can tell the right incident and miss the tense. It can be grammatical and not answer the question. Fuzzy logic, from Zadeh's sets (1965), assigns each reading a degree of membership μ between 0 and 1, instead of a yes or a no.</p>
<p>Motorg already publishes that degree on each finding. The past rule uses 0.86 and the conditional rule uses 0.78: the sentence belongs to that degree to the set «possible mismatch of that rule». It is evidence, not a sentence.</p>
<h3>From six dimensions to four scores</h3>
<p>The six dimensions are compressed like this, so they can be added:</p>
<ul>
<li><strong>G</strong>, grammatical fit. It rests on the structural dimension.</li>
<li><strong>V</strong>, verbal and temporal fit. It gathers temporal, aspectual, and modal. If one of those three fails, V drops: a past marker is not compensated by a well-placed modal.</li>
<li><strong>C</strong>, coherence with the question. It looks at whether the illocutionary act is the one the question asked for.</li>
<li><strong>P</strong>, pragmatic relevance. It looks at whether the content stays inside the technical topic.</li>
</ul>
<p>Each one stays in the interval [0, 1]. The overall score is a convex combination. The weights add up to 1, so S also stays in [0, 1]:</p>
<div class="formula">S = 0.35 G + 0.25 C + 0.25 V + 0.15 P</div>
<p>The largest weight is on G because this trainer exists to make the grammar rule visible. C and V weigh the same: the sentence has to answer the question and with the tense that question requires. P weighs less so that a relevant topic written in the wrong tense is not rewarded, and so that the whole answer is not punished when only one form fails. The weights are initial. They are calibrated with real interviews.</p>
<h3>Example with the formula applied</h3>
<p>Question: <em>What will you do if the deployment fails?</em><br>Answer: <em>If the deployment will fail, I will restart the service.</em></p>
<table>
<thead><tr><th>Symbol</th><th>Illustrative reading</th><th>Value</th><th>Weight</th><th>Contribution</th></tr></thead>
<tbody>
<tr><td>G</td><td>The if clause carries will. The structure of the real conditional is not met.</td><td>0.25</td><td>0.35</td><td>0.0875</td></tr>
<tr><td>C</td><td>It does answer what they would do if the deployment fails.</td><td>0.90</td><td>0.25</td><td>0.2250</td></tr>
<tr><td>V</td><td>The tense of the condition is not the present.</td><td>0.30</td><td>0.25</td><td>0.0750</td></tr>
<tr><td>P</td><td>Restarting the service is a relevant plan.</td><td>0.85</td><td>0.15</td><td>0.1275</td></tr>
<tr><td>S</td><td>0.0875 + 0.2250 + 0.0750 + 0.1275</td><td></td><td></td><td>0.5150</td></tr>
</tbody>
</table>
<p>S = 0.515 says the answer is half adequate: the plan works, the form of the condition does not. Motorg also contributes μ = 0.78 for that rule. With a finding like that, only the if clause is corrected and «I will restart the service» is kept. The interview continues.</p>
<h3>When there are two interpretations</h3>
<p>Sometimes two readings compete. For example, «I have fixed the bug yesterday» can be read as an experiential present perfect or as a simple past that the marker yesterday is asking for. For each reading i its membership μ(I<sub>i</sub>) is computed. The chosen reading is the one with the highest degree:</p>
<div class="formula">I* = argmax<sub>i</sub> μ(I<sub>i</sub>)</div>
<p>If the best and the second are too close, there is no clear winner. The illustrative threshold, still to be calibrated, is:</p>
<div class="formula">if μ(I*) − μ(I<sub>2</sub>) &lt; 0.15, the result is insufficient evidence</div>
<p>The same abstention criterion is used when the confidence Motorg returns is low. In that case the teacher asks and does not force the correction.</p>
<h3>How to use S when enriching the skill</h3>
<ul>
<li>High S, around 0.80 or more, and no rule finding with μ ≥ 0.75: the move fits. Difficulty can be raised and the explanation shortened.</li>
<li>There is a finding with μ ≥ 0.75: that rule is corrected even if C and P are high. S reminds us that the rest of the answer may still be worth keeping.</li>
<li>Two readings less than 0.15 apart, or a weak finding: insufficient evidence.</li>
</ul>
<p class="note">S does not measure what the student «meant inside». It measures how much public evidence there is for a pedagogical decision. The numbers in the example are illustrative; the shape of the formula and the degree μ of each rule are the stable criterion.</p>
<h3>The rules inside: regular expressions</h3>
<p>The three engines (English, Spanish, and French) recognize markers, tenses, and structures with JavaScript regular expressions. Each match is the literal evidence that then receives a degree μ. To read them or write new rules: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions" target="_blank" rel="noopener noreferrer">JavaScript regular expressions guide (MDN)</a>.</p>`,
      wittgenstein: `<p>The theory is in the <em>Philosophical Investigations</em>. The sentence that orients the engine is the one in paragraph 43: the meaning of a word is its use in the language. Applied to a language class, it says something concrete: a verb form does not have an eternal verdict. It has a value inside the activity in which it appears.</p>
<h3>In other words</h3>
<p>The technical interview is a language game, with moves and with rules the participants recognize. «Correct» means: this move fulfills the rule the question has just put on the table. The engine does not look for a hidden sense behind the student's sentence. It looks at whether the sentence, said here, does the work the question asked for.</p>
<p>That is why the same string changes role:</p>
<ul>
<li>In the game of «What do you do in your current role?», <em>I fix bugs</em> is a valid move. Simple present, a habit of the role.</li>
<li>In the game of «What did you do yesterday?», <em>I fix bugs</em> no longer fulfills the rule. That game asks for the simple past: <em>I fixed a bug</em>.</li>
</ul>
<p>Correcting without looking at the question would treat grammar as an object outside use. The engine always receives the question together with the answer so it does not do that.</p>
<h3>Family resemblances</h3>
<p>Wittgenstein called family resemblance the fact that the members of a group are recognized by shared traits a few at a time, not by a single mark that all of them have. The past of the language works like that. fixed and deployed take -ed. built, wrote, went, and found do not. They still belong to the use «finished action in the past». The engine's lexicon stores those forms one by one, and fuzzy logic gives them a degree, because the border between «this form fulfills the game» and «this form steps outside» is not always a sharp edge.</p>
<h3>Following a rule, without reading the mind</h3>
<p>Following the past rule is shown in public: faced with yesterday, the student produces the form that interview recognizes. The engine observes that move. It has no access to a private intention, and the theory says that access is not needed in order to teach. What can be practiced is shared use.</p>
<p>Abstention comes from there. If the dimensions do not separate two readings, declaring an error would invent an intention the sentence does not show. The honest result is insufficient evidence and a question. The skill already asks for that: if confidence is low or the sentence may be valid, it is said carefully and a clarification is requested.</p>
<h3>How it is assembled with the rest</h3>
<ul>
<li>The six dimensions describe the public move: when, with what aspect, with what modality, with what act, with what fit to the question, and with what form.</li>
<li>The degree μ and the sum S say how sure we can be that the move left the rule of this game.</li>
<li>The skill turns that result into a short correction and the next interview question.</li>
<li>The language model carries the conversation. The rule keeps living in the engine.</li>
</ul>
<p class="note">Whoever enriches the engine can add settings — other professions, other questions — as new language games. Each game brings its expected tenses. The theory does not change: the meaning of the form is its use inside the game that is in progress.</p>`
    }
  }},
  fr: { translation: {
    ui: {
      docTitle: 'Sabelotodo AI · Coach d\'entretien',
      title: 'Sabelotodo AI — Coach d\'entretien',
      subtitle: 'Moteur d\'inférence grammaticale',
      session: 'Session {{time}}',
      sessionActive: 'Session active',
      sessionZero: 'Session 00:00',
      sessionLocal: 'Session locale',
      noSession: 'Aucune session active.',
      usage: 'Consommation d\'IA',
      usageAria: 'Consommation d\'IA du jour',
      close: 'Fermer',
      reply: 'Répondre',
      feedback: 'Feedback',
      learn: 'En savoir plus sur ce moteur LLM',
      type: 'Type d\'entretien',
      target: 'Langue à apprendre',
      level: 'Niveau approximatif',
      explain: 'Langue d\'explication',
      interviewer: 'Intervieweur',
      student: 'Votre réponse',
      interviewerPh: 'L\'intervieweur prépare la première question…',
      feedbackPh: 'Sujet de l\'intervieweur\n\nVotre réponse\n\nCorrection\n\nQuelle dimension reste à préciser\n\nLa réponse pourrait se lire ainsi\n\nQuestion sur votre réponse',
      help: 'Aide',
      change: 'Modifier',
      language: 'Langue de l\'interface'
    },
    start: {
      title: 'Préparez votre cours',
      lead: 'Choisissez le type d\'entretien, la langue que vous voulez pratiquer, votre niveau et la langue des explications.',
      begin: 'Commencer l\'entretien',
      native: 'Langue maternelle',
      nativeHint: 'Toute la page et les explications s\'affichent dans votre langue.',
      launchTitle: 'Commencer le cours',
      summary: 'Entretien : {{type}} · Langue : {{lang}}',
      minutes: 'Durée du cours (minutes)',
      minutesHint: 'Entre 5 et 180 minutes. Le serveur s\'arrête tout seul à la fin.',
      back: 'Retour',
      launch: 'Commencer le cours',
      requesting: 'Demande d\'un serveur pour votre cours…',
      starting: 'Démarrage du serveur du coach… {{time}}. Cela prend en général 1 ou 2 minutes.',
      failed: 'Le cours n\'a pas pu commencer : {{message}}',
      expired: 'la session n\'existe plus.',
      serverDown: 'le serveur n\'a pas démarré.',
      tooMany: 'vous avez déjà lancé plusieurs cours dans la dernière heure. Réessayez plus tard.',
      full: 'toutes les salles sont occupées. Réessayez dans quelques minutes.',
      pick: 'Choisissez le type d\'entretien et la langue pour commencer le cours.',
      ended: 'Le cours est terminé. Lancez-en un autre quand vous voulez.'
    },
    hints: {
      type: 'Définit le poste, le ton et les thèmes de l\'entretien. Le changer ouvre une autre conversation.',
      target: 'Langue à apprendre : {{lang}}. C\'est la langue de l\'intervieweur et de votre réponse.',
      level: 'Niveau approximatif de vos réponses.',
      explain: 'Langue d\'explication : {{lang}}. C\'est votre langue et celle du professeur dans le feedback.',
      interviewer: 'Question en {{lang}}. Si quelque chose n\'est pas clair, la question suivante porte sur votre réponse : elle demande le quoi, le comment, le quand, le où, le pourquoi ou le pour quoi, jusqu\'à ce que ce soit clair. Changer la langue à apprendre ouvre une autre conversation.',
      student: 'Écrivez en {{lang}} et appuyez sur Répondre.',
      studentPh: 'Votre réponse en {{lang}}',
      typeTitle: 'Type d\'entretien',
      targetTitle: 'Langue à apprendre',
      levelTitle: 'Niveau approximatif',
      explainTitle: 'Langue d\'explication',
      interviewerTitle: 'Intervieweur',
      studentTitle: 'Votre réponse'
    },
    status: {
      opening: 'Ouverture de l\'entretien…',
      preparing: 'L\'intervieweur prépare une question en {{lang}}…',
      ready: 'Question prête. Répondez en {{lang}}.',
      openError: 'Impossible d\'ouvrir l\'entretien : {{message}}',
      noQuestionFromAi: 'L\'intervieweur n\'a pas envoyé de question.',
      noQuestion: 'Il n\'y a pas encore de question de l\'intervieweur.',
      write: 'Écrivez votre réponse en {{lang}}.',
      thinking: 'L\'intervieweur et le professeur répondent…',
      newQuestion: 'L\'intervieweur a compris. Nouvelle question.',
      refine: 'L\'intervieweur pose une question sur votre réponse pour préciser une dimension. Corrigez, contextualisez ou ajustez la phrase.',
      sameQuestion: 'Le feedback est arrivé. L\'intervieweur reste sur le même sujet.',
      error: 'Erreur : {{message}}'
    },
    usage: {
      calls: 'appels',
      quota: 'du quota quotidien',
      cost: 'Coût',
      exhausted: 'épuisé',
      none: 'Aucun appel aujourd\'hui pour le moment.',
      last: 'Dernier appel : {{input}} input · {{output}} output · Coût {{cost}}{{estimated}}',
      estimated: ' · estimé'
    },
    learn: {
      lead: 'Voici comment ce formateur décide. Les notes servent au professeur qui va enrichir les règles et à l\'étudiant qui veut voir la formule avec laquelle sa phrase est lue.',
      guide: 'Guide d\'utilisation',
      guideNote: '(Pour l\'enseignant)',
      dims: '6 dimensions',
      dimsNote: '(Pour l\'enseignant qui veut approfondir les méthodologies avec l\'IA)',
      verbs: 'Verbes et temps',
      verbsNote: '(Pour les puristes)',
      fuzzy: 'Logique floue',
      fuzzyNote: '(Pour les mathématiciens)',
      witt: 'Wittgenstein et l\'usage',
      wittNote: '(Pour les philosophes)'
    },
    modals: {
      learn: 'En savoir plus sur ce moteur LLM',
      guide: 'Guide d\'utilisation',
      profesor: 'Pour l\'enseignant : le moteur et les 6 dimensions de l\'intention',
      verbs: 'Verbes et temps : la pièce centrale',
      fuzzy: 'Logique floue : comment une interprétation se résout',
      witt: 'Ce que Wittgenstein apporte à ce moteur',
      feedback: 'Feedback',
      help: 'Aide'
    },
    levels: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé' },
    langs: { es: 'espagnol', en: 'anglais', fr: 'français' },
    langOptions: { es: 'Espagnol', en: 'Anglais', fr: 'Français' },
    types: {
      software_engineer: 'Ingénieur logiciel (technique)',
      call_center: 'Agent de centre d\'appels (informel)',
      restaurant_waiter: 'Serveur de restaurant',
      retail_sales: 'Vendeur en magasin',
      hotel_receptionist: 'Réceptionniste d\'hôtel',
      nurse: 'Infirmier',
      administrative_assistant: 'Assistant administratif',
      delivery_driver: 'Livreur',
      teacher: 'Enseignant',
      sales_executive: 'Commercial'
    },
    html: {
      guia: `<p>Il y a quatre commandes au-dessus de l'entretien : type d'entretien, langue à apprendre (espagnol, anglais ou français), niveau et langue d'explication (espagnol, anglais ou français).</p>
<p>Le type d'entretien fixe le poste (ingénierie logicielle, centre d'appels, serveur de restaurant, vente au détail, réception d'hôtel, soins infirmiers, assistant administratif, livraison, enseignement ou vente), le ton et les thèmes des questions. Le changer ouvre une autre conversation avec une nouvelle question pour ce poste. Les règles grammaticales ne changent pas : chaque question continue de demander son temps verbal.</p>
<p>Sur le site publié, la page n'appelle pas Groq depuis votre ordinateur. Chaque question part vers le serveur Node que le workflow GitHub allume, et c'est ce serveur qui interroge Groq. Le compteur Session est le temps qui reste de ce workflow. À 00:00 la session de cette conversation se termine.</p>
<p>La langue à apprendre est celle de l'intervieweur et de votre réponse. La langue d'explication est la vôtre et celle du professeur : le feedback en sort, et la suggestion reste dans la langue que vous apprenez. Chaque tour envoie ces deux langues à l'IA.</p>
<p>Changer la langue à apprendre ouvre une autre conversation et demande une nouvelle question. Changer seulement la langue d'explication laisse la question actuelle et applique la nouvelle langue au feedback suivant.</p>
<p>La même IA porte le fil d'un seul sujet jusqu'à ce que la réponse se comprenne comme dans un entretien réel. Le feedback regarde les dimensions de cette réponse : ce qui s'est passé, comment la phrase est construite, quand et avec quel temps, où ou dans quel contexte, pourquoi et pour quoi. Le temps verbal ne suffit pas. S'il manque une dimension, la question suivante porte sur la réponse et ne demande que cette précision, ce contexte ou cet ajustement. Une nouvelle question n'arrive que lorsque l'intervieweur a compris. Le moteur grammatical n'est qu'une référence pour le skill de la langue en cours. Il y a un appui de contexte en anglais, un autre en espagnol et un autre en français ; celui de la langue à apprendre est celui qui entre.</p>`,
      profesor: `<p>C'est un formateur de langage pour un cadre concret : l'entretien technique de logiciel. Il simule la conversation avec un professeur. Il corrige, explique une règle et poursuit l'entretien. L'élève pratique le langage de cette situation, pas une liste d'exercices détachée.</p>
<p>La même IA répond comme intervieweur et comme professeur. Le fil — la question, ce que cette question attend et le tour suivant — se construit dans cette IA à partir de la réponse de l'étudiant. Il y a trois pièces, et chacune s'enrichit dans son fichier :</p>
<ul>
<li><strong>Motorg</strong> (<code>motorg.js</code>, <code>motorg-es.js</code>, <code>motorg-fr.js</code>). Référence pour le skill de la langue en cours. Chaque langue a un appui de contexte. Il renvoie une constatation et un degré d'appartenance. Il n'écrit pas le feedback.</li>
<li><strong>Skill</strong> (<code>skill.js</code>). Objectif, niveau, scénario et politique : encourager, corriger une seule erreur matérielle, expliquer une règle, donner un exemple bref et poser une question de suivi.</li>
<li><strong>Modc</strong> (<code>modc.js</code>). C'est la voix de l'entretien. Il écrit le feedback et la question suivante. La règle de Motorg lui arrive comme preuve de la langue à apprendre, et l'IA décide si cette preuve entre dans le fil.</li>
</ul>
<h3>Ce que signifie « intention » ici</h3>
<p>L'intention que le moteur lit est publique : quel coup la phrase joue à l'intérieur de la question ouverte. Une même chaîne de mots change de valeur quand la question change. C'est pourquoi l'analyse reçoit la question avec la réponse.</p>
<h3>Les six dimensions</h3>
<p>Chaque dimension s'observe dans la phrase et se note comme un degré entre 0 et 1. Plus loin elles se compriment en quatre scores (G, C, V et P), que le bouton de logique floue explique.</p>
<table>
<thead><tr><th>Dimension</th><th>Ce qui s'observe</th><th>Exemple dans l'entretien</th></tr></thead>
<tbody>
<tr><td>1. Temporelle</td><td>Quand elle situe l'action : marqueurs comme hier, en ce moment, la semaine dernière, en 2024.</td><td>« Hier » situe l'incident dans un passé clos.</td></tr>
<tr><td>2. Aspectuelle</td><td>Si l'action est terminée, encore en cours ou une habitude.</td><td>j'ai corrigé (terminée), je suis en train de corriger (en cours), je corrige des bogues à chaque sprint (habitude).</td></tr>
<tr><td>3. Modale</td><td>Si elle énonce un fait, une hypothèse ou une obligation.</td><td>Si le déploiement échoue, j'annulerai la mise en production. La condition est hypothétique ; le plan va au futur.</td></tr>
<tr><td>4. Illocutoire</td><td>Quel acte la phrase accomplit : raconter, expliquer une cause, proposer une étape, demander une précision.</td><td>« J'ai redémarré le service » raconte ce qui a été fait. « Je vais le redémarrer » propose ce qui serait fait.</td></tr>
<tr><td>5. Pragmatique</td><td>Si cet acte répond à la question en cours et conserve le thème technique.</td><td>Devant « qu'avez-vous fait pour corriger le bogue ? », parler de l'incident répond. Passer à un loisir ne répond pas.</td></tr>
<tr><td>6. Structurelle</td><td>Si la forme du verbe est celle que cette intention exige dans ce jeu.</td><td>Passé composé, présent continu, passé composé d'expérience ou conditionnel réel (présent dans si, futur dans la principale).</td></tr>
</tbody>
</table>
<h3>Lecture d'une phrase</h3>
<p>« Hier je corrige un bogue en production », avec la question « Parlez-moi d'un bogue difficile que vous avez corrigé » :</p>
<ul>
<li>Appartenance temporelle haute vers le passé, à cause de hier et de projet précédent dans la question.</li>
<li>Aspectuelle : la question demande une action terminée.</li>
<li>Modale : c'est un fait, pas une hypothèse.</li>
<li>Illocutoire : l'élève raconte un incident. L'acte est le bon.</li>
<li>Appartenance pragmatique haute : il parle du bug, pas d'un autre sujet.</li>
<li>Appartenance structurelle basse : corrige est au présent. La structure qui convient est le passé composé, ai corrigé.</li>
</ul>
<p>Le contenu de l'entretien tient. Une dimension échoue. Le professeur corrige cette forme et demande l'étape suivante de l'incident. Si les six signaux ne suffisent pas pour décider, le résultat valable est une preuve insuffisante : on pose une question, et on ne déclare pas la phrase incorrecte.</p>
<p class="note">En enrichissant le moteur, chaque règle nouvelle doit dire quelle dimension elle observe, quelle forme elle suggère et avec quel degré d'appartenance. Le skill décide comment le dire. Le modèle conversationnel n'ajoute pas de règles de lui-même.</p>`,
      verbos: `<p>Dans cet entretien le verbe porte le sens professionnel. Le candidat peut employer le vocabulaire technique correct et rater quand même le coup si le temps n'est pas celui que la question vient de demander. Le moteur commence par là : marqueur de temps, forme du verbe et structure attendue.</p>
<h3>La question choisit le temps</h3>
<table>
<thead><tr><th>Question d'entretien</th><th>Temps demandé</th><th>Réponse qui convient</th></tr></thead>
<tbody>
<tr><td>Que faites-vous dans votre poste actuel ?</td><td>Présent. Habitude ou responsabilité actuelle.</td><td>Je conçois des API et je relis les demandes de fusion.</td></tr>
<tr><td>Qu'avez-vous fait pour corriger le bogue ?</td><td>Passé composé. Action terminée.</td><td>J'ai examiné les journaux et j'ai déployé un correctif.</td></tr>
<tr><td>Sur quoi travaillez-vous en ce moment ?</td><td>Présent continu. Action en cours.</td><td>Je suis en train de migrer le service d'authentification.</td></tr>
<tr><td>Que ferez-vous si le déploiement échoue ?</td><td>Conditionnel réel : présent dans si, futur dans la principale.</td><td>S'il échoue, j'annulerai la mise en production.</td></tr>
<tr><td>Qu'avez-vous appris de cette expérience ?</td><td>Passé composé. L'expérience reste actuelle dans le présent professionnel.</td><td>J'ai appris à publier d'abord une version canari.</td></tr>
</tbody>
</table>
<h3>Le cas que le prototype reconnaît déjà</h3>
<p>Entrée de l'élève : <em>Hier je corrige un bogue en production.</em></p>
<p>Sortie que le professeur doit pouvoir expliquer : <em>Hier, j'ai corrigé un bogue en production.</em> Le marqueur hier situe l'action dans le passé et corrige est au présent. La forme de passé composé de ce verbe est ai corrigé. L'explication tient en une ligne : avec hier on emploie le passé composé, corrige → ai corrigé. La question suivante reste dans l'incident : ce que vous avez fait pour le résoudre.</p>
<p>Un autre cas déjà couvert par la règle du conditionnel : <em>Si le déploiement échouera, je redémarrerai le service.</em> Dans une condition réelle de futur, le futur ne va pas dans la proposition avec si. La forme de cette proposition est le présent : <em>Si le déploiement échoue, je redémarrerai le service.</em></p>
<h3>Verbes que le lexique initial conjugue déjà au passé</h3>
<p>corriger → ai corrigé, déployer → ai déployé, mettre en œuvre → ai mis en œuvre, déboguer → ai débogué, tester → ai testé, créer → ai créé, construire → ai construit, écrire → ai écrit, trouver → ai trouvé, faire → ai fait, aller → suis allé, avoir → ai eu, voir → ai vu.</p>
<p>Les irréguliers comptent parce que le passé n'est pas toujours une marque régulière. suis allé, ai fait, ai vu et ai écrit appartiennent au passé par l'usage du verbe, pas par une terminaison commune.</p>
<h3>Une limite que le professeur doit respecter</h3>
<p><em>Hier, j'ai bien corrigé le bogue</em> est emphatique et grammatical : ai marque déjà le passé et corrigé reste au participe. Motorg vérifie s'il y a un auxiliaire (ai, suis, avais, vais) avant de proposer le passé. Les règles actuelles sont des heuristiques : elles n'analysent pas toutes les subordonnées ni tous les verbes du langage. Une phrase qu'aucune règle ne reconnaît reste une phrase non classée. Elle ne devient pas une erreur par le silence du moteur.</p>
<p class="note">Quand on élargit le cadre (un autre métier, un autre cours), on élargit le lexique et la carte question → temps. La pièce centrale reste le verbe dans la situation, pas une liste mémorisée hors de l'entretien.</p>`,
      difusa: `<p>Une phrase d'entretien n'est presque jamais tout à fait correcte ou tout à fait incorrecte. Elle peut raconter le bon incident et rater le temps. Elle peut être grammaticale et ne pas répondre à la question. La logique floue, à partir des ensembles de Zadeh (1965), attribue à chaque lecture un degré d'appartenance μ entre 0 et 1, au lieu d'un oui ou d'un non.</p>
<p>Motorg publie déjà ce degré dans chaque constatation. La règle du passé utilise 0,86 et celle du conditionnel 0,78 : la phrase appartient à ce degré à l'ensemble « possible décalage de cette règle ». C'est une preuve, pas une sentence.</p>
<h3>De six dimensions à quatre scores</h3>
<p>Les six dimensions se compriment ainsi, pour pouvoir les additionner :</p>
<ul>
<li><strong>G</strong>, adéquation grammaticale. Elle s'appuie sur la dimension structurelle.</li>
<li><strong>V</strong>, adéquation verbale et temporelle. Elle réunit temporel, aspectuel et modal. Si l'une de ces trois échoue, V baisse : un marqueur de passé ne se compense pas avec un modal bien placé.</li>
<li><strong>C</strong>, cohérence avec la question. Elle regarde si l'acte illocutoire est celui que la question a demandé.</li>
<li><strong>P</strong>, pertinence pragmatique. Elle regarde si le contenu reste dans le thème technique.</li>
</ul>
<p>Chacune reste dans l'intervalle [0, 1]. La note globale est une combinaison convexe. Les poids somment à 1, donc S reste aussi dans [0, 1] :</p>
<div class="formula">S = 0.35 G + 0.25 C + 0.25 V + 0.15 P</div>
<p>Le poids le plus fort est sur G parce que ce formateur existe pour rendre visible la règle grammaticale. C et V pèsent autant : la phrase doit répondre à la question et avec le temps que cette question exige. P pèse moins pour ne pas récompenser un thème pertinent écrit au mauvais temps, ni punir toute la réponse quand une seule forme échoue. Les poids sont initiaux. Ils se calibrent avec de vrais entretiens.</p>
<h3>Exemple avec la formule appliquée</h3>
<p>Question : <em>Que ferez-vous si le déploiement échoue ?</em><br>Réponse : <em>Si le déploiement échouera, je redémarrerai le service.</em></p>
<table>
<thead><tr><th>Symbole</th><th>Lecture illustrative</th><th>Valeur</th><th>Poids</th><th>Apport</th></tr></thead>
<tbody>
<tr><td>G</td><td>La proposition avec si porte le futur. La structure du conditionnel réel n'est pas respectée.</td><td>0.25</td><td>0.35</td><td>0.0875</td></tr>
<tr><td>C</td><td>Elle répond bien à ce qu'on ferait si le déploiement échoue.</td><td>0.90</td><td>0.25</td><td>0.2250</td></tr>
<tr><td>V</td><td>Le temps de la condition n'est pas le présent.</td><td>0.30</td><td>0.25</td><td>0.0750</td></tr>
<tr><td>P</td><td>Redémarrer le service est un plan pertinent.</td><td>0.85</td><td>0.15</td><td>0.1275</td></tr>
<tr><td>S</td><td>0.0875 + 0.2250 + 0.0750 + 0.1275</td><td></td><td></td><td>0.5150</td></tr>
</tbody>
</table>
<p>S = 0,515 dit que la réponse est à moitié adéquate : le plan sert, la forme de la condition non. Motorg apporte en plus μ = 0,78 pour cette règle. Avec une constatation ainsi, on corrige seulement la proposition si et on conserve « je redémarrerai le service ». L'entretien continue.</p>
<h3>Quand il y a deux interprétations</h3>
<p>Parfois deux lectures se font concurrence. Par exemple, « Hier je corrige le bogue » peut se lire comme un présent d'habitude ou comme un passé composé que le marqueur hier demande. Pour chaque lecture i on calcule son appartenance μ(I<sub>i</sub>). La lecture choisie est celle du plus haut degré :</p>
<div class="formula">I* = argmax<sub>i</sub> μ(I<sub>i</sub>)</div>
<p>Si la meilleure et la seconde sont trop proches, il n'y a pas de gagnante claire. Le seuil illustratif, encore à calibrer, est :</p>
<div class="formula">si μ(I*) − μ(I<sub>2</sub>) &lt; 0.15, le résultat est une preuve insuffisante</div>
<p>Le même critère d'abstention sert quand la confiance que renvoie Motorg est basse. Dans ce cas le professeur pose une question et ne force pas la correction.</p>
<h3>Comment utiliser S en enrichissant le skill</h3>
<ul>
<li>S haut, autour de 0,80 ou plus, et sans constatation de règle avec μ ≥ 0,75 : le coup convient. On peut monter la difficulté et raccourcir l'explication.</li>
<li>Il y a une constatation avec μ ≥ 0,75 : on corrige cette règle même si C et P sont hauts. S rappelle que le reste de la réponse peut valoir.</li>
<li>Deux lectures à moins de 0,15, ou une constatation faible : preuve insuffisante.</li>
</ul>
<p class="note">S ne mesure pas ce que l'élève « a voulu dire à l'intérieur ». Il mesure combien de preuve publique il y a pour une décision pédagogique. Les nombres de l'exemple sont illustratifs ; la forme de la formule et le degré μ de chaque règle sont le critère stable.</p>
<h3>Les règles à l'intérieur : expressions régulières</h3>
<p>Les trois moteurs (anglais, espagnol et français) reconnaissent marqueurs, temps et structures avec des expressions régulières JavaScript. Chaque correspondance est la preuve littérale qui reçoit ensuite un degré μ. Pour les lire ou écrire de nouvelles règles : <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions" target="_blank" rel="noopener noreferrer">Guide des expressions régulières en JavaScript (MDN)</a>.</p>`,
      wittgenstein: `<p>La théorie est dans les <em>Investigations philosophiques</em>. La phrase qui oriente le moteur est celle du paragraphe 43 : la signification d'un mot est son usage dans la langue. Appliquée à un cours de langage, elle dit quelque chose de concret : une forme verbale n'a pas un verdict éternel. Elle a une valeur à l'intérieur de l'activité où elle apparaît.</p>
<h3>Autrement dit</h3>
<p>L'entretien technique est un jeu de langage, avec des coups et des règles que les participants reconnaissent. « Correct » veut dire : ce coup respecte la règle que la question vient de poser sur la table. Le moteur ne cherche pas un sens caché derrière la phrase de l'élève. Il regarde si la phrase, dite ici, fait le travail que la question a demandé.</p>
<p>C'est pourquoi la même chaîne change de rôle :</p>
<ul>
<li>Dans le jeu de « Que faites-vous dans votre poste actuel ? », <em>Je corrige des bogues</em> est un coup valide. Présent, habitude du poste.</li>
<li>Dans le jeu de « Qu'avez-vous fait hier ? », <em>Je corrige des bogues</em> ne respecte plus la règle. Ce jeu demande le passé composé : <em>J'ai corrigé un bogue</em>.</li>
</ul>
<p>Corriger sans regarder la question serait traiter la grammaire comme un objet hors de l'usage. Le moteur reçoit toujours la question avec la réponse pour ne pas faire cela.</p>
<h3>Airs de famille</h3>
<p>Wittgenstein a appelé air de famille le fait que les membres d'un groupe se reconnaissent par des traits partagés quelques-uns à la fois, pas par une seule marque que tous auraient. Le passé du langage fonctionne ainsi. Certains verbes prennent une marque régulière. suis allé, ai fait, ai vu et ai écrit non. Ils appartiennent quand même à l'usage « action terminée dans le passé ». Le lexique du moteur garde ces formes une à une, et la logique floue leur donne un degré, parce que la frontière entre « cette forme respecte le jeu » et « cette forme en sort » n'est pas toujours un bord net.</p>
<h3>Suivre une règle, sans lire l'esprit</h3>
<p>Suivre la règle du passé se montre en public : devant hier, l'élève produit la forme que cet entretien reconnaît. Le moteur observe ce coup. Il n'a pas accès à une intention privée, et la théorie dit que cet accès n'est pas nécessaire pour enseigner. Ce qui peut se pratiquer, c'est l'usage partagé.</p>
<p>L'abstention vient de là. Si les dimensions ne séparent pas deux lectures, déclarer une erreur inventerait une intention que la phrase ne montre pas. Le résultat honnête est une preuve insuffisante et une question. Le skill le demande déjà : si la confiance est basse ou si la phrase peut être valide, on le dit avec prudence et on demande une précision.</p>
<h3>Comment cela s'assemble avec le reste</h3>
<ul>
<li>Les six dimensions décrivent le coup public : quand, avec quel aspect, avec quelle modalité, avec quel acte, avec quel ajustement à la question et avec quelle forme.</li>
<li>Le degré μ et la somme S disent avec quelle sûreté on peut affirmer que le coup est sorti de la règle de ce jeu.</li>
<li>Le skill traduit ce résultat en une correction brève et en la question suivante de l'entretien.</li>
<li>Le modèle de langage porte la conversation. La règle continue de vivre dans le moteur.</li>
</ul>
<p class="note">Qui enrichit le moteur peut ajouter des cadres — d'autres métiers, d'autres questions — comme de nouveaux jeux de langage. Chaque jeu apporte ses temps attendus. La théorie ne change pas : le sens de la forme est l'usage à l'intérieur du jeu en cours.</p>`
    }
  }}
};
