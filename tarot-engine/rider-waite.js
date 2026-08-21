/**
 * Motor de extracción Rider-Waite.
 * La selección de cartas ocurre aquí, nunca mediante IA.
 * - 78 cartas
 * - 10 posiciones de Cruz Celta
 * - sin repetición
 * - orientación aleatoria: derecha / invertida
 */

const RIDER_WAITE = [
  ...['El Loco','El Mago','La Sacerdotisa','La Emperatriz','El Emperador','El Hierofante','Los Enamorados','El Carro','La Fuerza','El Ermitaño','La Rueda de la Fortuna','La Justicia','El Colgado','La Muerte','La Templanza','El Diablo','La Torre','La Estrella','La Luna','El Sol','El Juicio','El Mundo'].map((nombre, i) => ({ nombre, arcano: i })),
  ...[
    ['As de Bastos','Bastos'],['Dos de Bastos','Bastos'],['Tres de Bastos','Bastos'],['Cuatro de Bastos','Bastos'],['Cinco de Bastos','Bastos'],['Seis de Bastos','Bastos'],['Siete de Bastos','Bastos'],['Ocho de Bastos','Bastos'],['Nueve de Bastos','Bastos'],['Diez de Bastos','Bastos'],['Sota de Bastos','Bastos'],['Caballero de Bastos','Bastos'],['Reina de Bastos','Bastos'],['Rey de Bastos','Bastos'],
    ['As de Copas','Copas'],['Dos de Copas','Copas'],['Tres de Copas','Copas'],['Cuatro de Copas','Copas'],['Cinco de Copas','Copas'],['Seis de Copas','Copas'],['Siete de Copas','Copas'],['Ocho de Copas','Copas'],['Nueve de Copas','Copas'],['Diez de Copas','Copas'],['Sota de Copas','Copas'],['Caballero de Copas','Copas'],['Reina de Copas','Copas'],['Rey de Copas','Copas'],
    ['As de Espadas','Espadas'],['Dos de Espadas','Espadas'],['Tres de Espadas','Espadas'],['Cuatro de Espadas','Espadas'],['Cinco de Espadas','Espadas'],['Seis de Espadas','Espadas'],['Siete de Espadas','Espadas'],['Ocho de Espadas','Espadas'],['Nueve de Espadas','Espadas'],['Diez de Espadas','Espadas'],['Sota de Espadas','Espadas'],['Caballero de Espadas','Espadas'],['Reina de Espadas','Espadas'],['Rey de Espadas','Espadas'],
    ['As de Oros','Oros'],['Dos de Oros','Oros'],['Tres de Oros','Oros'],['Cuatro de Oros','Oros'],['Cinco de Oros','Oros'],['Seis de Oros','Oros'],['Siete de Oros','Oros'],['Ocho de Oros','Oros'],['Nueve de Oros','Oros'],['Diez de Oros','Oros'],['Sota de Oros','Oros'],['Caballero de Oros','Oros'],['Reina de Oros','Oros'],['Rey de Oros','Oros']
  ].map(([nombre,palo]) => ({ nombre, palo }))
];

const CELTIC_POSITIONS = [
  { numero: 1, nombre: 'Situación actual' },
  { numero: 2, nombre: 'Desafío o influencia' },
  { numero: 3, nombre: 'Base o raíz' },
  { numero: 4, nombre: 'Pasado reciente' },
  { numero: 5, nombre: 'Meta o conciencia' },
  { numero: 6, nombre: 'Futuro cercano' },
  { numero: 7, nombre: 'Actitud o mundo interior' },
  { numero: 8, nombre: 'Entorno e influencias externas' },
  { numero: 9, nombre: 'Esperanzas y temores' },
  { numero: 10, nombre: 'Resultado o tendencia' }
];

function extraerRiderWaite() {
  const mazo = [...RIDER_WAITE];
  const resultado = [];

  for (const posicion of CELTIC_POSITIONS) {
    const indice = Math.floor(Math.random() * mazo.length);
    const [carta] = mazo.splice(indice, 1);

    resultado.push({
      posicion: posicion.numero,
      posicionNombre: posicion.nombre,
      carta: carta.nombre,
      palo: carta.palo ?? null,
      arcano: carta.arcano ?? null,
      orientacion: Math.random() < 0.5 ? 'derecha' : 'invertida'
    });
  }

  return {
    mazo: 'Rider-Waite',
    tipo: 'Cruz Celta',
    cartas: resultado,
    totalCartas: resultado.length,
    generadoEn: new Date().toISOString()
  };
}

function validarTirada(tirada) {
  if (!tirada || tirada.cartas?.length !== 10) return false;
  const cartas = tirada.cartas.map(c => c.carta);
  return new Set(cartas).size === 10;
}

if (typeof module !== 'undefined') {
  module.exports = { RIDER_WAITE, CELTIC_POSITIONS, extraerRiderWaite, validarTirada };
}
