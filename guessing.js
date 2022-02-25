let startButton = document.getElementById("startbtn");
let enterButton = document.getElementById("enterbtn");
let againButton = document.getElementById("againbtn");
let output = document.getElementById("outputtext");

let randomNumber = Math.ceil((Math.random() * 100));

enterButton.addEventListener('click', checkNumber);

function checkNumber() {
    let input = document.getElementById("userinput").value;

    if (input > randomNumber && input < 100) {
        console.log(randomNumber);
        output.innerHTML = "Your guess is too high!";
        output.style.color = "red";

        // } else (input > randomNumber && input > 1) {
    } else {
        output.innerHTML = "Your guess is too low!";
        output.style.color = "red";
    }

    if (input == randomNumber) {
        // setTimeout(function() {
        output.innerHTML = "Correct, the secret number is " + randomNumber + "!";
        output.style.color = "green";
        // }, 3000);

        setTimeout(function() {

            let randomNumber = Math.ceil((Math.random() * 100));
            output.innerHTML = "New game started!";
        }, 5000);

        setTimeout(function() {
            location.reload();
            output.innerHTML = "";
        }, 8000);

        // output.innerHTML = "";



        // output.innerHTML = "New game started!"

    }
}

againButton.addEventListener('click', function() {
    location.reload();
    output.innerHTML = "New game started!"
});