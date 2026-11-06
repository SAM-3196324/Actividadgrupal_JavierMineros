# Informe de QA — HUB 3DS·A v1.0

**Fecha de revisión local:** 5 de noviembre de 2026 (UTC−06:00)

**Entorno:** Windows, servidor local `http://localhost:8765/hub-3ds-a/` y navegador integrado con Playwright.
**Alcance:** comprobaciones de contenido, interacciones, evidencias y responsive de la implementación local. No certifica la publicación de GitHub Pages ni sustituye las pruebas del equipo en dispositivos reales.

## Resultados ejecutados

| Área | Resultado |
|---|---|
| Datos | 9 módulos; cada uno tiene 3 preguntas de 4 opciones y explicación. |
| Catálogo tecnológico | 53 tarjetas en 11 categorías. |
| Recursos | 27 URL externas únicas comprobadas por HTTP; las 27 respondieron con estado 200 en esta revisión. |
| GitHub Pages | La URL pública respondió con HTTP 200, pero el título observado fue «HUB 3DS·A» y no identificó la v1.0 local; no se considera prueba de que los cambios locales estén publicados. |
| Evidencias | Se abrieron las 9 galerías; las 14 imágenes configuradas cargaron con texto alternativo. |
| Búsqueda y filtros | La búsqueda sin tilde «conversacion en ingles» encontró BTVDS 3.6; el filtro «Por confirmar» no muestra módulos y el filtro «Inglés técnico», 1. |
| Responsive | Se comprobaron 360, 390, 700, 701, 768, 850, 851, 900, 920, 921, 1024 y 1440 px. No hubo desbordamiento horizontal en ninguno. |
| Menú | El botón colapsable funcionó a 768 px, no generó desbordamiento y cerró el menú al seguir un enlace. En anchos de 701 a 920 px se usa el menú compacto. |
| Quizzes | La práctica general se completó con 27/27 y el quiz de BTVDS 3.3 con 3/3. Se comprobó la retroalimentación y el guardado independiente del mejor puntaje. En una prueba temporal de BTVDS 3.0, la secuencia 0/3 → 3/3 → 0/3 conservó 3/3 como mejor resultado. El estado de almacenamiento usado por la prueba se restauró al terminar. |
| Autoevaluaciones | El formulario de Daniela guardó una respuesta temporal, la recuperó tras recargar y se restauró el estado previo del navegador de prueba. |
| Consola | En una carga limpia no se observaron errores de consola ni errores de página. |
| Sintaxis y formato | `node --check` para `js/app.js` y `js/modulos.js`, y `git diff --check`, sin errores. |

Los resultados de quizzes y formularios son pruebas técnicas realizadas en el navegador de revisión; no representan calificaciones ni autoevaluaciones reales del equipo.

## Accesibilidad revisada parcialmente

- Navegación con nombre accesible, botón de menú con `aria-expanded`/`aria-controls` y cierre tras seleccionar un enlace.
- Enlace para saltar al contenido, estados de foco visibles, etiquetas en controles y texto alternativo en las evidencias.
- El quiz anuncia la retroalimentación y el resultado mediante regiones de estado.
- El tema respeta la preferencia del sistema en la primera visita y permite guardar la selección manual.

Esta inspección funcional no es una auditoría completa WCAG: falta probar con lector de pantalla y completar Lighthouse.

## Pendientes antes de declarar la entrega final

- [ ] Ejecutar Lighthouse en las vistas Desktop y Mobile; guardar el informe real, la fecha y la URL medida. No inventar puntuaciones.
- [ ] Abrir la página publicada en un teléfono físico, revisar los nueve módulos, el menú, las galerías, el carrusel y los formularios.
- [ ] Confirmar que GitHub Pages muestra el commit previsto después de publicar esta revisión.
- [ ] Obtener y registrar autorización para la fotografía grupal de `img/Innovador.jpeg`, o retirarla de la publicación.
- [ ] Completar las rondas, comentarios y revisión cruzada de Feria; registrar los resultados reales en [`Feria-checklist.md`](Feria-checklist.md).

## Cómo ejecutar Lighthouse

1. Inicia el sitio en local o utiliza la URL pública cuando el commit de esta versión ya esté desplegado.
2. En Chrome o Edge, abre las herramientas de desarrollo y selecciona **Lighthouse**.
3. Genera informes separados para **Desktop** y **Mobile**, con las categorías que solicita la guía del proyecto.
4. Guarda los informes originales en `docs/evidencias/` y anota en esta página la fecha, la URL, el navegador y las puntuaciones obtenidas. Repite la medición después de cualquier cambio relevante.

No se ha instalado ni ejecutado Lighthouse en esta revisión.
