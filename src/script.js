const firstCard = document.getElementById("card1");
const secondCard = document.getElementById("card2");

const submitBtn = document.getElementById("submit-btn");
const rateBtn = document.getElementById("rate-btn");

const btns = document.querySelectorAll(".btn");
const rating = document.querySelector("#rating");

submitBtn.addEventListener("click", () => {
  firstCard.classList.add("hidden");
  secondCard.classList.remove("hidden");
});

rateBtn.addEventListener("click", () => {
  firstCard.classList.remove("hidden");
  secondCard.classList.add("hidden");
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.innerHTML = btn.innerHTML;
  });
});
