document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');
    let request = new XMLHttpRequest();
    request.open('GET', "data/blocks.xml",false);
    request.send();
    let xmlDoc = request.responseXML;
    const names = xmlDoc.getElementsByTagName('song_name');
    const links = xmlDoc.getElementsByTagName('src');
    const bghref = xmlDoc.getElementsByTagName('href_img');
    const gpName = xmlDoc.getElementsByTagName('group');
    const gpHref = xmlDoc.getElementsByTagName('group_src');


    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        }

        const searchResults = [];
        const searchLinks = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i].textContent.toLowerCase().trim().includes(searchTerm)) {
                searchResults.push(names[i]);
                searchLinks.push(links[i]);
            }
        }
        for (let i = 0; i < searchResults.length; i++) {
            const linkElement = document.createElement('a');
            // linkElement.id =
            linkElement.textContent = searchResults[i].textContent;
            linkElement.href = searchLinks[i].textContent;
            resultsContainer.appendChild(linkElement);
        }
    });

    searchInput.addEventListener("blur", (event) => {
        if (!resultsContainer.contains(event.relatedTarget)) {
            resultsContainer.innerHTML = '';
        }
    });

    searchInput.addEventListener("click", () => {
        resultsContainer.style.display = "block";
    });

    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
            resultsContainer.style.display = "none";
        }
    });

    //поиск с блоками

    let popular_search = document.getElementsByClassName('popular_search')[0];
    let popular_all_elements = document.getElementsByClassName('popular_all_elements')[0];
    popular_search.addEventListener('input', () => {
        const searchTerm2 = popular_search.value.toLowerCase().trim();
        while (popular_all_elements.firstChild) {
            popular_all_elements.removeChild(popular_all_elements.firstChild);
        }
        const searchResults2 = [];
        const searchLinks2 = [];
        const searchbg = [];
        const groupName = [];
        const groupHref = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i].textContent.toLowerCase().trim().includes(searchTerm2)) {
                searchResults2.push(names[i]);
                searchLinks2.push(links[i]);
                searchbg.push(bghref[i]);
                groupName.push(gpName[i]);
                groupHref.push(gpHref[i]);

            }
        }
        for (let i = 0; i < searchResults2.length; i++) {
            const linkElement2 = document.createElement('a');
            linkElement2.textContent = searchResults2[i].textContent;
            linkElement2.href = searchLinks2[i].textContent;
            // popular_all_elements.appendChild(linkElement2);

            let popular__base = document.createElement('div');
            popular__base.className = "popular__base";
            let popular__element = document.createElement('div');
            popular__element.className = "popular__element";
            popular__base.appendChild(popular__element);

            let a_bg = document.createElement('a');
            a_bg.className = "bg";
            // a_bg.id = "el"
            a_bg.style = 'background: url("' + searchbg[i].textContent + '") no-repeat center center;' + "background-size: cover ;";
            a_bg.href = searchLinks2[i].textContent;
            popular__element.appendChild(a_bg);

            let info__block = document.createElement('div');
            info__block.className = "info__block";
            popular__element.appendChild(info__block);

            let song_name = document.createElement('a');
            song_name.href = searchLinks2[i].textContent;
            song_name.innerHTML = searchResults2[i].textContent;
            info__block.appendChild(song_name);

            let group = document.createElement('a');
            group.href = groupHref[i].textContent;
            group.innerHTML = groupName[i].textContent;
            info__block.appendChild(group);

            document.body.getElementsByClassName("popular_all_elements")[0].appendChild(popular__base);

        }
    });
});