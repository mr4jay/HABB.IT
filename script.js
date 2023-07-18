function toggleDetails(phaseNumber) {
  var details = document.getElementById('phase' + phaseNumber + '-details');
  if (details.style.display === 'none') {
    details.style.display = 'block';
    typeDocumentationSteps(phaseNumber);
  } else {
    details.style.display = 'none';
  }
}

function typeDocumentationSteps(phaseNumber) {
  var steps = document.querySelectorAll('#phase' + phaseNumber + '-details ol li');
  var index = 0;
  function type() {
    if (index < steps.length) {
      var step = steps[index];
      step.style.display = 'list-item';
      index++;
      setTimeout(type, 100); // Adjust the typing speed here (milliseconds)
    }
  }
  type();
}
