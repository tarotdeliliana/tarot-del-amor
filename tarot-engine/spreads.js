// Estructuras de tirada del proyecto Tarot del Amor de Liliana.
// Importante: la orientación se decide por mazo, nunca por la IA.

const RIDER_WAITE_CELTIC_CROSS = [
  'Situación actual','Desafío o influencia','Base o raíz','Pasado reciente',
  'Meta o conciencia','Futuro cercano','Actitud o mundo interior',
  'Entorno e influencias externas','Esperanzas y temores','Resultado o tendencia'
];

const MYTHIC_CELTIC_CROSS = [...RIDER_WAITE_CELTIC_CROSS];

const LOVERS_PATH_13 = [
  'Tu energía en el amor','La energía de la otra persona','Lo que los une',
  'Lo que los separa','Lo que sientes','Lo que siente la otra persona',
  'Lo que se muestra','Lo que permanece oculto','El aprendizaje de la relación',
  'La influencia del pasado','La energía del presente','La tendencia próxima',
  'Mensaje final para el corazón'
];

const SPREAD_RULES = {
  riderWaite: { deck: 'Rider-Waite', type: 'Cruz Celta', count: 10, allowReversed: true, positions: RIDER_WAITE_CELTIC_CROSS },
  mythic: { deck: 'Tarot Mítico', type: 'Cruz Celta', count: 10, allowReversed: false, positions: MYTHIC_CELTIC_CROSS },
  loversPath: { deck: 'Tarot del Amor', type: 'Tirada del Amor', count: 13, allowReversed: false, positions: LOVERS_PATH_13 }
};

function validateSpreadRules() {
  return Object.values(SPREAD_RULES).every(rule =>
    rule.positions.length === rule.count &&
    (rule.allowReversed === true || rule.allowReversed === false)
  );
}

if (typeof module !== 'undefined') {
  module.exports = { RIDER_WAITE_CELTIC_CROSS, MYTHIC_CELTIC_CROSS, LOVERS_PATH_13, SPREAD_RULES, validateSpreadRules };
}
