function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// creat new element with all  div ( boxes )
function createBoxes(amount) {
  const divArr = [];
         placeCreate.innerHTML = "";        
          for (let i = 0; i < amount; i += 1) {
               divArr.push(`<div class="item"; style="background-color: ${getRandomHexColor()};
               display:block; width:${30 + 10 * i}px;
               height:${30 + 10 * i}px;">  </div>`);
           };
        totalElement.value = "";
        return divArr.join("");
 }

function createGalery(event) { 
  event.preventDefault();
};

const totalElement = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const placeCreate = document.querySelector("#boxes");

totalElement.addEventListener("input", createGalery);
createButton.addEventListener("click", createNew);

function createNew(event) {
  if (Number(totalElement.value) >= 1 &&           
    Number(totalElement.value) <= 100) {
    return placeCreate.insertAdjacentHTML("beforeend", createBoxes(Number(totalElement.value))); //add to DOM by 1 
    totalElement.value = "";
  };
};



destroyButton.addEventListener("click", () => {
  placeCreate.innerHTML = "";
});
