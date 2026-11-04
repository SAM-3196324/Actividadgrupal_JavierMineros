# HUB 3DS·A — Día 2 (Miércoles) · v0.5

Guía estática e interactiva de repaso para tercer año de Desarrollo de Software del INDEL. La versión v0.5 corresponde al Día 2 (miércoles) e incluye los módulos oficiales BTVDS 3.0 a BTVDS 3.8.

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
- `js/app.js`: render de módulos y tecnologías, búsqueda, filtros, carrusel, tema, progreso, autoevaluaciones y galería de evidencias.
- `js/modulos.js`: datos de los nueve módulos del Día 2, recursos, aprendizajes, instrumentos y evidencias.
- `js/tecnologias.js`: catálogo de tecnologías y conocimientos organizados en once categorías.
- `img/`: capturas, evidencias visuales y recursos gráficos del equipo.

## Funcionalidades

- Catálogo de tecnologías con tarjetas generadas desde datos, filtros por categoría, controles de navegación, indicadores y desplazamiento táctil o con ratón.
- Archivo de exactamente nueve módulos con búsqueda insensible a mayúsculas y tildes, filtro temático y filtro por docente.
- Fichas con código, nombre oficial, docentes, tres aprendizajes clave, programas, herramientas, instrumentos y recursos.
- Galería modal independiente por módulo; las imágenes existentes pueden ampliarse y los enlaces externos se abren de forma segura.
- Progreso de revisión guardado en `localStorage` con la clave `hub3dsa_dia2_v05_progress`; no modifica el progreso de otras versiones.
- Autoevaluaciones complementarias para practicar; no representan exámenes oficiales ni resultados académicos.
- Selector de tema claro/oscuro con paleta verde musgo, oro, blanco y carbón; ondas doradas translúcidas acompañan el desplazamiento y respetan la preferencia de movimiento reducido.

## Contenido académico

Los nombres de los módulos, códigos y docentes se basan en la información confirmada para el Día 2. Cuando un docente, instrumento, recurso o evidencia no está confirmado, la interfaz lo indica en lugar de asignar información por suposición.

Las evidencias se organizan por las etiquetas e imágenes compartidas por el equipo. Cada tarjeta incluye un botón **Evidencias** visible para abrir su galería correspondiente:

- **BTVDS 3.0:** resultados de Kahoot (`Kahoot.jpeg`).
- **BTVDS 3.1:** aplicación de gestión para mascotas (`Maui.png`), práctica Windows Forms y ejercicios de Python.
- **BTVDS 3.2:** documento sobre una plataforma web (`Sistema.jpeg`) y actividad práctica de soporte (`ComponentesPC.jpeg`).
- **BTVDS 3.3:** proyecto de base de datos VelvetHeel (`VelvetHeel.png`).
- **BTVDS 3.4:** formulario web y validación (`Informatica-public.png`).
- **BTVDS 3.5:** juego móvil de parejas (`Movil.png`).
- **BTVDS 3.6:** ficha bilingüe System Anatomy Map (`Ingles-public.png`).
- **BTVDS 3.7:** tienda virtual con XAMPP y reporte de Power BI (`Xampp.jpeg`, `PowerBi.jpeg`).
- **BTVDS 3.8:** presentación de innovación, prototipo Arduino y aplicación con Google Studio IA.

La asignación docente sigue la distribución indicada por el equipo: Francisco Arcides Canales Sorto imparte BTVDS 3.1, 3.2, 3.5 y 3.7; Javier Mineros, BTVDS 3.0, 3.3, 3.4, 3.6 y 3.8.

Las evidencias de BTVDS 3.4 y 3.6 utilizan copias que ocultan datos personales. Los originales `Informatica.png` e `Ingles.png` se conservan localmente, están excluidos por `img/.gitignore` y no deben añadirse al repositorio. La fotografía de `Innovador.jpeg` muestra integrantes del grupo; confirmar que cuentan con autorización para publicarla.

Las tecnologías, herramientas y conceptos solicitados por el equipo están centralizados en `js/tecnologias.js`. Cada entrada incluye nombre, categoría, marca tipográfica e introducción breve.

## Equipo y responsabilidades

- **Samuel Eliseo Mendoza Gonzalez** — Líder Git: repositorio, GitHub Pages e integración de versiones.
- **Daniela Yamileth Rodriguez Zepeda** — Diseñadora UI: identidad visual y estilos.
- **Marcela Abigail Mata Escobar** — Curadora de contenido: calidad de fichas y verificación de recursos.
- **Nestor Eduardo Deodanes Martinez** — QA y accesibilidad: pruebas y revisión cruzada.

## Publicación

El portal es estático y se publica en GitHub Pages. El `index.html` de la raíz del repositorio dirige a esta carpeta.

**GitHub Pages:** <https://sam-3196324.github.io/Actividadgrupal_JavierMineros/>

### Solución de problemas de evidencias

- Si una galería muestra un error de carga, comprueba que Live Server esté activo o vuelve a abrir la página; ahora puedes usar **Reintentar** en la galería.
- Verifica que cada archivo exista dentro de `img/` y que el nombre y las mayúsculas coincidan exactamente con `js/modulos.js`.
- GitHub Pages solo sirve archivos incluidos en el repositorio. Después de agregar evidencias o cambiar código, confirma que los cambios estén publicados y recarga la página sin caché.
