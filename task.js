const form = document.getElementById("TheForm");
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")

const TheForm = document.getElementById("TheForm");
TheForm.addEventListener("submit", (e) => {

    e.preventDefault();

    console.log("Form has been submited successfully")

});


function checkInputs() {

    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()


}