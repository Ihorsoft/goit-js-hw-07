const userName = document.querySelector("#name-input");
userName.addEventListener("input", handleInput);

function handleInput(event) {
   // userName.textContent = event.target.value.trim();
    event.target.value = event.target.value.trim();
    const userNameOut = document.querySelector("#name-output");
    userNameOut.textContent = event.target.value.trim();
    if (event.target.value.trim() == "") {
       userNameOut.textContent = "Anonymous";
    }
}