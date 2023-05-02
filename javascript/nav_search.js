// let request = new XMLHttpRequest();
// request.open('GET', "data/blocks.xml",false);
// request.send();
// let xmlDoc = request.responseXML;

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    const names = xmlDoc.getElementsByTagName('song_name');
    const links = xmlDoc.getElementsByTagName('src');

    // Обработчик ввода поискового запроса
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        }

        /*for (let i = 0; i < xmlDoc.getElementsByTagName('block').length; i++) {
            let block = xmlDoc.getElementsByTagName('block')[i].childNodes;
            let xmlSong = block[5].innerHTML;
            console.log("try");
            if (xmlSong.toLowerCase().trim().includes(searchTerm)) {
                searchResults.push(links[i]);
                console.log("try2");
                resultsContainer.innerHTML = '';
                const link = document.createElement('a');
                link.href = block[1].innerHTML;
                link.innerText = block[5].innerHTML;
                resultsContainer.appendChild(link);
                // resultsContainer.appendChild(document.createElement('br'));
                console.log("complete");
            }
        }*/

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

        /*const matchingSongs = window.xmlSong.filter(song => {
            return song.name.toLowerCase().includes(searchTerm);
        });*/

        // Вывести результаты поиска в контейнер

            // resultsContainer.appendChild(document.createElement('br'));
        /*});*/
    // });

    // Закрыть результаты поиска при потере фокуса поля ввода
    searchInput.addEventListener("blur", (event) => {
        // проверяем, является ли элемент, на котором произошло событие, потомком resultsContainer
        if (!resultsContainer.contains(event.relatedTarget)) {
            // очищаем результаты поиска
            resultsContainer.innerHTML = '';
            // resultsContainer.event.relatedTarget.remove();
        }
    });

// обработчик события клика на поле поиска
    searchInput.addEventListener("click", () => {
        // показываем результаты поиска

        resultsContainer.style.display = "block";
    });

// обработчик события клика вне поля поиска и результатов поиска
    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
            // скрываем результаты поиска

            resultsContainer.style.display = "none";
        }
    });
});