const foundGroups = {};
pre.forEach((pre) =>{
    pre.innerHTML = pre.innerHTML.replace(new RegExp(toSearch.join("|"),"g"), function (match) {
        if(!foundGroups[match]){
            const img = document.createElement('img');

            let src = '';
            if(match === 'A'){
                src = 'content/images/chords/A.png';
            }
            else if(match === 'A7'){
                src = 'content/images/chords/A7.png';
            }
            else if(match === 'A#'){
                src = 'content/images/chords/Adiez.png';
            }
            else if(match === 'A#m'){
                src = 'content/images/chords/Adiezm.png';
            }
            else if(match === ' Am '){
                src = 'content/images/chords/Am.png';
            }
            else if(match === 'B'){
                src = 'content/images/chords/B.png';
            }
            else if(match === 'B7'){
                src = 'content/images/chords/B7.png';
            }
            else if(match === 'Bb'){
                src = 'content/images/chords/Bb.png';
            }
            else if(match === 'Bm'){
                src = 'content/images/chords/Bm.png';
            }
            else if(match === 'C'){
                src = 'content/images/chords/C.png';
            }
            else if(match === 'C7'){
                src = 'content/images/chords/C7.png';
            }
            else if(match === 'C#'){
                src = 'content/images/chords/Cdiez.png';
            }
            else if(match === 'C#m'){
                src = 'content/images/chords/Cdiezm.png';
            }
            else if(match === 'Cm'){
                src = 'content/images/chords/D.png';
            }
            else if(match === 'D'){
                src = 'content/images/chords/D.png';
            }
            else if(match === 'D7'){
                src = 'content/images/chords/D7.png';
            }
            else if(match === 'D#'){
                src = 'content/images/chords/Ddiez.png';
            }
            else if(match === 'D#m'){
                src = 'content/images/chords/D#m.png';
            }
            else if(match === 'Dm'){
                src = 'content/images/chords/Dm.png';
            }
            else if(match === 'E'){
                src = 'content/images/chords/E.png';
            }
            else if(match === 'E7'){
                src = 'content/images/chords/E7.png';
            }
            else if(match === 'Em'){
                src = 'content/images/chords/Em.png';
            }
            else if(match === 'Em7'){
                src = 'content/images/chords/Em7.png';
            }
            else if(match === 'F'){
                src = 'content/images/chords/F.png';
            }
            else if(match === 'F#'){
                src = 'content/images/chords/Fdiez.png';
            }
            else if(match === 'F#m'){
                src = 'content/images/chords/Fdiezm.png';
            }
            else if(match === 'Fm'){
                src = 'content/images/chords/Fm.png';
            }
            else if(match === 'G'){
                src = 'content/images/chords/G.png';
            }
            else if(match === 'Gm'){
                src = 'content/images/chords/Gm.png';
            }
            else if(match === 'G#'){
                src = 'content/images/chords/Gdiez.png';
            }
            else if(match === 'G#m'){
                src = 'content/images/chords/Gdiezm.png';
            }
            else if(match === 'Am'){
                src = 'content/images/chords/Gm.png';
            }

            img.setAttribute('src',src);
            document.querySelector('.applicature_images').appendChild(img);

            foundGroups[match] = true;
        }
        return '<span>' + match + '</span>';
    });
});