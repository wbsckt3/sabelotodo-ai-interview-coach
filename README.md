# Sabelotodo AI · Interview Coach

Entrenador de entrevistas en español, inglés y francés. La página vive en GitHub Pages. Groq no se llama desde el navegador: cada pregunta la recibe `modc.js`, y ese proceso es el único que usa la clave.

## Sitio

https://wbsckt3.github.io/sabelotodo-ai-interview-coach/

## Encender Groq para probar

GitHub Pages no puede ejecutar Node. El workflow **Servidor del coach (Groq)** lo enciende en un runner de GitHub, fuera del computador local, y publica una dirección temporal en `server.json`. La página lee esa dirección y le manda cada pregunta. Al terminar el tiempo, la dirección se borra.

1. En el repositorio: **Settings → Secrets and variables → Actions → New repository secret**.
2. Nombre: `GROQ_API_KEY`. Valor: la clave de Groq. No la pongas en el código ni en este archivo.
3. **Actions → Servidor del coach (Groq) → Run workflow**. Elige los minutos (entre 5 y 180; por defecto 60).
4. Abre la ejecución en curso y busca en el registro la línea `SERVIDOR_LISTO`. No esperes a que el workflow termine: cuando termina, el servidor se apaga.
5. Recarga el sitio en cuanto veas esa línea. La página lee la dirección directo del repositorio, sin esperar a que el workflow termine. La primera pregunta sale sola.

Mientras el workflow está en marcha, esa dirección queda en el repositorio y cualquiera que la vea puede consumir la cuota de Groq. Por eso se apaga sola al acabar el tiempo.

## En local

```powershell
$env:GROQ_API_KEY = "tu clave"
node modc.js
```

Abre http://127.0.0.1:8787 . Ahí `server.json` trae `api` vacío y la página habla con el mismo origen.
