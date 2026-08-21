/** Prueba del motor para las tres tiradas. */
const { extraerRiderWaite } = require('./rider-waite');
const { crearTirada } = require('./spreads');

const pruebas = [
  ['Rider-Waite', 10, true, extraerRiderWaite],
  ['Tarot Mítico', 10, false, () => crearTirada('Tarot Mítico')],
  ['Tarot del Amor', 13, false, () => crearTirada('Tarot del Amor')]
];

for (const [mazo, cantidad, permiteInvertida, generar] of pruebas) {
  const tirada = generar();
  const cartas = tirada.cartas;
  if (cartas.length !== cantidad) throw new Error(`${mazo}: cantidad incorrecta`);
  if (new Set(cartas.map(c => c.carta)).size !== cantidad) throw new Error(`${mazo}: cartas repetidas`);
  if (!permiteInvertida && cartas.some(c => c.orientacion === 'invertida')) throw new Error(`${mazo}: no admite invertidas`);
  if (cartas.some(c => !['derecha', 'invertida'].includes(c.orientacion))) throw new Error(`${mazo}: orientación inválida`);
  console.log(`✓ ${mazo}: ${cantidad} cartas, sin repetición, orientación válida`);
}

console.log('✓ Prueba de los tres motores completada.');
