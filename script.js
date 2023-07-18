function toggleDetails(phaseId) {
  const phaseDetails = document.getElementById(phaseId + '-details');
  const stepsElement = document.getElementById(phaseId + '-steps');
  const steps = getStepsForPhase(phaseId); // Replace this with your data retrieval logic

  if (phaseDetails.classList.contains('hidden')) {
    phaseDetails.classList.remove('hidden');
    stepsElement.innerHTML = ''; // Clear existing steps
    steps.forEach((step, index) => {
      setTimeout(() => {
        stepsElement.innerHTML += `<li class="typing-animation">${index + 1}. ${step}</li>`;
      }, index * 1500); // Delay of 1.5 seconds between each step
    });
  } else {
    phaseDetails.classList.add('hidden');
  }
}

function getStepsForPhase(phaseId) {
  // Replace this with your logic to retrieve documentation steps for each phase
  // For now, return a placeholder list of steps
  if (phaseId === 1) {
    return ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  } else if (phaseId === 2) {
    return ['Step A', 'Step B', 'Step C', 'Step D', 'Step E'];
  } else {
    return []; // Return an empty array for other phases
  }
}
