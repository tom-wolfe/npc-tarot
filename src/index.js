const Random = require('random-js');

const random = new Random(Random.engines.mt19937().autoSeed());
const cards = require('./cards.json');

random.shuffle(cards);

console.log(cards);