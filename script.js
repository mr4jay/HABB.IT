function toggleDetails(phaseNumber) {
  var details = document.getElementById('phase' + phaseNumber + '-details');
  if (details.style.display === 'none') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}
