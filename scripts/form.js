// page rating display

const rangevalue = document.getElementById("rangevalue");
const pageRating = document.getElementById("pageRating");

pageRating.addEventListener('change', displayRatingValue);
pageRating.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = pageRating.value;
}

// password check

const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

password2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password1.value !== password2.value) {
		message.textContent = "❗ Passwords DO NOT MATCH!";
        message.style.display = "block";
        message.style.visibility = "visible";
		password2.value = "";
		password2.focus();
	} else {
		message.style.display = "none";
	}
}
