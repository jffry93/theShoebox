function contactInfo() {
    var nameVar = document.getElementById('name').value;
    var emailVar = document.getElementById('email').value;
    var subjectVar = document.getElementById('subject').value;
    var messageVar = document.getElementById('message').value;

    if (emailVar.includes('@' && '.com') && messageVar.includes(' ')) {
        swal({
            title: "Thanks for the feedback!",
            text: "We will get back to you ASAP",
            icon: "success",
            button: "Continue",
        });
    } else {
        swal({
            title: "Ooooops...",
            text: "Please fill in all the fields correctly",
            icon: "error",
            button: "try again",
        });
    }
}



const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
});