document.addEventListener("DOMContentLoaded", function () {
  const experienceItems = document.querySelectorAll(".experience-item");

  experienceItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

function openResume() {
  window.open("images/resume.pdf", "_blank");
}
