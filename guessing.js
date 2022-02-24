const startButtonElement = document.querySelector(".startbtn");
let enterButton = document.getElementById("enterbtn");
let againButton = document.getElementById("againbtn");
let output = document.getElementById("outputtext");

let randomNumber = Math.ceil((Math.random() * 100));

enterButton.addEventListener('click', checkNumber);

function checkNumber() {
    let input = document.getElementById("userinput").value;
    if (input == randomNumber) {
        output.innerHTML = "Correct, the secret number is " + randomNumber + "!";
        output.style.color = "green";

    } else if (input > randomNumber && input < 100) {
        output.innerHTML = "Your guess is too high!";
        output.style.color = "red";

    } else {
        output.innerHTML = "Your guess is too low!";
        output.style.color = "red";
    }
}

againButton.addEventListener('click', function() {
    location.reload();
    output.innerHTML = "New game started!"
});