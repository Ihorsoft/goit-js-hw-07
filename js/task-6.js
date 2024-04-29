function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const divArr = [];
  if (amount >= 1 &&
      amount <= 100)
    {
        placeCreate.innerHTML = "";        
          for (let i = 0; i < amount; i += 1) {
               divArr.push(`<div class="item"; style="background-color: ${getRandomHexColor()};
               display:block; width:${30 + 10 * i}px;
               height:${30 + 10 * i}px;">  </div>`);
           };
        totalElement.value = "";
        return divArr.join("");
    };
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

function createNew(event)  {
  placeCreate.insertAdjacentHTML("beforeend", createBoxes(Number(totalElement.value)));
  totalElement.value = "";
};

destroyButton.addEventListener("click", () => {
  placeCreate.innerHTML = "";
});
