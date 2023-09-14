
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let xAttempts = 0;


function handleBiscuitClick(event) {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function resetWindow(event) {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    console.log(xAttempts)
    
    if (xAttempts == 0) {
        document.querySelector(".screen2 p").innerText = `Procure ascender uma vela em vez de amaldiçoar a escuridão`;
        xAttempts++;
    }
    else if (xAttempts == 1) {
        document.querySelector(".screen2 p").innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`;
        xAttempts = 0;
    }
    

}

const biscuitClick = document.querySelector("#biscuitClick")
const btnReset = document.querySelector("#btnReset")

biscuitClick.addEventListener('click', handleBiscuitClick)
btnReset.addEventListener('click', resetWindow)
