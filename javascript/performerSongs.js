document.addEventListener('DOMContentLoaded', function() {
    let popular__div = document.getElementsByClassName('popular__div')[0]

    let request = new XMLHttpRequest();
    request.open('GET', "data/blocks.xml",false);
    request.send();
    let xmlDoc = request.responseXML;

    const groupName = xmlDoc.getElementsByTagName('group');
    const names = xmlDoc.getElementsByTagName('song_name');
    const links = xmlDoc.getElementsByTagName('src');
    const searchTerm = document.getElementsByClassName('perfomer__name__title')[0].innerHTML;

    const searchResults = [];
    const searchLinks = [];
    for (let i = 0; i < groupName.length; i++) {
        if (groupName[i].textContent.includes(searchTerm)) {
            searchResults.push(names[i]);
            searchLinks.push(links[i]);
        }
    }
    for (let i = 0; i < searchResults.length; i++) {

        const table_element = document.createElement('div');
        table_element.className = 'table_element';
        popular__div.appendChild(table_element);

        const linkElement = document.createElement('a');

        linkElement.textContent = searchResults[i].textContent;
        linkElement.href = searchLinks[i].textContent;
        table_element.appendChild(linkElement);

        const pNum = document.createElement('p');
        pNum.innerHTML = 'XXXXXXX';
        table_element.appendChild(pNum);
    }
});