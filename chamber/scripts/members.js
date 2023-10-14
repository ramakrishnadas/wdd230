const membersURL = 'https://ramakrishnadas.github.io/wdd230/chamber/data/members.json';
const membersDisplay = document.querySelector('#display');
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

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
    members.forEach((member) => {
        let container = document.createElement('div');
        let logo = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let membershipLvl = document.createElement('p');
        let website = document.createElement('a');
        let description = document.createElement('p');

        logo.setAttribute('src', member.imageURL);
        logo.setAttribute('alt', member.name);
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');
        name.textContent = member.name;
        name.setAttribute('class', 'companyName');
        address.textContent = member.address;
        phoneNumber.textContent = member.phoneNumber;
        membershipLvl.textContent = `Membership Level: ${member.membershipLevel}`;
        website.href = member.websiteURL;
        website.textContent = member.websiteURL;
        description.textContent = member.description;
        
        container.appendChild(logo);
        container.appendChild(name);
        container.appendChild(address);
        container.appendChild(phoneNumber);
        container.appendChild(membershipLvl);
        container.appendChild(website);
        container.appendChild(description);

        membersDisplay.appendChild(container);
    })
}

gridButton.addEventListener('click', showGrid);
listButton.addEventListener('click', showList);

function showGrid() {
	membersDisplay.classList.add("grid");
	membersDisplay.classList.remove("list");
}

function showList() {
	membersDisplay.classList.add("list");
	membersDisplay.classList.remove("grid");
}
