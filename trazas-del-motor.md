# Trazas del motor

Estas tres salidas ya no se muestran en `index.html`. El análisis sigue ejecutándose en cada turno y se envía a Groq. Aquí queda el contrato, tal como lo producía la página.

## 1. Motorg — análisis gramatical

Todavía no hay análisis hasta que el estudiante envía una respuesta. Entonces `analyzeGrammar` devuelve:

```json
{
  "input": "Yesterday I fix a bug in production.",
  "language": "en",
  "questionContext": "Tell me about a challenging bug you fixed in a previous project.",
  "findings": [
    {
      "type": "possible_tense_mismatch",
      "rule": "past_time_marker_simple_past",
      "observedForm": "fix",
      "suggestedForm": "fixed",
      "explanation": "El marcador temporal parece situar la acción en el pasado; revisa si corresponde usar simple past.",
      "confidence": 0.86
    }
  ],
  "overallStatus": "possible_issue",
  "confidence": 0.86,
  "suggestedCorrection": "Yesterday I fixed a bug in production.",
  "limitations": [
    "Reglas heurísticas; no equivalen a un análisis sintáctico completo.",
    "No se debe declarar incorrecta una frase solo porque una regla no la reconoce.",
    "El modelo conversacional debe validar el contexto."
  ]
}
```

Si no hay texto, `overallStatus` es `empty`. Si ninguna regla aplica, `overallStatus` es `no_rule_matched` y `confidence` es `0.35`. La regla del condicional real, cuando aparece `if … will`, usa `possible_conditional_mismatch` con `confidence` `0.78`.

## 2. Skill — contexto pedagógico

Todavía no se ha construido el contexto hasta el envío. Entonces `buildPedagogicalContext` devuelve:

```json
{
  "contractVersion": "1.0",
  "userText": "Yesterday I fix a bug in production.",
  "learner": {
    "level": "intermediate",
    "explanationLanguage": "es"
  },
  "lesson": {
    "goal": "technical_software_interview",
    "scenario": "software_development_interview",
    "expectedGrammar": ["simple_past"]
  },
  "grammarAnalysis": {},
  "conversation": {
    "lastQuestion": "Tell me about a challenging bug you fixed in a previous project.",
    "nextAction": "correct_and_continue"
  },
  "pedagogicalPolicy": {
    "responseOrder": [
      "acknowledge",
      "correct_only_material_errors",
      "explain_one_rule",
      "give_one_short_example_if_useful",
      "ask_one_relevant_follow_up_question"
    ],
    "preserveMeaning": true,
    "avoidOverCorrection": true,
    "encourageLearner": true,
    "explainUncertainty": true,
    "targetLanguage": "English",
    "allowBriefNativeLanguageExplanation": true,
    "neverInventLearnerHistory": true
  }
}
```

`grammarAnalysis` es el objeto completo de Motorg. `expectedGrammar` sale de la pregunta vigente: `simple_past`, `first_conditional`, o `context_appropriate_tense` y `clear_technical_communication`.

## 3. Modc / Groq — respuesta

Todavía no hay respuesta hasta que Groq contesta. El contenido llega en `reply` y debe ser un JSON con estas tres claves:

```json
{
  "feedback_es": "Explicación breve en el idioma de explicación.",
  "suggestion_en": "Yesterday I fixed a bug in production.",
  "interviewer_en": "What did you do to find the cause of that bug?"
}
```

La página no muestra este JSON. Parte `feedback_es` y `suggestion_en` en el campo Feedback, y sustituye el campo Entrevistador con `interviewer_en`.

## 4. Motores gramaticales y su función respecto al skill

Los motores son `motorg.js`, `motorg-es.js` y `motorg-fr.js`; el skill es `skill.js`.

**Qué pasa ahora a la IA en cada turno:**
- **Análisis verbal:** tiempo, aspecto, modo, modalidad, polaridad y agencia.
- **Seis dimensiones** (qué, cómo, cuándo, dónde, por qué, para qué), separando lo literal de lo inferido. Si falta información queda como `sin_evidencia`; el motor no inventa contexto. Ironía y metáfora quedan marcadas como no detectables.
- **Hipótesis difusas** con reglas «SI… Y… ENTONCES». Los grados son pertenencia, no probabilidad. Si la mejor hipótesis queda por debajo de 0.5 o le saca menos de 0.15 a la segunda, el motor responde `evidencia_insuficiente`.
- **Puntuación** S = 0.35G + 0.25C + 0.25V + 0.15P: gramática, coherencia con la pregunta, ajuste del tiempo verbal al objetivo de la pregunta y pertinencia.
- **Decisión pedagógica determinista en el skill**, que la IA debe seguir: abrir, corregir una regla, aclarar, corregir el tiempo, subir la dificultad o continuar.

**Resultados de la prueba con 15 frases en los tres idiomas:**
- «¿Puedes cerrar la puerta?», «Could you send…?» y «Pourriez-vous fermer…?» salen como petición 0.95, pregunta literal 0.42 y consulta de capacidad 0.22. El orden es el del ejemplo; la petición da 0.95 y no 0.88 porque «la puerta» cuenta como contexto.
- «Entregas / Entregarás / Te dije que entregaras» no se resuelven: el motor se abstiene, porque sin contexto son ambiguas.
- «Ayer arreglo… / Yesterday I fix… / Hier je corrige…» pasan a «corregir regla», con el pretérito, el pasado simple o el passé composé como objetivo.
- Las respuestas bien construidas (presente continuo, futuro con «will» o «aller», presente perfecto) pasan a «subir dificultad».

**Errores encontrados en la prueba y corregidos:**
- En español, «arreglo» se leía como pasado porque al quitar acentos coincide con «arregló».
- En español y francés, el tiempo de la frase ahora sale del primer verbo, el de la oración principal. Antes se tomaba «falló» en «Ayer arreglo… porque falló».
- En inglés, «I have fixed it yesterday» ya no sugiere «I had fixed». Ahora solo se aplica la regla de presente perfecto con tiempo cerrado.
- En francés, «Pourriez-vous» no se reconocía como verbo por el guion.
- Las peticiones sueltas, sin pregunta del entrevistador, ya no se penalizan en coherencia ni disparan «corregir tiempo» cuando no se reconoce ningún verbo.
- Una pregunta en presente perfecto ahora espera que el estudiante informe, no que explique.

Cada turno envía unos 4 000 caracteres de datos y unos 3 700 de instrucciones, aproximadamente 2 000 tokens de entrada. Cabe con holgura en el límite de 6 000 tokens por minuto de Groq.

## 5. Skill - tipos de entrevista

El skill define el juego de la entrevista: qué puesto se simula, con qué tono y sobre qué temas. Los motores gramaticales siguen siendo la referencia de las reglas del idioma; el tiempo verbal lo sigue fijando cada pregunta.

**Catálogo.** `skill.js` exporta `INTERVIEW_TYPES`, `DEFAULT_INTERVIEW_TYPE` e `interviewTypeOf(id)`. Hay diez tipos:

- Ingeniero/a de software (técnica) - `software_engineer`, el predeterminado.
- Agente de call center (informal) - `call_center`.
- Mesero/a de restaurante - `restaurant_waiter`.
- Vendedor/a de tienda (retail) - `retail_sales`.
- Recepcionista de hotel - `hotel_receptionist`.
- Enfermero/a - `nurse`.
- Asistente administrativo/a - `administrative_assistant`.
- Repartidor/a o conductor/a - `delivery_driver`.
- Docente - `teacher`.
- Ejecutivo/a de ventas - `sales_executive`.

Cada tipo trae:

- `label`: el texto del selector.
- `role`: el puesto, en inglés, para la IA.
- `register`: el tono. Técnico y formal para software; informal y cercano para call center; práctico para mesero.
- `topics`: los temas típicos del puesto.
- `openings`: 4 o 5 ideas de pregunta de apertura. El front elige una al azar.
- `terms`: palabras del puesto en inglés, español y francés.

**Qué hace cada pieza con el tipo:**

- **Front (`index.html`).** Llena el selector «Tipo de entrevista» desde el catálogo. Cambiarlo abre otra conversación con una pregunta nueva de ese puesto, igual que cambiar el idioma a aprender. La conversación guardada en el navegador registra el tipo.
- **Skill (`buildPedagogicalContext`).** Pone en `lesson` el `goal` (identificador del tipo), `interviewType` (su nombre) y `scenario`. Un identificador desconocido cae en `software_engineer`.
- **Skill (`buildSystemPrompt`).** Arma las instrucciones de apertura y de respuesta con el puesto, el registro y los temas del tipo, y pide a la IA no salirse de ese tipo de entrevista. El servidor construye este texto desde el catálogo usando solo el identificador; no usa texto libre del navegador.
- **Motores (`analyzeGrammar`).** Reciben `domainTerms` (las palabras del puesto en el idioma a aprender) y `domainLabel`. Con ellas calculan la pertinencia P y la dimensión «dónde». Ejemplo: «Yesterday a customer called me… on the phone» da P = 0.95 como call center y 0.80 como software.

**Límite.** El léxico de verbos de los motores está pensado para software. En otros puestos el motor detecta menos errores: en «Yesterday… I calm him» no marca «calm», porque ese verbo no está en la lista. Ahí corrige la IA, que es la autoridad gramatical. Ampliar el léxico de verbos por puesto en los tres motores es el siguiente paso natural.

**Arranque.** El servidor carga `skill.js` al iniciar, así que un cambio en el catálogo exige reiniciar `node modc.js`.
