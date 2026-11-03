# HUB 3DS·A — Portal educativo

Portal educativo estático del 3.º de Desarrollo de Software «A» del Instituto Nacional Cantón Lourdes (INDEL). Reúne módulos, herramientas, evidencias y proyectos del recorrido técnico anual en una experiencia editorial adaptable.

## Ejecutar localmente

1. Abre la carpeta `hub-3ds-a` en Visual Studio Code.
2. Inicia `index.html` con la extensión Live Server.

El proyecto utiliza HTML, CSS y JavaScript nativos, sin frameworks ni pasos de compilación.

## Estructura

```text
hub-3ds-a/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── modulos.js
│   └── tecnologias.js
├── img/
└── README.md
```

- `index.html`: portada y estructura semántica del portal.
- `css/styles.css`: identidad visual Velvet Romance, tema claro/oscuro y estilos responsive.
- `js/app.js`: render de módulos y tecnologías, filtros, carrusel, tema, progreso, quizzes y evidencias.
- `js/modulos.js`: información académica, herramientas, recursos, instrumentos, evidencias y quizzes de cada módulo.
- `js/tecnologias.js`: catálogo de tecnologías y conocimientos organizados en once categorías.
- `img/`: capturas, evidencias visuales y recursos gráficos del equipo.

## Funcionalidades

- Catálogo de tecnologías con tarjetas generadas desde datos, filtros por categoría, controles de navegación, indicadores y desplazamiento táctil o con ratón.
- Archivo de módulos con búsqueda y filtros por área e integrante.
- Fichas con resumen, aprendizajes, programas, herramientas, instrumentos, evidencias, recursos y cuestionarios.
- Botón «Evidencias» en cada módulo y galería preparada para incorporar capturas en `img/`.
- Progreso de revisión y resultados de cuestionarios guardados en el almacenamiento local del navegador.
- Selector de tema claro/oscuro, navegación adaptable y animaciones que respetan la preferencia de movimiento reducido.

## Contenido académico

El portal recorre bases de datos y el proyecto VelvetHeel; Power BI y análisis de información; aplicaciones de escritorio con C# y .NET; Python, SQLite, PHP y MySQL; fundamentos web y Node.js; soporte técnico e inglés; proyectos de innovación IoT; inteligencia artificial y desarrollo asistido; comercio electrónico; metodologías ágiles y modelado UML.

Las tecnologías, herramientas y conceptos solicitados por el equipo están centralizados en `js/tecnologias.js`. Cada entrada incluye nombre, categoría, marca tipográfica e introducción breve.

## Equipo y responsabilidades

- **Samuel Eliseo Mendoza Gonzalez** — Líder Git: repositorio, GitHub Pages e integración de versiones.
- **Daniela Yamileth Rodriguez Zepeda** — Diseñadora UI: identidad visual y estilos.
- **Marcela Abigail Mata Escobar** — Curadora de contenido: calidad de fichas y verificación de recursos.
- **Nestor Eduardo Deodanes Martinez** — QA y accesibilidad: pruebas y revisión cruzada.

## Publicación

El portal es estático y puede desplegarse en GitHub Pages. Como esta carpeta está dentro de la raíz del repositorio, configura GitHub Pages para publicar `hub-3ds-a/` mediante un flujo de GitHub Actions o copia el contenido de esta carpeta a la raíz o a `/docs`, según la fuente de publicación elegida. Después de publicar, agrega aquí la URL pública:

**GitHub Pages:** pendiente de configurar.
