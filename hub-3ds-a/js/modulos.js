window.MODULOS = [
  {
    id: "btvds-3-0",
    codigo: "BTVDS 3.0",
    nombre: "Orientación al estudiante al proceso educativo",
    categoria: "Orientación",
    docente: ["Por confirmar"],
    resumen: "Repaso de la orientación y el proceso educativo mediante una actividad diagnóstica en Kahoot. La evidencia muestra los resultados de participación; sirve como punto de partida para reconocer conocimientos previos.",
    aprendizajesClave: [
      "Identificar el propósito y las etapas del proceso educativo correspondiente al módulo.",
      "Reconocer los recursos y apoyos necesarios para organizar el aprendizaje.",
      "Relacionar la participación responsable con el avance del proceso formativo."
    ],
    instrumentos: [
      { nombre: "Actividad diagnóstica en Kahoot", descripcion: "Actividad realizada para recuperar conocimientos de bases de datos y programación, incluidos PHP y C#." },
      { nombre: "Guía de reflexión del proceso educativo (HUB)", descripcion: "Material de repaso elaborado para esta plataforma sobre objetivos, recursos y seguimiento del aprendizaje." }
    ],
    programas: ["Kahoot", "Navegador web"],
    herramientas: ["Evaluación diagnóstica", "Participación y seguimiento del aprendizaje"],
    recursos: [
      { titulo: "Ministerio de Educación, Ciencia y Tecnología de El Salvador", url: "https://www.mined.gob.sv/", tipo: "institucional", descripcion: "Portal institucional para consultar información y recursos educativos oficiales." },
      { titulo: "Kahoot!", url: "https://kahoot.com/", tipo: "documentacion", descripcion: "Sitio oficial de la plataforma utilizada en la actividad diagnóstica interactiva." },
      { titulo: "UNICEF: educación", url: "https://www.unicef.org/education", tipo: "institucional", descripcion: "Información sobre el aprendizaje y el acceso a la educación." }
    ],
    evidencias: [
      { titulo: "Resultados de la actividad en Kahoot", descripcion: "Captura de la clasificación y los resultados de la actividad diagnóstica.", tipo: "imagen", ruta: "img/Kahoot.jpeg", alt: "Pantalla de resultados de una actividad diagnóstica en Kahoot con la clasificación de participantes." }
    ],
    quiz: [
      { pregunta: "¿Qué conviene hacer al iniciar un proceso de aprendizaje?", opciones: ["Identificar objetivos y recursos disponibles", "Comenzar sin conocer el propósito", "Esperar a la evaluación para organizarse", "Evitar revisar las indicaciones"], respuesta: 0, explicacion: "Reconocer objetivos y recursos ayuda a organizar el aprendizaje desde el inicio." },
      { pregunta: "¿Para qué sirve revisar el progreso de aprendizaje?", opciones: ["Sustituir todos los objetivos", "Reconocer avances y necesidades de apoyo", "Comparar calificaciones sin revisar el proceso", "Evitar la planificación"], respuesta: 1, explicacion: "El seguimiento permite reconocer avances y decidir qué conviene reforzar." },
      { pregunta: "¿Qué acción favorece la participación responsable?", opciones: ["Ignorar las indicaciones", "Dejar de comunicar dificultades", "Consultar y utilizar los recursos de apoyo", "Entregar actividades sin revisar su propósito"], respuesta: 2, explicacion: "Participar de manera responsable implica atender las orientaciones y pedir apoyo cuando sea necesario." }
    ]
  },
  {
    id: "btvds-3-1",
    codigo: "BTVDS 3.1",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    categoria: "Desarrollo de software",
    docente: ["Javier Mineros"],
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
    programas: [".NET MAUI", ".NET Framework", "Visual Studio Community", "Visual Studio Code", "Windows Forms", "WPF (Windows Presentation Foundation)", "Avalonia UI", "SQLite"],
    herramientas: ["C#", "Diseño de interfaces", "Desarrollo de aplicaciones", "Análisis de problemas", "CRUD", "Python: variables, operaciones, condicionales, bucles y programación orientada a objetos"],
    recursos: [
      { titulo: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/", tipo: "documentacion", descripcion: "Referencia oficial del entorno utilizado para aplicaciones multiplataforma." },
      { titulo: "Tutorial de C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/tutorials/", tipo: "documentacion", descripcion: "Tutorial oficial sobre fundamentos y construcción de programas con C#." },
      { titulo: "Tutorial de Python", url: "https://docs.python.org/es/3/tutorial/", tipo: "documentacion", descripcion: "Guía oficial de Python para repasar variables, control de flujo y estructuras básicas." }
    ],
    evidencias: [
      { titulo: "Aplicación de gestión para una tienda de mascotas", descripcion: "Menú de la aplicación Great Pets con accesos a registros, citas, inventario e historial.", tipo: "imagen", ruta: "img/Maui.png", alt: "Menú de una aplicación de gestión para una tienda de mascotas con opciones de registros, citas, inventario e historial." },
      { titulo: "Aplicación de escritorio con Windows Forms", descripcion: "Captura de una aplicación de práctica para el cálculo de notas.", tipo: "imagen", ruta: "img/WindowsForm.jpeg", alt: "Aplicación Windows Forms para calcular notas de un estudiante." },
      { titulo: "Práctica inicial de Python", descripcion: "Captura de un ejercicio con variables y operaciones básicas.", tipo: "imagen", ruta: "img/Python.jpeg", alt: "Código de una práctica inicial de Python con variables y operaciones básicas." }
    ],
    quiz: [
      { pregunta: "¿Qué debe identificarse antes de diseñar una aplicación?", opciones: ["La necesidad y el problema que se busca resolver", "La distribución visual de los controles", "El entorno de ejecución elegido", "El formato de los archivos de entrega"], respuesta: 0, explicacion: "Comprender la necesidad permite definir una solución pertinente y sus requisitos." },
      { pregunta: "¿Qué ayuda a describir el comportamiento esperado?", opciones: ["Una lista de componentes visuales", "Requisitos claros", "El nombre del archivo", "Una lista de colores sin funciones"], respuesta: 1, explicacion: "Los requisitos expresan qué debe hacer la aplicación y orientan su diseño." },
      { pregunta: "¿Por qué se prueba una aplicación?", opciones: ["Para medir la cantidad de pantallas", "Para revisar solamente su apariencia", "Para comprobar su comportamiento frente a los requisitos", "Para garantizar que nunca tendrá cambios"], respuesta: 2, explicacion: "Las pruebas permiten observar si la solución responde a lo esperado e identificar aspectos que corregir." }
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
      { titulo: "Microsoft Learn: solución de problemas de cliente de Windows", url: "https://learn.microsoft.com/es-es/troubleshoot/windows-client/", tipo: "documentacion", descripcion: "Biblioteca oficial con información de diagnóstico y soporte para sistemas cliente Windows." },
      { titulo: "Microsoft Support: soporte de Windows", url: "https://support.microsoft.com/es-es/windows", tipo: "soporte", descripcion: "Centro de soporte oficial para consultar información sobre la operación de Windows." },
      { titulo: "iFixit: guías para computadoras", url: "https://www.ifixit.com/Device/PC", tipo: "guia", descripcion: "Guías de referencia para reconocer componentes y consultar procedimientos de reparación." }
    ],
    evidencias: [
      { titulo: "Documento sobre una plataforma web", descripcion: "Fotografía de un documento académico que presenta una propuesta de plataforma web para publicar y leer ensayos y artículos.", tipo: "imagen", ruta: "img/Sistema.jpeg", alt: "Documento académico fotografiado en un cuaderno sobre una plataforma web para publicar y leer ensayos y artículos." },
      { titulo: "Actividad práctica de soporte técnico", descripcion: "Imagen de una actividad práctica relacionada con componentes y soporte técnico.", tipo: "imagen", ruta: "img/ComponentesPC.jpeg", alt: "Integrante del equipo durante una actividad práctica de soporte técnico." }
    ],
    quiz: [
      { pregunta: "¿Cuál es un objetivo del mantenimiento preventivo?", opciones: ["Reducir riesgos y favorecer la continuidad de la operación", "Reemplazar componentes sin inspeccionarlos", "Evitar registrar las intervenciones", "Esperar a que ocurra una falla para revisar el equipo"], respuesta: 0, explicacion: "El mantenimiento preventivo busca reducir riesgos y conservar la operación del sistema." },
      { pregunta: "¿Qué aporta un diagnóstico técnico?", opciones: ["Una lista de cambios sin verificar", "Información para orientar una intervención", "Una garantía de que no se requieren pruebas", "Un reemplazo de la documentación"], respuesta: 1, explicacion: "Reunir síntomas e información del equipo ayuda a elegir una acción apropiada." },
      { pregunta: "¿Por qué conviene documentar una intervención?", opciones: ["Para ocultar el estado del sistema", "Para evitar el seguimiento", "Para mantener un registro consultable de lo realizado", "Para reemplazar las medidas de seguridad"], respuesta: 2, explicacion: "El registro técnico permite dar continuidad al mantenimiento y consultar las observaciones realizadas." }
    ]
  },
  {
    id: "btvds-3-3",
    codigo: "BTVDS 3.3",
    nombre: "Administración de Bases de Datos",
    categoria: "Bases de datos",
    docente: ["Francisco Arcides Canales Sorto", "Javier Mineros"],
    resumen: "Administración de bases de datos con especial protagonismo del proyecto estudiantil VelvetHeel. Se construyó manualmente una base funcional en SQL Server con tablas, relaciones, consultas, procedimientos almacenados y funciones; también se practicaron la administración de registros y los respaldos, incluidos respaldos programados.",
    aprendizajesClave: [
      "Reconocer el papel de la administración de bases de datos en una solución informática.",
      "Relacionar tablas, consultas, procedimientos almacenados y funciones con el proyecto VelvetHeel.",
      "Consultar documentación técnica para respaldar decisiones sobre una base de datos."
    ],
    instrumentos: [
      { nombre: "Proyecto de base de datos VelvetHeel", descripcion: "Proyecto estudiantil de construcción manual de una base de datos funcional para una empresa creada por estudiantes." },
      { nombre: "Práctica de consultas y administración (HUB)", descripcion: "Material de repaso elaborado para esta plataforma sobre relaciones, procedimientos, funciones y respaldos; no sustituye una evaluación oficial." }
    ],
    programas: ["SQL Server", "Microsoft SQL Server Management Studio (SSMS)", "Microsoft Access"],
    herramientas: ["SQL", "Administración de bases de datos", "Modelado de datos", "Relaciones entre tablas", "Procedimientos almacenados", "Funciones", "Respaldos de bases de datos", "Respaldos programados"],
    recursos: [
      { titulo: "Documentación de SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/?view=sql-server-ver16", tipo: "documentacion", descripcion: "Documentación oficial de Microsoft SQL Server." },
      { titulo: "Procedimientos almacenados en el motor de base de datos", url: "https://learn.microsoft.com/es-es/sql/relational-databases/stored-procedures/stored-procedures-database-engine?view=sql-server-ver16", tipo: "documentacion", descripcion: "Referencia oficial sobre la creación y el uso de procedimientos almacenados." },
      { titulo: "Copias de seguridad y restauración en SQL Server", url: "https://learn.microsoft.com/es-es/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases?view=sql-server-ver16", tipo: "documentacion", descripcion: "Guía oficial para comprender las copias de seguridad y la restauración de bases de datos." }
    ],
    evidencias: [
      { titulo: "Base de datos del proyecto VelvetHeel", descripcion: "Captura del código SQL del proyecto VelvetHeel.", tipo: "imagen", ruta: "img/VelvetHeel.png", alt: "Código SQL de creación de la base de datos VelvetHeel y de sus tablas de categorías." }
    ],
    quiz: [
      { pregunta: "¿Qué función cumplen las tablas en una base de datos relacional?", opciones: ["Organizar datos en filas y columnas que pueden relacionarse", "Ejecutar consultas sin almacenar registros", "Definir permisos del sistema operativo", "Reemplazar los índices y las claves"], respuesta: 0, explicacion: "Las tablas organizan datos en filas y columnas y pueden relacionarse mediante claves." },
      { pregunta: "¿Para qué se utiliza un procedimiento almacenado?", opciones: ["Diseñar la apariencia de un formulario", "Guardar instrucciones SQL reutilizables en el servidor", "Reemplazar las copias de seguridad", "Cambiar el sistema operativo del servidor"], respuesta: 1, explicacion: "Un procedimiento almacenado permite guardar y ejecutar un conjunto de instrucciones en SQL Server." },
      { pregunta: "¿Qué propósito tiene un respaldo programado?", opciones: ["Cambiar automáticamente el diseño de las tablas", "Eliminar la necesidad de comprobar los respaldos", "Crear copias periódicas para apoyar la recuperación de la base", "Sustituir las relaciones entre registros"], respuesta: 2, explicacion: "Programar respaldos ayuda a mantener copias periódicas, que también deben verificarse y protegerse." }
    ]
  },
  {
    id: "btvds-3-4",
    codigo: "BTVDS 3.4",
    nombre: "Elaboración de documentación de sistemas informáticos",
    categoria: "Documentación",
    docente: ["Por confirmar"],
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
    programas: ["Navegador web", "Entorno local de desarrollo", "Node.js", "Razor Pages"],
    herramientas: ["Documentación de sistemas informáticos", "Formularios web", "Validación de entradas", "Mensajes de error", "StarUML", "Modelado de sistemas mediante UML", "GitHub"],
    recursos: [
      { titulo: "GitHub Docs: escritura en GitHub", url: "https://docs.github.com/es/get-started/writing-on-github", tipo: "documentacion", descripcion: "Referencia para redactar y dar formato a contenido en GitHub." },
      { titulo: "MDN: formularios web", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms", tipo: "documentacion", descripcion: "Material sobre la estructura y el uso de formularios en la web." },
      { titulo: "W3C WAI: formularios", url: "https://www.w3.org/WAI/tutorials/forms/", tipo: "accesibilidad", descripcion: "Tutorial de accesibilidad para etiquetas, instrucciones y validación de formularios." }
    ],
    evidencias: [
      { titulo: "Formulario web y validación", descripcion: "Captura de un formulario de contacto con aviso de validación; los datos personales del campo de contacto están ocultos.", tipo: "imagen", ruta: "img/Informatica-public.png", alt: "Formulario web de contacto que muestra campos de entrada y un mensaje de validación; el dato de contacto está oculto." }
    ],
    quiz: [
      { pregunta: "¿Qué aporta la documentación de un sistema?", opciones: ["Una referencia para comprender su estructura y uso", "Una sustitución de todas las pruebas", "Una garantía de que el sistema nunca cambia", "Un registro de decisiones sin explicar el propósito"], respuesta: 0, explicacion: "La documentación comunica información útil para comprender, utilizar o mantener un sistema." },
      { pregunta: "¿Qué cualidad mejora la utilidad de un documento técnico?", opciones: ["La mayor cantidad posible de páginas", "Claridad y organización", "El uso exclusivo de abreviaturas", "La inclusión de detalles sin relación con el propósito"], respuesta: 1, explicacion: "La claridad y una estructura coherente facilitan encontrar e interpretar la información." },
      { pregunta: "¿Qué conviene hacer antes de compartir documentación?", opciones: ["Eliminar el contexto", "Evitar comprobar los enlaces", "Revisar su precisión, legibilidad y datos personales", "Publicar datos de contacto innecesarios"], respuesta: 2, explicacion: "La revisión ayuda a corregir errores y también a evitar la exposición de información personal." }
    ]
  },
  {
    id: "btvds-3-5",
    codigo: "BTVDS 3.5",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    categoria: "Aplicaciones móviles",
    docente: ["Por confirmar"],
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
      { titulo: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/", tipo: "documentacion", descripcion: "Documentación oficial de Microsoft para .NET MAUI." },
      { titulo: "Controles de interfaz de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/user-interface/controls/", tipo: "documentacion", descripcion: "Referencia oficial para explorar controles de interfaz disponibles en .NET MAUI." },
      { titulo: "Enlace de datos en .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/fundamentals/data-binding/", tipo: "documentacion", descripcion: "Explica cómo conectar datos y elementos de la interfaz." }
    ],
    evidencias: [
      { titulo: "Juego móvil de parejas", descripcion: "Captura de un juego con tablero, selección de cartas, temporizador y opción para reiniciar la partida.", tipo: "imagen", ruta: "img/Movil.png", alt: "Juego móvil de memoria con tablero de cartas, temporizador y botón para reiniciar." }
    ],
    quiz: [
      { pregunta: "¿Qué describe mejor a un componente de una aplicación móvil?", opciones: ["Una parte que cumple una función dentro de la aplicación", "Un recurso externo que no participa en su ejecución", "Un dispositivo de red conectado al equipo", "Una copia de seguridad del proyecto"], respuesta: 0, explicacion: "Los componentes cumplen funciones dentro de la aplicación y colaboran para ofrecer sus características." },
      { pregunta: "¿Qué representa CRUD?", opciones: ["Copiar, revisar, unir y desplegar", "Crear, leer, actualizar y eliminar", "Configurar, reparar, unir y depurar", "Conectar, responder, unificar y desplegar"], respuesta: 1, explicacion: "CRUD resume las operaciones básicas para crear, consultar, actualizar y eliminar registros." },
      { pregunta: "¿Qué recurso ayuda a conocer los controles y fundamentos de .NET MAUI?", opciones: ["Una guía de administración de correo", "Un catálogo de imágenes", "La documentación oficial de .NET MAUI", "Una referencia de CSS sin relación"], respuesta: 2, explicacion: "La documentación oficial describe los controles y conceptos del framework con información de primera mano." }
    ]
  },
  {
    id: "btvds-3-6",
    codigo: "BTVDS 3.6",
    nombre: "Conversación en inglés sobre mantenimiento de sistemas informáticos",
    categoria: "Inglés técnico",
    docente: ["Por confirmar"],
    resumen: "Conversación en inglés vinculada a prácticas de mantenimiento: limpieza y revisión de una computadora de escritorio, identificación de componentes, registro en inglés de CPU, RAM, almacenamiento y sistema operativo, y preparación de reportes y diálogos simulados entre un técnico y un cliente.",
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
    herramientas: ["Soporte técnico", "Limpieza y revisión de computadoras", "Identificación de CPU, RAM, almacenamiento y sistema operativo", "Vocabulario informático en inglés", "Anatomía del sistema", "Reportes técnicos en inglés", "Simulación de conversación técnico-cliente"],
    recursos: [
      { titulo: "Microsoft Learn: Windows client troubleshooting", url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/", tipo: "documentacion", descripcion: "Lectura técnica en inglés sobre soporte y solución de problemas de Windows." },
      { titulo: "Cambridge Dictionary: hardware", url: "https://dictionary.cambridge.org/dictionary/english/hardware", tipo: "diccionario", descripcion: "Referencia de vocabulario en inglés para el término hardware." },
      { titulo: "Cambridge English: actividades para estudiantes", url: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/", tipo: "aprendizaje", descripcion: "Actividades de aprendizaje de inglés para reforzar vocabulario y comunicación." }
    ],
    evidencias: [
      { titulo: "System Anatomy Map", descripcion: "Mapa bilingüe con características del sistema, como apoyo para practicar vocabulario técnico y conversación de soporte; se ocultaron los campos de identificación personal del equipo.", tipo: "imagen", ruta: "img/Ingles-public.png", alt: "Ficha bilingüe System Anatomy Map con características de un sistema informático y campos de identificación personal ocultos." }
    ],
    quiz: [
      { pregunta: "¿Qué información es útil al describir un problema de soporte?", opciones: ["Síntoma y contexto del sistema", "Solo la marca del equipo", "Una conclusión sin describir el problema", "La lista completa de programas instalados, aunque no guarde relación"], respuesta: 0, explicacion: "Describir el síntoma y el contexto permite que el interlocutor comprenda mejor el caso." },
      { pregunta: "¿Qué debe favorecer un reporte técnico?", opciones: ["El uso de abreviaturas sin explicar", "Claridad y organización de la información", "La omisión del problema", "La mezcla de datos no relacionados"], respuesta: 1, explicacion: "Un reporte ordenado comunica qué se observó y facilita comprender la información técnica." },
      { pregunta: "¿Qué ayuda a comunicar un caso de mantenimiento en inglés?", opciones: ["Evitar explicar el síntoma", "Omitir los datos técnicos disponibles", "Utilizar vocabulario informático pertinente en contexto", "Traducir cada término de forma literal sin revisar su sentido"], respuesta: 2, explicacion: "El vocabulario técnico pertinente permite describir con más precisión los componentes y el problema." }
    ]
  },
  {
    id: "btvds-3-7",
    codigo: "BTVDS 3.7",
    nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
    categoria: "Microempresa",
    docente: ["Por confirmar"],
    resumen: "Módulo de puesta en marcha de una microempresa en asociatividad cooperativa. El recorrido anual incluye ejercicios de PHP, XAMPP y MySQL; administración de una tienda virtual en PrestaShop; y prácticas académicas de Power BI, con datos importados desde Excel y SQL Server, filtros, visualizaciones y extracción de tablas de Wikipedia. No se presentan esos ejercicios como resultados comerciales ni estadísticas oficiales.",
    aprendizajesClave: [
      "Reconocer la importancia de organizar responsabilidades para poner en marcha una iniciativa cooperativa.",
      "Relacionar la planificación y la colaboración con la operación de una microempresa.",
      "Identificar información que debe confirmarse antes de documentar procesos del emprendimiento."
    ],
    instrumentos: [
      { nombre: "Organización de la iniciativa productiva", descripcion: "Repasar la distribución de responsabilidades y la planificación de productos, clientes y actividades." },
      { nombre: "Revisión de la tienda virtual", descripcion: "Explorar cómo se presentan los productos y la información comercial de una tienda de práctica." }
    ],
    programas: ["PrestaShop", "XAMPP", "MySQL", "Microsoft Power BI"],
    herramientas: ["PHP", "Formularios y procesamiento de datos", "Operaciones CRUD", "Conexiones a bases de datos", "Sesiones", "Organización de microempresa", "Asociatividad cooperativa", "Gestión de productos", "Categorías y promociones", "Packs, atributos y combinaciones", "Precios, descuentos y pedidos", "Análisis y visualización de datos", "Web scraping de tablas de Wikipedia", "Scrum", "Organización y seguimiento de proyectos mediante GitHub"],
    recursos: [
      { titulo: "CONAMYPE El Salvador", url: "https://www.conamype.gob.sv/", tipo: "institucional", descripcion: "Portal institucional de apoyo a las micro y pequeñas empresas de El Salvador." },
      { titulo: "Documentación de PrestaShop", url: "https://docs.prestashop-project.org/", tipo: "documentacion", descripcion: "Documentación para crear y administrar tiendas y productos desde PrestaShop." },
      { titulo: "Apache Friends: XAMPP", url: "https://www.apachefriends.org/index.html", tipo: "documentacion", descripcion: "Sitio oficial del entorno local XAMPP utilizado en prácticas web." },
      { titulo: "Microsoft Learn: introducción a Power BI", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/power-bi-overview", tipo: "documentacion", descripcion: "Referencia oficial sobre análisis, informes y visualización de datos con Power BI." }
    ],
    evidencias: [
      { titulo: "Tienda virtual de práctica", descripcion: "Captura de una tienda virtual de café ejecutada en un entorno local con XAMPP.", tipo: "imagen", ruta: "img/Xampp.jpeg", alt: "Tienda virtual de café abierta en el navegador junto al panel de control de XAMPP." },
      { titulo: "Reporte de análisis en Power BI", descripcion: "Reporte visual con indicadores y filtros para explorar datos comerciales.", tipo: "imagen", ruta: "img/PowerBi.jpeg", alt: "Reporte de Power BI con indicadores, visualizaciones de ventas y filtros de pedidos." }
    ],
    quiz: [
      { pregunta: "¿Qué facilita la asociatividad cooperativa?", opciones: ["La organización del trabajo y las responsabilidades compartidas", "La concentración de todas las tareas en una persona", "La eliminación de objetivos comunes", "La ausencia de acuerdos entre participantes"], respuesta: 0, explicacion: "La asociatividad se apoya en organizar el trabajo y compartir responsabilidades para avanzar hacia objetivos comunes." },
      { pregunta: "¿Qué tarea representa administrar una tienda virtual con PrestaShop?", opciones: ["Compilar una aplicación móvil", "Organizar productos, categorías, precios y pedidos desde su Back Office", "Diseñar circuitos de sensores", "Ejecutar consultas SQL sin gestionar la tienda"], respuesta: 1, explicacion: "PrestaShop es una plataforma de comercio electrónico cuyo Back Office permite gestionar el catálogo y la operación de una tienda." },
      { pregunta: "¿Qué conviene hacer cuando falta información oficial del módulo?", opciones: ["Presentar una suposición como un hecho", "Atribuirla a un docente sin confirmación", "Confirmarla con la guía o el equipo docente", "Omitir la necesidad de verificarla"], respuesta: 2, explicacion: "La información no confirmada debe verificarse y no presentarse como un hecho." }
    ]
  },
  {
    id: "btvds-3-8",
    codigo: "BTVDS 3.8",
    nombre: "Proyecto innovador de desarrollo de software",
    categoria: "Proyectos innovadores",
    docente: ["Por confirmar"],
    resumen: "Proyectos innovadores presentados en la Feria de Logros: un automóvil controlado con gestos mediante un guante con sensores y Arduino, y una aplicación de cámara que reconoce gestos de lenguaje de señas y permite dibujar figuras. También se exploraron aplicaciones de hábitos y rachas con Google Studio IA y juegos interactivos con apoyo de GitHub Copilot. Se describen como prototipos y experiencias de aprendizaje.",
    aprendizajesClave: [
      "Relacionar una necesidad con la propuesta de un prototipo de software innovador.",
      "Reconocer el papel de sensores, Arduino y visión por computadora en soluciones interactivas.",
      "Utilizar herramientas de desarrollo asistido por IA con revisión y validación del resultado."
    ],
    instrumentos: [
      { nombre: "Prototipos de innovación", descripcion: "El recorrido técnico incluye proyectos de IoT, guante de gestos y visión por computadora; no se atribuye una rúbrica formal." },
      { nombre: "Ficha de análisis del prototipo (HUB)", descripcion: "Material de repaso elaborado para esta plataforma para describir necesidad, entradas, componentes y validación del prototipo." }
    ],
    programas: ["Arduino", "Google Studio IA", "GitHub Copilot", "Visual Studio", "OpenCV"],
    herramientas: ["IoT", "Sensores", "Guante de gestos", "Automóvil controlado por gestos", "Visión por computadora", "Cámara para reconocer señas y dibujar", "Prototipado", "Revisión de código asistida por IA", "Juegos interactivos: espejo, incendio, adivinar figuras y encontrar diferencias"],
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
      { pregunta: "¿Qué función puede cumplir un sensor en un prototipo IoT?", opciones: ["Detectar una condición del entorno para que el sistema la procese", "Ejecutar instrucciones de interfaz sin recibir datos", "Reemplazar todas las pruebas del prototipo", "Almacenar datos sin medir una entrada"], respuesta: 0, explicacion: "Un sensor detecta una magnitud o condición del entorno que un sistema puede procesar." },
      { pregunta: "¿Qué es importante al utilizar una sugerencia de una herramienta de IA?", opciones: ["Asumir que siempre es correcta", "Revisar el código y validar el resultado", "Publicarla sin comprenderla", "Evitar comprobar el código generado"], respuesta: 1, explicacion: "La IA puede ayudar a proponer o corregir código, pero la persona desarrolladora debe comprenderlo y verificarlo." },
      { pregunta: "¿Qué describe la visión por computadora?", opciones: ["La administración de archivos de audio", "La impresión de documentos", "El análisis de imágenes o video mediante sistemas computacionales", "La creación de resultados sin datos visuales"], respuesta: 2, explicacion: "La visión por computadora analiza imágenes o video para reconocer patrones u obtener información visual." }
    ]
  }
];
