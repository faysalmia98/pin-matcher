/* Generate Random Pin Number Click Handler*/ 
document.getElementById("random-pin").addEventListener("click", function(){
    document.getElementById("random-pin-generator").value = getRandomPin();
});

function getRandomPin(){
    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + '').split('.')[0];
    if(pin.length === 4) {
        return pin;
    }
    else {
        return getRandomPin();
    }
}
/* Input Digit Event Click Handler*/ 
document.getElementById("digits-container").addEventListener("click", function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C') {
            const inputDigit = document.getElementById("input-digit");
            inputDigit.value = ''
        }
    }
    else {
        const inputDigit = document.getElementById("input-digit");
        inputDigit.value = inputDigit.value + digit;
    }
})

/* Pin Verify Click Handler */ 

document.getElementById("verify-pin").addEventListener("click", function(){
    const pinGenerate = document.getElementById("random-pin-generator").value;
    const typedPin = document.getElementById("input-digit").value;
    if(pinGenerate === typedPin) {
        const correctPin = document.getElementById("correct-pin");
        correctPin.style.display = "block";
        const incorrectPin = document.getElementById("incorrect-pin");
        incorrectPin.style.display = "none";
    }
    else {
        const incorrectPin = document.getElementById("incorrect-pin");
        incorrectPin.style.display = "block";
        const correctPin = document.getElementById("correct-pin");
        correctPin.style.display = "none";
    }

    const pinCount = document.getElementById("pin-count");
    const newPinCount = parseInt(pinCount.innerText);
    pinCount.innerText = newPinCount + 1;
})