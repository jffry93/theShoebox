
const emailVar = document.getElementById('email')
const emailVar2 = document.getElementById('email2')
const nameVar = document.getElementById('name')
const passwordVar = document.getElementById('password')
const passwordVar2 = document.getElementById('password2')
const dayVar = document.getElementById('day')
const monthVar = document.getElementById('month')
const yearVar = document.getElementById('year')
const checkboxVar = document.getElementById('checkbox')

const formVar = document.getElementById('enrollForm')
const errorElement = document.getElementById('error')

enrollForm.addEventListener('submit', (e) => {
    let messages = []
    if (emailVar.value.includes('@' && '.com')) { } else {
        messages.push('Email is required')
    }
    if (emailVar2.value === emailVar.value) { } else {
        messages.push('Emails must match')
    }
    if (nameVar.value === '' || nameVar.value == null) {
        messages.push('Name is required')
    }
    if (passwordVar.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }
    if (passwordVar2.value === passwordVar.value) { } else {
        messages.push('Passwords must match')
    }
    if (dayVar.value == '' || dayVar.value == null) {
        messages.push('Date of birth is required')
    }
    if (monthVar.value === "") {
        messages.push('Month of birth is required')
    }
    if (yearVar.value == '' || yearVar.value == null) {
        messages.push('Year of birth is required')
    }
    if (checkboxVar.checked == 1) { } else {
        messages.push("Please agree with our terms & conditions.")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    } else {
        swal({
            title: "Welcome to the family!",
            text: "Please check your email and follow the steps to complete sign up",
            icon: "success",
            button: "Continue",
        });

    }
})
const enrollform = document.getElementById("enrollForm");

enrollform.addEventListener("submit", (e) => {
    e.preventDefault();
});