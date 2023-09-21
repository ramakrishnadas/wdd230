const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    main.classList.toggle("dark-mode");
    modeButton.classList.toggle("dark-mode");
});