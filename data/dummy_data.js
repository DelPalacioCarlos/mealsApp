import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', '', '','https://1000marcas.net/wp-content/uploads/2019/12/Ferrari-Logo.png'),
  new Category('c2', '', '','https://static.vecteezy.com/system/resources/previews/020/502/472/non_2x/lamborghini-brand-logo-car-symbol-white-design-italian-automobile-illustration-with-black-background-free-vector.jpg'),
  new Category('c3', '', '','https://static.vecteezy.com/system/resources/previews/020/927/378/non_2x/toyota-brand-logo-car-symbol-with-name-black-design-japan-automobile-illustration-free-vector.jpg'),
  new Category('c4', '', '','https://s0.smartresize.com/wallpaper/817/465/HD-wallpaper-nissan-logo-logo-nissan-thumbnail.jpg'),
  new Category('c5', '', '','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LzqsPJ63eA-1zvOgU9NP0PHT2UYlcWiA7g&s'),
  new Category('c6', '', '','https://logowik.com/content/uploads/images/562_audi.jpg'),
  new Category('c7', '', '','https://i.pinimg.com/736x/c6/f7/e7/c6f7e7af7ade04fbb0d17956e2767ebe.jpg'),
  new Category('c8', '', '','https://www.designyourway.net/blog/wp-content/uploads/2024/09/what-font-is-in-the-ford-logo.jpg'),
  new Category('c9', '', '','https://wallpapers.com/images/hd/mercedes-benz-logo-pictures-9gu85me6lagkccfo.jpg'),
  new Category('c10', '', '','https://i.pinimg.com/474x/80/c0/7e/80c07e5aac19dcc63a8601c22741aee2.jpg'),

];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c10'],
    'Ferrari es una de las marcas más emblemáticas en la industria automotriz,',
    'Ferrari',
    'se fabrico',
    'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_4eb0775fbc654cfb89acda4a2dcf6809.webp',
    1947,
    
    [
      'Ferrari es una de las marcas más emblemáticas en la industria automotriz',
      'conocida por su lujo, alto rendimiento y éxito en el mundo de las carreras. La',
      'historia de Ferrari comenzó en 1939, cuando Enzo Ferrari fundó Auto Avio',
      'Costruzioni en Módena, Italia. Enzo era un ex piloto de carreras que decidió crear',
      'su propia escudería, inicialmente construyendo autos de carreras para otros',
      'fabricantes.',
     
    ],
    [
      'El modelo más comprado de Lamborghini en los últimos años es el Lamborghini Huracán, un superdeportivo que combina una increíble potencia con un diseño moderno y agresivo. Ha sido un éxito tanto en la pista como en la carretera. ',
      'Lamborghini Huracán: Este auto se lanzó en 2014 como sucesor del Gallardo (el modelo más vendido de Lamborghini antes del Huracán). Viene con un motor V10 de 5.2 litros, produciendo entre 610 y 640 caballos de fuerza dependiendo de la variante (Huracán EVO, Huracán Performante). Acelera de 0 a 100 km/h en aproximadamente 2.9 segundos. Precio: El precio base del Huracán es de $220,000 USD, pero dependiendo de la personalización, este puede superar los $250,000 USD.'
      
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2','c9'],
    'Lamborghini es una de las marcas de automóviles de lujo',
    'Lamborghini comenzó en 196',
    'simple',
    
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_02_m.jpg',
    10,
    [
      'El modelo más comprado de Lamborghini en los últimos años es el Lamborghini Huracán, un superdeportivo que combina una increíble potencia con un diseño moderno y agresivo. Ha sido un éxito tanto en la pista como en la carretera. ',
      'Lamborghini Huracán: Este auto se lanzó en 2014 como sucesor del Gallardo (el modelo más vendido de Lamborghini antes del Huracán). Viene con un motor V10 de 5.2 litros, produciendo entre 610 y 640 caballos de fuerza dependiendo de la variante (Huracán EVO, Huracán Performante). Acelera de 0 a 100 km/h en aproximadamente 2.9 segundos. Precio: El precio base del Huracán es de $220,000 USD, pero dependiendo de la personalización, este puede superar los $250,000 USD.'
     
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3','c8'],
    'Toyota Motor Corporation',
    'TOYOTA',
    'se fundo',
    'https://carnovo.com/wp-content/uploads/2023/10/gr-supra.jpg',
    1937 ,
    [
      'Toyota Motor Corporation es uno de los fabricantes de automóviles más grandes y exitosos del mundo, conocida por su innovación, fiabilidad y eficiencia en la  producción. La historia de Toyota es un ejemplo clásico de cómo la visión, la innovación y la mejora continua pueden llevar a una empresa a convertirse en un líder  mundial.',

      
    ],
    [
      'Orígenes:',
      ' •	Fundación: Toyota fue fundada en 1937 por Kiichiro Toyoda, aunque sus raíces están en la empresa Toyoda Automatic Loom Works, que fue fundada por su padre, Sakichi Toyoda, un inventor y empresario japonés. Kiichiro Toyoda se interesó por la industria automotriz mientras observaba el éxito de las empresas automovilísticas de Europa y Estados Unidos. Decidió transformar la empresa de su padre en un fabricante de automóviles.',
      '',
      '•	Primeros Modelos: En 1936, antes de fundar oficialmente Toyota Motor, Kiichiro Toyoda desarrolló el Toyota AA, un sedán de lujo que se considera el primer modelo de producción de Toyota. La primera planta de producción de Toyota se construyó en Koromo (hoy Toyota City), en Japón.'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4','c7'],
    'NISSAN',
    ' en Yokohama, Japón. ',
    '',
    'https://acnews.blob.core.windows.net/imgnews/large/NAZ_bb5451ef5d2b435983d22c6b23f333ed.webp',
    1933,
    [
      'Nissan Motor Co., Ltd. es un fabricante japonés de automóviles fundado en 1933 en Yokohama, Japón. La empresa comenzó como Jidosha-Seizo Co., Ltd. y poco después se integró con Tobata Casting para convertirse en Nissan Motors. Durante sus primeros años, la marca producía vehículos bajo el nombre "Datsun", que fue ampliamente usado hasta principios de los años 80.',
     
      'En las décadas de 1960 y 1970, Nissan se expandió internacionalmente, especialmente en Estados Unidos y Europa. Modelos como el Datsun 510 y la serie Z (como el Fairlady Z) ayudaron a establecer una buena reputación mundial. '
    ],
    [
      'El modelo más vendido de Nissan en los últimos años a nivel mundial es el Nissan Rogue, conocido en algunos mercados como Nissan X-Trail. Este SUV compacto ha ganado popularidad por su diseño moderno, eficiencia de combustible, tecnología de seguridad y espacio interior. Ha sido especialmente exitoso en Estados Unidos, Canadá y América Latina.',
      'Uno de los modelos menos vendidos y más criticados en la historia de Nissan fue el Nissan Murano CrossCabriolet, producido entre 2011 y 2014. Era una versión convertible del SUV Murano, con diseño poco convencional y escasa demanda. Fue un fracaso comercial debido a su alto precio y falta de atractivo para el mercado general.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c5', 'c6'],
    'BMW',
    ' empresa alemana ',
    '',
    'https://media.gq.com.mx/photos/628a7c7d500ac81936c48573/16:9/w_2560%2Cc_limit/P90461726_highRes_the-new-bmw-m4-csl-o.jpg',
    1916,
    [
      'BMW (Bayerische Motoren Werke AG) es una empresa alemana fundada en 1916. Sus orígenes están ligados a la fabricación de motores para aviones durante la Primera Guerra Mundial. Tras el conflicto, el Tratado de Versalles prohibió a Alemania fabricar aviones, por lo que BMW se orientó hacia la producción de coches. ',
      
      ''
    ],
    [
      'El modelo más vendido en la historia de BMW es el BMW Serie 3. Este sedán de tamaño medio ha sido el emblema de la marca desde su introducción en 1975. Ha ganado fama por combinar deportividad, elegancia y practicidad, y es especialmente popular en Europa, América del Norte y Asia.',
      
      'Uno de los modelos menos exitosos comercialmente fue el BMW i8. Aunque fue tecnológicamente avanzado y muy atractivo visualmente, sus ventas fueron limitadas por su alto precio, su orientación híbrida en un mercado que ya empezaba a inclinarse hacia autos completamente eléctricos, y su enfoque más experimental.'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c5'],
    'AUDI',
    'creación de la empresa Horch & Cie.',
    '',
    'https://cdn.motor1.com/images/mgl/XB32Xe/s1/2023-audi-r8-v10-gt-rwd.jpg',
    1909,
    [
      'Audi tiene raíces que se remontan a principios del siglo XX. El origen de la marca está en Auto Union, una alianza de cuatro marcas automovilísticas alemanas que se formó en 1932. Las cuatro marcas eran Audi, DKW, Horch y Wanderer. La idea detrás de esta unión fue combinar los recursos y tecnologías de estas marcas para competir en el mercado de autos de lujo.',

      '•	Audi fue fundada originalmente en 1909 por August Horch, quien también había fundado la marca Horch. Tras un desacuerdo con su empresa anterior, Horch fundó Audi (el nombre proviene de la traducción al latín de su apellido, "Horch" significa "escuchar" en alemán, y "Audi" es el equivalente en latín). El primer Audi de producción fue el Audi Type A de 1910, un sedán de lujo.'
    ],
    [
      'El modelo más vendido de Audi es el Audi A3. Este sedán compacto ha sido un éxito global, principalmente porque ofrece una combinación de lujo, rendimiento, y un precio relativamente accesible comparado con otros modelos de Audi. •	Audi A3: o	Es un sedán o hatchback compacto de lujo que ha estado en producción desde 1996. Con una variedad de motores (de 1.0 a 2.0 litros), versiones de tracción delantera o total (quattro), y múltiples opciones de personalización, ha sido un éxito tanto en Europa como en otros mercados. o	Precios: El Audi A3 comienza en torno a $35,000 USD para la versión base, y las versiones más equipadas pueden superar los $45,000 USD.',
      
      'En cuanto al modelo menos comprado, los autos de edición limitada y aquellos que son muy exclusivos tienden a ser menos vendidos. Un buen ejemplo de esto es el Audi R8, el superdeportivo insignia de la marca, que aunque muy apreciado por su diseño y rendimiento, tiene una producción limitada debido a su alto precio y exclusividad.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm7',
    ['c7','c4'],
    'buggati',
    'Molsheim, francia',
    '',
    'https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2016/03/Bugatti-Chiron-2016-1.jpg',
    1909 ,
    [
      'Bugatti, una marca de hiperdeportivos de lujo, fue fundada por Ettore Bugatti en 1909 en Molsheim, Francia. La empresa se convirtió en sinónimo de innovación, diseño y potencia, y ha producido modelos icónicos como el Type 35, el Type 41 Royale y el Veyron. Bugatti ha tenido diferentes propietarios a lo largo de su historia, incluyendo el Grupo Volkswagen desde 1998. ',

      
    ],
    [
      'El Bugatti más vendido es el Chiron. La producción de este modelo ha sido de 500 unidades, y todas han sido vendidas. El Chiron es un superdeportivo de alto rendimiento que ha sido elogiado por su velocidad, potencia y diseño. ',
      
      'El Bugatti menos vendido suele ser uno que se considera "one-off" o de serie limitada, especialmente si se trata de una versión especial o prototipo que no llegó a producción en masa. Ejemplos de Bugatti menos vendidos incluyen el Chiron Profilée, que se convirtió en un modelo único al no poder terminar su desarrollo antes de que se vendieran todos los 500 Chiron, y versiones especializadas como el Chiron Sport y Chiron Pur Sport, que son las últimas variantes de la serie y se vendieron rápidamente. '
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm8',
    ['c8','c3'],
    'ford',
    '',
    'se fundo en estados unidos',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQAWEUHjMYJKRlhb3vr5j0_cqU1IJKseUPQ&s',
    1936  ,
    [
      'La historia de la Fundación Ford (Ford Foundation) está estrechamente ligada a la historia de la familia Ford y, en concreto, a la de Henry Ford. La fundación fue creada en 1936 por Edsel Ford, el hijo de Henry Ford, y dos ejecutivos de Ford Motor Company. Su propósito inicial era la gestión de fondos para fines científicos, educativos y caritativos. ',

      
    ],
    [
      'El carro más vendido de Ford es el Ford F-Series. En Estados Unidos, la Ford F-Series ha sido la camioneta más vendida durante 48 años consecutivos, con más de 35 millones de unidades vendidas a nivel mundial. El Ford Mustang también es un modelo muy popular, siendo el auto deportivo más vendido en Estados Unidos durante la última década. ',
     
      'En el mercado automotriz, algunos vehículos Ford, como el Edsel, son famosos por ser menos vendidos que otros modelos. Ford ha discontinuado la producción de algunos modelos como el Fusion y el Figo en México, buscando enfocarse en vehículos con mayor espacio interior y tecnología, como los SUV. Otros modelos menos vendidos o descontinuados incluyen el Ford GT y el Ford Edge. '
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm9',
    ['c9','c2'],
    'mercedes',
    '',
    'se fundo en alemania',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmEIu1uwtHRilq9K3dYFQBpxkczQtWTQUsg&s',
    1926  ,
    [
      'Mercedes-Benz fue fundada en 1926 en Alemania, como resultado de la fusión entre Daimler Motoren Gesellschaft (DMG) y Benz & Cie. La marca tiene sus raíces en los inicios del siglo XX, cuando Gottlieb Daimler y Karl Benz desarrollaron los primeros automóviles motorizados. El nombre "Mercedes" se tomó de la hija de Emil Jellinek, un distribuidor de Daimler. ',

      
    ],
    [
      'El modelo más vendido de Mercedes-Benz es el Clase C. En España, el Mercedes GLC es el top ventas. El Clase E LWB ha sido el más vendido en India.',
     
      'El modelo menos vendido de Mercedes-Benz, según las últimas estadísticas, es el Mercedes Clase A. Es el modelo que está siendo eliminado de su catálogo, lo cual indica una tendencia en el sector hacia la desaparición de vehículos de gama baja dentro de las marcas premium. El Mercedes GLC Coupé es el modelo de Mercedes más vendido en España, superando incluso al Mercedes Clase C, su segundo modelo más exitoso. '
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm10',
    ['c10', 'c1'],
    'mazda',
    '',
    'se fundo en japon',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4pRjodbKATrWbLgMpyKcAPoP7OtM3hKFTA&s',
    1920  ,
    [
      'Mazda se fundó en 1920 en Hiroshima, Japón, como Toyo Cork Kogyo Co., Ltd., una fábrica de corcho. Jujiro Matsuda, el segundo presidente de la empresa, desarrolló el corcho comprimido y puso en marcha la producción. Más tarde, la empresa se diversificó a la fabricación de máquinas herramienta y, finalmente, a la producción de automóviles. ',

      
    ],
    [
      'En general, el Mazda CX-5 y el Mazda CX-30 son los dos modelos más vendidos de Mazda en México. El Mazda CX-5 es un SUV compacto que destaca por su equilibrio entre precio y prestaciones, y el Mazda CX-30 es un SUV versátil y tecnológicamente avanzada. ',
      
      'El carro menos vendido de Mazda, según los datos más recientes, podría ser el Mazda MX-5 Miata. Aunque Mazda como marca ha tenido un buen desempeño en ventas, el MX-5 ha experimentado una disminución notable en sus ventas en los últimos años. Otros modelos como el Mazda2, el Mazda6, la CX-3 y la MX-30 también se han visto afectados por bajas ventas y podrían ser considerados como menos populares. '
    ],
    false,
    false,
    false,
    true
  ),
];