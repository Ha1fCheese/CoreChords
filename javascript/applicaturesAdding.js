const foundGroups = {};
pre.forEach((pre) =>{
    pre.innerHTML = pre.innerHTML.replace(new RegExp(toSearch.join("|"),"g"), function (match) {
        if(!foundGroups[match]){
            const img = document.createElement('img');
            const chordsContainer = document.querySelector('.applicature_images');
            let src = '';
            if(match === 'G'){
                src = 'content/images/G_0.gif';
            }
            else if(match === 'B7'){
                src = 'content/images/B7_0.gif';
            }
            else if(match === 'D'){
                src = 'content/images/D_0.gif';
            }
            else if(match === 'C'){
                src = 'content/images/C_0.gif';
            }
            else if(match === 'Em'){
                src = 'content/images/Em_0.gif';
            }

            img.setAttribute('src',src);
            document.querySelector('.applicature_images').appendChild(img);

            foundGroups[match] = true;
        }
        return '<span>' + match + '</span>';
    });
});