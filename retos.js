
const LLAMAS = {
  Li: '#ff3b4e',   // rojo carmín
  Na: '#ffcc22',   // amarillo intenso, el más conocido de todos
  K:  '#c07dff',   // lila o violeta
  Rb: '#ff5fae',   // rojo violáceo
  Cs: '#8b7cff',   // azul violáceo
  Ca: '#ff7a2d',   // rojo anaranjado, color ladrillo
  Mg: '#ffffff'    // blanco cegador (no es color de llama: es brillo)
};

const RETOS = [
  {
    tipo:'enlace', meta:'NaCl', nivel:1,
    titulo:'Forma la sal de mesa',
    pista:'Al sodio le sobra 1 electrón y al cloro le falta 1. Se buscan.',
    uso:'Es la sal de tu cocina. También se usa para conservar alimentos y ' +
        'para deshelar carreteras en países con nieve. Tu cuerpo la necesita ' +
        'para que funcionen los nervios.'
  },
  {
    tipo:'enlace', meta:'KCl', nivel:1,
    titulo:'Forma cloruro de potasio',
    pista:'Otro alcalino que también regala 1 electrón. Está debajo del sodio.',
    uso:'Es la "sal sin sodio" que toman las personas con presión alta. ' +
        'También es fertilizante: las plantas necesitan potasio para crecer.'
  },
  {
    tipo:'agua', meta:'Na', nivel:1,
    titulo:'Haz reaccionar sodio con agua',
    pista:'Arrastra el sodio hasta el vaso, no a la mesa.',
    uso:'Esta reacción es el clásico de los videos de química, y jamás se ' +
        'hace en un colegio: libera hidrógeno y tanto calor que se enciende sola.'
  },
  {
    tipo:'enlace', meta:'H2O', nivel:2,
    titulo:'Forma agua',
    pista:'Necesitas DOS hidrógenos y UN oxígeno. Suéltalos de a uno.',
    uso:'Cubre el 71% de la Tierra y eres un 60% de ella. Aquí nadie regala ' +
        'electrones: los comparten, y por eso el agua es una molécula de verdad ' +
        'y no una red como la sal.'
  },
  {
    tipo:'enlace', meta:'HCl', nivel:2,
    titulo:'Forma cloruro de hidrógeno',
    pista:'Uno de cada. El hidrógeno también quiere completar su capa.',
    uso:'Disuelto en agua es el ácido de tu estómago, el que digiere la comida. ' +
        'En la industria limpia metales antes de pintarlos.'
  },
  {
    tipo:'enlace', meta:'LiF', nivel:2,
    titulo:'Forma fluoruro de litio',
    pista:'El litio de las baterías y el flúor de la pasta de dientes.',
    uso:'Se usa en lentes especiales que dejan pasar la luz ultravioleta, ' +
        'y en dosímetros que miden cuánta radiación recibió una persona.'
  },
  {
    tipo:'quemar', meta:'Mg', nivel:3,
    titulo:'Quema magnesio y mira cuánto pesa después',
    pista:'Llévalo al quemador, no al vaso. Y cuando acabe, lee la suma: '+
          'no adivines si pesa más o menos, cuéntalo.',
    uso:'Casi todo el mundo apuesta a que quemar algo lo deja más ligero, '+
        'porque queda un polvo. Pesa MÁS: el metal se lleva el oxígeno del '+
        'aire y se lo queda. Con esa balanza, Lavoisier demostró hace 250 '+
        'años que la materia no desaparece al arder, solo cambia de sitio.'
  },
  {
    tipo:'enlace', meta:'MgCl2', nivel:3,
    titulo:'Forma cloruro de magnesio',
    pista:'El magnesio regala 2 electrones. ¿Cuántos cloros hacen falta para recibirlos?',
    uso:'Se saca del agua de mar. Se usa para deshelar carreteras y como ' +
        'suplemento para los músculos.'
  },
  {
    tipo:'enlace', meta:'CaF2', nivel:3,
    titulo:'Forma fluoruro de calcio',
    pista:'Otra vez 2 electrones para regalar y flúor que solo acepta 1 cada uno.',
    uso:'Es el mineral fluorita, y de ahí sale casi todo el flúor del mundo. ' +
        'Algunos ejemplares brillan en la oscuridad: de ahí viene la palabra ' +
        '"fluorescente".'
  },
  {
    tipo:'enlace', meta:'Na2O', nivel:3,
    titulo:'Forma óxido de sodio',
    pista:'Ahora es al revés: al oxígeno le faltan 2. ¿Cuántos sodios lo llenan?',
    uso:'Es uno de los ingredientes del vidrio. Cada ventana que has visto ' +
        'lleva óxido de sodio dentro.'
  },
  {
    tipo:'quemar', meta:'Na', nivel:3,
    titulo:'Quema sodio y fíjate en el color',
    pista:'Ya formaste óxido de sodio en la mesa. Ahora hazlo de verdad, '+
          'con fuego, y no mires el peso: mira el color de la llama.',
    uso:'Ese amarillo es el sodio, y siempre es el mismo. Así se sabe qué '+
        'metal hay en algo sin abrirlo: se quema un poquito y se mira el '+
        'color. Es lo que hacen los astrónomos con las estrellas, y también '+
        'es el color de las farolas antiguas de las carreteras.'
  },
  {
    tipo:'agua', meta:'Cs', nivel:3,
    titulo:'Provoca la reacción más violenta con agua',
    pista:'Baja hasta el final del grupo de los morados. Mientras más abajo, peor.',
    uso:'El cesio explota apenas toca el agua. Y sin embargo, es el que define ' +
        'cuánto dura exactamente un segundo: los relojes atómicos lo usan.'
  },
  {
    tipo:'enlace', meta:'NH3', nivel:4,
    titulo:'Forma amoníaco',
    pista:'Al nitrógeno le faltan 3 electrones y cada hidrógeno le presta uno.',
    uso:'Es la base de los fertilizantes que alimentan a media humanidad. ' +
        'Su descubrimiento cambió la agricultura del planeta.'
  },
  {
    tipo:'enlace', meta:'CH4', nivel:4,
    titulo:'Forma metano',
    pista:'El carbono tiene 4 y le faltan 4: no le conviene ni robar ni regalar.',
    uso:'Es el gas de la cocina. También es el que sale de los pantanos y ' +
        'del ganado, y es un gas de efecto invernadero muy potente.'
  },
  {
    tipo:'enlace', meta:'CO2', nivel:4,
    titulo:'Forma dióxido de carbono',
    pista:'Un carbono en el centro y dos oxígenos, uno a cada lado.',
    uso:'Es lo que exhalas al respirar y lo que usan las plantas para crecer. ' +
        'También es el gas de las bebidas con gas, y el principal responsable ' +
        'del calentamiento global.'
  },
  {
    tipo:'electrolisis', meta:'H2O', nivel:5,
    titulo:'Separa el agua en sus dos elementos',
    pista:'En la mesa juntaste hidrógeno y oxígeno para hacer agua. Abajo '+
          'puedes hacer lo contrario, pero hay que meterle corriente: '+
          'mantén el índice levantado sobre el botón.',
    uso:'Cuenta las burbujas de cada lado: salen justo el doble de un gas '+
        'que del otro, y eso es lo que dice la fórmula H₂O. Así se fabrica '+
        'el hidrógeno verde: si la corriente viene del sol o del viento, '+
        'sale combustible sin quemar nada. Es una de las apuestas para '+
        'reemplazar el petróleo.'
  }
];

/* Frases al acertar. Varias para que en una feria no se repita siempre la
   misma en la misma mesa. */
const RETO_LOGRADO = [
  '¡Exacto!', '¡Lo tienes!', '¡Muy bien!', '¡Eso es!', '¡Perfecto!'
];
