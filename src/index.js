const performReading = require('./cards/perform-reading');
const formatReading = require('./cards/format-reading');

function printReading(e) {
  const reading = performReading();
  document.getElementById('reading').innerHTML = formatReading(reading);
  if (e) { e.preventDefault(); }
  return false;
}
document.getElementById('generate').addEventListener('click', printReading);

printReading();