function toggleDetails(index) {
  const details = document.querySelectorAll(".phase-details");
  details.forEach((item) => {
    item.style.display = "none";
  });

  const selectedPhase = document.getElementById(`phase${index}-details`);
  selectedPhase.style.display = "block";
}
