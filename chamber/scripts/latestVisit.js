const latestVisitLabel = document.querySelector('#latestVisit');
const msToDays = 84600000;
const currentDate = Date.now();

let lastVisit = Number(window.localStorage.getItem('lastVisit-ls')) || 0;
const timeElapsed = currentDate - lastVisit;

if (lastVisit == 0) {
    latestVisitLabel.textContent = 'Welcome! Let us know if you have any questions.';
} else if (timeElapsed <= msToDays) {
    latestVisitLabel.textContent = 'Back so soon! Awesome!';
} else {
    let numOfDays = timeElapsed / msToDays;
    if (numOfDays.toFixed(0) == 1) {
        latestVisitLabel.textContent = `You last visited ${numOfDays.toFixed(0)} day ago.`;
    } else {
        latestVisitLabel.textContent = `You last visited ${numOfDays.toFixed(0)} days ago.`;
    }
}

localStorage.setItem('lastVisit-ls', currentDate);