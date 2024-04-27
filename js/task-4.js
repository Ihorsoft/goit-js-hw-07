const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  
    event.preventDefault();
   
        if (event.currentTarget.elements.email.value.trim() == "" ||
            event.currentTarget.elements.password.value.trim() == "")
        {
            alert("All form fields must be filled in");
            return;
        };
        const info = {
            email: event.currentTarget.elements.email.value.trim(),
            password: event.currentTarget.elements.password.value.trim()
        };
        console.log(info);
        form.reset();

    
}

