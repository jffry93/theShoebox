// this js file is for the newletter footer
function footer() {

    var subscribeBtn = document.getElementById("subscribebtn").value;

    if (subscribeBtn.includes('@' && '.com')) {
        swal({
            title: "Awesome!",
            text: "Welcome to the family!",
            icon: "success",
            button: "Continue",
        });
    } else {
        swal({
            title: "Ooooops...",
            text: "Please enter your e-mail address",
            icon: "error",
            button: "try again",
        });
    }
}
const newsLetter = document.getElementById("newsLetter");

newsLetter.addEventListener("submit", (e) => {
    e.preventDefault();
});