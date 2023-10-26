// banner display
const button = document.querySelector('#banner-btn');
const banner = document.querySelector('#banner');

const today = new Date();
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const validWeekdays = ['Monday','Tuesday','Wednesday'];
const currentDay = weekdays[today.getDay()];

if (validWeekdays.includes(currentDay)) {
    button.style.display = 'block';
    banner.style.display = 'block';
} else {
    button.style.display = 'none';
    banner.style.display = 'none';
}

// banner close button
button.addEventListener('click', () => {
    button.style.display = 'none';
    banner.style.display = 'none';
})



