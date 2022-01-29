const barBtn = document.querySelector(".bar-btn");

barBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".mobile-nav").classList.toggle("show");
  barBtn.classList.toggle("hide");
  document.querySelector(".close").classList.remove("hide");
});

document.querySelector(".close").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".mobile-nav").classList.toggle("show");
  barBtn.classList.toggle("hide");
  document.querySelector(".close").classList.add("hide");
});
