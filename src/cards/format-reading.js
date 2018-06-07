const Handlebars = require('handlebars');

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

Handlebars.registerHelper('card-name', card => {
  let name = '';
  if (card.suit.toUpperCase() === 'MAJOR') {
    name = card.name;
  } else {
    name = `${describeNumber(card.number)} of ${card.suit}`;
  }
  if (card.reversed) { name += ' (reversed)'; }
  return name;
});

Handlebars.registerHelper('card-desc', card => {
  return card.reversed ? card.reverseDescription : card.uprightDescription;
});

const Template = Handlebars.compile(require('./template.handlebars'));

module.exports = function (reading) {
  return Template(reading);
};