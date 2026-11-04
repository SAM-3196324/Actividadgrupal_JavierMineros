window.MODULOS = [
  {
    id: "btvds-3-0",
    codigo: "BTVDS 3.0",
    nombre: "Orientación al estudiante al proceso educativo",
    categoria: "Orientación",
    docente: ["Javier Mineros"],
    resumen: "Repaso de la orientación y el proceso educativo mediante una actividad diagnóstica en Kahoot. La evidencia muestra los resultados de participación; sirve como punto de partida para reconocer conocimientos previos.",
    aprendizajesClave: [
      "Identificar el propósito y las etapas del proceso educativo correspondiente al módulo.",
      "Reconocer los recursos y apoyos necesarios para organizar el aprendizaje.",
      "Relacionar la participación responsable con el avance del proceso formativo."
    ],
    instrumentos: [
      { nombre: "Actividad diagnóstica en Kahoot", descripcion: "Revisión participativa de conocimientos previos y de los resultados obtenidos." }
    ],
    programas: ["Kahoot"],
    herramientas: ["Evaluación diagnóstica", "Participación y seguimiento del aprendizaje"],
    recursos: [
      { titulo: "Ministerio de Educación, Ciencia y Tecnología de El Salvador", url: "https://www.mined.gob.sv/", tipo: "institucional", descripcion: "Portal institucional para consultar información y recursos educativos oficiales." }
    ],
    evidencias: [
      { titulo: "Resultados de la actividad en Kahoot", descripcion: "Captura de la clasificación y los resultados de la actividad diagnóstica.", tipo: "imagen", ruta: "img/Kahoot.jpeg", alt: "Pantalla de resultados de una actividad diagnóstica en Kahoot con la clasificación de participantes." }
    ],
    quiz: [
      { pregunta: "¿Qué conviene hacer al iniciar un proceso de aprendizaje?", opciones: ["Identificar objetivos y recursos disponibles", "Omitir las instrucciones", "Evitar revisar el avance"], respuesta: 0 },
      { pregunta: "¿Para qué sirve revisar el progreso de aprendizaje?", opciones: ["Reconocer avances y necesidades de apoyo", "Sustituir todos los objetivos", "Evitar la planificación"], respuesta: 0 },
      { pregunta: "¿Qué acción favorece la participación responsable?", opciones: ["Consultar y utilizar los recursos de apoyo", "Ignorar las indicaciones", "Dejar de comunicar dificultades"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-1",
    codigo: "BTVDS 3.1",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    categoria: "Desarrollo de software",
    docente: ["Francisco Arcides Canales Sorto"],
    resumen: "Desarrollo de aplicaciones para resolver necesidades concretas, con una evidencia de una aplicación de gestión para una tienda de mascotas. Su menú organiza registros, citas, inventario e historial; también se relaciona con prácticas de escritorio y fundamentos de Python.",
    aprendizajesClave: [
      "Analizar una necesidad para delimitar el problema que una aplicación debe atender.",
      "Organizar la solución en componentes y describir el comportamiento esperado.",
      "Probar una aplicación y revisar sus resultados frente al problema planteado."
    ],
    instrumentos: [
      { nombre: "Análisis de una necesidad y propuesta de solución", descripcion: "Práctica de repaso para relacionar las funciones de una aplicación con el problema que busca resolver." },
      { nombre: "Revisión funcional de la aplicación", descripcion: "Comprobar el flujo de pantallas, entradas y resultados de las prácticas disponibles." }
    ],
    programas: [".NET MAUI", "Visual Studio", "Visual Studio Code"],
    herramientas: ["C#", "Desarrollo de aplicaciones", "Análisis de problemas", "CRUD", "Python"],
    recursos: [
      { titulo: "MDN: aprendizaje del desarrollo web", url: "https://developer.mozilla.org/es/docs/Learn_web_development", tipo: "documentacion", descripcion: "Material de referencia para comprender conceptos y tecnologías de desarrollo web." }
    ],
    evidencias: [
      { titulo: "Aplicación de gestión para una tienda de mascotas", descripcion: "Menú de la aplicación Great Pets con accesos a registros, citas, inventario e historial.", tipo: "imagen", ruta: "img/Maui.png", alt: "Menú de una aplicación de gestión para una tienda de mascotas con opciones de registros, citas, inventario e historial." },
      { titulo: "Aplicación de escritorio con Windows Forms", descripcion: "Captura de una aplicación de práctica para el cálculo de notas.", tipo: "imagen", ruta: "img/WindowsForm.jpeg", alt: "Aplicación Windows Forms para calcular notas de un estudiante." },
      { titulo: "Práctica inicial de Python", descripcion: "Captura de un ejercicio con variables y operaciones básicas.", tipo: "imagen", ruta: "img/Python.jpeg", alt: "Código de una práctica inicial de Python con variables y operaciones básicas." }
    ],
    quiz: [
      { pregunta: "¿Qué debe identificarse antes de diseñar una aplicación?", opciones: ["La necesidad y el problema que se busca resolver", "El color final de cada botón", "La cantidad de líneas de código"], respuesta: 0 },
      { pregunta: "¿Qué ayuda a describir el comportamiento esperado?", opciones: ["Requisitos claros", "Una captura sin contexto", "El nombre del archivo"], respuesta: 0 },
      { pregunta: "¿Por qué se prueba una aplicación?", opciones: ["Para comprobar su comportamiento frente a los requisitos", "Para evitar comprender el código", "Para sustituir la solución"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-2",
    codigo: "BTVDS 3.2",
    nombre: "Mantenimiento y aseguramiento de la operación del sistema informático",
    categoria: "Mantenimiento",
    docente: ["Francisco Arcides Canales Sorto"],
    resumen: "Mantenimiento y aseguramiento de la operación de un sistema informático. El repaso relaciona la identificación de componentes y la revisión de información del sistema con el diagnóstico, el mantenimiento preventivo y el registro técnico.",
    aprendizajesClave: [
      "Reconocer la importancia de mantener los componentes de un sistema informático.",
      "Relacionar las acciones de mantenimiento con la continuidad de la operación.",
      "Documentar observaciones técnicas para facilitar el seguimiento de una intervención."
    ],
    instrumentos: [
      { nombre: "Ficha de identificación del sistema", descripcion: "Organizar la información del equipo y del sistema operativo como apoyo para el diagnóstico." },
      { nombre: "Lista de comprobación de mantenimiento", descripcion: "Repasar el estado del equipo y documentar las observaciones realizadas." }
    ],
    programas: ["Windows", "Configuración del sistema", "msinfo32"],
    herramientas: ["Mantenimiento preventivo", "Diagnóstico técnico", "Inventario de hardware y software", "Registro de intervenciones"],
    recursos: [
      { titulo: "Microsoft Learn: solución de problemas de cliente de Windows", url: "https://learn.microsoft.com/es-es/troubleshoot/windows-client/", tipo: "documentacion", descripcion: "Biblioteca oficial con información de diagnóstico y soporte para sistemas cliente Windows." }
    ],
    evidencias: [
      { titulo: "Documento sobre una plataforma web", descripcion: "Fotografía de un documento académico que presenta una propuesta de plataforma web para publicar y leer ensayos y artículos.", tipo: "imagen", ruta: "img/Sistema.jpeg", alt: "Documento académico fotografiado en un cuaderno sobre una plataforma web para publicar y leer ensayos y artículos." },
      { titulo: "Actividad práctica de soporte técnico", descripcion: "Imagen de una actividad práctica relacionada con componentes y soporte técnico.", tipo: "imagen", ruta: "img/ComponentesPC.jpeg", alt: "Integrante del equipo durante una actividad práctica de soporte técnico." }
    ],
    quiz: [
      { pregunta: "¿Cuál es un objetivo del mantenimiento de un sistema informático?", opciones: ["Contribuir a que sus componentes operen correctamente", "Eliminar la necesidad de diagnóstico", "Evitar registrar las intervenciones"], respuesta: 0 },
      { pregunta: "¿Qué aporta un diagnóstico técnico?", opciones: ["Información para orientar una intervención", "Una garantía de que no se requieren pruebas", "Un reemplazo de la documentación"], respuesta: 0 },
      { pregunta: "¿Por qué conviene documentar una intervención?", opciones: ["Para mantener un registro consultable de lo realizado", "Para ocultar el estado del sistema", "Para evitar el seguimiento"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-3",
    codigo: "BTVDS 3.3",
    nombre: "Administración de base de datos",
    categoria: "Bases de datos",
    docente: ["Javier Mineros"],
    resumen: "Módulo de administración de bases de datos relacionado con el proyecto VelvetHeel. El trabajo anual incluyó el uso de SQL Server; los detalles de evaluación del Día 2 están pendientes de confirmar.",
    aprendizajesClave: [
      "Reconocer el papel de la administración de bases de datos en una solución informática.",
      "Relacionar tablas, consultas y tareas de administración con el proyecto VelvetHeel.",
      "Consultar documentación técnica para respaldar decisiones sobre una base de datos."
    ],
    instrumentos: [
      { nombre: "Proyecto de base de datos VelvetHeel", descripcion: "Proyecto relacionado con la administración de bases de datos; la guía o rúbrica específica está pendiente de confirmar." }
    ],
    programas: ["SQL Server", "Microsoft SQL Server Management Studio (SSMS)"],
    herramientas: ["SQL", "Administración de bases de datos", "Modelado de datos"],
    recursos: [
      { titulo: "Documentación de SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/?view=sql-server-ver16", tipo: "documentacion", descripcion: "Documentación oficial de Microsoft SQL Server." }
    ],
    evidencias: [
      { titulo: "Base de datos del proyecto VelvetHeel", descripcion: "Captura del código SQL del proyecto VelvetHeel.", tipo: "imagen", ruta: "img/VelvetHeel.png", alt: "Código SQL de creación de la base de datos VelvetHeel y de sus tablas de categorías." }
    ],
    quiz: [
      { pregunta: "¿Qué función cumplen las tablas en una base de datos relacional?", opciones: ["Organizar datos en estructuras relacionadas", "Definir los colores de una interfaz", "Ejecutar el sistema operativo"], respuesta: 0 },
      { pregunta: "¿Qué se utiliza para consultar y administrar datos en SQL Server?", opciones: ["Instrucciones SQL", "Reglas CSS", "Etiquetas de imagen"], respuesta: 0 },
      { pregunta: "¿Qué debe consultarse antes de aplicar una tarea administrativa?", opciones: ["La documentación y los requisitos de la base", "Únicamente el nombre de la base", "Una herramienta no relacionada"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-4",
    codigo: "BTVDS 3.4",
    nombre: "Elaboración de documentación de sistemas informáticos",
    categoria: "Documentación",
    docente: ["Javier Mineros"],
    resumen: "Documentación de sistemas informáticos con apoyo en la descripción de interfaces, formularios y sus respuestas ante entradas no válidas. La captura del formulario de contacto sirve para analizar campos, mensajes de validación y comportamiento visible para la persona usuaria.",
    aprendizajesClave: [
      "Reconocer la documentación como apoyo para comprender y mantener un sistema.",
      "Organizar la información técnica de forma clara y coherente con su propósito.",
      "Revisar la documentación para mejorar su precisión, legibilidad y utilidad."
    ],
    instrumentos: [
      { nombre: "Descripción de un formulario", descripcion: "Identificar sus campos, propósito, mensajes de validación y recorrido de uso." },
      { nombre: "Guía breve de uso y validación", descripcion: "Documentar los datos que solicita el formulario y cómo informa de errores de entrada." }
    ],
    programas: ["Navegador web", "Entorno local de desarrollo"],
    herramientas: ["Informática", "Documentación de sistemas informáticos", "Formularios web", "Validación de entradas", "Mensajes de error"],
    recursos: [
      { titulo: "GitHub Docs: escritura en GitHub", url: "https://docs.github.com/es/get-started/writing-on-github", tipo: "documentacion", descripcion: "Referencia para redactar y dar formato a contenido en GitHub." }
    ],
    evidencias: [
      { titulo: "Formulario web y validación", descripcion: "Captura de un formulario de contacto con aviso de validación; los datos personales del campo de contacto están ocultos.", tipo: "imagen", ruta: "img/Informatica-public.png", alt: "Formulario web de contacto que muestra campos de entrada y un mensaje de validación; el dato de contacto está oculto." }
    ],
    quiz: [
      { pregunta: "¿Qué aporta la documentación de un sistema?", opciones: ["Una referencia para comprender su estructura y uso", "Una sustitución de todas las pruebas", "Una garantía de que el sistema nunca cambia"], respuesta: 0 },
      { pregunta: "¿Qué cualidad mejora la utilidad de un documento técnico?", opciones: ["Claridad y organización", "Ambigüedad", "Omisión del propósito"], respuesta: 0 },
      { pregunta: "¿Qué conviene hacer antes de compartir documentación?", opciones: ["Revisar su precisión y legibilidad", "Eliminar el contexto", "Evitar comprobar los enlaces"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-5",
    codigo: "BTVDS 3.5",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    categoria: "Aplicaciones móviles",
    docente: ["Francisco Arcides Canales Sorto"],
    resumen: "Desarrollo de componentes para dispositivos móviles, vinculado a .NET MAUI y operaciones CRUD. La captura muestra un juego móvil de parejas con tablero interactivo, temporizador y opción para reiniciar.",
    aprendizajesClave: [
      "Identificar la función de componentes dentro de una aplicación móvil.",
      "Relacionar .NET MAUI con el desarrollo de interfaces para aplicaciones móviles.",
      "Comprender el flujo de operaciones CRUD para gestionar información desde una aplicación."
    ],
    instrumentos: [
      { nombre: "Práctica de componentes e interacción móvil", descripcion: "Revisar el comportamiento de controles, tablero, temporizador y reinicio del juego." },
      { nombre: "Ejercicio de operaciones CRUD", descripcion: "Repasar el flujo de crear, consultar, actualizar y eliminar registros en una aplicación móvil." }
    ],
    programas: [".NET MAUI", "Visual Studio"],
    herramientas: [".NET MAUI", "C#", "Interfaces móviles", "Eventos de usuario", "Operaciones CRUD"],
    recursos: [
      { titulo: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/", tipo: "documentacion", descripcion: "Documentación oficial de Microsoft para .NET MAUI." }
    ],
    evidencias: [
      { titulo: "Juego móvil de parejas", descripcion: "Captura de un juego con tablero, selección de cartas, temporizador y opción para reiniciar la partida.", tipo: "imagen", ruta: "img/Movil.png", alt: "Juego móvil de memoria con tablero de cartas, temporizador y botón para reiniciar." }
    ],
    quiz: [
      { pregunta: "¿Qué describe mejor a un componente de una aplicación móvil?", opciones: ["Una parte con una responsabilidad dentro de la aplicación", "Un archivo que no participa en la aplicación", "Un dispositivo de red"], respuesta: 0 },
      { pregunta: "¿Qué representa CRUD?", opciones: ["Crear, leer, actualizar y eliminar", "Copiar, reiniciar, usar y descargar", "Configurar, reparar, unir y depurar"], respuesta: 0 },
      { pregunta: "¿Cuál es la fuente más apropiada para aprender sobre .NET MAUI?", opciones: ["La documentación oficial de .NET MAUI", "Una referencia de CSS sin relación", "Un catálogo de imágenes"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-6",
    codigo: "BTVDS 3.6",
    nombre: "Conversación en inglés sobre mantenimiento de sistemas informáticos",
    categoria: "Inglés técnico",
    docente: ["Javier Mineros"],
    resumen: "Conversación en inglés sobre mantenimiento de sistemas informáticos. El mapa bilingüe de anatomía del sistema sirve para repasar nombres de componentes y datos de identificación del equipo, explicar información técnica y organizar un reporte de soporte.",
    aprendizajesClave: [
      "Utilizar vocabulario informático pertinente al describir una situación de mantenimiento.",
      "Comunicar en inglés información básica relacionada con una solicitud de soporte técnico.",
      "Organizar un reporte técnico en inglés con información clara sobre el caso atendido."
    ],
    instrumentos: [
      { nombre: "Descripción oral de un sistema", descripcion: "Practicar cómo presentar en inglés los componentes y datos técnicos registrados en el mapa del sistema." },
      { nombre: "Reporte breve de soporte", descripcion: "Organizar vocabulario y frases para comunicar un problema, una revisión y sus resultados." }
    ],
    programas: ["Windows", "Configuración del sistema", "msinfo32"],
    herramientas: ["Soporte técnico", "Vocabulario informático en inglés", "Anatomía del sistema", "Reportes técnicos en inglés"],
    recursos: [
      { titulo: "Microsoft Learn: Windows client troubleshooting", url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/", tipo: "documentacion", descripcion: "Lectura técnica en inglés sobre soporte y solución de problemas de Windows." }
    ],
    evidencias: [
      { titulo: "System Anatomy Map", descripcion: "Mapa bilingüe con características del sistema, como apoyo para practicar vocabulario técnico y conversación de soporte; se ocultaron los campos de identificación personal del equipo.", tipo: "imagen", ruta: "img/Ingles-public.png", alt: "Ficha bilingüe System Anatomy Map con características de un sistema informático y campos de identificación personal ocultos." }
    ],
    quiz: [
      { pregunta: "¿Qué información es útil al describir un problema de soporte?", opciones: ["Síntoma y contexto del sistema", "Solo una opinión sin detalles", "Una lista de términos sin relación"], respuesta: 0 },
      { pregunta: "¿Qué debe favorecer un reporte técnico?", opciones: ["Claridad y organización de la información", "La omisión del problema", "La mezcla de datos no relacionados"], respuesta: 0 },
      { pregunta: "¿Qué ayuda a comunicar un caso de mantenimiento en inglés?", opciones: ["Vocabulario informático pertinente", "Traducir términos sin revisar su sentido", "Evitar explicar el síntoma"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-7",
    codigo: "BTVDS 3.7",
    nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
    categoria: "Microempresa",
    docente: ["Francisco Arcides Canales Sorto"],
    resumen: "Módulo enfocado en la puesta en marcha de una microempresa en asociatividad cooperativa. Los procesos y materiales específicos de la guía del Día 2 están pendientes de confirmar.",
    aprendizajesClave: [
      "Reconocer la importancia de organizar responsabilidades para poner en marcha una iniciativa cooperativa.",
      "Relacionar la planificación y la colaboración con la operación de una microempresa.",
      "Identificar información que debe confirmarse antes de documentar procesos del emprendimiento."
    ],
    instrumentos: [
      { nombre: "Organización de la iniciativa productiva", descripcion: "Repasar la distribución de responsabilidades y la planificación de productos, clientes y actividades." },
      { nombre: "Revisión de la tienda virtual", descripcion: "Explorar cómo se presentan los productos y la información comercial de una tienda de práctica." }
    ],
    programas: ["PrestaShop", "XAMPP", "Microsoft Power BI"],
    herramientas: ["Organización de microempresa", "Asociatividad cooperativa", "Gestión de productos", "Categorías y promociones", "Análisis de datos"],
    recursos: [
      { titulo: "CONAMYPE El Salvador", url: "https://www.conamype.gob.sv/", tipo: "institucional", descripcion: "Portal institucional de apoyo a las micro y pequeñas empresas de El Salvador." }
    ],
    evidencias: [
      { titulo: "Tienda virtual de práctica", descripcion: "Captura de una tienda virtual de café ejecutada en un entorno local con XAMPP.", tipo: "imagen", ruta: "img/Xampp.jpeg", alt: "Tienda virtual de café abierta en el navegador junto al panel de control de XAMPP." },
      { titulo: "Reporte de análisis en Power BI", descripcion: "Reporte visual con indicadores y filtros para explorar datos comerciales.", tipo: "imagen", ruta: "img/PowerBi.jpeg", alt: "Reporte de Power BI con indicadores, visualizaciones de ventas y filtros de pedidos." }
    ],
    quiz: [
      { pregunta: "¿Qué facilita la asociatividad cooperativa?", opciones: ["La organización del trabajo y las responsabilidades compartidas", "La ausencia de acuerdos", "La eliminación de objetivos comunes"], respuesta: 0 },
      { pregunta: "¿Qué debe considerarse al poner en marcha una microempresa?", opciones: ["La organización de sus actividades y responsabilidades", "Solo el diseño de un logotipo", "Evitar revisar sus procesos"], respuesta: 0 },
      { pregunta: "¿Qué conviene hacer cuando falta información oficial del módulo?", opciones: ["Confirmarla con la guía o el equipo docente", "Presentar una suposición como un hecho", "Omitir la necesidad de verificarla"], respuesta: 0 }
    ]
  },
  {
    id: "btvds-3-8",
    codigo: "BTVDS 3.8",
    nombre: "Proyecto innovador de desarrollo de software",
    categoria: "Proyectos innovadores",
    docente: ["Javier Mineros"],
    resumen: "Módulo para el proyecto innovador de desarrollo de software. Las tecnologías relacionadas incluyen IoT, Arduino, sensores, visión por computadora, reconocimiento de lenguaje de señas, Google Studio IA y GitHub Copilot.",
    aprendizajesClave: [
      "Relacionar una necesidad con la propuesta de un prototipo de software innovador.",
      "Reconocer el papel de sensores, Arduino y visión por computadora en soluciones interactivas.",
      "Utilizar herramientas de desarrollo asistido por IA con revisión y validación del resultado."
    ],
    instrumentos: [
      { nombre: "Prototipos de innovación", descripcion: "El recorrido técnico incluye proyectos de IoT, guante de gestos y visión por computadora; instrumentos formales de evaluación por confirmar." }
    ],
    programas: ["Arduino", "Google Studio IA", "GitHub Copilot"],
    herramientas: ["IoT", "Sensores", "Guante de gestos", "Visión por computadora", "Reconocimiento de lenguaje de señas"],
    recursos: [
      { titulo: "Documentación oficial de Arduino", url: "https://docs.arduino.cc/", tipo: "documentacion", descripcion: "Documentación oficial de hardware y software Arduino." },
      { titulo: "Documentación de GitHub Copilot", url: "https://docs.github.com/es/copilot", tipo: "documentacion", descripcion: "Guías oficiales para utilizar GitHub Copilot." },
      { titulo: "Google AI Studio: inicio rápido", url: "https://ai.google.dev/gemini-api/docs/ai-studio-quickstart", tipo: "documentacion", descripcion: "Guía oficial para comenzar a utilizar Google AI Studio." }
    ],
    evidencias: [
      { titulo: "Presentación del proyecto innovador", descripcion: "Fotografía de la presentación de prototipos durante una actividad escolar; se observan proyectos de hardware y software.", tipo: "imagen", ruta: "img/Innovador.jpeg", alt: "Equipo presentando prototipos de hardware y software durante una actividad escolar." },
      { titulo: "Prototipo con Arduino", descripcion: "Captura del prototipo de auto con placa Arduino, sensores y conexiones.", tipo: "imagen", ruta: "img/Arduino.jpeg", alt: "Prototipo de auto con ruedas, placa Arduino, sensores y conexiones eléctricas." },
      { titulo: "Prototipo creado con Google Studio IA", descripcion: "Captura de una aplicación de temporizador y hábitos creada con apoyo de Google Studio IA.", tipo: "imagen", ruta: "img/GoogleSudio.jpeg", alt: "Prototipo de aplicación de temporizador Pomodoro y hábitos generado en Google Studio IA." }
    ],
    quiz: [
      { pregunta: "¿Qué función puede cumplir un sensor en un prototipo IoT?", opciones: ["Detectar una condición o señal del entorno", "Mostrar documentación sin hardware", "Reemplazar todas las pruebas"], respuesta: 0 },
      { pregunta: "¿Qué es importante al utilizar una sugerencia de una herramienta de IA?", opciones: ["Revisarla y validar el resultado", "Asumir que siempre es correcta", "Publicarla sin comprenderla"], respuesta: 0 },
      { pregunta: "¿Qué describe la visión por computadora?", opciones: ["El procesamiento de información visual mediante sistemas computacionales", "La administración de archivos de audio", "La impresión de documentos"], respuesta: 0 }
    ]
  }
];
