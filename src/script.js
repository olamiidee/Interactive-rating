const submitBtn = document.getElementById("submit-btn");
const firstCard = document.getElementById("card1");
const secondCard = document.getElementById("card2");

const rating1 = document.getElementById("rating1");
const rating2 = document.getElementById("rating2");
const rating3 = document.getElementById("rating3");
const rating4 = document.getElementById("rating4");
const rating5 = document.getElementById("rating5");

let clicked1,
  clicked2,
  clicked3,
  clicked4,
  clicked5 = false;

//function that collects the rating choice and displays the result in a thank you card!
submitBtn.addEventListener("click", function () {
  if (
    clicked1 === true ||
    clicked2 === true ||
    clicked3 === true ||
    clicked4 === true ||
    clicked5 === true
  ) {
    firstCard.classList.add("hidden");
    secondCard.classList.remove("hidden");
  } else if (
    clicked1 === false ||
    clicked2 === false ||
    clicked3 === false ||
    clicked4 === false ||
    clicked5 === false
  ) {
    alert("Oga drop rating fess!");
  }
});
