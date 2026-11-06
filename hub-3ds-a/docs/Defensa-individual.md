# Guía de defensa individual

Borradores para ensayar una explicación de **60–90 segundos** por integrante. Cada persona debe ajustar el texto a su experiencia y reemplazar los campos entre corchetes por una tarea que realmente haya realizado y pueda mostrar. No presentar el borrador como prueba de autoría.

## Samuel Eliseo Mendoza Gonzalez — Líder Git

> Mi responsabilidad en el equipo es coordinar el trabajo relacionado con Git, el repositorio y la integración del portal. Mi aporte concreto en esta versión fue **[describir una tarea realizada personalmente y señalar el commit o evidencia que la demuestra]**. El portal está organizado en HTML, CSS y JavaScript sin frameworks; la información de los nueve módulos está separada de la lógica que la presenta. Para explicar el control de versiones, mostraré **[un commit, una revisión o una tarea de integración real]** y cómo se verificó la rama de publicación. La etiqueta v1.0 se debe asignar solo cuando el equipo confirme la revisión y la publicación. En esta defensa puedo mostrar **[enlace o pantalla]** y explicar qué decisión tomé y qué aprendí.

## Daniela Yamileth Rodriguez Zepeda — Diseñadora UI

> Mi rol es trabajar la identidad visual y los estilos del portal. En la página se reconoce la identidad Velvet Romance en la paleta, la tipografía, las tarjetas y los modos claro y oscuro. Para esta defensa voy a explicar una decisión de diseño que realicé personalmente: **[indicar la decisión y mostrar el cambio o evidencia correspondiente]**. También explicaré cómo comprobé **[una interacción o ancho de pantalla realmente probado]** y qué ajusté a partir de esa comprobación. El portal debe conservar la jerarquía visual sin perder legibilidad en móvil; por eso conviene probar las secciones con teclado y en pantallas distintas. Si una prueba o ajuste no lo hice yo, lo presentaré como resultado del equipo y no como aporte individual.

## Marcela Abigail Mata Escobar — Curadora de contenido

> Mi responsabilidad es cuidar la calidad de las fichas y la verificación de recursos. El portal reúne nueve módulos y mantiene los datos en `js/modulos.js`, separados de la interfaz. En la revisión del contenido se distinguen los docentes confirmados de los que siguen por confirmar; tampoco se presenta una evidencia como prueba de una asignación docente. Mi contribución que puedo demostrar es **[describir la ficha, recurso o corrección que revisé y mostrar la fuente]**. También explicaré cómo contrasté **[un enlace o dato]** con una fuente verificable. Los textos de repaso ayudan a navegar los temas, pero no sustituyen las guías, apuntes ni las instrucciones oficiales del curso.

## Nestor Eduardo Deodanes Martinez — QA y accesibilidad

> Mi rol es revisar el portal y comunicar problemas de uso o accesibilidad. La revisión local de v1.0 cubrió nueve módulos, las galerías y distintos anchos de pantalla; el informe separa las pruebas ejecutadas de las que todavía faltan. Para mi defensa mostraré **[una prueba que realicé personalmente, el resultado observado y, si hubo un problema, cómo lo reporté]**. El menú compacto, los estados de foco, las etiquetas y los textos alternativos son aspectos verificables en la interfaz. Aún se debe completar la prueba en un teléfono físico, usar un lector de pantalla y ejecutar Lighthouse; no presentaré esas comprobaciones como realizadas. Mi siguiente paso es **[tarea de QA acordada]**.

## Preguntas para practicar

**¿Por qué se eligió HTML, CSS y JavaScript nativos?**

El portal es estático y debe ejecutarse sin un proceso de compilación en GitHub Pages; así se pueden abrir sus archivos directamente con Live Server.

**¿Dónde se guardan los datos de módulos?**

En `js/modulos.js`, separados del renderizado de `js/app.js`; cada tarjeta se construye a partir de esos datos.

**¿Cómo busca palabras con y sin tilde?**

El código normaliza el texto y elimina diacríticos antes de comparar la consulta con los datos.

**¿Qué se guarda cuando se marca progreso o se completa un quiz?**

Se usa `localStorage` del navegador. Los datos no se envían a un servidor y no se sincronizan automáticamente entre dispositivos o navegadores.

**¿Cómo se verificaron las asignaciones docentes?**

Se cotejaron con la distribución confirmada por el equipo y las asignaciones documentadas previamente. Las evidencias visuales por sí solas no se utilizaron para atribuir un módulo a un docente.

**¿Cómo protegen los datos personales en las evidencias?**

Las copias públicas de BTVDS 3.4 y 3.6 ocultan información personal. Los originales `Informatica.png` e `Ingles.png` están excluidos del repositorio. La foto grupal de BTVDS 3.8 requiere autorización antes de publicarse.

**¿La página funciona sin conexión?**

No se garantiza uso completamente offline: las tipografías cargan desde Google Fonts y los enlaces de recursos son externos. Las evidencias están dentro del proyecto.

**¿Qué queda pendiente para certificar la entrega?**

Lighthouse, teléfono físico, autorización de la fotografía grupal, confirmación de docentes, revisión de Feria y comprobación del despliegue final de Pages.
