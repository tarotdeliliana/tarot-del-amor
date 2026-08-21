// Biblioteca base de los tres mazos del proyecto Tarot del Amor de Liliana.
// La extracción de cartas debe ser aleatoria y separada de cualquier interpretación.
// Los significados se almacenan como material de referencia para el motor de lectura.

const RIDER_WAITE_MAJOR = [
  ['El Loco','inicio, libertad, aventura','imprudencia, falta de preparación'],
  ['El Mago','iniciativa, recursos, manifestación','manipulación, dispersión'],
  ['La Sacerdotisa','intuición, misterio, conocimiento interior','bloqueo intuitivo, secretos'],
  ['La Emperatriz','crecimiento, creatividad, abundancia','dependencia, exceso, estancamiento'],
  ['El Emperador','estructura, autoridad, estabilidad','rigidez, control, autoritarismo'],
  ['El Hierofante','tradición, enseñanza, valores compartidos','dogmatismo, rebeldía, presión social'],
  ['Los Enamorados','elección, unión, valores, vínculo','indecisión, conflicto de valores, separación'],
  ['El Carro','avance, voluntad, determinación','falta de dirección, impulsividad'],
  ['La Fuerza','coraje, autocontrol, compasión','inseguridad, frustración, exceso de control'],
  ['El Ermitaño','introspección, búsqueda, sabiduría','aislamiento, cierre, soledad'],
  ['La Rueda de la Fortuna','cambio, ciclos, oportunidad','resistencia al cambio, inestabilidad'],
  ['La Justicia','equilibrio, verdad, responsabilidad','injusticia, desequilibrio, evasión'],
  ['El Colgado','pausa, nueva perspectiva, entrega','estancamiento, resistencia, sacrificio inútil'],
  ['La Muerte','transformación, cierre, renacimiento','resistencia, apego, transición difícil'],
  ['La Templanza','armonía, integración, paciencia','exceso, impaciencia, desbalance'],
  ['El Diablo','deseo, apego, intensidad, sombra','dependencia, liberación, obsesión'],
  ['La Torre','ruptura, revelación, cambio abrupto','evitar el cambio, crisis contenida'],
  ['La Estrella','esperanza, inspiración, renovación','desánimo, pérdida de fe'],
  ['La Luna','intuición, emociones, incertidumbre','confusión que se aclara, miedo liberado'],
  ['El Sol','alegría, claridad, vitalidad','optimismo bloqueado, retraso en la claridad'],
  ['El Juicio','despertar, evaluación, renovación','culpa, duda, resistencia al llamado'],
  ['El Mundo','culminación, integración, logro','cierre pendiente, falta de integración']
];

const RIDER_WAITE_MINOR = {
  Bastos: ['energía','acción','deseo','iniciativa'],
  Copas: ['emociones','amor','vínculos','sensibilidad'],
  Espadas: ['mente','decisiones','conflicto','verdad'],
  Oros: ['recursos','trabajo','estabilidad','materialización']
};

// Para no inventar significados específicos del Tarot Mítico o Lover’s Path,
// sus bibliotecas completas se incorporarán a partir de sus respectivas guías.
const MYTHIC_LIBRARY_STATUS = 'pendiente de cargar significados propios del mazo';
const LOVERS_PATH_LIBRARY_STATUS = 'pendiente de cargar significados propios del mazo';

const DECK_LIBRARY_META = {
  riderWaite: { name:'Rider-Waite', cards:78, allowReversed:true },
  mythic: { name:'Tarot Mítico', cards:78, allowReversed:false },
  loversPath: { name:'Lover’s Path / Tarot del Amor', cards:78, allowReversed:true }
};

module.exports = {
  RIDER_WAITE_MAJOR,
  RIDER_WAITE_MINOR,
  MYTHIC_LIBRARY_STATUS,
  LOVERS_PATH_LIBRARY_STATUS,
  DECK_LIBRARY_META
};
