window.COACH_I18N_RESOURCES = {
  es: { translation: {
    ui: {
      docTitle: 'Motor conversacional · Coach de entrevista',
      title: 'Motor conversacional — Coach de entrevista',
      subtitle: 'Aprende {{learn}} con un profesor en tu idioma nativo {{native}}',
      subtitleLearn: 'Aprende {{learn}} con un profesor en tu idioma nativo {{native}}',
      session: 'Sesión {{time}}',
      sessionActive: 'Sesión activa',
      sessionZero: 'Sesión 00:00',
      sessionLocal: 'Sesión local',
      noSession: 'Sin sesión activa.',
      usage: 'Consumo de IA',
      usageAria: 'Consumo de IA del día',
      close: 'Cerrar',
      reply: 'Responder',
      mic: 'Hablar',
      micStop: 'Detener',
      repeatQuestion: 'Repetir pregunta',
      repeatFeedback: 'Repetir feedback',
      feedback: 'Feedback',
      learn: 'Aprende más de este motor conversacional',
      type: 'Tipo de entrevista',
      target: 'Idioma a aprender',
      level: 'Nivel aproximado',
      explain: 'Idioma de explicación',
      interviewer: 'Entrevistador',
      student: 'Tu respuesta',
      interviewerPh: 'El entrevistador está preparando la primera pregunta…',
      feedbackPh: 'Tema del entrevistador\n\nTu respuesta\n\nCómo mejorar esta respuesta\n\nQué ajustar\n\nAsí podría quedar la respuesta\n\nPregunta del entrevistador',
      help: 'Ayuda',
      change: 'Cambiar',
      language: 'Idioma de la interfaz',
      interviewerVoice: 'Voz del entrevistador',
      professorVoice: 'Voz del profesor',
      voicePreview: 'Oír',
      voiceEmpty: 'Sin voces de este idioma en el navegador'
    },
    start: {
      title: 'Prepara tu clase',
      lead: 'Selecciona tu idioma nativo. La página y el profesor quedan en ese idioma. Después elige el tipo de entrevista, el idioma que vas a aprender y tu nivel.',
      begin: 'Comenzar entrevista',
      native: 'Selecciona tu idioma nativo',
      nativeHint: 'La interfaz y el profesor usan este idioma. No vuelve a aparecer en la entrevista.',
      network: 'En esta misma red hay cupo para 3 clases por hora. Cada clase enciende su propio servidor y su reloj de sesión corre solo para esa clase. Si ya abriste 3 y quieres otra antes de que pase la hora, cambia de red: por ejemplo, pasa del wifi a los datos del celular.',
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
      tooMany: 'en esta red ya se abrieron 3 clases en la última hora. Espera a que pase la hora o cambia de red para abrir otra.',
      full: 'todas las aulas están ocupadas. Intenta en unos minutos.',
      pick: 'Elige el tipo de entrevista y el idioma para iniciar la clase.',
      ended: 'La clase terminó. Inicia otra cuando quieras.'
    },
    hints: {
      type: 'Define el puesto, el tono y los temas de la entrevista. Cambiarlo abre otra conversación.',
      target: 'Idioma a aprender: {{lang}}. Es el idioma del entrevistador y de tu respuesta.',
      level: 'Nivel aproximado de tus respuestas.',
      explain: 'Idioma de explicación: {{lang}}. Es tu idioma y el del profesor en el feedback.',
      interviewer: 'Pregunta en {{lang}}. Si tu respuesta todavía necesita trabajo, el entrevistador pide aclarar un aspecto. Si ya vale, la valida y pasa a otra. Cambiar el idioma a aprender abre otra conversación.',
      student: 'Escribe en {{lang}} y pulsa Responder.',
      studentPh: 'Tu respuesta en {{lang}}',
      typeTitle: 'Tipo de entrevista',
      targetTitle: 'Idioma a aprender',
      levelTitle: 'Nivel aproximado',
      explainTitle: 'Idioma de explicación',
      interviewerTitle: 'Entrevistador',
      studentTitle: 'Tu respuesta',
      change: 'Vuelve a la preparación de la clase. Ahí puedes cambiar tu idioma nativo, el puesto, el idioma que aprendes, el nivel y las voces. Si cambias el puesto o el idioma a aprender, la conversación empieza de nuevo. El reloj de la sesión no se reinicia.',
      changeTitle: 'Cambiar'
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
      newQuestion: 'La respuesta vale. Nueva pregunta del entrevistador.',
      refine: 'El entrevistador pide aclarar un aspecto de tu respuesta.',
      sameQuestion: 'Llegó el feedback. El entrevistador sigue en el mismo tema.',
      error: 'Error: {{message}}'
    },
    voice: {
      micDenied: 'El navegador no permitió el micrófono.',
      recording: 'Grabando tu respuesta… Pulsa Detener al terminar.',
      transcribing: 'Pasando tu voz a texto…',
      empty: 'No se escuchó audio.',
      sttError: 'No se pudo transcribir: {{message}}'
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
      lead: 'Dos entradas: cómo se usa la clase y cómo el feedback evalúa tu respuesta.',
      guide: 'Guía de uso',
      guideHint: 'Cómo preparar, escuchar, responder y seguir',
      model: 'Modelo pedagógico',
      modelHint: 'Cómo el feedback evalúa tu respuesta',
      dims: 'Contexto gramatical',
      intent: 'Intención comunicativa',
      verbs: 'Verbos y tiempos'
    },
    modals: {
      learn: 'Aprende más de este motor conversacional',
      guide: 'Guía de uso',
      pedagogico: 'Modelo pedagógico',
      profesor: 'Contexto gramatical',
      intencion: 'Intención comunicativa',
      verbs: 'Verbos y tiempos',
      fuzzy: 'Lógica difusa: cómo se resuelve una interpretación',
      witt: 'Qué aporta Wittgenstein a este motor',
      feedback: 'Feedback',
      help: 'Ayuda'
    },
    levels: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' },
    langs: { es: 'español', en: 'inglés', fr: 'francés' },
    learnNames: { es: 'español', en: 'inglés', fr: 'francés' },
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
      docTitle: 'Conversational engine · Interview Coach',
      title: 'Conversational engine — Interview Coach',
      subtitle: 'Learn {{learn}} with a teacher in your native language, {{native}}',
      subtitleLearn: 'Learn {{learn}} with a teacher in your native language, {{native}}',
      session: 'Session {{time}}',
      sessionActive: 'Session active',
      sessionZero: 'Session 00:00',
      sessionLocal: 'Local session',
      noSession: 'No active session.',
      usage: 'AI usage',
      usageAria: 'AI usage today',
      close: 'Close',
      reply: 'Reply',
      mic: 'Speak',
      micStop: 'Stop',
      repeatQuestion: 'Repeat question',
      repeatFeedback: 'Repeat feedback',
      feedback: 'Feedback',
      learn: 'Learn more about this conversational engine',
      type: 'Interview type',
      target: 'Language to learn',
      level: 'Approximate level',
      explain: 'Explanation language',
      interviewer: 'Interviewer',
      student: 'Your answer',
      interviewerPh: 'The interviewer is preparing the first question…',
      feedbackPh: 'Interviewer topic\n\nYour answer\n\nHow to improve this answer\n\nWhat to adjust\n\nHow the answer could read\n\nInterviewer question',
      help: 'Help',
      change: 'Change',
      language: 'Interface language',
      interviewerVoice: 'Interviewer voice',
      professorVoice: 'Teacher voice',
      voicePreview: 'Listen',
      voiceEmpty: 'This browser has no voices for this language'
    },
    start: {
      title: 'Set up your class',
      lead: 'Choose your native language. The page and the teacher stay in that language. Then pick the interview type, the language you will learn and your level.',
      begin: 'Start interview',
      native: 'Choose your native language',
      nativeHint: 'The interface and the teacher use this language. It does not appear again during the interview.',
      network: 'On this same network there is room for 3 classes per hour. Each class starts its own server, and its session clock runs only for that class. If you already opened 3 and want another before the hour is up, switch networks: for example, move from Wi-Fi to your phone\'s mobile data.',
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
      tooMany: 'this network already opened 3 classes in the last hour. Wait for the hour to pass, or switch networks to open another one.',
      full: 'all classrooms are busy. Try again in a few minutes.',
      pick: 'Choose the interview type and the language to start the class.',
      ended: 'The class is over. Start another one whenever you like.'
    },
    hints: {
      type: 'Sets the role, the tone, and the topics of the interview. Changing it starts another conversation.',
      target: 'Language to learn: {{lang}}. It is the interviewer\'s language and the language of your answer.',
      level: 'Approximate level of your answers.',
      explain: 'Explanation language: {{lang}}. It is your language and the teacher\'s language in the feedback.',
      interviewer: 'Question in {{lang}}. If your answer still needs work, the interviewer asks you to clarify one aspect. If it is already good enough, it validates it and moves on. Changing the language to learn starts another conversation.',
      student: 'Write in {{lang}} and press Reply.',
      studentPh: 'Your answer in {{lang}}',
      typeTitle: 'Interview type',
      targetTitle: 'Language to learn',
      levelTitle: 'Approximate level',
      explainTitle: 'Explanation language',
      interviewerTitle: 'Interviewer',
      studentTitle: 'Your answer',
      change: 'Opens class setup again. There you can change your native language, the role, the language you are learning, the level, and the voices. If you change the role or the language to learn, the conversation starts over. The session clock does not restart.',
      changeTitle: 'Change'
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
      newQuestion: 'The answer stands. New question from the interviewer.',
      refine: 'The interviewer asks you to clarify one aspect of your answer.',
      sameQuestion: 'Feedback arrived. The interviewer is still on the same topic.',
      error: 'Error: {{message}}'
    },
    voice: {
      micDenied: 'The browser did not allow the microphone.',
      recording: 'Recording your answer… Press Stop when you finish.',
      transcribing: 'Turning your voice into text…',
      empty: 'No audio was heard.',
      sttError: 'Could not transcribe: {{message}}'
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
      lead: 'Two ways in: how the class works, and how the feedback evaluates your answer.',
      guide: 'Usage guide',
      guideHint: 'How to prepare, listen, answer, and continue',
      model: 'Pedagogical model',
      modelHint: 'How the feedback evaluates your answer',
      dims: 'Grammatical context',
      intent: 'Communicative intention',
      verbs: 'Verbs and tenses'
    },
    modals: {
      learn: 'Learn more about this conversational engine',
      guide: 'Usage guide',
      pedagogico: 'Pedagogical model',
      profesor: 'Grammatical context',
      intencion: 'Communicative intention',
      verbs: 'Verbs and tenses',
      fuzzy: 'Fuzzy logic: how an interpretation is resolved',
      witt: 'What Wittgenstein adds to this engine',
      feedback: 'Feedback',
      help: 'Help'
    },
    levels: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
    langs: { es: 'Spanish', en: 'English', fr: 'French' },
    learnNames: { es: 'Spanish', en: 'English', fr: 'French' },
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
      guia: `<ol class="guide-steps"><li class="guide-step guide-step--prep"><span class="guide-n">1</span><div><h3>Set up the class</h3><p>Choose your native language with ES, EN, or FR. The page and the teacher stay in that language. Then choose the role, the language you will learn, your level, and the minutes. On the same network you can open 3 classes per hour. Each one has its own clock.</p></div></li><li class="guide-step guide-step--listen"><span class="guide-n">2</span><div><h3>Listen to the question</h3><p>The interviewer writes the question and says it in the language you are learning. To hear it again, press Repeat question. While it speaks, that button turns into waves.</p></div></li><li class="guide-step guide-step--talk"><span class="guide-n">3</span><div><h3>Answer</h3><p>Write with the pencil or speak with the microphone. The square stops the recording. Your voice becomes text and goes into the answer.</p></div></li><li class="guide-step guide-step--read"><span class="guide-n">4</span><div><h3>Read and hear the feedback</h3><p>The teacher answers in your native language. You can repeat that audio. When you close the feedback, the interviewer speaks again and the class continues. At 00:00 that session ends.</p></div></li></ol>`,
      pedagogico: `<p class="ped-lead">The teacher's feedback evaluates your answer with three looks. That is how it decides whether the answer already stands or whether one point still needs clarifying.</p><ul class="ped-list"><li class="ped-card ped-card--context"><h3>Context</h3><p>It checks whether you answered what the question asked: what happened, how, when, where, why, and what for. If you leave the topic, the feedback brings you back to that question.</p></li><li class="ped-card ped-card--tense"><h3>Verb tenses</h3><p>It checks whether the verb is in the tense that question asks for. If you talk about something already done and the verb stays in the present, the feedback marks that adjustment and shows how the sentence could read.</p></li><li class="ped-card ped-card--intent"><h3>Communicative intention</h3><p>It checks what you do with the sentence: tell, explain, propose, or ask for clarification. If the question asks you to tell what you did and you say what you would do, the feedback asks you to line that answer up.</p></li></ul><div class="ped-criteria"><p><strong>Content:</strong> Did you answer what you were really asked?</p><p><strong>Communication:</strong> Were you clear, coherent, and professional?</p></div><p class="ped-close">If one of those three is missing, or the content does not answer the question, the interviewer asks you to clarify only that point. If they are clear, it validates the answer and moves to another question. Communication is always commented on: whether you were clear, coherent, and professional.</p><p class="ped-soon">coming soon... <strong>Oral expression:</strong> fillers, pauses, rhythm, and how long the answer lasts.</p>`,
      profesor: `<p>This is a language trainer for a concrete setting: the technical software interview. It simulates the conversation with a teacher. It corrects, explains one rule, and continues the interview. The student practices the language of that situation, not a loose list of exercises.</p>
<p>The same AI answers as interviewer and as teacher. The thread — the question, what that question expects, and the next turn — is built in that AI from the student's answer. There are three pieces, and each one is enriched in its own file:</p>
<ul>
<li><strong>Motorg</strong> (<code>motorg.js</code>, <code>motorg-es.js</code>, <code>motorg-fr.js</code>). Paused, as is the fuzzy logic. The files stay in the repo and do not decide the turn.</li>
<li><strong>Skill</strong> (<code>skill.js</code>). It asks the AI to be an expert in the role and a grammar teacher: it explains how to improve the answer, asks to clarify one aspect or, if the answer is already good, validates it and continues.</li>
<li><strong>Modc</strong> (<code>modc.js</code>). It carries that instruction to the AI and returns the feedback and the next question.</li>
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
      intencion: `<p>Communicative intention is the context of the interview in the area you chose. Engineering, call center, restaurant, store, hotel, nursing, office, delivery, teaching, or sales change the topics. The questions with which the interviewer understands an answer stay the same.</p>
<ul>
<li><strong>What</strong> happened or what was done.</li>
<li><strong>How</strong> it was done.</li>
<li><strong>When</strong> it happened, with the tense that question asks for.</li>
<li><strong>Where</strong>, or in what part of the job.</li>
<li><strong>Why</strong>, the cause.</li>
<li><strong>What for</strong>, the effect that was sought.</li>
</ul>
<p>A sentence can have the right tense and still not say what was done, where, or why. The interviewer asks you to clarify only that point. If the context is already clear and the tense coheres with the question, the answer is validated and the interview moves on.</p>`,
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
      docTitle: 'Moteur conversationnel · Coach d\'entretien',
      title: 'Moteur conversationnel — Coach d\'entretien',
      subtitle: 'Apprends {{learn}} avec un professeur dans ta langue maternelle, {{native}}',
      subtitleLearn: 'Apprends {{learn}} avec un professeur dans ta langue maternelle, {{native}}',
      session: 'Session {{time}}',
      sessionActive: 'Session active',
      sessionZero: 'Session 00:00',
      sessionLocal: 'Session locale',
      noSession: 'Aucune session active.',
      usage: 'Consommation d\'IA',
      usageAria: 'Consommation d\'IA du jour',
      close: 'Fermer',
      reply: 'Répondre',
      mic: 'Parler',
      micStop: 'Arrêter',
      repeatQuestion: 'Répéter la question',
      repeatFeedback: 'Répéter le feedback',
      feedback: 'Feedback',
      learn: 'En savoir plus sur ce moteur conversationnel',
      type: 'Type d\'entretien',
      target: 'Langue à apprendre',
      level: 'Niveau approximatif',
      explain: 'Langue d\'explication',
      interviewer: 'Intervieweur',
      student: 'Votre réponse',
      interviewerPh: 'L\'intervieweur prépare la première question…',
      feedbackPh: 'Sujet de l\'intervieweur\n\nVotre réponse\n\nComment améliorer cette réponse\n\nQuoi ajuster\n\nLa réponse pourrait se lire ainsi\n\nQuestion de l\'intervieweur',
      help: 'Aide',
      change: 'Modifier',
      interviewerVoice: 'Voix de l\'intervieweur',
      professorVoice: 'Voix du professeur',
      voicePreview: 'Écouter',
      voiceEmpty: 'Ce navigateur n\'a pas de voix pour cette langue',
      language: 'Langue de l\'interface'
    },
    start: {
      title: 'Préparez votre cours',
      lead: 'Choisissez votre langue maternelle. La page et le professeur restent dans cette langue. Ensuite, choisissez le type d\'entretien, la langue à apprendre et votre niveau.',
      begin: 'Commencer l\'entretien',
      native: 'Choisissez votre langue maternelle',
      nativeHint: 'L\'interface et le professeur utilisent cette langue. Le sélecteur ne réapparaît pas pendant l\'entretien.',
      network: 'Sur ce même réseau, il y a de la place pour 3 cours par heure. Chaque cours allume son propre serveur et son horloge de session ne compte que pour ce cours. Si vous en avez déjà ouvert 3 et que vous en voulez un autre avant la fin de l\'heure, changez de réseau : par exemple, passez du wifi aux données mobiles.',
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
      tooMany: 'ce réseau a déjà ouvert 3 cours dans la dernière heure. Attendez la fin de l\'heure, ou changez de réseau pour en ouvrir un autre.',
      full: 'toutes les salles sont occupées. Réessayez dans quelques minutes.',
      pick: 'Choisissez le type d\'entretien et la langue pour commencer le cours.',
      ended: 'Le cours est terminé. Lancez-en un autre quand vous voulez.'
    },
    hints: {
      type: 'Définit le poste, le ton et les thèmes de l\'entretien. Le changer ouvre une autre conversation.',
      target: 'Langue à apprendre : {{lang}}. C\'est la langue de l\'intervieweur et de votre réponse.',
      level: 'Niveau approximatif de vos réponses.',
      explain: 'Langue d\'explication : {{lang}}. C\'est votre langue et celle du professeur dans le feedback.',
      interviewer: 'Question en {{lang}}. Si votre réponse a encore besoin de travail, l\'intervieweur demande de préciser un aspect. Si elle tient déjà, il la valide et passe à une autre. Changer la langue à apprendre ouvre une autre conversation.',
      student: 'Écrivez en {{lang}} et appuyez sur Répondre.',
      studentPh: 'Votre réponse en {{lang}}',
      typeTitle: 'Type d\'entretien',
      targetTitle: 'Langue à apprendre',
      levelTitle: 'Niveau approximatif',
      explainTitle: 'Langue d\'explication',
      interviewerTitle: 'Intervieweur',
      studentTitle: 'Votre réponse',
      change: 'Rouvre la préparation du cours. Là vous pouvez changer votre langue maternelle, le poste, la langue à apprendre, le niveau et les voix. Si vous changez le poste ou la langue à apprendre, la conversation recommence. L\'horloge de la session ne redémarre pas.',
      changeTitle: 'Modifier'
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
      newQuestion: 'La réponse tient. Nouvelle question de l\'intervieweur.',
      refine: 'L\'intervieweur demande de préciser un aspect de votre réponse.',
      sameQuestion: 'Le feedback est arrivé. L\'intervieweur reste sur le même sujet.',
      error: 'Erreur : {{message}}'
    },
    voice: {
      micDenied: 'Le navigateur n\'a pas autorisé le microphone.',
      recording: 'Enregistrement de votre réponse… Appuyez sur Arrêter à la fin.',
      transcribing: 'Conversion de votre voix en texte…',
      empty: 'Aucun audio n\'a été entendu.',
      sttError: 'Transcription impossible : {{message}}'
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
      lead: 'Deux entrées : comment le cours se déroule, et comment le feedback évalue votre réponse.',
      guide: 'Guide d\'utilisation',
      guideHint: 'Comment préparer, écouter, répondre et continuer',
      model: 'Modèle pédagogique',
      modelHint: 'Comment le feedback évalue votre réponse',
      dims: 'Contexte grammatical',
      intent: 'Intention communicative',
      verbs: 'Verbes et temps'
    },
    modals: {
      learn: 'En savoir plus sur ce moteur conversationnel',
      guide: 'Guide d\'utilisation',
      pedagogico: 'Modèle pédagogique',
      profesor: 'Contexte grammatical',
      intencion: 'Intention communicative',
      verbs: 'Verbes et temps',
      fuzzy: 'Logique floue : comment une interprétation se résout',
      witt: 'Ce que Wittgenstein apporte à ce moteur',
      feedback: 'Feedback',
      help: 'Aide'
    },
    levels: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé' },
    langs: { es: 'espagnol', en: 'anglais', fr: 'français' },
    learnNames: { es: 'l\'espagnol', en: 'l\'anglais', fr: 'le français' },
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
      guia: `<ol class="guide-steps"><li class="guide-step guide-step--prep"><span class="guide-n">1</span><div><h3>Préparez le cours</h3><p>Choisissez votre langue maternelle avec ES, EN ou FR. La page et le professeur restent dans cette langue. Ensuite choisissez le poste, la langue à apprendre, votre niveau et les minutes. Sur le même réseau, vous pouvez ouvrir 3 cours par heure. Chacun a sa propre horloge.</p></div></li><li class="guide-step guide-step--listen"><span class="guide-n">2</span><div><h3>Écoutez la question</h3><p>L'intervieweur écrit la question et la dit dans la langue que vous apprenez. Pour la réentendre, appuyez sur Répéter la question. Pendant qu'il parle, ce bouton devient des ondes.</p></div></li><li class="guide-step guide-step--talk"><span class="guide-n">3</span><div><h3>Répondez</h3><p>Écrivez avec le crayon ou parlez avec le microphone. Le carré arrête l'enregistrement. Votre voix devient du texte et entre dans la réponse.</p></div></li><li class="guide-step guide-step--read"><span class="guide-n">4</span><div><h3>Lisez et écoutez le feedback</h3><p>Le professeur répond dans votre langue maternelle. Vous pouvez répéter cet audio. En fermant le feedback, l'intervieweur reparle et le cours continue. À 00:00 cette session se termine.</p></div></li></ol>`,
      pedagogico: `<p class="ped-lead">Le feedback du professeur évalue votre réponse avec trois regards. C'est ainsi qu'il décide si la réponse tient déjà ou s'il manque à préciser un seul point.</p><ul class="ped-list"><li class="ped-card ped-card--context"><h3>Contexte</h3><p>Il regarde si vous avez répondu à ce que la question demandait : ce qui s'est passé, comment, quand, où, pourquoi et pour quoi. Si vous quittez le sujet, le feedback vous ramène à cette question.</p></li><li class="ped-card ped-card--tense"><h3>Temps verbaux</h3><p>Il regarde si le verbe est au temps que cette question demande. Si vous parlez de quelque chose déjà fait et que le verbe reste au présent, le feedback signale cet ajustement et montre comment la phrase pourrait se lire.</p></li><li class="ped-card ped-card--intent"><h3>Intention communicative</h3><p>Il regarde ce que vous faites avec la phrase : raconter, expliquer, proposer ou demander une précision. Si la question demande de raconter ce que vous avez fait et que vous dites ce que vous feriez, le feedback vous demande d'aligner cette réponse.</p></li></ul><div class="ped-criteria"><p><strong>Contenu :</strong> As-tu vraiment répondu à ce qu'on t'a demandé ?</p><p><strong>Communication :</strong> As-tu été clair, cohérent et professionnel ?</p></div><p class="ped-close">S'il manque l'un de ces trois points, ou si le contenu ne répond pas à la question, l'intervieweur demande de préciser seulement ce point. S'ils sont clairs, il valide la réponse et passe à une autre question. La communication est toujours commentée : si tu as été clair, cohérent et professionnel.</p><p class="ped-soon">prochainement... <strong>Expression orale :</strong> tics de langage, pauses, rythme et durée de la réponse.</p>`,
      profesor: `<p>C'est un formateur de langage pour un cadre concret : l'entretien technique de logiciel. Il simule la conversation avec un professeur. Il corrige, explique une règle et poursuit l'entretien. L'élève pratique le langage de cette situation, pas une liste d'exercices détachée.</p>
<p>La même IA répond comme intervieweur et comme professeur. Le fil — la question, ce que cette question attend et le tour suivant — se construit dans cette IA à partir de la réponse de l'étudiant. Il y a trois pièces, et chacune s'enrichit dans son fichier :</p>
<ul>
<li><strong>Motorg</strong> (<code>motorg.js</code>, <code>motorg-es.js</code>, <code>motorg-fr.js</code>). En pause, comme la logique floue. Les fichiers restent dans le dépôt et ne décident pas du tour.</li>
<li><strong>Skill</strong> (<code>skill.js</code>). Il demande à l'IA d'être experte du poste et professeure de grammaire : elle explique comment améliorer la réponse, demande de préciser un aspect ou, si la réponse tient déjà, la valide et continue.</li>
<li><strong>Modc</strong> (<code>modc.js</code>). Il porte cette instruction à l'IA et renvoie le feedback et la question suivante.</li>
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
      intencion: `<p>L'intention communicative est le contexte de l'entretien dans le domaine que vous avez choisi. Ingénierie, centre d'appels, restaurant, magasin, hôtel, soins, bureau, livraison, enseignement ou vente changent les thèmes. Les questions avec lesquelles l'intervieweur comprend une réponse restent les mêmes.</p>
<ul>
<li><strong>Quoi</strong> s'est passé ou qu'est-ce qui a été fait.</li>
<li><strong>Comment</strong> cela a été fait.</li>
<li><strong>Quand</strong> cela s'est produit, avec le temps que cette question demande.</li>
<li><strong>Où</strong>, ou dans quelle partie du travail.</li>
<li><strong>Pourquoi</strong>, la cause.</li>
<li><strong>Pour quoi</strong>, l'effet recherché.</li>
</ul>
<p>Une phrase peut avoir le bon temps et ne pas dire encore ce qui a été fait, où ni pourquoi. L'intervieweur demande de préciser seulement ce point. Si le contexte est déjà clair et que le temps est cohérent avec la question, la réponse est validée et l'entretien passe à une autre.</p>`,
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
