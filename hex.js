const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
/* #f15025 haremos un loop para generar esta configuracion de numero hexagecimal
 denuevo apuntando al body para que cambie su color*/

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  function() {
  let hexColor = "#"; //es lo primero que necesito para crear el color
  for(let i =0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log(getRandomNumber())
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log(hexColor);
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}