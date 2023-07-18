// JavaScript Code (script.js)

// Function to toggle the visibility of documentation steps on clicking the phase tile
function toggleDetails(phaseNumber) {
  const phaseDetails = document.getElementById(`phase${phaseNumber}-details`);
  const isActive = phaseDetails.classList.contains("active");

  // Hide all other active phase details
  const allPhaseDetails = document.querySelectorAll(".phase-details");
  allPhaseDetails.forEach(details => details.classList.remove("active"));

  // Show or hide the clicked phase details
  if (!isActive) {
    phaseDetails.classList.add("active");
    animateTypingEffect(phaseDetails);
  }
}

// Function to simulate typing animation for documentation steps
function animateTypingEffect(phaseDetails) {
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
const phaseTiles = document.querySelectorAll(".project-phase");
phaseTiles.forEach((tile, index) => {
  tile.addEventListener("click", () => toggleDetails(index + 1));
});

// Initialize by showing the first phase details
const initialPhase = document.getElementById("phase1-details");
initialPhase.classList.add("active");
animateTypingEffect(initialPhase);
