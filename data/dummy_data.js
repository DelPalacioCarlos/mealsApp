import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', '', '','https://1000marcas.net/wp-content/uploads/2019/12/Ferrari-Logo.png'),
  new Category('c2', '', '','https://static.vecteezy.com/system/resources/previews/020/502/472/non_2x/lamborghini-brand-logo-car-symbol-white-design-italian-automobile-illustration-with-black-background-free-vector.jpg'),
  new Category('c3', '', '','https://static.vecteezy.com/system/resources/previews/020/927/378/non_2x/toyota-brand-logo-car-symbol-with-name-black-design-japan-automobile-illustration-free-vector.jpg'),
  new Category('c4', '', '','https://s0.smartresize.com/wallpaper/817/465/HD-wallpaper-nissan-logo-logo-nissan-thumbnail.jpg'),
  new Category('c5', '', '','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LzqsPJ63eA-1zvOgU9NP0PHT2UYlcWiA7g&s'),
  new Category('c6', '', '','https://logowik.com/content/uploads/images/562_audi.jpg'),

];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', ],
    'Ferrari es una de las marcas más emblemáticas en la industria automotriz,',
    'Ferrari',
    'se fabrico',
    'https://i.pinimg.com/736x/be/58/56/be58562e9797263b5670edf49e0f9f6d.jpg',
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
    ['c2'],
    'Lamborghini es una de las marcas de automóviles de lujo',
    'Lamborghini comenzó en 196',
    'simple',
    
    'data:',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
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
    ['c3'],
    'Toyota Motor Corporation',
    'TOYOTA',
    'se fundo',
    'https://www.shutterstock.com/shutterstock/videos/1031336732/thumb/6.jpg?ip=x480',
    1937 ,
    [
      'Toyota Motor Corporation es uno de los fabricantes de automóviles más grandes y exitosos del mundo, conocida por su innovación, fiabilidad y eficiencia en la  producción. La historia de Toyota es un ejemplo clásico de cómo la visión, la innovación y la mejora continua pueden llevar a una empresa a convertirse en un líder  mundial.',

      
    ],
    [
      'Form 2 patties',
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),
];