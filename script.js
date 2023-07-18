function toggleDetails(phaseNumber) {
  const phaseDetails = document.getElementById(`phase${phaseNumber}-details`);
  const allPhaseDetails = document.querySelectorAll('.phase-details');

  if (phaseDetails.style.display === 'block') {
    phaseDetails.style.display = 'none';
  } else {
    allPhaseDetails.forEach((details) => (details.style.display = 'none'));
    phaseDetails.style.display = 'block';
  }
}
