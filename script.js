function toggleDetails(phaseId) {
  const phaseDetails = document.getElementById(`phase${phaseId}-details`);
  const currentDisplay = phaseDetails.style.display;
  const allPhaseDetails = document.querySelectorAll(".phase-details");

  allPhaseDetails.forEach((details) => (details.style.display = "none"));

  if (currentDisplay === "none" || currentDisplay === "") {
    phaseDetails.style.display = "block";
    typeDocumentationSteps(phaseDetails);
  }
}

function typeDocumentationSteps(phaseDetails) {
  const documentationSteps = phaseDetails.querySelectorAll("ol li");
  let stepIndex = 0;

  function typeStep() {
    if (stepIndex < documentationSteps.length) {
      documentationSteps[stepIndex].style.display = "inline";
      stepIndex++;
      setTimeout(typeStep, 150); // Adjust typing speed here
    }
  }

  typeStep();
}

// Add event listeners to each phase tile
const projectPhases = document.querySelector(".project-phases");
const phaseTiles = projectPhases.querySelectorAll(".project-phase");
phaseTiles.forEach((phaseTile, index) => {
  phaseTile.addEventListener("click", () => toggleDetails(index + 1));
});
