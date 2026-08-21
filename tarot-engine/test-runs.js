/** Prueba repetida de las reglas reales de los tres mazos. */
const { DECKS, draw, validateReading } = require('./decks');
const { SPREAD_RULES, validateSpreadRules } = require('./spreads');

if (!validateSpreadRules()) throw new Error('Las estructuras de tirada no son válidas');

const EXPECTED = {
  riderWaite: { count: 10, allowReversed: true, spread: 'Cruz Celta' },
  tarotMitico: { count: 10, allowReversed: false, spread: 'Cruz Celta' },
  loversPath: { count: 13, allowReversed: true, spread: 'Tirada del Amor' }
};

for (const [id, expected] of Object.entries(EXPECTED)) {
  const deck = DECKS[id];
  const rule = Object.values(SPREAD_RULES).find(r => r.deck === deck.name);
  if (!deck || !rule) throw new Error(`${id}: configuración inexistente`);
  if (deck.count !== expected.count) throw new Error(`${deck.name}: cantidad configurada incorrectamente`);
  if (deck.reversed !== expected.allowReversed) throw new Error(`${deck.name}: regla de orientación incorrecta`);
  if (rule.count !== expected.count || rule.allowReversed !== expected.allowReversed) throw new Error(`${deck.name}: spread desalineado`);

  for (let run = 0; run < 100; run++) {
    const reading = draw(id);
    const validation = validateReading(reading);
    if (!validation.ok) throw new Error(`${deck.name}: ${validation.error}`);
    if (reading.cards.length !== expected.count) throw new Error(`${deck.name}: cantidad incorrecta`);
    if (new Set(reading.cards.map(c => c.cardId)).size !== expected.count) throw new Error(`${deck.name}: cartas repetidas`);
    if (!expected.allowReversed && reading.cards.some(c => c.orientation === 'invertida')) throw new Error(`${deck.name}: contiene invertidas`);
    if (reading.cards.some(c => !['derecha', 'invertida'].includes(c.orientation))) throw new Error(`${deck.name}: orientación inválida`);
  }

  console.log(`✓ ${deck.name}: 100 tiradas válidas · ${expected.count} cartas · ${expected.spread} · orientación correcta`);
}

console.log('✓ Prueba completa de los tres mazos superada.');
