window.MODULOS = [
  {
    id: "sql-server-velvetheel",
    titulo: "Bases de datos avanzadas",
    area: "Datos",
    color: "cyan",
    resumen: "Diseñamos la base de datos de VelvetHeel y practicamos consultas, relaciones y tareas de administración en SQL Server.",
    aprendizajes: ["Modelar tablas relacionadas para una empresa simulada.", "Crear consultas, funciones y procedimientos almacenados.", "Preparar respaldos y tareas programadas de mantenimiento."],
    responsable: "Samuel Eliseo Mendoza Gonzalez",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["SQL Server", "SQL Server Management Studio"],
    herramientas: ["SQL", "Tablas relacionales", "Procedimientos almacenados", "Backups"],
    instrumentos: ["Prácticas guiadas de bases de datos", "Ejercicios de consultas y relaciones", "Revisión del proyecto VelvetHeel"],
    evidencias: ["Base de datos de la empresa simulada VelvetHeel", "Consultas, procedimientos y funciones", "Respaldo automatizado programado"],
    recursos: [{nombre:"Documentación de SQL Server", url:"https://learn.microsoft.com/es-es/sql/sql-server/?view=sql-server-ver16"}],
    quiz: [
      {pregunta:"¿Qué permite expresar un modelo relacional?", opciones:["Relaciones entre tablas mediante claves","Estilos de una página web","Eventos de una interfaz"], respuesta:0},
      {pregunta:"¿Para qué se usa un procedimiento almacenado?", opciones:["Guardar y ejecutar instrucciones SQL en el servidor","Dibujar gráficas en el navegador","Instalar SQL Server"], respuesta:0},
      {pregunta:"¿Cuál es el propósito de un backup?", opciones:["Conservar una copia recuperable de los datos","Cambiar el tipo de letra de una consulta","Crear una tabla temporal"], respuesta:0}
    ]
  },
  {
    id: "power-bi-wikipedia",
    titulo: "Business Intelligence y análisis",
    area: "Datos",
    color: "amber",
    resumen: "Importamos y analizamos datos de Excel y SQL Server con Power BI; también exploramos la extracción de información de páginas de Wikipedia.",
    aprendizajes: ["Importar y preparar datos de distintas fuentes.", "Elegir visualizaciones según la pregunta que se quiere responder.", "Aplicar filtros para explorar patrones y métricas."],
    responsable: "Daniela Yamileth Rodriguez Zepeda",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["Power BI", "Microsoft Excel"],
    herramientas: ["Filtros", "Visualizaciones", "Modelado de datos", "Web scraping"],
    instrumentos: ["Prácticas de importación de datos", "Ejercicios de filtros y gráficos", "Análisis de información extraída de Wikipedia"],
    evidencias: ["Reporte interactivo con filtros", "Gráficos de datos seleccionados", "Conjunto de datos explorado desde Wikipedia"],
    recursos: [{nombre:"Aprender Power BI", url:"https://learn.microsoft.com/es-es/training/powerplatform/power-bi/"}],
    quiz: [
      {pregunta:"¿Qué ayuda a hacer un filtro en un reporte?", opciones:["Restringir los datos visibles según un criterio","Borrar la fuente original","Cambiar la contraseña de la base"], respuesta:0},
      {pregunta:"¿Qué conviene hacer antes de elegir una gráfica?", opciones:["Definir qué comparación o patrón se quiere mostrar","Elegir el color favorito","Ocultar los valores"], respuesta:0},
      {pregunta:"¿Qué es una fuente de datos para Power BI?", opciones:["Un origen desde el cual se importan datos","Un tipo de animación","Un formato de imagen"], respuesta:0}
    ]
  },
  {
    id: "desarrollo-escritorio-dotnet",
    titulo: "Aplicaciones de escritorio con .NET",
    area: "Desarrollo",
    color: "magenta",
    resumen: "Diseñamos primero en papel un control de notas y llevamos su lógica a Windows Forms; después conocimos WPF y Avalonia UI.",
    aprendizajes: ["Planificar una interfaz antes de programarla.", "Conectar controles visuales con lógica de aplicación.", "Comparar distintos enfoques para crear interfaces de escritorio."],
    responsable: "Samuel Eliseo Mendoza Gonzalez",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["Visual Studio Community"],
    herramientas: ["C#", "Windows Forms", "WPF", "Avalonia UI"],
    instrumentos: ["Diseño de interfaz en cuaderno", "Ejercicio práctico de control de notas", "Comparación de frameworks de escritorio"],
    evidencias: ["Prototipo del control de notas", "Aplicación de escritorio con interacción", "Prácticas de exploración de WPF y Avalonia"],
    recursos: [{nombre:"Documentación de .NET", url:"https://learn.microsoft.com/es-es/dotnet/"}],
    quiz: [
      {pregunta:"¿Qué conviene realizar antes de implementar una interfaz?", opciones:["Planificar su estructura y flujo","Borrar los requisitos","Publicar sin probar"], respuesta:0},
      {pregunta:"¿Cuál de estas tecnologías se usa para interfaces de escritorio en .NET?", opciones:["Windows Forms","SQLite","Power BI"], respuesta:0},
      {pregunta:"¿Qué representa un evento en una aplicación visual?", opciones:["Una acción que la interfaz puede responder","Una copia de seguridad","Una consulta SQL"], respuesta:0}
    ]
  },
  {
    id: "python-sqlite",
    titulo: "Python y SQLite",
    area: "Desarrollo",
    color: "green",
    resumen: "Repasamos fundamentos de Python, lógica, programación orientada a objetos y almacenamiento local con SQLite.",
    aprendizajes: ["Usar variables, condicionales y bucles.", "Organizar código con funciones, módulos y conceptos de POO.", "Comprender el uso de SQLite para almacenar información."],
    responsable: "Marcela Abigail Mata Escobar",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["Python", "Visual Studio Code"],
    herramientas: ["Variables y tipos", "Condicionales", "Bucles", "POO", "SQLite"],
    instrumentos: ["Ejercicios de lógica y sumatorias", "Prácticas de condicionales y bucles", "Comparación de lenguajes y herramientas"],
    evidencias: ["Ejercicios de Python", "Prácticas con librerías y POO", "Ejemplo de almacenamiento con SQLite"],
    recursos: [{nombre:"Tutorial oficial de Python", url:"https://docs.python.org/es/3/tutorial/"}],
    quiz: [
      {pregunta:"¿Qué estructura permite repetir instrucciones mientras se cumpla una condición?", opciones:["Bucle","Etiqueta HTML","Clave primaria"], respuesta:0},
      {pregunta:"¿Qué es una clase en programación orientada a objetos?", opciones:["Una plantilla para crear objetos","Una consulta de selección","Un tipo de gráfico"], respuesta:0},
      {pregunta:"¿Para qué puede usarse SQLite?", opciones:["Guardar datos en una base local","Diseñar una página con CSS","Compilar C#"], respuesta:0}
    ]
  },
  {
    id: "php-mysql",
    titulo: "Programación web con PHP y MySQL",
    area: "Desarrollo",
    color: "cyan",
    resumen: "Trabajamos con un entorno local XAMPP, formularios y operaciones CRUD para conectar aplicaciones web con MySQL.",
    aprendizajes: ["Levantar un entorno local para desarrollar con PHP.", "Conectar formularios y lógica del servidor con una base de datos.", "Organizar una aplicación por capas y usar sesiones."],
    responsable: "Marcela Abigail Mata Escobar",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["XAMPP", "Visual Studio Code"],
    herramientas: ["PHP", "MySQL", "PDO", "Formularios", "CRUD", "Sesiones"],
    instrumentos: ["Práctica de entorno local y formularios", "Ejercicio CRUD", "Refactor de estructura de proyecto"],
    evidencias: ["Formulario PHP ejecutado localmente", "Gestor de productos CRUD", "Ejercicio de autenticación y sesiones"],
    recursos: [{nombre:"Manual de PHP", url:"https://www.php.net/manual/es/"},{nombre:"Documentación MySQL", url:"https://dev.mysql.com/doc/"}],
    quiz: [
      {pregunta:"¿Qué significa CRUD?", opciones:["Crear, leer, actualizar y eliminar","Copiar, reiniciar, usar y descargar","Conectar, renderizar, unir y depurar"], respuesta:0},
      {pregunta:"¿Qué papel cumple MySQL en una aplicación PHP?", opciones:["Almacenar y consultar datos","Estilizar los botones","Servir como navegador"], respuesta:0},
      {pregunta:"¿Para qué se usan las sesiones en una aplicación?", opciones:["Mantener estado asociado a la interacción de un usuario","Crear una hoja de estilos","Exportar una gráfica"], respuesta:0}
    ]
  },
  {
    id: "soporte-ingles",
    titulo: "Soporte técnico e inglés técnico",
    area: "Soporte e inglés",
    color: "amber",
    resumen: "Identificamos componentes de computadoras y laptops, practicamos mantenimiento y redactamos reportes y diálogos de atención en inglés.",
    aprendizajes: ["Reconocer CPU, memoria RAM y almacenamiento.", "Describir componentes y sus funciones en inglés técnico.", "Simular una conversación entre cliente y personal técnico."],
    responsable: "Nestor Eduardo Deodanes Martinez",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["Herramientas de diagnóstico del sistema"],
    herramientas: ["Mantenimiento preventivo", "Identificación de hardware", "Vocabulario técnico en inglés", "Reportes de diagnóstico"],
    instrumentos: ["Práctica de limpieza y despiece", "Reporte de componentes de una laptop", "Guion de atención técnica en inglés"],
    evidencias: ["Inventario de componentes de un equipo", "Reporte técnico en inglés", "Simulación de atención a un cliente"],
    recursos: [{nombre:"Glosario de hardware (Cisco)", url:"https://www.cisco.com/c/en/us/products/computing/what-is-computer-hardware.html"}],
    quiz: [
      {pregunta:"¿Qué función cumple la memoria RAM?", opciones:["Mantiene temporalmente datos de trabajo en uso","Almacena permanentemente todos los archivos","Enfría el procesador"], respuesta:0},
      {pregunta:"¿Qué información debe incluir un reporte técnico?", opciones:["Síntoma, diagnóstico y acciones realizadas","Solo el nombre del cliente","Únicamente una opinión"], respuesta:0},
      {pregunta:"¿Qué se debe hacer antes de abrir un equipo para mantenimiento?", opciones:["Seguir medidas de seguridad y desconectar la alimentación","Aumentar el volumen","Abrir todos los programas"], respuesta:0}
    ]
  },
  {
    id: "innovacion-iot",
    titulo: "Innovación e Internet de las cosas",
    area: "Innovación",
    color: "magenta",
    resumen: "Creamos prototipos para la Feria de Logros: un auto controlado con gestos mediante un guante y una experiencia de señas/dibujo usando cámara.",
    aprendizajes: ["Relacionar sensores y actuadores con una solución a un problema.", "Diseñar una interacción basada en gestos.", "Probar y presentar un prototipo tecnológico."],
    responsable: "Nestor Eduardo Deodanes Martinez",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["Arduino IDE", "Herramientas de cámara y visión por computadora"],
    herramientas: ["Arduino", "Sensores de gestos", "Cámara web", "Visión por computadora"],
    instrumentos: ["Diseño y pruebas del prototipo", "Revisión de funcionamiento", "Presentación en Feria de Logros"],
    evidencias: ["Auto controlado por gestos desde un guante", "Prototipo de interacción de señas por cámara", "Reflexión de la Feria de Logros"],
    recursos: [{nombre:"Documentación oficial de Arduino", url:"https://docs.arduino.cc/"}],
    quiz: [
      {pregunta:"¿Qué es un sensor en un prototipo IoT?", opciones:["Un componente que detecta una señal o cambio","Un tipo de documento","Una hoja de cálculo"], respuesta:0},
      {pregunta:"¿Qué elemento ejecuta una acción física en un circuito?", opciones:["Un actuador","Una consulta SQL","Un filtro de reporte"], respuesta:0},
      {pregunta:"¿Por qué se prueban los prototipos?", opciones:["Para observar su funcionamiento y detectar mejoras","Para evitar recoger evidencia","Para sustituir la documentación"], respuesta:0}
    ]
  },
  {
    id: "ia-copilot",
    titulo: "IA generativa y desarrollo asistido",
    area: "Innovación",
    color: "green",
    resumen: "Exploramos Google Studio IA y GitHub Copilot para crear ideas de aplicaciones y juegos, usando la IA como apoyo para aprender y construir.",
    aprendizajes: ["Convertir una idea en requisitos y una experiencia interactiva.", "Usar asistentes de IA para explorar alternativas y revisar código.", "Explicar y validar el resultado en lugar de aceptar sugerencias a ciegas."],
    responsable: "Daniela Yamileth Rodriguez Zepeda",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["Google Studio IA", "Visual Studio", "GitHub Copilot"],
    herramientas: ["Prompts", "Prototipado", "JavaScript", "Depuración asistida"],
    instrumentos: ["Diseño de aplicaciones de hábitos y tareas", "Pruebas de juegos interactivos", "Registro de prompts y reflexión"],
    evidencias: ["Prototipos de rachas y gestión de tareas", "Juegos de lógica: espejo, milpa y diferencias", "Explicación del código generado o sugerido"],
    recursos: [{nombre:"Documentación de GitHub Copilot", url:"https://docs.github.com/es/copilot"}],
    quiz: [
      {pregunta:"¿Cuál es una buena práctica al recibir una sugerencia de IA?", opciones:["Revisarla, probarla y entenderla","Publicarla sin leer","Asumir que siempre es correcta"], respuesta:0},
      {pregunta:"¿Qué hace que un prompt sea útil para programar?", opciones:["Explica el objetivo y el contexto con claridad","No describe el problema","Pide resultados contradictorios"], respuesta:0},
      {pregunta:"¿Qué se debe poder hacer con el código asistido?", opciones:["Explicarlo y verificar su comportamiento","Atribuirlo a una herramienta sin probarlo","Evitar cualquier prueba"], respuesta:0}
    ]
  },
  {
    id: "fundamentos-node-evaluacion",
    titulo: "Fundamentos web, Node.js y evaluación",
    area: "Desarrollo",
    color: "amber",
    resumen: "El recorrido incluyó HTML, CSS y JavaScript, primeros ejercicios de Node.js y una evaluación diagnóstica interactiva en Kahoot.",
    aprendizajes: ["Comprender la estructura semántica de una página y estilos responsive.", "Usar JavaScript para responder a eventos e interactuar con el DOM.", "Reconocer Node.js como entorno para ejecutar JavaScript fuera del navegador."],
    responsable: "Marcela Abigail Mata Escobar",
    docentes: ["Javier Mineros", "Arcides Canales"],
    programas: ["Visual Studio Code", "Node.js", "Kahoot"],
    herramientas: ["HTML5", "CSS", "JavaScript", "DOM", "Eventos"],
    instrumentos: ["Ejercicios de maquetación y lógica", "Prácticas iniciales con Node.js", "Prueba diagnóstica Kahoot"],
    evidencias: ["Páginas y ejercicios web", "Ejemplos de JavaScript y Node.js", "Resultados de repaso diagnóstico"],
    recursos: [{nombre:"MDN: HTML", url:"https://developer.mozilla.org/es/docs/Web/HTML"},{nombre:"Documentación de Node.js", url:"https://nodejs.org/docs/latest/api/"}],
    quiz: [
      {pregunta:"¿Para qué se usa HTML?", opciones:["Definir la estructura del contenido web","Consultar bases de datos por sí solo","Administrar memoria RAM"], respuesta:0},
      {pregunta:"¿Qué permite hacer JavaScript en el navegador?", opciones:["Responder a eventos y actualizar la interfaz","Reemplazar el sistema operativo","Crear una conexión física"], respuesta:0},
      {pregunta:"¿Qué es Node.js?", opciones:["Un entorno para ejecutar JavaScript fuera del navegador","Un lenguaje de marcado","Una base de datos relacional"], respuesta:0}
    ]
  }
];
