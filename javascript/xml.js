document.addEventListener('DOMContentLoaded', function() {

    let request = new XMLHttpRequest();
    request.open('GET', "data/blocks.xml", false);
    request.send();
    let xmlDoc = request.responseXML;

    //новые аккорды
    const new_chords__div__items = document.getElementsByClassName('new_chords__div__items')[0];
    console.log('not for;');
    let k = (xmlDoc.getElementsByTagName('block').length - 10);
    for (let i = xmlDoc.getElementsByTagName('block').length -1; i > k; i--){
        console.log('for;');

        let block = xmlDoc.getElementsByTagName('block')[i].childNodes;

        let song_name2 = document.createElement('a');
        song_name2.href = block[1].innerHTML;
        song_name2.innerHTML = block[7].innerHTML + ' - ' + block[5].innerHTML;
        new_chords__div__items.appendChild(song_name2);
    }

    for (let i = 0; i < xmlDoc.getElementsByTagName('block').length; i++) {
        let block = xmlDoc.getElementsByTagName('block')[i].childNodes;
        let popular__base = document.createElement('div');
        popular__base.className = "popular__base";
        let popular__element = document.createElement('div');
        popular__element.className = "popular__element";
        popular__base.appendChild(popular__element);

        let a_bg = document.createElement('a');
        a_bg.className = "bg";
        a_bg.style = 'background: url("' + block[3].innerHTML + '") no-repeat center center;' + "background-size: cover ;";
        a_bg.href = block[1].innerHTML;
        popular__element.appendChild(a_bg);

        let info__block = document.createElement('div');
        info__block.className = "info__block";
        popular__element.appendChild(info__block);

        let song_name = document.createElement('a');
        song_name.href = block[1].innerHTML;
        song_name.innerHTML = block[5].innerHTML;
        info__block.appendChild(song_name);

        let group = document.createElement('a');
        group.href = block[9].innerHTML;
        group.innerHTML = block[7].innerHTML;
        info__block.appendChild(group);

        document.body.getElementsByClassName("popular_all_elements")[0].appendChild(popular__base);
    }

    document.addEventListener('');
});