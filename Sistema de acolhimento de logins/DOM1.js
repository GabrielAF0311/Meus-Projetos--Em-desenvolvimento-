const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const myform = document.querySelector("#my-form")

const items = document.querySelector(".items");
const body = document.querySelector("body");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    //console.log(nameValue);
    //console.log(emailValue);

    if(nameValue === "" || emailValue === "") {
        alert("Please fill out all the fields!");
    }

    myform.style.background = "red";
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue; 
    body.style.background = "white";


});

//nameInput.addEventListener("change", function(e){
  //  console.log(e.target.value);
//});