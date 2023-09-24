const hamButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});