const { DECKS, drawCeltic, validateReading } = require('./decks');

for (const id of Object.keys(DECKS)) {
  const deck = DECKS[id];
  if (deck.total !== 78) throw new Error(`${id}: el mazo no tiene 78 cartas`);
  const reading = drawCeltic(id);
  const check = validateReading(reading);
  if (!check.ok) throw new Error(`${id}: tirada inválida`);
  if (reading.cards.some(card => !['derecha','invertida'].includes(card.orientation))) {
    throw new Error(`${id}: orientación inválida`);
  }
  console.log(`OK ${deck.name}: 78 cartas, Cruz Celta de 10, sin repetición`);
}
