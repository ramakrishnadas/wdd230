const membersURL = 'https://ramakrishnadas.github.io/wdd230/chamber/data/members.json';
const membersGrid = document.querySelector('.grid-container');

async function getMembers(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            //displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getMembers(membersURL);