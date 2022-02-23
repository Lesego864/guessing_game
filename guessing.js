const startButtonElement = document.querySelector(".startbtn");
const enterNumberElement = document.querySelector(".enter_number");
const guessButtonElement = document.querySelector(".guessbtn");
const messageElement = document.querySelector(".message");


let randomNumber = Math.ceil((Math.random() * 100)).toFixed(0);
var numberGuessed = 0;


startButtonElement.addEventListener('click', startButton);

function startButton() {
    enterNumberElement.classList.remove("hide");
    guessButtonElement.classList.remove("hide")
};


guessButtonElement.addEventListener('click', guessButton);

function guessButton() {
    if (numberGuessed < randomNumber.value) {
        messageElement.innerHTML = "Sorry, Your guess is too low!";
        setTimeout(function() {
            messageElement.classList.remove("hide")
        }, 1000);
        setTimeout(function() {
            window.location.reload();
        }, 3000);
        hideMessage();

    } else if (numberGuessed > randomNumber.value) {

        messageElement.innerHTML = "Sorry, Your guess is too high!";
        setTimeout(function() {
            messageElement.classList.remove("hide")
        }, 1000);
        setTimeout(function() {
            window.location.reload();
        }, 3000);
        hideMessage();

    } else if (numberGuessed = randomNumber.value) {
        messageElement.innerHTML = "Correct, the secret number is " + randomNumber;
        // $ { number };
        setTimeout(function() {
            messageElement.classList.remove("hide")
        }, 1000);
        setTimeout(function() {
            window.location.reload();
        }, 3000);
    }
    hideMessage();
};

function hideMessage() {
    setTimeout(function() {
        messageElement.classList.add("hide")
    }, 3000);
    setTimeout(function() {
        enterNumberElement.classList.add("hide")
    }, 3000);
    setTimeout(function() {
        guessButtonElement.classList.add("hide")
    }, 3000);

}