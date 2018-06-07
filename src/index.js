const performReading = require('./cards/perform-reading');

function describeCard(card) {
  let name = '';
  if (card.suit === 'major') {
    name = card.name;
  } else {
    name = `${card.number} of ${card.suit}`;
  }
  if (card.reversed) { name += ' (reversed)'; }
  return name;
}

const reading = performReading();
reading.forEach(r => {
  const description = r.card.reversed ? r.card.uprightDescription : r.card.reverseDescription;
  console.log(`${r.meaning}: ${describeCard(r.card)}\n${description}\n`);
});