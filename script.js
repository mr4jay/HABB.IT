function toggleDetails(phaseNumber) {
  const phaseDetails = document.getElementById(`phase${phaseNumber}-details`);
  phaseDetails.classList.toggle("active");
}
