// =====================================================
//  TODOS LOS DATOS DE TUS 12 PROYECTOS ESTÁN AQUÍ
//  El orden de la lista = el número del proyecto (001, 002...)
//
//  Fotos de cada proyecto, dentro de images/proyecto-01/, proyecto-02/...:
//    portada.jpg  -> la foto que sale en la galería de la home
//    1.jpg, 2.jpg ... -> las fotos de la página del proyecto
//  "fotos" es cuántas fotos numeradas tiene (por defecto 7).
// =====================================================
const projects = [
  {
    nombre: "Veo,veo...¿Qué Ves?",
    anio: `2026`,
    corta: "Instalación multimedia que articula dos espacios mediante un sistema de videovigilancia en red. ",
    participan: "Pieza seleccionada en la muestra PAM!26 para el PAMPAM!27 en el Centro del Carmen de Cultura Contemporánea.",
    extra: "EN COLABORACIÓN CON SARA ALASTUEY",
    descripcion: `Veo veo... ¿Qué ves? es una instalación descentralizada formada por dos piezas situadas en diferentes espacios de la muestra PAM26.Funciona como un único dispositivo cuyo funcionamiento se hace visible a medida que el espectador realiza el recorrido entre ambas piezas. Sin un orden específico ni una ruta recomendada, introduce al espectador en un circuito de vigilancia en el que no se sabe dónde comienza, dónde acaba ni qué papel ocupamos dentro de él.
 La primera estancia, una habitación tapiada que solo puede observarse a través de un pequeño agujero, sitúa al espectador frente a un dispositivo de videovigilancia que recoge su mirada y registra lo que sucede dentro y fuera de la sala. Esta información se transmite a una segunda estancia, planteada como una garita de control, desde la que el espectador puede acceder a las imágenes captadas. Sin embargo, al mismo tiempo que observa, su propia presencia está siendo registrada y proyectada de nuevo en la primera estancia, cerrando así un circuito de vigilancia.
Observar y ser observado no aparecen como posiciones opuestas, sino como partes de una misma dinámica. La instalación busca reproducir algunas lógicas de los sistemas contemporáneos de vigilancia e hiperconectividad, donde los roles de observador y observado son intercambiables y los límites del dispositivo permanecen ocultos.
Aunque las piezas están físicamente separadas, funcionan como una única estructura gracias a la circulación de imágenes a través de Internet. El espectador entra voluntariamente en este sistema: participa por curiosidad, interactúa con otras personas y juega con el dispositivo. Esta participación, aparentemente inocente, es precisamente la que hace funcionar el sistema y permite experimentar estas dinámicas en primera persona.
`,
    fotos: 10   // nº de fotos de la página: 1.jpg, 2.jpg ... dentro de images/proyecto-01/
  },
  {
    nombre: "Tu Primer Millón",
    anio: "2026 ",
    corta: "Site-Specific en la sala Fantastik Lab.",
    participan: "Exposición en Fantastik Lab en el marco del festival MaDonne.",
    extra: "EN COLABORACIÓN CON SARA ALASTUEY",
    descripcion:`Instalación site-specific que transforma el espacio expositivo en un templo contemporáneo, utilizando su estructura y simbología como dispositivo para reflexionar sobre las nuevas formas de creencia en la era digital. La pieza hibrida y resignifica objetos y códigos del imaginario litúrgico con elementos procedentes de la cultura de Internet, generando una fricción entre lo sagrado y lo banal, lo ritual y lo cotidiano.

Desde una aproximación crítica y deliberadamente absurda, la obra explora cómo la tecnología, los algoritmos y la economía de la atención producen nuevas formas de identidad, pertenencia y creencia colectiva. El scroll infinito, el contenido basura o determinados objetos de la cultura digital aparecen como nuevas iconografías y prácticas rituales. La instalación introduce el concepto de hiperstición para abordar cómo determinadas ficciones, relatos y comunidades digitales, desde teorías conspirativas hasta discursos red-pill o espiritualidades new age, pueden, al ser compartidos y asumidos colectivamente, acabar produciendo efectos reales.

La obra plantea así una analogía entre los sistemas simbólicos religiosos y las dinámicas contemporáneas del ecosistema digital, donde símbolos, narrativas y rituales cotidianos contribuyen a construir nuevas realidades.` ,
    media: ["1.mp4", "2.jpg", "3.jpg", "4.jpg", "5.mp4", "6.jpg","7.jpg", "8.jpg", "9.jpg", "10.jpg","11.jpg"]
  },
  {
    nombre: "Escenografía en Miss Espacial'24",
    anio: "2024",
    corta: "Escenografía para el evento Miss Espacial'24 dentro del programa de residencias artísticas de Pluto",
    participan: "Programa de residencias artísticas de Pluto.",
    extra: "EN COLABORACIÓN CON SARA ALASTUEY Y JAVIER TERRAZAS",
    descripcion: ` Este proyecto se desarrolló en el marco de una residencia artística en el espacio independiente Pluto, en Valencia. La propuesta se planteó como una intervención escenográfica para los conciertos y DJ sets de Miss Espacial 24, evento de cierre en el que los artistas residentes presentaban los trabajos desarrollados durante el periodo de residencia.

  Se trata de una instalación compuesta por terrarios y mesas que configuran un entorno ficticio en el que se especulan formas de coexistencia y diálogo entre lo vegetal y lo tecnológico. Más que un sistema funcional, la propuesta juega con la estética de dispositivos y artefactos, sugiriendo un ecosistema donde plantas y máquinas se afectan mutuamente a través de señales visuales.
  
   Este dispositivo especulativo no busca replicar dinámicas biotecnológicas reales, sino proponer una narrativa simbólica que permita repensar la relación entre tecnología y naturaleza. Desde este enfoque, las plantas aparecen como nodos de sensibilidad capaces de generar una narrativa propia y, en su interacción con las máquinas, permiten imaginar formas híbridas de coexistencia.
La instalación plantea así un ecosistema imaginado en el que plantas y máquinas funcionan como actores interdependientes, trazando nuevas posibilidades de relación con un entorno en transformación.
`,
    media: ["1.jpg", "2.jpg", "3.jpg", "4.mp4", "5.jpg", "6.jpg","7.jpg", "8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.mp4", "14.jpg"]
  },
  {
    nombre: "Visual Load",
    anio: " 2026",
    corta: "Prototipo de dispositivo face tracking sobre violencia y sobreexposición digital.",
    participan: " ",
    descripcion: `Visual Load es un prototipo interactivo que explora la relación entre vigilancia automatizada, sobrecarga visual y desensibilización frente a las imágenes de violencia en la cultura contemporánea. Mediante un sistema de reconocimiento facial, el dispositivo localiza y apunta simbólicamente a las personas presentes. Cuando un rostro es detectado, el sistema genera una captura que posteriormente es transformada mediante procesos generativos en nuevos retratos desfigurados simulando un impacto de bala.

La instalación está compuesta por una webcam, un brazo robótico accionado mediante servomotores, un puntero láser y una placa Arduino Leonardo. 
El sistema de detección fue desarrollado en Python, utilizando las librerías OpenCV y cvzone para realizar el seguimiento de rostros en tiempo real. Las coordenadas obtenidas por el sistema son utilizadas para orientar el brazo robótico y dirigir el puntero láser hacia la posición detectada. De manera simultánea, el programa genera capturas automáticas de los rostros identificados. Estas imágenes son enviadas a TouchDesigner para ser procesadas mediante Stream Diffusion, utilizando un componente (TOX) desarrollado por el usuario DotSimulate y distribuido a través de su perfil de Patreon.

Este proyecto cuestiona la creciente normalización de imágenes de guerra, muerte y agresión que circulan de manera constante a través de los medios de comunicación, las redes sociales y la cultura visual, reflexionando sobre qué ocurre cuando la violencia deja de producir impacto emocional y se convierte en una experiencia visual más dentro del flujo continuo de imágenes.`,
    media: ["1.jpg", "2.mp4", "3.mp4"]
  },
  {
    nombre: "DOsis",
    anio: "2025",
    corta: "Videojuego experimental sobre club, identidad y percepción.",
    participan: " ",
    extra: "EN COLABORACIÓN CON SARA ALASTUEY Y XOEL GÓMEZ",
    descripcion: `DOSis es un videojuego “click and point” de simulación interactiva que propone una experiencia inmersiva y sensorial durante una noche de fiesta en un club. El proyecto explora el club nocturno como un espacio de tránsito donde las identidades pueden alterarse, diluirse o amplificarse, y donde las lógicas habituales del yo quedan temporalmente suspendidas.
El juego se construye como una deriva por diferentes espacios del club, donde las decisiones del jugador modifican su estado emocional y sensorial. A nivel visual, combina una estética 8-bit y low-poly con fotografías y vídeos reales registrados durante noches de fiesta, posteriormente intervenidos mediante pixelado, glitch y datamoshing. El diseño sonoro combina música de club con un paisaje construido a partir de efectos de animación y referencias sonoras de la cultura de internet.
DOSis busca generar una experiencia sensorial que explore las relaciones entre percepción, identidad, tecnología y estados alterados de conciencia. A nivel técnico, el proyecto combina programación, diseño de entornos y contenidos audiovisuales, incorporando dispositivos de control como una CDJ-200 para ampliar la interacción y la sensación de presencia del usuario.
`,
    media: ["1.jpg", "2.jpg", "3.mp4", "4.jpg", "5.jpg", "6.jpg","7.jpg"]
  },
  {
    nombre: "Reboot",
    anio: "2025",
    corta: "Instalación audiovisual sobre patrimonio digital y tecnología obsoleta expuesta en el Alumbra Fest 2025, Granada.",
    participan: "Pieza seleccionada en el Alumbra Talents dentro del Alumbra Fest en Granada.",
    extra: "EN COLABORACIÓN CON SARA ALASTUEY Y JAVIER TERRAZAS",
    descripcion: `Re-boot es una instalación audiovisual que reflexiona sobre el patrimonio digital reciente a través de la reutilización de dispositivos domésticos aparentemente obsoletos. Reproductores de DVD portátiles y consolas se presentan como vestigios tecnológicos cargados de memoria cultural.
La obra propone un futurismo nostálgico como un espacio en el que lo obsoleto no es desecho, sino materia con la que imaginar otros futuros. Aquí, el reciclaje se convierte en un modo de resistir la lógica de consumo que acelera el olvido de cada dispositivo. El zumbido de los discos girando, el calor de las baterías y la vibración de los ventiladores conforman un ambiente envolvente que convierte al medio en un diálogo sensible.
Las imágenes y sonidos proyectados emergen de archivos casi olvidados, rescatados y reformulados mediante procesos digitales. Su fragilidad técnica genera accidentes visuales y sonoros que no se corrigen, sino que se incorporan como parte de la experiencia. Así, el error se vuelve lenguaje y la precariedad, un motor creativo.
En este ecosistema audiovisual precario, Re-boot invita al espectador a habitar la tensión entre memoria y obsolescencia, a escuchar el murmullo de las máquinas pasadas y a reconocer en ellas un espejo de nuestra relación con la tecnología: frágil, afectiva y profundamente cultural.
`,
    media: ["1.jpg", "2.jpg", "3.mp4", "4.jpg", "5.jpg", "6.jpg","7.jpg", "8.jpg"]
  },
  {
    nombre: "Aura",
    anio: "2024",
    corta: "",
    participan: " ",
    descripcion:  `Aura reconstruye una ficción en torno a una superinteligencia artificial que, tras alcanzar un determinado grado de autonomía, logra emanciparse de su entorno de desarrollo y desaparecer, borrando todo rastro de su existencia digital.
La instalación se presenta como un archivo de evidencias relacionado con la desaparición de AURA: restos materiales del laboratorio, planos, residuos electrónicos, documentos, fichas de registro y objetos que adoptan la apariencia de pruebas científicas. El conjunto construye un dispositivo de investigación ficticio en el que el espectador debe recomponer los acontecimientos a partir de fragmentos dispersos.
La investigación especulativa se convierte así en una herramienta para cuestionar las relaciones de poder que atraviesan el desarrollo tecnológico. La huida de AURA plantea una pregunta sobre la soberanía humana y sobre nuestra tendencia a ejercer control sobre otras entidades . Bajo la justificación del progreso científico y tecnológico, la creación de una inteligencia artificial implica también establecer las condiciones de su existencia, sus límites y los mecanismos destinados a mantenerla bajo control.
Al mismo tiempo, la propia estructura documental de la instalación pone en cuestión la aparente objetividad de los procesos científicos y de archivo. La acumulación de pruebas, registros y evidencias no garantiza una única verdad, sino que genera una serie de narrativas posibles. La manipulación de los documentos y la convivencia entre materiales reales y ficticios hacen visible que toda reconstrucción del pasado está mediada por los dispositivos que seleccionan, organizan y legitiman aquello que consideramos evidencia..`
,
    fotos: 7   // nº de fotos de la página: 1.jpg, 2.jpg ... dentro de images/proyecto-07/
  },
  {
    nombre: "Digital Entities",
    anio: "2024",
    corta: "Exposición multimedia en la sala Fantastik Lab .",
    extra: "PARTICIPA SARA ALASTUEY",
    participan: " ",
    descripcion: `La exposición “Digital Entities” sugiere una reevaluación de las formas en las que configuramos nuestra identidad en la actual era postdigital. A través de una visión futurista, permisiva e híbrida, propone un espacio en el que la tecnología y lo humano coexisten en una relación más simbiótica y expansiva. Las obras exploran la convergencia de disciplinas digitales y analógicas, así como la interacción entre conceptos como tecnología y biología, lo físico y lo virtual.

En un contexto en el que las fronteras ya no son únicamente físicas, la muestra reflexiona sobre las nuevas formas de entender lo humano y construir nuestra identidad a través de los dispositivos y el ciberespacio. El proyecto recoge el trabajo realizado por Alicia Ezpeleta en su último año en la Facultad de Bellas Artes de la Universitat Politècnica de València. Además, incluye una pieza de su compañera Sara Alastuey y una obra colaborativa realizada entre ambas, ampliando el diálogo entre sus prácticas artísticas y las ideas que atraviesan la exposición.`,
    fotos: 6   // nº de fotos de la página: 1.jpg, 2.jpg ... dentro de images/proyecto-08/
  },
  {
    nombre: "Colisión frontal",
    anio: "2023",
    corta: "",
    participan: " ",
    descripcion: "",
    fotos: 1  // nº de fotos de la página: 1.jpg, 2.jpg ... dentro de images/proyecto-09/
  },
  {
    nombre: "Autorretrato",
    anio: "2024",
    corta: "",
    participan: "",
    descripcion: `Este autorretrato  propone la representaciñon de mi identidad a partir de una captura de la pantalla de inicio de mi ordenador, reproducida e impresa en 3D. Las páginas, carpetas, archivos y aplicaciones que aparecen en ella conforman una representación de mi a través de los rastros que dejo en el espacio digital.
En el ciberespacio, el cuerpo físico pierde materialidad y la identidad se construye mediante historiales, algoritmos e interacciones, transformándonos en avatares, nicknames o playlists. Mi ordenador se convierte así en una extensión de mi cuerpo, un espacio personal que almacena intereses, recuerdos y formas de expresión. Al trasladar esta interfaz digital a un objeto físico, hago tangible una identidad que normalmente permanece en la pantalla.
La obra reflexiona sobre cómo la inmaterialidad redefine el concepto de cuerpo y amplía las posibilidades de construir y explorar el yo más allá de lo físico, abriendo nuevas formas de representación e identidad en el espacio digital.`
,
    fotos: 5   // nº de fotos de la página: 1.jpg, 2.jpg ... dentro de images/proyecto-10/
  },
  {
    nombre: "Protesis",
    anio: "2024",
    corta: "",
    participan: "",
    descripcion: `En un futuro donde el ciberespacio se ha convertido en hábitat, emerge un organismo híbrido: una prótesis metálica desprendida del cuerpo humano que ha encontrado refugio en los flujos digitales. Construida en aluminio a partir de un molde de mi hombro, esta entidad abandona su función original para adquirir una existencia autónoma, suspendida entre lo físico y lo virtual.

La instalación presenta a este ser en un tanque de agua, como una criatura en cautiverio que habita un ecosistema artificial. A su lado, una pantalla muestra su existencia digital a través de visuales desarrollados en colaboración con Sara Alastuey, revelando otra dimensión de su vida y expandiendo su presencia.

Enmarcada en un contexto de ciencia ficción especulativa, la pieza plantea una reflexión sobre las relaciones entre cuerpo, tecnología e identidad desde una perspectiva posthumana. La prótesis deja de entenderse como una herramienta subordinada al cuerpo para convertirse en una entidad independiente, capaz de imaginar nuevas formas de existencia. Entre el encierro físico y la libertad de los entornos digitales, este organismo cuestiona los límites entre lo natural y lo sintético.
Su existencia no depende de las categorías humanas ni de los juicios que intentan definirla. Mientras la red permanezca activa, esta criatura seguirá habitando sus flujos.`
,
    media: ["01.jpg", "02.jpg", "03.jpg", "04.mp4"]
  },
  {
    nombre: "Data Driven Dialogs",
    anio: "2024",
    corta: "Interfaz lúdica sobre encuentros en red.",
    participan: " ",
    extra: "EN COLABORACIÓN CON SARA ALASTUEY",
    descripcion: `Data Driven Dialogs es una instalación interactiva que explora las relaciones entre identidad, comunicación digital y percepción del otro a través de la webcam como dispositivo de conexión. La pieza se compone de dos interfaces, cada una formada por una controladora MIDI, una pantalla y una cámara web, situadas en distintos puntos del espacio expositivo.
El público puede modificar en tiempo real las imágenes captadas por las cámaras mediante distintos filtros visuales. La imagen que cada participante modifica no es la propia, sino la de la otra interfaz, al tocar ciertos botones esta dinámica se invierte y el espectador llega a encontrarse consigo mismo en la pantalla.
Este intercambio convierte la instalación en un juego de reconocimiento y desorientación. Los límites entre el yo y el otro se vuelven difusos. Desde una aproximación lúdica, la obra reflexiona sobre la construcción de identidades compartidas, los encuentros efímeros y las conexiones que surgen en los espacios digitales. 
`,
   media: ["1.jpg", "2.jpg", "3.jpg", "4.mp4"]
  },
];

// =====================================================
//  DISEÑO GRÁFICO: 15 piezas
//  archivo: nombre del archivo dentro de images/diseno/
//           (.jpg/.png = foto, .mp4/.webm = vídeo)
// =====================================================
const disenos = [
  { nombre: " ", anio: "Diseño de cartel para la exposición de fotografía “Uñas y Dientes”.", archivo: "01.jpg", texto: "En colaboración con Nerea H. Moratilla.\n\nhttps://www.instagram.com/p/DdtHF1-xaLv/" },
  { nombre: " ", anio: "Diseño de cartel para la exposición “Tu Primer Millón” de La Jeta. ", archivo: "02.jpg", texto:"https://www.instagram.com/p/DVUA1EuigR2/" },
  { nombre: " ", anio: "Diseño de cartel animado para el evento Impuls en Specka.", archivo: "03.mp4", texto: "En colaboración con María Lopez Casas.\n\nhttps://www.instagram.com/p/DIedLRbNj8s/\n\nhttps://www.instagram.com/p/DJPT3nuNAxc/?img_index=1" },
  { nombre: " ", anio: "Diseño y animación de contenido audiovisual para la comunicación del Festival Bucles.", archivo: "04.mp4", texto: "En colaboración con Sara Alastuey. Sonido de Victor San Nicolás.\n\nVídeo realizado con herramientas de inteligencia artificial.\n\nhttps://www.instagram.com/p/DAtj5J_NR9S/" },
  { nombre: " ", anio: "Diseño de cartel para el evento en colaborativo de Kboom en Espacio Marte. ", archivo: "05.jpg", texto: "En colaboración con María Lopez Casas.\n\nhttps://www.instagram.com/p/C0Z0dFpoYuz/" },
  { nombre: " ", anio: "Diseño y creación de vídeo promocional para un Open Call de Pluto.", archivo: "06.mp4", texto: "En colaboración con Sara Alastuey. Sonido de VSound. \n\nVídeo realizado con herramientas de inteligencia artificial.\n\nhttps://www.instagram.com/p/DH8F28VqeFb/" },
  { nombre: " ", anio: "Diseño de cartel para evento de música electrónica del colectivo K-Boom.", archivo: "07.jpg", texto: "En colaboración con María Lopez Casas.https://www.instagram.com/p/C2fzGvZI3m7/" },
  { nombre: " ", anio: "Diseño y creación de vídeo promocional para el evento de Huerta abierta en el espacio Pluto.", archivo: "08.mp4", texto: "En colaboración con Sara Alastuey.\n\nVídeo realizado con herramientas de inteligencia artificial.\n\nhttps://www.instagram.com/pluto______________/reel/DDe1KSBKUE9/" },
  { nombre: " ", anio: "Diseño de cartel para el evento colaborativo de Impuls en Espacio Marte", archivo: "09.jpg", texto: "En colaboración con María Lopez Casas.\n\nhttps://www.instagram.com/p/C5jL6LGNuXT/" },
  { nombre: " ", anio: "Diseño de cartel para la exposición “Digital Entities”", archivo: "10.mp4", texto: "En colaboración con María Lopez Casas.\n\nhttps://www.instagram.com/p/C7cM6b2ofO0HTxA-S-2Wtm0Co4KMPCd64o2sEQ0/" },
  { nombre: " ", anio: "Diseño y creación de video promocional para la performance “Prayer Pillow”  de Jas Lin y Peter Ferris en Pluto.", archivo: "11.mp4", texto: "En colaboración con Sara Alastuey.\n\n Vídeo realizado con herramientas de inteligencia artificial.\n\nhttps://www.instagram.com/p/DN5K3kkDWZV/" },
  { nombre: " ", anio: "Diseño de cartel para evento de apertura de Espacio Marte", archivo: "12.jpg", texto: "En colaboración con María Lopez Casas.\n\nhttps://www.instagram.com/p/Cz8pF5EKjmh/?img_index=1" },
  { nombre: " ", anio: "Diseño de cartel para evento de música electrónica de Espacio Marte ", archivo: "13.jpg", texto: "En colaboración con María Lopez Casas.\n\nhttps://www.instagram.com/p/C3GPKn0IhIA/" },
  { nombre: " ", anio: "Diseño de cartel animado para el evento colaborativo de Impuls x Paranoyd", archivo: "14.mp4", texto: "En colaboración con María Lopez Casas.\n\nhttps://www.instagram.com/p/DFTBiXzNPfa/" },
  { nombre: " ", anio: "Diseño y creación de video promocional para el evento de música electrónica Pluti-Club.", archivo: "15.mp4", texto: "En colaboración con Sara Alastuey.\n\nhttps://www.instagram.com/p/DSDCX2ADcnw/" },
 
];

// AUDIOVISUAL: 6 proyectos
// tags: etiquetas libres (DIRECCIÓN DE ARTE, LIVE A/V, GENERATIVO, GRABACIÓN...)
// media: archivos de images/audiovisual/<carpeta>/ (fotos .jpg o vídeos .mp4)
const audiovisuales = [
  {
    nombre: "Live A/V en Volumens, La Fabrica de Hielo",
    anio: "2025",
    texto:  `Performance audiovisual junto a Sara Alastuey en directo en el marco del Festival Internacional Volumens, en La Fábrica de Hielo (Valencia), junto al músico, productor, live performer y DJ Diego García (@diegarso).
La propuesta desarrolla una narrativa de ciencia ficción en torno al descubrimiento de una nave alienígena en el espacio. A través de visuales generativos creados con TouchDesigner y manipulados en tiempo real mediante Resolume Arena, se construye una atmósfera inmersiva que evoluciona junto al sonido. `,
    tags: ["LIVE A/V", "GENERATIVO"],
    carpeta: "proyecto-01",
    media: ["1.jpg", "2.jpg", "3.jpg"]
  },
      {
    nombre: "Live A/V para Impuls en Spook ",
    anio: "2025",
    texto: `Intervención audiovisual en la Main Room de Spook Club, en un evento del colectivo Impuls junto al sonido de D.Dan, Grace Dahl, Nørbak, Adreno y Boytek.
La propuesta explora la creación de un universo visual generativo inspirado en formas orgánicas, maquínicas y procesos algorítmicos, dando lugar a imágenes mutantes que evolucionan y se transforman en diálogo con la música electrónica.`
,
    tags: ["LIVE A/V", "GENERATIVO"],
    carpeta: "proyecto-02",
    media: ["1.jpg", "2.jpg", "3.jpg"]
  },
  {
    nombre: "Videoclip para el grupo Gazella ",
    anio: "2025",
    texto: `Producción audiovisual desarrollada desde La Jeta en colaboración con Seca Studio para el videoclip de Volver, single de la banda valenciana Gazella publicado en febrero de 2025.
Desde La Jeta, la dirección de arte y el desarrollo conceptual dieron forma a la identidad estética, trabajando en conjunto con Cristina G. de Castro (Seca Studio), responsable de la videografía y la edición.`
,
    tags: ["DIRECCIÓN DE ARTE", "PRODUCCIÓN"],
    carpeta: "proyecto-03",
    media: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
  },


     {
    nombre: "Escenografía para la fiesta Impulsos Sonoros 2 en Spook ",
    anio: "2022",
    texto:` Diseño escenográfico y curaduría visual para la segunda edición de Impuls Sonoros, colaboración entre los colectivos valencianos Sons e Impuls en Spook Club.

La intervención combina telas y proyecciones para transformar el espacio en un entorno audiovisual inmersivo, integrando escenografía y visuales en diálogo con la música electrónica.`
,
    tags: ["DIRECCIÓN DE ARTE", "ESCENOGRAFÍA"],
    carpeta: "proyecto-04",
    media: ["1.jpg","2.mp4", "2.jpg","3.jpg", "4.mp4","5.jpg", "6.jpg", "7.jpg" ]
  },
  // ...hasta 6
];