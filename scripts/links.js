const baseURL = 'https://ramakrishnadas.github.io/wdd230/';
const linksURL = 'https://ramakrishnadas.github.io/wdd230/data/links.json';

async function getLinks(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            //displayLinks(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}