var stopLight = document.getElementById("stopLight")
var steadyLight = document.getElementById("steadyLight")
var goLight = document.getElementById("goLight")
var startButton = document.getElementById("startButton")
var sign = document.getElementById("sign")

function resetLights() {
    stopLight.style.backgroundColor = 'rgb(177, 177, 177)';
    steadyLight.style.backgroundColor = 'rgb(177, 177, 177)';
    goLight.style.backgroundColor = 'rgb(177, 177, 177)';
}

function startTrafficLight() {
    resetLights();
    stopLight.style.backgroundColor = 'red';
    setTimeout(() => {
        resetLights();
        steadyLight.style.backgroundColor = '#ffb500';
        sign.innerHTML = "STEADY"
        sign.style.color = "#ffb500"
        setTimeout(() => {
            resetLights();
            goLight.style.backgroundColor = 'green';
            sign.innerHTML = "GO"
            sign.style.color = "green"
            setTimeout(startTrafficLight, 5000);
        }, 2000);
    }, 5000);
}

startButton.addEventListener('click', startTrafficLight);

