const membersURL = 'https://ramakrishnadas.github.io/wdd230/chamber/data/members.json';
// add selectors for spotlight HTML elements
const spotlightContainer = document.querySelector('.flex-container1');


async function getMembers(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.table(data.members);
            displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getMembers(membersURL);

const displayMembers = (members) => {
    // filter only silver and gold membership members and display in spotlight section
    const possibleMembers = [];

    members.forEach((member) => {
        if (member.membershipLevel == 'Silver' || member.membershipLevel == 'Gold') {
            possibleMembers.push(member);
        }
    });
    
    let selectedMembers = possibleMembers.sort(() => .5 - Math.random()).slice(0 , 3);

    selectedMembers.forEach( (member) => {
        let spotlight = document.createElement('div');
        let header = document.createElement('h3');
        let logo = document.createElement('img');
        let link = document.createElement('a');
        let description = document.createElement('p');

        header.textContent = member.name;
        logo.setAttribute('src', member.imageURL);
        logo.setAttribute('alt', member.name);
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');
        link.href = member.websiteURL;
        link.textContent = member.websiteURL;
        description.textContent = member.description;

        spotlight.appendChild(header);
        spotlight.appendChild(logo);
        spotlight.appendChild(link);
        spotlight.appendChild(description);

        spotlightContainer.appendChild(spotlight);
    })

}
