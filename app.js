const colors = ["green", "red", "rgba(133,122,200", "#f15025", "purple",
  "#e2e4e6", "#f1f125", "#f15255"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number betwen 0 - numberelementofarray - colors[]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // math.floor(Math.random) para redondear un numero aleatorio entre el largo del array
  return Math.floor(Math.random() * colors.length);
}