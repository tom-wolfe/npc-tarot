const performReading = require('./cards/perform-reading');

function describeCard(card) {
  let name = '';
  if (card.suit.toUpperCase() === 'MAJOR') {
    name = card.name;
  } else {
    name = `${describeNumber(card.number)} of ${card.suit}`;
  }
  if (card.reversed) { name += ' (reversed)'; }
  return name;
}

function describeNumber(number) {
  switch (number) {
    case 1: return 'Ace';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
    case 10: return 'Ten';
    case 11: return 'Page';
    case 12: return 'Knight';
    case 13: return 'Queen';
    case 14: return 'King';
    default: throw new Error(`Unexpected number: ${number}.`);
  }
}

const reading = performReading();
reading.forEach(r => {
  const description = r.card.reversed ? r.card.reverseDescription : r.card.uprightDescription;
  console.log(`${r.meaning}: ${describeCard(r.card)}\n${description}\n`);
});