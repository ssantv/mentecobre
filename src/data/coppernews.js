// ===== CopperNews — datos de las páginas (Inicio, La Redacción, Ediciones) =====

import n1_0 from '../assets/images/coppernews/n1-0.png'
import n1_1 from '../assets/images/coppernews/n1-1.png'
import n1_2 from '../assets/images/coppernews/n1-2.png'
import n1_3 from '../assets/images/coppernews/n1-3.jpg'
import n1_4 from '../assets/images/coppernews/n1-4.png'
import n2_0 from '../assets/images/coppernews/n2-0.png'
import n2_1 from '../assets/images/coppernews/n2-1.jpg'
import n2_2 from '../assets/images/coppernews/n2-2.png'
import n2_3 from '../assets/images/coppernews/n2-3.jpg'
import n3_0 from '../assets/images/coppernews/n3-0.png'
import n3_1 from '../assets/images/coppernews/n3-1.png'
import n3_2 from '../assets/images/coppernews/n3-2.jpg'
import n3_3 from '../assets/images/coppernews/n3-3.jpg'
import n3_4 from '../assets/images/coppernews/n3-4.png'
import n3_5 from '../assets/images/coppernews/n3-5.png'
import n3_6 from '../assets/images/coppernews/n3-6.png'
import n3_7 from '../assets/images/coppernews/n3-7.jpg'
import n3_8 from '../assets/images/coppernews/n3-8.png'

export const CN_INICIO = [
  { t: 'p', v: 'Tu fuente confiable de información a través de LOS REINOS', lede: true, center: true },
  {
    t: 'p',
    v: 'En un mundo donde el conocimiento es más valioso que los broam de esmeralda, CopperNews se alza como el faro que ilumina los misterios del Cosmere. Desde los pasillos del Palaneo hasta los rincones más oscuros de Scadrial, nuestros reporteros viajan entre mundos para traerte las últimas noticias, análisis y descubrimientos sobre la vasta red de historias tejidas por la mismísima Investidura.',
  },
  {
    t: 'p',
    v: 'Aquí encontrarás crónicas detalladas sobre los avances en Luzdeplata, reportajes exclusivos sobre los movimientos de las diferentes Esquirlas y estudios profundos sobre los ecos del pasado que aún resuenan en el presente.',
  },
  {
    t: 'p',
    v: 'Desde las tormentas de Roshar hasta las brumas de Scadrial, desde el sol de Taldain hasta las umbras de Treno, CopperNews te mantiene informado con rigor y precisión. Porque en un Cosmere en constante cambio, solo hay una verdad inmutable: el conocimiento es poder, y nosotros te lo entregamos en cada edición.',
  },
]

export const CN_REDACCION = [
  {
    t: 'p',
    v: 'Desde los rincones más remotos del Cosmere hasta los pasillos más iluminados de Luzdeplata, el equipo de CopperNews trabaja incansablemente para traerte información veraz, rigurosa y libre de influencias externas (o al menos de aquellas que no podamos sortear).',
  },
  {
    t: 'p',
    v: 'Cada reportero de nuestra red de corresponsales arriesga más que su reputación al adentrarse en los misterios de la Investidura, los entresijos de la política interplanetaria y los fenómenos que los propios dioses preferirían mantener ocultos. Ya sea descifrando textos antiguos en Sel, investigando tramas de poder en Scadrial o informando desde el mismísimo borde de la existencia en Treno, nuestro equipo no descansa en su búsqueda de la verdad.',
  },
  {
    t: 'p',
    v: 'La redacción de CopperNews no solo informa, sino que documenta la historia a medida que se escribe, asegurándose de que el conocimiento no se pierda entre los pliegues de los Reinos.',
  },
  {
    t: 'p',
    v: 'Porque en un Cosmere donde la información es poder, nosotros te la entregamos en tinta, metal y luz.',
  },
  { t: 'p', v: 'Haz clic para tener más información sobre cada una de las personas:', center: true },
]

export const CN_EDICIONES_INTRO = [
  {
    t: 'p',
    v: 'Bienvenidos a la puerta de entrada a todo lo que hemos documentado, investigado y analizado en cada uno de nuestros números. Esta sección no solo es el reflejo de nuestro trabajo, sino también el archivo viviente de un momento en el tiempo, un compendio de los eventos que han marcado los mundos del Cosmere. Cada edición es una cápsula informativa que captura la esencia de lo que sucede en los reinos y planetas más allá de nuestra vista, pero que incide profundamente en el día a día de todos los habitantes del Cosmere.',
  },
  {
    t: 'p',
    v: 'Las noticias, los reportajes, las investigaciones y las críticas son el corazón de lo que ofrecemos. Cada número lleva consigo el trabajo de una redacción dedicada a desenterrar la verdad, desterrar los rumores y ofrecer a nuestros lectores un análisis imparcial, pero profundo, de los sucesos que nos afectan.',
  },
  {
    t: 'p',
    v: 'Es en estas páginas donde se cruza el pensamiento crítico con el contexto histórico, donde las voces de los expertos se mezclan con las experiencias cotidianas de los ciudadanos. El objetivo es uno solo: ofrecer a nuestros lectores las herramientas necesarias para comprender mejor el mundo que les rodea, con sus luces y sombras, y entender los hilos invisibles que conectan a todos los habitantes del Cosmere.',
  },
  {
    t: 'p',
    v: 'Cada edición es, por tanto, una invitación a reflexionar, a cuestionar, y, sobre todo, a explorar. No solo buscamos contar lo que pasa, sino también cómo y por qué pasa. Porque, como siempre decimos en nuestra redacción:',
  },
]

export const CN_EDICIONES_META = [
  { slug: 'n1-noviembre-2022', numero: 'EDICIÓN NOVIEMBRE 2022' },
  { slug: 'n2-diciembre-2022', numero: 'EDICIÓN DICIEMBRE 2022' },
  { slug: 'n3-abril-2023', numero: 'EDICIÓN ABRIL 2023' },
]

// ===== Organigrama de La Redacción =====

export const CN_ORGANIGRAMA = [
  {
    id: 'cansaythos',
    nivel: 1,
    cargo: 'Editora Jefe',
    nombre: 'Cansaythos',
    descripcion:
      'Cansaythos, conocida como Sayth, es una dragona de Yolen cuyo deseo de buscar la verdad la ha llevado a ser una de las figuras más influyentes en la redacción. Criada entre las antiguas bibliotecas de Yolen, Sayth ha pasado su vida investigando y desentrañando secretos de los distintos mundos del Cosmere. Su capacidad para identificar la esencia de las historias, separando los hechos de la interpretación, la convirtió rápidamente en una periodista aclamada. A pesar de su naturaleza imponente como dragona, Sayth es conocida por su imparcialidad y su dedicación a la objetividad, algo que la ha hecho indispensable como editora. Se dice que su longevidad y experiencia le permiten ver las conexiones entre los eventos de manera única, lo que la convierte en una de las voces más confiables en el mundo de la información del Cosmere.',
  },
  {
    id: 'kathrin',
    nivel: 2,
    cargo: 'Jefa de Redacción',
    nombre: 'Kathrin Dillard',
    descripcion:
      'Kathrin Dillard nació en el corazón de Elendel, la capital de la industria y el comercio en Scadrial. Desde joven, se destacó por su habilidad para destilar la verdad en medio del ruido de las intrigas políticas y los complejos sistemas económicos que gobernaban la ciudad. Su enfoque meticuloso y su implacable objetividad la llevaron a ascender rápidamente dentro del mundo del periodismo. Con una mente afilada como una cuchilla, Kathrin es conocida por su capacidad para mantener la redacción en orden, asegurándose de que cada pieza publicada tenga un impacto significativo y esté basada en hechos sólidos. Su experiencia en Elendel, donde la información es poder, le ha permitido comprender profundamente las dinámicas sociales y económicas, lo que la convierte en una de las editoras más respetadas del Cosmere. Detrás de su mirada severa se oculta un gran sentido del humor, aunque pocos logran verlo debido a su enfoque profesional.',
  },
  {
    id: 'shaeli',
    nivel: 3,
    cargo: 'Jefa de Reporteros',
    nombre: 'Shaeli-hija-Alina',
    descripcion:
      'Originaria de Shinovar, Shaeli-hija-Alina es conocida por su implacable búsqueda de la verdad y su paciencia infinita. Criada en una cultura que valora la honestidad y la integridad por encima de todo, se ha ganado su puesto como Jefa de Reporteros gracias a su enfoque meticuloso y su habilidad para manejar a los reporteros más testarudos. Su aguda intuición para detectar historias y su capacidad para calmar incluso las situaciones más tensas la convierten en la líder ideal de su equipo. A pesar de su reputación como una mujer de pocas palabras, su liderazgo se refleja en el respeto que genera entre su equipo. Shaeli-hija-Alina es incansable en su lucha por asegurar que cada historia se cuente con la mayor precisión y claridad posibles, sin importar lo difícil que sea descubrirla.',
    subordinados: [
      {
        id: 'tercera',
        nivel: 4,
        cargo: 'Comercio Interplanetario',
        nombre: 'Tercera de la Noche',
        descripcion:
          'Originaria de Primero del Sol, Tercera de la Noche proviene de una familia de tramperos, un entorno donde la astucia y el análisis de los movimientos ajenos son clave para sobrevivir. Su experiencia en su hogar con los Venidos de Arriba la convirtió en una reportera astuta y perspicaz, capaz de desentrañar los complejos entresijos del comercio interplanetario. Se convirtió en una de las reporteras más confiables y perspicaces en su campo gracias a su habilidad para descifrar acuerdos, identificar intereses ocultos y rastrear el origen de las transacciones. Su mirada aguda para detectar patrones en el comercio entre mundos y su enfoque meticuloso la han llevado a exponer fraudes y acuerdos secretos, siempre con un enfoque inquebrantable en la verdad.',
      },
      {
        id: 'thaddeus',
        nivel: 4,
        cargo: 'Crímenes y Política',
        nombre: 'Thaddeus Gale',
        descripcion:
          'Nacido y criado en Puerto Seco, en Scadrial, Thaddeus Gale tiene una comprensión profunda de las sombras que se extienden entre la ley y el crimen. Creció en una ciudad donde los límites entre ambos a menudo se difuminan, y eso le permitió desarrollar una habilidad excepcional para descubrir las historias que muchos prefieren mantener en las sombras. Con un enfoque directo y una voluntad inquebrantable de sacar la verdad a la luz, ha destapado más de un escándalo que ha sacudido las estructuras de poder en Scadrial. Se dice que tiene una red de informantes que se extiende desde las alcantarillas hasta los altos pasillos del gobierno, y que nada se le escapa.',
      },
      {
        id: 'jeremiah',
        nivel: 4,
        cargo: 'Experto en el Más Allá',
        nombre: 'Jeremiah Dulceumbra',
        descripcion:
          'Jeremiah Dulceumbra estudión en Luzdeplata, donde se especializó en temas que desafían la lógica humana. Su obsesión por lo desconocido lo llevó a documentar aspectos del Más Allá que ningún otro corresponsal se atrevió a tocar. Sin embargo, hace tiempo que su presencia se ha convertido en un enigma, ya que, a pesar de las numerosas peticiones de reportajes y respuestas, Jeremiah nunca ha vuelto a contestar. Hoy en día, su nombre está vinculado a los relatos más extraños y desconcertantes que jamás hayan sido escritos.',
      },
      {
        id: 'amalesh',
        nivel: 4,
        cargo: 'Corresponsal de Guerra',
        nombre: 'Amalesh Gautam',
        descripcion:
          'Originario de Alezkar, en Roshar, Amalesh Gautam lleva la guerra en la sangre. Criado en una región famosa por su fervor belicista, donde los conflictos son parte del tejido social, su experiencia en el campo de batalla lo ha hecho un experto en los aspectos más crudos de la guerra. Su enfoque no solo es táctico, sino también humano: Amalesh no solo cubre los detalles de los enfrentamientos, sino también las historias de aquellos que viven en las sombras de los campos de batalla. Con una perspectiva única sobre la violencia y el sufrimiento, tiene un instinto natural para captar la complejidad de las situaciones bélicas, transmitiendo con precisión las emociones y las realidades detrás de los conflictos. Aunque su trabajo en el periódico se centra en la cobertura de las zonas de guerra y las políticas militares, su humanidad y la comprensión de los costosos sacrificios de la guerra lo convierten en uno de los reporteros más respetados de la redacción.',
      },
      {
        id: 'wambleeska',
        nivel: 4,
        cargo: 'Investigador Realmático',
        nombre: 'Wambleeska Ashkii',
        descripcion:
          'Wambleeska Ashkii, originario de Luzdeplata, es un experto en la teoría realmática, un campo de estudio que explora las interacciones entre los diferentes Reinos del Cosmere. Su capacidad para identificar y analizar anomalías realmáticas le ha ganado una reputación como uno de los investigadores más astutos y respetados. En su rol dentro del periódico, Wambleeska realiza investigaciones mensuales sobre fenómenos que descolocan la lógica común, arrojando luz sobre misterios que pocos se atreven a tocar. Sus reportajes, aunque profundos, se destacan por su claridad y accesibilidad, logrando captar tanto a expertos como a lectores curiosos.',
      },
    ],
  },
  {
    id: 'brillafirme',
    nivel: 3,
    cargo: 'Editor de Opinión',
    nombre: 'Brillafirme el Mudo',
    descripcion:
      'Originario de Hallandren, en Nalthis, Brillafirme es un Retornado cuya habilidad para comunicar no depende de las palabras. Aunque es mudo, su trabajo como editor de opinión se caracteriza por una agudeza sin igual. No solo escribe artículos críticos y mordaces, sino que también se encarga de revisar las cartas de los lectores, siempre con el mismo rigor y precisión que se espera de él. Su capacidad para detectar el más mínimo error en la lógica o el tono de las cartas le ha valido una reputación temida y respetada. Su cita más famosa, «Como diga lo que pienso, me llevan preso», refleja su estilo sin filtros y su disposición a enfrentarse a cualquier tema con la verdad, por incómoda que sea.',
  },
  {
    id: 'hereman',
    nivel: 3,
    cargo: 'Analista de Contenidos',
    nombre: 'Hereman el Dula',
    descripcion:
      'Desde las tierras de Duladel, en Sel, Hereman el Dula es un experto en el análisis de textos y la veracidad de la información. Su capacidad para contrastar datos y detectar inconsistencias lo convierte en un pilar fundamental dentro del equipo editorial. Con una mente aguda y meticulosa, Hereman asegura que cada palabra publicada sea precisa, contextualizada y fiel a la verdad. Su talento para las traducciones y el análisis profundo de los textos lo ha colocado como una de las figuras más respetadas en la redacción. En sus momentos libres, se dedica a escribir proverbios dulas, sabias reflexiones que nunca dejan de sorprender a sus colegas. ¡Kolo!',
  },
  {
    id: 'siarella',
    nivel: 3,
    cargo: 'Ilustradora',
    nombre: 'Siarella Drahmi',
    descripcion:
      'Viranya «manosinvestidas» Celdrí, es una ilustradora originaria de Hallandren, Nalthis. Su talento para capturar los matices del color y la luz en sus obras la ha convertido en una de las artistas más solicitadas del Cosmere. En su trabajo para el periódico, Viranya crea ilustraciones vibrantes que no solo ilustran los reportajes, sino que también transmiten emociones a través de una paleta de colores que se ajusta a cada historia. Su habilidad para captar la esencia de los momentos más complejos, utilizando matices que otros artistas no perciben, la hace destacar. Se dice que Viranya tiene una conexión profunda con el color, capaz de ver más allá de lo visible y dotar a sus creaciones de una vida que cautiva y conmueve.',
  },
]

// ===== Ediciones =====
export const CN_EDICIONES = [
  {
    slug: 'n1-noviembre-2022',
    fecha: '27 NOVIEMBRE 2022 · EDICIÓN ESPECIAL',
    bloques: [
      {
        t: 'articulo',
        titulo: 'Intento fallido de hackeo en la cuenta de twitter',
        lede: 'En la pasada noche hemos sufrido uno de los episodios más terroríficos de la historia de la cuenta. Han intentado vender investidura de contrabando utilizando nuestro Twitter como foco para llegar a vosotros. Afortunadamente, la rápida intervención de los seguidores y las cotorras ha conseguido evitar que pobres usuarios caigan en la trampa de comprar Investidura de Treno, con los consiguientes problemas que eso trae consigo. Los malhechores han dejado, además de la angustia en el cuerpo de las cotorras, el mensaje «ODIUM REINA» en las paredes de sus oficinas.',
      },
      { t: 'img', src: n1_0, caption: 'Captura del mensaje publicado en la cuenta.' },
      { t: 'img', src: n1_1, caption: 'Mensaje «ODIUM REINA» dejado por los malhechores.' },
      {
        t: 'cols',
        cols: [
          {
            t: 'box',
            titulo: 'Estado de las oficinas de la Coppermind',
            contenido: ['Imagen de Connor Chamberlain, un testigo.', 'Hombre misterioso visto huyendo de la escena.'],
          },
          {
            t: 'box',
            titulo: 'Numerosos testigos del suceso',
            contenido: [
              'Numerosos testigos del suceso han relatado la misma versión de los hechos a los agentes encargados de la investigación. Un hombre sospechoso, de numerosas cicatrices en los brazos, fue avistado mientras se alejaba volando de la zona.',
            ],
          },
        ],
      },
      {
        t: 'articulo',
        titulo: '¿Han sido las cotorras suplantadas por kandra?',
        p: 'El mayor miedo que existe ahora mismo entre la población es si sus queridas cotorras (Kokerlii, Sak y Cotónica) se encuentran en buen estado. Este medio ha conseguido hablar con ellas y, aunque asustadas por lo ocurrido, se muestran confiadas en que las autoridades sean capaces de dar con el culpable. Por el momento, y hasta que la investigación arroje más datos sobre el asunto, planean continuar como hasta ahora, «como si nada hubiera pasado», acciones que, a muchos nos extrañan y que nos hacen plantearnos… ¿Serán ellas las originales… o habrán sido reemplazadas por Inmortales Sin Rostro?',
      },
      {
        t: 'articulo',
        titulo: 'Las organizaciones del cosmere se posicionan sobre el suceso',
        p: 'Debido a la gravedad de lo ocurrido, se han desplegado gran cantidad de recursos, medios y oficiales desde todos los puntos del Cosmere para ponerle nombre al culpable. Mientras tanto, desde nuestro medio hemos conseguido hablar con varias de las organizaciones más importantes de nuestro universo, aunque ninguna de ellas se haya atribuido la autoría en las horas que han pasado.',
        p2: 'La Decimoséptima Esquirla ha sido la primera que ha querido dar declaración al público, dejando muy claro que «no se puede permitir que se interfiera de esta manera en los asuntos del Cosmere sin que haya un culpable que pague por ello». Según sus propias palabras, formarán parte activa de la investigación.',
        p3: 'Los Hijos de Honor parecen ajenos por completo a lo ocurrido, ya que aseguran que la primera noticia de que algo así había pasado fue cuando nosotros mismos nos pusimos en contacto con su cabecilla actual.',
        p4: 'Por otro lado, los Sangre Espectral se niegan a hacer declaraciones y se cierran aún más en banda cuando se deja caer que el modus operandi utilizado en este crimen suele coincidir bastante con otros casos en los que han reclamado la autoría de manera inmediata.',
        p5: 'El único dato a mayores que se nos ha revelado ha sido que en las inmediaciones hay una plaga de alimañas llamadas cremlinos, aunque desconocemos su procedencia.',
      },
      { t: 'img', src: n1_2, caption: 'Las organizaciones del Cosmere se posicionan sobre el suceso.' },
      {
        t: 'box',
        titulo: 'Imagen de archivo',
        contenido: ['Imagen de archivo de un arcanista de Luzdeplata facilitada por David Palumbo.'],
      },
      {
        t: 'articulo',
        titulo: 'Alomante Jak, completamente consternado',
        lede: 'Conseguimos hablar con Jak, que se muestra muy afligido por lo acaecido en las oficinas de la Coppermind,',
        p: '«Esto es un claro caso de invasión de espectros de las brumas. Me encargaría yo mismo de la amenaza, como bien saben mis queridos lectores, pero ahora mismo estoy envuelto en un asunto para recuperar los escritos perdidos del Consejero de los Dioses que podréis disfrutar en el próximo pasquín».',
      },
      { t: 'img', src: n1_3, caption: 'Alomante Jak, completamente consternado.' },
      {
        t: 'articulo',
        titulo: 'Un nuevo investigador llega desde Nalthis',
        p: 'Parece que ninguno de los planetas conocidos del Cosmere quiere dejar pasar la oportunidad de ayudar a las queridas Cotorras de la Copper, por lo que la propia Edgli manda a un detective que, aunque novato en el campo, ha mostrado muy buenas cifras en la resolución de casos, Sondeluz o, como le conocen sus cercanos, Sondeholmes. Aunque sus métodos no son siempre tradicionales (recordemos el inconveniente que hubo cuando utilizó una ardilla despertada que chillaba como una marrana para poder conseguir información en la Corte de los Dioses), sus logros son más que evidentes, por lo que celebramos su incorporación al equipo de investigación.',
      },
      { t: 'img', src: n1_4, caption: 'Un nuevo investigador llega desde Nalthis.' },
      ],
  },
  {
    slug: 'n2-diciembre-2022',
    fecha: '28 DICIEMBRE 2022 · EDICIÓN ESPECIAL',
    bloques: [
      {
        t: 'articulo',
        titulo: 'Continúa la investigación sobre el asalto a la coppermind',
        p: 'Pese a haber transcurrido ya un mes desde el suceso, poco se ha podido deducir sobre el ataque que recibieron las oficinas de la coppermind en español el mes pasado. La falta de pruebas y de testigos fiables ralentiza y dificulta la obtención de pruebas y nuevos sospechosos. Parece que por el momento se ha descartado que la organización de los Sangre Espectral se encuentre involucrada en lo sucedido y el trabajo de traducción se ha reanudado sin ningún tipo de problema.',
      },
      {
        t: 'cols',
        cols: [
          {
            t: 'imagen_texto',
            titulo: 'Estado de las oficinas de la Coppermind',
            texto: 'Imagen de Egilde Art tomada en la presentación de la reina.',
          },
          {
            t: 'box',
            titulo: 'Los interrogantes siguen abiertos',
            contenido: [
              'La investigación continúa su curso y aún no hay responsables. Mientras tanto, la redacción sigue trabajando para ofreceros la información más fiel en cada nuevo número.',
            ],
          },
        ],
      },
      {
        t: 'articulo',
        titulo: 'La reina sisirinah se tiñe el pelo',
        p: 'Conseguimos infiltrarnos en la Corte de los Dioses y hablar con las doncellas Pahn Khal que atienden a su majestad la reina. Lo que en un principio parecían simples tratamientos para mantener su larga cabellera saludable y con buen aspecto, se han confirmado como mascarillas de color y tintes. Pese a las innumerables pruebas que tenemos en su contra, los sacerdotes del rey-dios sostienen que la dama es la propia descendiente de Vo y, por lo tanto, heredera de los mechones reales.',
        p2: 'Las diferentes facciones dentro de la Corte se mantienen divididas, ya que, por un lado, están los Retornados que opinan que la reina ha venido para desestabilizar la política del país y hacer caer la monarquía desde dentro. Por otro lado, están los que, según ellos, conocen de primera mano a la susodicha y aseguran que solo utiliza los colorantes para su cabello para ocasiones especiales en las que quiere combinar diferentes secciones del pelo con sus vestidos, proporcionando una melena llena «de luz y de color».',
      },
      {
        t: 'section',
        titulo: 'Pronóstico del tiempo',
      },
      {
        t: 'p',
        v: 'Fin de semana en Roshar que se espera gris, con nubes, con gran número de precipitaciones en el continente. Triste (meteorológicamente hablando). Como ven, no hay palabras bonitas para describir el tiempo que nos deparan los próximos días, pero podemos decir que estamos acostumbrados a ello, ya que se acerca el cambio de año y, con él, el Llanto. Afortunadamente, y como el año que comienza es impar, tendremos un día de descanso.',
      },
      {
        t: 'p',
        v: 'En otros planetas del Cosmere tenemos previsiones más esperanzadoras. Si su intención es viajar al Lado Diurno de Taldain está de suerte, porque el sol no le dará un minuto de descanso. En Scadrial, tendremos en la Cuenca de Elendel el sábado cielos muy cubiertos con precipitaciones moderadas e incluso posibilidad de alguna tormenta. Temperaturas nocturnas sin cambios. Será una oportunidad perfecta para una ceremonia supervivencialista, ya que se esperan las tan ansiadas brumas.',
      },
      {
        t: 'p',
        v: 'En la zona sur del planeta, el viento soplará con fuerza y el domingo se espera un día muy nuboso, con chubascos débiles, ocasionalmente con granizo y con tormenta. La cota de nieve se situará en torno a 700 metros y ligero descenso de las temperaturas que dejarán heladas débiles en la cordillera.',
      },
      {
        t: 'section',
        titulo: 'Cosmóscopo',
        sub: '(sin adivinación, aprobado por fervorosos vorin)',
      },
      {
        t: 'horoscopo',
        items: [
          ['AAGAL UCH', '(21 marzo – 20 abril)', 'Recibirás otra invitación de boda para este año, por lo que empezarás a trabajar como apoyo en las carreras de los puentes. Hecho que, paradójicamente, te impedirá asistir a las bodas.'],
          ['RRENDOS', '(21 abril - 20 mayo)', 'Vivirás una experiencia extracorpórea. Aunque el viaje astral será solo de ida, y te verás obligado a fregar cien veces Elantris hasta poder pagarte la vuelta.'],
          ['MISHIM', '(21 mayo – 20 junio)', 'No seas tan pesimista: lo que ahora piensas que es tocar fondo, en realidad es lo más alto que llegarás en la vida. Confórmate, no estás en los puentes.'],
          ['ESTRELLANOCTURNA', '(21 junio – 21 julio)', 'Tendrás un accidente aéreo por falta de luz tormentosa. Acabarás en una isla desierta y, a pesar de que nadie te rescatará, los selladores de sangre te encontrarán.'],
          ['NIZH DA', '(22 julio – 22 agosto)', 'Emprenderás un negocio durante los primeros meses, generando así «chorrocientosmil» de puestos de trabajo en la Cuenca de Elendel y transformando la zona en la primera potencia mundial.'],
          ['SALAS', '(23 agosto – 22 septiembre)', 'Te encontrarás a ti mismo en un tugurio de musgoardiente. El hedor que embriaga el ambiente transformará tu visión del mundo para siempre.'],
          ['NOMON', '(23 septiembre – 22 octubre)', 'Empezarás a ver cosas extrañas en tu casa: puertas que se cierran, objetos que caen misteriosamente de sus repisas, ruidos en la noche… Nosotros sabemos que es tu gato, pero oye, si crees en las umbras no seremos nosotras quienes limiten tus sueños.'],
          ['LÁGRIMA', '(23 octubre – 21 noviembre)', 'Momento idóneo para convertirte en saltamundos: emprender un viaje, conocer otro planeta y vivir una apasionante aventura.'],
          ['PRIMERO DEL PRIMERO', '(22 noviembre – 21 diciembre)', 'En los próximos meses tu estado de salud va a ser envidiable. Revisa tu ascendencia, no sea aónica y en realidad sea que te ha pillado la Shaod.'],
          ['GUARDIANLEJANO', '(22 diciembre – 21 enero)', 'Dijiste que era la última vez que bebías blanco comecuernos. Sé que disfrutar de la vida es importante, ¡pero no exageres!'],
          ['AAGAL NOD', '(22 enero – 18 febrero)', 'En los próximos días vas a notar como se despierta en ti el deseo de desarrollar tus habilidades culinarias. Compra el libro de recetas de Kiin y Roca, métete en la cocina y explota tus habilidades preparando exquisitos y refinados platos.'],
          ['OEM', '(19 febrero – 20 marzo)', 'A veces pensarás que todo el mundo te odia y que está en tu contra… y eso te pasará porque, por desgracia, te pareces físicamente a Moash.'],
        ],
      },
      {
        t: 'section',
        titulo: 'Artículo de opinión',
      },
      {
        t: 'box',
        titulo: 'Hemalurgia: Cuando la moda de las perforaciones se va de las manos',
        contenido: [
          'Vivimos tiempos inciertos, momentos en los que ver a jovenzuelos perforados por todas partes con metal te hace plantearte: ¿es acaso moda? ¿O está adquiriendo acceso a los poderes de un nacido del metal de la manera más macabra posible?',
          'Las autoridades no hacen nada cuando se denuncia a estos malhechores, ya que se escudan en que es «moda» o «elección en el atuendo que llevan», pero tampoco creo que sea moralmente aceptable permitir que estas nuevas generaciones vayan por la calle con ese aspecto, ya que hace parecer que nuestra sociedad se está convirtiendo en algo de baja clase y descuidado.',
          '¿Qué será lo próximo? ¿Sangre-koloss en los altos mandos de la Cuenca? No se pide que volvamos a los tiempos en los que la ceniza caía del cielo y el látigo era la manera de motivar al trabajador, pero lo que vemos hoy en día dista mucho de la sociedad perfecta que Armonía planteó.',
          'Además, ¿cómo podemos saber que verdaderamente es un mero elemento decorativo? Exigimos un control de estos metales y de la gente que los utiliza, un certificado acreditativo que deban portar siempre para asegurarnos de que no suponen un problema para las gentes decentes y honradas de Elendel.',
        ],
        firma: 'Vuestra columnista favorita: Abrigain',
      },
      {
        t: 'section',
        titulo: 'En otras noticias',
      },
      {
        t: 'p',
        v: 'Saltamundos indignadas ante los pudorosos rosharianos. Aumenta la venta de guantes en las cercanías del planeta.',
      },
      {
        t: 'p',
        v: 'Luzdeplata a la cabeza de la investigación del resfriado común y una posible cura para los afectados.',
      },
      {
        t: 'section',
        titulo: 'Espacio publicitario',
      },
      {
        t: 'cols',
        cols: [
          { t: 'anuncio', h: 'Sellos para el hogar', t1: '¿Cansado de que tu casa sea simple y sin estilo? Con nuestros sellos conseguirás que todo tenga mucho mejor aspecto. ¡Y SIN CAMBIAR DE MUEBLES!', f: 'Busca a Wan ShaiLu' },
          { t: 'anuncio', h: 'Hammond y sus violentos', t1: '¿Tiene una mudanza? ¿Está cansado de reventarse la espalda levantando esas pesadas cajas? Llame a Hammond y sus violentos y en menos de lo que salen las brumas llevaremos sus pertenencias a donde quiera.', f: 'Brazos de Peltre Hammond' },
          { t: 'anuncio', h: 'Sondeluz, un Detective Divino', t1: '¿Animales que se comportan de forma rara? ¿Extraños pasajes que salen de tu baño comedor? ¿Algún cambio de color en tu hogar no intencionado?', f: 'Sondeluz, un Detective Divino' },
          { t: 'anuncio', h: 'Dahkor a domicilio', t1: 'Contracturas, dolor lumbar o de articulaciones… Llame ahora a nuestro servicio Dahkor a domicilio y olvídese de sus traumatismos. Le mejoraremos el esqueleto completamente en menos de lo que tarda en quemarse un elantrino.', f: 'Monjes Dahkor' },
          { t: 'anuncio', h: 'Adrenalina Pura', t1: 'Caída libre, rafting en aguas bravas, escalada de murallas…', f: 'Aventuras Raoden & Karata, Adrenalina Pura' },
          { t: 'anuncio', h: 'Ardillas que chillan como marranas', t1: '¿Harto de asistir a eventos sociales en los que no te sientes cómodo? Acaba con ellos, tenemos la solución: ¡ardillas que chillan como marranas!', f: 'Sondeluz el Audaz' },
        ],
      },
    ],
  },
  {
    slug: 'n3-abril-2023',
    fecha: '23 ABRIL 2023 · EDICIÓN ESPECIAL ANIVERSARIO',
    bloques: [
      {
        t: 'box',
        titulo: 'Nota de la dirección',
        contenido: [
          'Tal día como hoy, hace un año, empezaba la aventura visible de la Coppermind. Fue el momento en el que por fin vio la luz la web en español y el día de su inauguración. Pero el verdadero trabajo se hizo tanto antes como después de ese día, ya que el proyecto se inició en enero de 2021. Cientos de artículos por traducir; cientos de artículos traducidos que luego necesitaron actualización y que se convirtieron en cientos de artículos que subir a la web… Y hoy nos encontramos en más de 1600 artículos ya en español, cuando el anterior 23 de abril eran solo 3: Scadrial, el asesinato de Gavilar y Adonalsium.',
          'Sabemos que el ritmo al que tenemos disponible los artículos no es todo lo veloz que algunos querrían, pero recordad lo que os decimos siempre: preferimos calidad en su traducción y veracidad en la información a tener todo «legible pero incorrecto».',
        ],
      },
      {
        t: 'p',
        v: 'Sí, lo sabemos. Normalmente, el tono en el que escribimos en Twitter es más distendido y las cotorras hacen de las suyas… No os preocupéis, que en este periódico hay cotorras para rato y unas cuantas ocurrencias absurdas de las que nos caracterizan. Pero hoy, especialmente hoy, nos ponemos la careta de arcanistas para poder comportarnos de una forma más seria y hablaros con sinceridad.',
      },
      {
        t: 'box',
        titulo: 'Gracias, de corazón',
        contenido: [
          'A todos nuestros increíbles seguidores, sólo queríamos tomarnos un momento para expresar nuestra más sincera gratitud por vuestro apoyo. Vuestros «me gusta», comentarios y publicaciones compartidas significan mucho para nosotras y nos inspiran para seguir creando y trabajando en la traducción. Gracias por formar parte de este viaje y por creer en el proyecto. Prometemos seguir ofreciéndoos contenido, risas, información, locuras y, por supuesto, lore del Cosmere.',
          'Gracias de nuevo por vuestro apoyo incondicional. Kokerlii, Sak y Cotónica.',
          'Tras este pequeño, pero necesario, huequito… Ahora sí, vayamos con el periódico como tal. ¡Disfrutadlo!',
        ],
      },
      {
        t: 'articulo',
        titulo: 'Resuelto el caso del ataque a la coppermind del pasado noviembre',
        p: 'Han pasado ya cinco meses desde que las oficinas de traducción de la Coppermind sufrieran un importante hackeo de sus redes sociales. Los malhechores intentaron vender Investidura de contrabando utilizando su cuenta de Twitter como manera de llegar al mayor número posible de gente.',
        p2: 'HOY, EN PRIMICIA, Kokerlii, Sak y Cotónica, las conocidas como «Cotorras de la Copper», rompen su silencio y nos dan todos los detalles de lo sucedido.',
      },
      {
        t: 'articulo',
        titulo: 'Recetas cosmeriles',
        lede: 'Han sido varios meses de negociaciones y pruebas, pero al final se ha conseguido. Para todos aquellos de vosotros que disfrutáis con la comida exótica, para los saltamundos frustrados que no podréis ir a su lugar de origen a probarlas y para aquellos que sentís temor a viajar por el Reino Cognitivo… Aquí están, finalmente, las «Recetas Cosmeriles», un espacio en nuestro periódico en el que os ayudaremos a transportaros a otros lugares gracias a vuestras papilas gustativas.',
      },
      {
        t: 'receta',
        titulo: 'Bocaditos dulces de Pahn Kahl',
        ingredientes: [
          '1 sobre de levadura química',
          '4 huevos talla L (a temperatura ambiente)',
          '260 gramos de azúcar',
          'Ralladura de media naranja',
          'Ralladura de medio limón',
          '150 ml de leche evaporada',
          '3 cucharadas de mantequilla derretida',
          'Media cucharadita de canela',
          'Un cuarto de cucharadita de sal',
          'Moldes para magdalenas',
        ],
        instrucciones: [
          'Tamiza la harina en un bol y reserva.',
          'Ralla la naranja y el limón. También puedes pelarlas y picarla después. Ten cuidado de no llegar a la parte blanca de la piel, ya que dará amargor a la receta.',
          'Mezcla con un robot de cocina o una picadora el azúcar con la ralladura para crear el azúcar cítrico. Separa un par de cucharadas de esta mezcla, porque servirán para la decoración al final.',
          'Bate los huevos hasta que estén esponjosos (a mano es complicado, mejor utiliza varillas manuales o de batidora).',
          'Mezcla la mantequilla derretida, la leche evaporada, la canela, el azúcar y la sal con los huevos batidos.',
          'Añade poco a poco la harina tamizada a la mezcla (mezclar bien cuando vayas añadiendo la harina para evitar grumos). Una vez esté todo integrado, bate hasta que la masa quede suave.',
          'Precalienta el horno a 180 grados centígrados mientras dejas reposar la mezcla unos 10 minutos.',
          'Coloca moldes para magdalenas y vete rellenándolos con la masa, pero solo hasta un tercio de su capacidad (ya que con el horneado subirán y se desbordarán). Espolvorea por encima el azúcar que habías reservado en un primer momento.',
          'Llévalos al horno colocando la bandeja a una altura baja.',
          'Deja que cocinen durante unos 20 minutos. Para comprobar si está listo, utiliza un palillo o cuchillo y pincha uno de los bocaditos. Si el palillo sale limpio, la masa ya está lista. Si sale con masa cruda, necesita estar en el horno más tiempo.',
          'Una vez haya terminado el horneado, pásalos a una rejilla para que puedan enfriar tanto por arriba como por abajo. Una vez estén a temperatura ambiente, están listos para disfrutar.',
        ],
      },
      {
        t: 'receta',
        titulo: 'Chouta (adaptación)',
        ingredientes: [
          '1 solomillo de cerdo',
          '1 huevo',
          'Salsa de soja',
          'Vinagre de manzana',
          'Harina de trigo',
          'Lechuga romana',
          'Cebolla morada',
          'Tortilla de trigo o de maíz',
          '20 gramos de mantequilla',
          '300 ml de caldo de carne',
          'Especias al gusto',
          'Abundante aceite para freír',
        ],
        instrucciones: [
          'Corta el solomillo en trozos del tamaño que prefieras (unos 2 o 3 centímetros de lado en este caso) y colócalos en un bol.',
          'Añade un huevo batido, unas 5 cucharadas de salsa de soja y unas 5 de vinagre de manzana y dale vueltas para que se reparta por la carne y déjalo reposar.',
          'Vete calentando una freidora o sartén con abundante aceite vegetal (el de tu elección).',
          'En una sartén, derrite 20 gramos de mantequilla. Añádele 1 cucharada colmada de harina y cocínala hasta que tueste.',
          'Una vez haya cambiado el color, añade poco a poco, y sin dejar de remover, el caldo de carne.',
          'Es el momento de añadir a la salsa las especias que quieras. En este caso se ha añadido media cucharada de curry, pimienta negra molida. Remueve bien y deja cocinar a fuego lento (dándole una vuelta de vez en cuando) hasta que espese. Si buscas una mayor intensidad en el sabor, puedes añadir una cucharada de concentrado Bovril.',
          'OPCIONAL: si quieres que la salsa quede muy fina, puedes pasarla por un colador.',
          'De nuevo con el bol con el solomillo. Enharina cada pieza de carne y ponla a freír hasta que tenga un color dorado y el exterior haya quedado crujiente. Colócalo sobre papel absorbente para eliminar el exceso de aceite que haya podido quedar.',
          'Corta, en tiras finas, media cebolla morada, lava bien dos o tres hojas de lechuga y prepara el resto de verduras que quieras añadir.',
          'Coloca una de las tortillas (de trigo o de maíz, a tu elección) sobre un plato.',
          'Añade las verduras que quieras sobre la tortilla y varios trozos de carne en fila.',
          'Deja caer sobre la carne la salsa que has preparado y cierra la tortilla hasta envolver todos los ingredientes.',
        ],
        nota: 'Como podéis ver, la primera receta es un manjar típico y muy conocido dentro de la cultura hallandrense. Unos bocaditos que, pese a ser un plato dulce, son muy refrescantes. Para conseguirlo, utilizamos las frutas cítricas que su clima permite recolectar, aprovechando la piel de dos frutas, la naranja y el limón. Son ideales como tentempié a cualquier hora del día, pero nada como deleitarse recostado en un diván, disfrutando del calor de Hallandren como si fueras un verdadero Retornado en la corte. El plato fuerte que os presentamos es una adaptación de la chouta herdaziana. Es un plato que, en su origen, consiste en un pan plano frito que envuelve carne frita y salsa, y se puede llevar en una mano. El pan plano que se utiliza es muy grueso y la carne utilizada en los campos de guerra suele ser flangria, que se mezcla con lavis molido, se forma en pequeñas bolas, se reboza y se fríe para, a continuación, introducirlo en el pan frito y cubrir todo con una generosa cantidad de salsa oscura. Hemos optado por hacer una adaptación con ingredientes que son más fáciles de conseguir que la lavis, ya que las perpendicularidades rosharianas son un terreno peligroso estos días. En el próximo número de «Recetas Cosmeriles», os traeremos una nueva elaboración: pedos de fervoroso.',
      },
      {
        t: 'section',
        titulo: 'Sucesos',
      },
      {
        t: 'suceso',
        titulo: 'Desapariciones',
        p: 'Desaparecen 1700 seguidores de una secta en una taberna. Hay quien los denomina los «nuevos iriali», debido a que se desconocen tanto los motivos como el lugar al que han ido a parar.',
      },
      {
        t: 'suceso',
        titulo: 'Robos',
        p: 'El Palaneo denuncia la desaparición de las cubiertas de numerosos libros de lo que es, a día de hoy, la mayor biblioteca conocida de Roshar, situada en Kharbranth.',
      },
      {
        t: 'suceso',
        titulo: 'Expulsión',
        p: 'Destituyen, tras años y múltiples quejas, a un profesor de la Universidad de Elendel por tergiversar la historia y enseñar, de manera deliberada, información errónea a sus alumnos. «Nadie era consciente de lo equivocado que estaba», dicen fuentes cercanas.',
      },
      {
        t: 'suceso',
        titulo: 'El gran debate',
        p: 'Terrible enfrentamiento entre arcanistas. Se reaviva de nuevo el debate sobre el estudio de nuestros mundos. ¿Cómo es mejor estudiar nuestra historia común? ¿En el orden en el que ocurren los sucesos, por orden de importancia, o según el interés del estudio?',
      },
      {
        t: 'suceso',
        titulo: 'Ataque al mercado',
        p: 'Gran revuelo en el mercado de Celebrant. Una mujer de piel oscura y el pelo largo y negro ha destruido un tapiz que representaba a una mujer de piel oscura y el pelo largo y negro.',
      },
      {
        t: 'suceso',
        titulo: 'Recaudación',
        p: 'Se inicia la campaña de recaudación bajo el lema «Más pobre que una cotorra de la copper» para poder hacerles llegar, incluso en su cautiverio, algo de pienso para alimentarse.',
      },
      {
        t: 'articulo',
        titulo: 'Gran reunión de eruditos del cosmere en luzdeplata',
        p: 'Los eruditos que se han reunido para este simposio son expertos en sus respectivos campos, y se han reunido para compartir entre sí sus conocimientos y percepciones.',
        p2: 'Se ha tratado desde la historia del Cosmere, hasta las propiedades únicas de sus diversos planetas y sistemas.',
        p3: 'Uno de los principales temas de debate serán los sistemas mágicos que existen en el Cosmere. Se han explorado las complejidades de estos sistemas y cómo interactúan entre sí.',
        p4: 'Otro tema de debate fueron las distintas razas y culturas que existen en el Cosmere. Desde los belicosos alezi hasta los eruditos elantrinos, ya que de la gran variedad de pueblos que habitan estos mundos, cada uno tiene sus propias costumbres y tradiciones.',
        p5: 'En general, el simposio ha sido una fascinante exploración del Cosmere y todas sus maravillas. Tanto si eres un erudito experimentado como un curioso recién llegado, seguro que ha habido algo para ti en esta gran reunión de mentes.',
      },
      {
        t: 'articulo',
        titulo: '¡Gran iniciativa por parte de los posaderos de Treno!',
        p: 'Debido a la creciente actividad turística en Treno, los dueños de posadas de los bosques trenoditas (conocidos comúnmente como bosques del infierno) han llegado a un acuerdo regulando el precio de la estancia en sus establecimientos.',
        p2: 'Es una gran noticia que las agencias de viajes del Cosmere han celebrado, ya que el precio por cada noche había ascendido a la locura de media bolsa de plata sin incluir el seguro anti-umbras en el importe.',
        p3: 'A partir de ahora, además de que dicha protección contra las umbras estará siempre vigente, el precio será de media bolsa de plata a la semana. Pero nos preguntamos… ¿Dónde tienen entonces la ganancia?',
      },
      {
        t: 'section',
        titulo: 'Artículo de opinión',
      },
      {
        t: 'box',
        titulo: 'Carreras ilegales: Cuando la diversión se convierte en ruina',
        contenido: [
          'Como habitante de Roshar, me preocupa profundamente las carreras ilegales con puentes que se han extendido por nuestra sociedad. En lugar de utilizar los puentes para cruzar los abismos de las Llanuras Quebradas, mucha gente ha empezado a correr ilegalmente con ellos, poniéndose a sí mismos y a los demás en peligro.',
          'Esta práctica no sólo es ilegal, sino también increíblemente peligrosa. Correr por los puentes es una tarea físicamente exigente que requiere mucho entrenamiento y resistencia. Quienes intentan cruzar los puentes sin el entrenamiento adecuado se exponen a sufrir lesiones o incluso a morir.',
          'Además, está causando daños a los propios puentes, que son caros de reparar. Ya es hora de que pongamos fin a esta práctica peligrosa e ilegal y empecemos a utilizar los puentes tal como fueron concebidos: esclavizar ojos oscuros y hacernos ricos con las gemas corazón.',
        ],
        firma: 'Vuestra columnista favorita: Abrigain',
      },
      {
        t: 'section',
        titulo: 'Entrevista en exclusiva con las «cotorras de la copper»',
      },
      {
        t: 'modal',
        titulo: 'Nos encontramos en las oficinas de traducción de la Coppermind, lugar en el que el pasado 25 de noviembre se vivieron momentos de suma tensión y nerviosismo. Para poder hablar de ello nos hemos reunido con las tres «Cotorras de la Copper», las principales afectadas por este hecho.',
        lineas: [
          ['Maxil', 'Bienvenidas a nuestro periódico, Kokerlii (K), Sak (S) y Cotónica (C).'],
          ['C', 'Gracias por invitarnos.'],
          ['M', 'Bien, como comentábamos antes, atacaron vuestras oficinas hace 5 meses, ¿verdad?'],
          ['S', 'Así es… Lo pasamos… Verdaderamente mal. Mucha angustia, muchos nervios… Los peores días de la Copper sin duda.'],
          ['M', 'Pero afortunadamente, recibisteis mucha ayuda y apoyo por parte de gran parte del mundo, ¿no?'],
          ['C', 'Sí. Estamos muy agradecidas con todos los que quisieron ayudarnos y se ofrecieron a investigar por su cuenta.'],
          ['M', 'Sondeluz ha dicho que la investigación ha llegado a su fin. ¿Quiere decir eso que ya se ha encontrado a los culpables?'],
          ['S', 'Si bueno… Estando todo controlado, ¿qué importa quién tuviera la culpa?'],
          ['M', '¿Disculpa? Está medio Cosmere pendiente de lo que os pasó y Sondeluz dice que os corresponde a vosotras decir quién hackeó vuestras redes sociales.'],
          ['C', 'Pues es que…'],
          ['S', 'Teníamos hambre… y había un anuncio en una web que decía «Pienso gratis para cotorras» y…'],
          ['K', 'Bueno, que la hemos lia’o parda.'],
          ['C', 'Y no nos quedó más remedio que intentar disimular. ¡Imagínate que se enteran las arcanistas!'],
          ['S', '… pues nos dejan otro mes más sin comer.'],
          ['K', 'Y esto… ¿Cuándo se emite?'],
          ['C', 'Habrá que ir preparando las maletas… ¡Cotorra la última!'],
        ],
      },
      {
        t: 'p',
        v: 'EN EL PRÓXIMO NÚMERO: «GUÍA DE “POLLOS” PARA ROSHARIANOS»',
        center: true,
        lede: true,
      },
      {
        t: 'section',
        titulo: 'Pasatiempos',
      },
      {
        t: 'p',
        v: 'Este fue el primer número en el que introdujimos pasatiempos, un pequeño toque de diversión entre tantas noticias. Sin embargo, como todo en CopperNews, no nos conformamos con lo básico. Hemos dado un paso más, y ahora los pasatiempos que ofrecemos son interactivos, para que podáis disfrutar de ellos de una forma aún más dinámica y entretenida. Ya no solo se trata de resolver acertijos, ¡sino de vivir la experiencia! Aquí tenéis los enlaces para adentraros en esta nueva versión, ¡y a divertirse mientras ejercitáis la mente!',
      },
      {
        t: 'btnrow',
        texto: 'Accede aquí a los pasatiempos',
        to: '/ocio/pasatiempos',
      },
    ],
  },
]