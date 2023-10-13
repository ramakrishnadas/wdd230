const baseURL = 'https://ramakrishnadas.github.io/wdd230/';
const linksURL = 'https://ramakrishnadas.github.io/wdd230/data/links.json';

const activityList = document.querySelector('.learning-activities');

async function getLinks(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getLinks(linksURL);

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let listItem = document.createElement('li');
        let weekNum = week.week;

        listItem.append(`${weekNum}: `)
        let i = 0;
        week.links.forEach((link) => {
            
            let anchorElement = document.createElement('a');
            anchorElement.href = link.url;
            anchorElement.textContent = link.title;

            listItem.appendChild(anchorElement);
            if (i != week.links.length - 1) {
                listItem.append(' | ');
            }
            i++;
        })

        activityList.appendChild(listItem);
    })
}