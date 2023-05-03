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

    const gpName2 = xmlDoc.getElementsByTagName('group');
    const gpHref2 = xmlDoc.getElementsByTagName('group_src');
    let popular_search2 = document.getElementsByClassName('popular_search')[0];
    // let popular__div = document.getElementsByClassName('popular__div')[0];
    document.addEventListener('input', () =>{
        const searchTerm3 = popular_search2.value.toLowerCase().trim();
        while (popular__div.firstChild) {
            popular__div.removeChild(popular__div.firstChild);
        }

        let popular__title = document.createElement('div');
        popular__title.className = 'popular__title';
        popular__div.appendChild(popular__title);

        let pt = document.createElement('p');
        pt.innerHTML = 'Популярные исполнители';
        popular__title.appendChild(pt);

        let table__title = document.createElement('div');
        table__title.className = 'table__title';
        popular__div.appendChild(table__title);

        let ptt1 = document.createElement('p');
        ptt1.innerHTML = 'Исполнитель';
        table__title.appendChild(ptt1);

        let ptt2 = document.createElement('p');
        ptt2.innerHTML = 'Количество подборов';
        table__title.appendChild(ptt2);

        let hrtt = document.createElement('hr')
        popular__div.appendChild(hrtt);

        const searchResults3 = [];
        const searchLinks3 = [];
        // searchResults3.push(gpName2[0]);
        // searchLinks3.push(gpHref2[0]);


        let counter2 = 0;

        for (let i = 1; i < gpName2.length; i++) {
            console.log(gpName2[i].textContent);
            for(let j = 0; j < searchResults3.length; j++){
                console.log(searchResults3[j].textContent);
                if (gpName2[i].textContent !== searchResults3[j].textContent) {
                    counter2++;
                }
            }
            if(counter2 === searchResults3.length){
                if (gpName2[i].textContent.toLowerCase().trim().includes(searchTerm3)) {
                    searchResults3.push(gpName2[i]);
                    searchLinks3.push(gpHref2[i]);
                }
            }
            counter2 = 0;
        }
        for (let i = 0; i < searchResults3.length; i++) {
            const table_element2 = document.createElement('div');
            table_element2.className = 'table_element';
            popular__div.appendChild(table_element2);

            const linkElement2 = document.createElement('a');
            // linkElement.id =
            linkElement2.textContent = searchResults3[i].textContent;
            linkElement2.href = searchLinks3[i].textContent;
            table_element2.appendChild(linkElement2);

            const pNum = document.createElement('p');
            pNum.innerHTML = 'XXXXXXX';
            table_element2.appendChild(pNum);
        }
    })
});