function toggleDetails(phaseNumber) {
  const phaseDetails = document.getElementById(`phase${phaseNumber}-details`);
  if (phaseDetails.style.display === "block") {
    phaseDetails.style.display = "none";
  } else {
    phaseDetails.style.display = "block";
  }
}
