function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyStyle = document.querySelector("body");
const buttonChange = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

buttonChange.addEventListener("click", bodyStyleChange);

function bodyStyleChange(event) { 
  const backcolorNew = getRandomHexColor();
  bodyStyle.style.backgroundColor = backcolorNew;
  colorText.textContent = backcolorNew;

   // return;
};
