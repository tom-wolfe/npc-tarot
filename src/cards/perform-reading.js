const Random = require('random-js');

const random = new Random(Random.engines.mt19937().autoSeed());
const fullDeck = [
  ...require('./data/major.json'),
  ...require('./data/cups.json'),
  ...require('./data/swords.json'),
  ...require('./data/pentacles.json'),
  ...require('./data/wands.json')
];

const format = [
  'Role In The World',
  'Home',
  'Signature/Talent',
  'Possibilities',
  'Special Knowledge',
  'Allegiances',
  'Past Experience',
  'Present Situation',
  'Goal'
];

function shuffleDeck(deck) {
  random.shuffle(deck);
  deck.forEach(c => { c.reversed = (random.integer(1, 100) < 50); });
}

module.exports = function () {
  const deck = [...fullDeck];
  shuffleDeck(deck);
  return deck.slice(0, format.length).map((card, i) => ({ card, meaning: format[i] }));
}