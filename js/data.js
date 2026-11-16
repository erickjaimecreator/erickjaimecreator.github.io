/*
  CONTENIDO DEL PORTAFOLIO
  ------------------------
  Todo el texto, los enlaces y las rutas de archivos están aquí.
  Para cambiar un video: reemplaza el archivo en assets/video/ (y su portada en
  assets/posters/) o cambia aquí las rutas "src" y "poster".
  Las rutas son relativas a index.html: nunca uses rutas tipo C:\...
*/
window.PORTFOLIO = {
  person: {
    name: "Erick Jaime",
    title: "Creador de contenido digital y videos animados",
    subtitle: "Guiones, animación, edición y producción audiovisual con inteligencia artificial",
    location: "Lima, Perú",
    intro:
      "Produzco videos cortos de principio a fin: escribo el guion, planifico lo que se verá en pantalla, animo y edito con herramientas de IA, sincronizo subtítulos y reviso el audio antes de publicar. Hoy desarrollo cuatro proyectos propios, en español y en inglés, y conceptos publicitarios para marcas.",
    email: "erickjaime0317@gmail.com",
    whatsappLabel: "+51 926 238 603",
    whatsappUrl: "https://wa.me/51926238603",
    cv: "assets/docs/CV_Erick_Jaime.pdf",
    cvDownloadName: "CV_Erick_Jaime.pdf",
    photo: "assets/img/erick-jaime.webp",
    photoAlt: "Erick Jaime de pie en una calle en pendiente, con polo marrón, pantalón claro y lentes oscuros, brazos cruzados."
  },

  projects: [
    {
      id: "full-show-tv",
      theme: "fst",
      name: "Full Show TV",
      logo: "assets/logos/fullshowtv.webp",
      logoAlt: "Logotipo de Full Show TV",
      kicker: "Manga narrado · Español",
      tagline: "Las grandes peleas del manga, contadas viñeta a viñeta.",
      about:
        "Resúmenes narrados de manga en formato vertical. Cada video recorre las viñetas originales de un capítulo con voz en off, subtítulos y movimientos de cámara para seguir la acción como si fuera un episodio. Las muestras actuales se centran en Dragon Ball Z.",
      audience:
        "Público hispanohablante que sigue el anime y el manga, y que quiere revivir o descubrir momentos clave en uno o dos minutos desde el móvil.",
      role: [
        "Selección del capítulo y de las viñetas que cuentan la escena.",
        "Guion de la narración en español.",
        "Narración con voz generada por IA y revisión de pronunciación y ritmo.",
        "Montaje vertical: encuadres, zooms y transiciones sobre las viñetas del manga.",
        "Subtítulos sincronizados y marca del canal.",
        "Revisión final de audio, legibilidad y duración."
      ],
      note:
        "Proyecto personal. Los personajes y las viñetas pertenecen a sus autores y editoriales; no son ilustraciones propias.",
      social: {
        youtube: "https://www.youtube.com/@fullshowtv1",
        facebook: "https://www.facebook.com/fullshowtv1",
        tiktok: "https://www.tiktok.com/@fullshowtv1"
      },
      videos: [
        {
          title: "La misteriosa técnica Kaio-ken",
          desc: "Goku enfrenta a Nappa y activa el Kaio-ken mientras Vegeta observa el combate.",
          src: "assets/video/fst-kaioken.mp4",
          poster: "assets/posters/fst-kaioken.webp",
          duration: "1:34"
        },
        {
          title: "La furia de Goku: ¡más de 8000!",
          desc: "Goku entra en la pelea contra Nappa y Vegeta reacciona al leer su nivel de poder en el rastreador.",
          src: "assets/video/fst-8000.mp4",
          poster: "assets/posters/fst-8000.webp",
          duration: "1:10"
        }
      ]
    },
    {
      id: "mangaverse",
      theme: "mv",
      name: "MangaVerse",
      logo: "assets/logos/mangaverse.webp",
      logoAlt: "Logotipo de MangaVerse",
      kicker: "Manga narrado · Inglés",
      tagline: "Manga storytelling for English-speaking fans.",
      about:
        "Narraciones de manga en inglés pensadas para audiencias angloparlantes. La serie avanza capítulo por capítulo; las muestras corresponden a los capítulos 1 y 2 del manga de Dragon Ball Super, con voz en off y subtítulos en inglés.",
      audience:
        "Seguidores de manga y anime de habla inglesa que consumen resúmenes verticales en YouTube Shorts, Facebook y TikTok.",
      role: [
        "Selección de capítulos y orden de las viñetas.",
        "Guion de la narración en inglés elaborado con apoyo de herramientas de IA.",
        "Narración con voz generada por IA.",
        "Montaje vertical y movimientos de cámara sobre las viñetas.",
        "Subtítulos en inglés sincronizados con la voz.",
        "Revisión final de audio, ritmo y legibilidad."
      ],
      note:
        "Proyecto personal. Los personajes y las viñetas pertenecen a sus autores y editoriales; no son ilustraciones propias.",
      social: {
        youtube: "https://www.youtube.com/@mangaverse16",
        facebook: "https://www.facebook.com/mangaverse1",
        tiktok: "https://www.tiktok.com/@thecatrockoff"
      },
      videos: [
        {
          title: "Goku the Farmer vs. a God’s Premonition",
          desc: "Capítulo 1 de Dragon Ball Super: Goku trabaja en el campo y quiere entrenar, mientras Beerus despierta de su largo sueño.",
          src: "assets/video/mv-ch1.mp4",
          poster: "assets/posters/mv-ch1.webp",
          duration: "2:15",
          lang: "en"
        },
        {
          title: "Goku vs. Beerus: Super Saiyan 3 Isn’t Enough",
          desc: "Capítulo 2: Beerus llega al planeta del Kaio del Norte y Goku lo enfrenta en Super Saiyajin 3.",
          src: "assets/video/mv-ch2.mp4",
          poster: "assets/posters/mv-ch2.webp",
          duration: "2:08",
          lang: "en"
        }
      ]
    },
    {
      id: "geonvix",
      theme: "geo",
      name: "GEONVIX",
      logo: "assets/logos/geonvix.webp",
      logoAlt: "Logotipo de GEONVIX: globo terrestre con órbita",
      kicker: "Explicativos animados · Español",
      tagline: "Curiosidades de ciencia, tecnología y naturaleza, explicadas en menos de un minuto.",
      about:
        "Videos explicativos verticales que responden una pregunta concreta con diagramas animados: un esquema que se dibuja, etiquetas que separan lo comprobado de lo que aún es hipótesis y subtítulos palabra a palabra. Cada pieza parte de una investigación previa del tema.",
      audience:
        "Personas curiosas de todas las edades que buscan respuestas claras y breves sobre el cuerpo humano, la ciencia, la tecnología y la naturaleza.",
      role: [
        "Elección de la pregunta e investigación con fuentes.",
        "Guion de 35 a 60 segundos y estructura de la explicación.",
        "Planificación de cada diagrama según lo que dice la voz.",
        "Animación generada por código con asistencia de IA (Claude Code).",
        "Narración con voz generada por IA y subtítulos palabra a palabra.",
        "Mezcla de música y efectos, y revisión final del resultado."
      ],
      note: "Proyecto propio.",
      social: {
        youtube: "https://www.youtube.com/@Geonvix",
        facebook: "https://www.facebook.com/geonvix",
        tiktok: "https://www.tiktok.com/@geonvix"
      },
      videos: [
        {
          title: "¿Por qué bostezamos cuando tenemos sueño?",
          desc: "Repasa la idea descartada del oxígeno, la hipótesis del enfriamiento cerebral y por qué el tema sigue en debate.",
          src: "assets/video/geo-bostezo.mp4",
          poster: "assets/posters/geo-bostezo.webp",
          duration: "0:59"
        },
        {
          title: "¿Por qué se nos pone la piel de gallina?",
          desc: "Muestra el músculo erector del pelo, la orden del sistema nervioso y la hipótesis de un reflejo heredado.",
          src: "assets/video/geo-piel.mp4",
          poster: "assets/posters/geo-piel.webp",
          duration: "0:57"
        }
      ]
    },
    {
      id: "hello-good-friend",
      theme: "hgf",
      name: "Hello Good Friend",
      logo: "assets/logos/hellogoodfriend.webp",
      logoAlt: "Emblema de Hello Good Friend: un anillo con una estrella brillante",
      kicker: "Reflexiones · Español",
      tagline: "Mensajes breves para mirar la vida diaria con más calma.",
      about:
        "Reflexiones y mensajes de motivación sobre situaciones cotidianas: compararse con los demás, el ritmo propio, dar un paso pequeño hoy. Cada video combina una voz serena con ilustraciones minimalistas en movimiento y una frase central por escena.",
      audience:
        "Personas que buscan un momento de pausa y ánimo en su día, sobre todo jóvenes y adultos que sienten presión por sus metas.",
      role: [
        "Guion reflexivo y frase central de cada escena.",
        "Dirección visual minimalista: figuras, luz y ritmo pausado.",
        "Animación generada con asistencia de herramientas de IA.",
        "Narración con voz generada por IA.",
        "Subtítulos y montaje vertical.",
        "Revisión del tono, el audio y el resultado final."
      ],
      note: "Proyecto propio.",
      social: {
        youtube: "https://www.youtube.com/@hellogoodfriend1",
        facebook: "https://www.facebook.com/hellogoodfriend1",
        tiktok: "https://www.tiktok.com/@hellogoodfriend12"
      },
      videos: [
        {
          title: "¿Todos avanzan menos tú?",
          desc: "Sobre la sensación de quedarse atrás al mirar los logros de otros, y la invitación a dar un paso hoy.",
          src: "assets/video/hgf-avanzan.mp4",
          poster: "assets/posters/hgf-avanzan.webp",
          duration: "0:36"
        },
        {
          title: "No estás llegando tarde a la vida",
          desc: "Cuestiona la idea de una edad fija para cada logro y propone elegir una sola acción pequeña para hoy.",
          src: "assets/video/hgf-tarde.mp4",
          poster: "assets/posters/hgf-tarde.webp",
          duration: "0:47"
        }
      ]
    }
  ],

  ads: {
    intro:
      "Dos conceptos publicitarios de 20 segundos para marcas ficticias, creados como muestra de cómo adapto el tono, la paleta y el mensaje a un producto o a un servicio. No son campañas de clientes reales.",
    items: [
      {
        id: "nova-audio",
        theme: "nova",
        brand: "NOVA Audio",
        type: "Producto · Audífonos inalámbricos",
        goal:
          "Presentar unos audífonos con una estética oscura y tecnológica, y dejar una idea simple: la música acompaña tu día. Cierra con la marca y el llamado “Dale play”.",
        role: [
          "Concepto y textos en pantalla.",
          "Imágenes de producto generadas con IA.",
          "Montaje, ritmo y animación de textos.",
          "Música, sonido y revisión final."
        ],
        disclaimer: "Concepto publicitario para una marca ficticia.",
        video: {
          title: "NOVA Audio — Dale play",
          desc: "Anuncio vertical de 20 segundos.",
          src: "assets/video/nova-audio.mp4",
          poster: "assets/posters/nova-audio.webp",
          duration: "0:20"
        }
      },
      {
        id: "renueva-hogar",
        theme: "renueva",
        brand: "Renueva Hogar",
        type: "Servicio · Limpieza de muebles a domicilio",
        goal:
          "Mostrar el beneficio de un servicio de limpieza con un antes y después fácil de entender, y terminar con una invitación a consultar.",
        role: [
          "Concepto, guion y textos en pantalla.",
          "Escenas generadas con IA.",
          "Montaje y transición antes/después.",
          "Revisión de legibilidad y resultado final."
        ],
        disclaimer:
          "Concepto para una marca ficticia. El antes y después es ilustrativo y fue generado con IA; no muestra un trabajo de limpieza real.",
        video: {
          title: "Renueva Hogar — Dale una nueva vida a tus muebles",
          desc: "Anuncio vertical de 20 segundos.",
          src: "assets/video/renueva-hogar.mp4",
          poster: "assets/posters/renueva-hogar.webp",
          duration: "0:20"
        }
      }
    ]
  },

  about: {
    paragraphs: [
      "Soy Erick Jaime, vivo en Lima y produzco contenido audiovisual corto con herramientas de inteligencia artificial. Me interesa todo el proceso: encontrar el tema, ordenarlo en un guion claro y llevarlo a un video que se entienda desde el primer segundo.",
      "Vengo de la atención al cliente y las ventas. Esa experiencia me enseñó a escuchar qué necesita la otra persona, a comunicar con claridad y a trabajar con procedimientos y plazos. Hoy la aplico a la creación de contenido: pienso en quién va a ver el video y en qué debe llevarse."
    ],
    experience: [
      { org: "PIA Home", role: "Asesor de ventas", years: "2025–2026" },
      { org: "Cablevisión Perú", role: "Asesor de atención al cliente y ventas", years: "2024–2025" },
      { org: "Banco de Crédito del Perú (BCP)", role: "Auxiliar de recuento", years: "2022–2024" }
    ],
    education: [
      { org: "Instituto IDATEC", role: "Asistente de Gerencia · Cajero Bancario Comercial", years: "2015–2017" }
    ],
    languages: "Español: nativo · Inglés: básico",
    selfTaught: "Aprendizaje autodidacta de herramientas de IA aplicado a proyectos propios."
  },

  process: [
    { name: "Guion", text: "Defino la idea central, el orden de la información y el texto que se dirá en voz." },
    { name: "Planificación visual", text: "Decido qué se ve en cada frase: viñetas, diagramas, escenas o textos." },
    { name: "Animación", text: "Genero el movimiento con herramientas de IA y animación por código, o con encuadres sobre material existente." },
    { name: "Montaje", text: "Ordeno escenas, ritmo, transiciones y música en formato vertical." },
    { name: "Subtítulos", text: "Sincronizo los subtítulos con la voz y cuido su lectura en el móvil." },
    { name: "Narración asistida por IA", text: "Produzco la voz en off con IA y reviso pronunciación, pausas y entonación." },
    { name: "Revisión final", text: "Escucho el audio completo, compruebo textos y detalles, y exporto la versión final." }
  ],

  tools: ["ChatGPT", "Claude", "Codex", "Claude Code", "Google Antigravity", "Canva", "CapCut"],

  nav: [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Publicidad", href: "#publicidad" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" }
  ]
};
