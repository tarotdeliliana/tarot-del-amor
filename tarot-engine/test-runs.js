/** Prueba de las reglas reales de los tres mazos. */
const { DECKS, draw, validateReading } = require('./decks');

for (const id of Object.keys(DECKS)) {
  const deck = DECKS[id];
  const reading = draw(id);
  const validation = validateReading(reading);
  if (!validation.ok) throw new Error(`${deck.name}: ${validation.error}`);
  if (reading.cards.length !== deck.count) throw new Error(`${deck.name}: cantidad incorrecta`);
  if (new Set(reading.cards.map(c => c.cardId)).size !== deck.count) throw new Error(`${deck.name}: cartas repetidas`);
  if (!deck.reversed && reading.cards.some(c => c.orientation === 'invertida')) throw new Error(`${deck.name}: contiene invertidas`);
  if (deck.reversed && reading.cards.some(c => !['derecha','invertida'].includes(c.orientation))) throw new Error(`${deck.name}: orientación inválida`);
  console.log(`✓ ${deck.name}: ${deck.count} cartas, ${deck.spread}, sin repetición, reglas de orientación correctas`);
}
console.log('✓ Motor de los tres mazos validado.');
