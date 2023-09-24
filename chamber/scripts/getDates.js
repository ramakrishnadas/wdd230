// dynamically update current year for copyright in footer section
let currentYear = new Date();
document.querySelector('#currentYear').textContent = currentYear.getFullYear();

// last modified date in footer section
let lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModifiedDate}`;