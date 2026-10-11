# Granada monumental

Guía web de Granada: monumentos con precios y horarios, avisos de cierres, tiempo, bares de tapeo, copas, restaurantes especiales, rutas temáticas y escapadas.

Web: https://mueblescarrascosa.github.io/granada/

- `index.html`: toda la guía (HTML, CSS y JavaScript en un solo fichero).
- `sw.js`: permite usarla sin conexión. Hay que subir su versión (`granada-vN`) en cada cambio.
- `comprobar.py`: prueba automática antes de publicar (`python3 comprobar.py index.html`; necesita Playwright).

Los datos se revisan solos cada lunes y jueves. Lo que cada persona marca (visitados, probados, plan) se guarda solo en su navegador.
