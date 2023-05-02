document.addEventListener('DOMContentLoaded', function() {
    let popular__div = document.getElementsByClassName('popular__div')[0]
    // const resultsContainer = document.getElementById('searchResults');

    let request = new XMLHttpRequest();
    request.open('GET', "data/blocks.xml",false);
    request.send();
    let xmlDoc = request.responseXML;

    const groupName = xmlDoc.getElementsByTagName('group');
    const links = xmlDoc.getElementsByTagName('group_src');
    // const searchTerm = document.getElementsByClassName('perfomer__name__title')[0].innerHTML;
    /*let perfomer__img__div = document.getElementsByClassName('perfomer__img__div')[0];
    let img = document.createElement('img');
    img.src = xmlDoc.getElementsByTagName('src').innerHTML;
    perfomer__img__div.appendChild(img);*/

    const searchResults = [];
    searchResults.push(groupName[0]);
    const searchLinks = [];
    searchLinks.push(links[0]);

    let counter = 0;

    for (let i = 1; i < groupName.length; i++) {
        console.log(groupName[i].textContent);
        for(let j = 0; j < searchResults.length; j++){
            console.log(searchResults[j].textContent);
            if (groupName[i].textContent !== searchResults[j].textContent) {
                counter++;
            }
        }
        if(counter === searchResults.length){
            searchResults.push(groupName[i]);
            searchLinks.push(links[i]);
        }
        counter = 0;
    }
    // const numbers = [-1, 3, 9, -9, 100, -100, 100, 100];
    // const newSet = new Set(groupName);
    // const searchResults = Array.from(newSet);
    // const newSet2 = new Set(links);
    // const searchLinks = Array.from(newSet2);

    // console.log(groupName[2].textContent)
    // console.log(searchResults[2].textContent);

    for (let i = 0; i < searchResults.length; i++) {

        const table_element = document.createElement('div');
        table_element.className = 'table_element';
        popular__div.appendChild(table_element);

        const linkElement = document.createElement('a');
        // linkElement.id =
        linkElement.textContent = searchResults[i].textContent;
        linkElement.href = searchLinks[i].textContent;
        table_element.appendChild(linkElement);

        const pNum = document.createElement('p');
        pNum.innerHTML = 'XXXXXXX';
        table_element.appendChild(pNum);
    }
});