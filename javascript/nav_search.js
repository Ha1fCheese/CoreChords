document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    // Загрузить страницу и добавить все теги <a> на страницу в список песен
    function loadSongs() {
        fetch('../data/songs.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const songLinks = doc.querySelectorAll('a');
                window.songList = Array.from(songLinks).map(link => {
                    return {
                        name: link.innerText.trim(),
                        href: link.href
                    };
                });
            })
            .catch(error => console.error(error));
    }

    loadSongs();

    // Обработчик ввода поискового запроса
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const matchingSongs = window.songList.filter(song => {
            return song.name.toLowerCase().includes(searchTerm);
        });

        // Вывести результаты поиска в контейнер
        resultsContainer.innerHTML = '';
        matchingSongs.forEach(song => {
            const link = document.createElement('a');
            link.href = song.href;
            link.innerText = song.name;
            resultsContainer.appendChild(link);
            // resultsContainer.appendChild(document.createElement('br'));
        });
    });

    // Закрыть результаты поиска при потере фокуса поля ввода
    searchInput.addEventListener("blur", (event) => {
        // проверяем, является ли элемент, на котором произошло событие, потомком resultsContainer
        if (!resultsContainer.contains(event.relatedTarget)) {
            // очищаем результаты поиска
            resultsContainer.innerHTML = '';
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