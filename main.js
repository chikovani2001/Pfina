let ready = document.querySelector('#ready')
ready.onclick = function() {
    getItem();
}
let refresh = document.querySelector('#refresh')
refresh.onclick = function(){
    window.location.reload();
}
function getItem(){
    let variable = document.querySelector('#input').value;
    if(variable == "ანასტასია" | variable == "ტასო" ){
        const elem = document.createElement('p');
        elem.style.color = 'white';
        elem.style.fontSize = '22px';
        elem.innerText = 'ოხ ანასტასიააა, შე ბული გოგო შენ შეგეფერება:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);


        var elem1 = document.createElement("img");
        elem1.src = 'chimaro.png';
        elem1.setAttribute("height", "200");
        elem1.setAttribute("width", "200");
        elem1.setAttribute("alt", "chimaro");
        document.getElementById("placehere").appendChild(elem1);
        
    }else if(variable == "ჯიქი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ჯიქი ძმაო შენ ეს არშეგეფერება მარა გინდა და ჰა:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'maria.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "მაჭა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'მაჭა ძმაო შენ ეს შეგეფერება, მარა არ გიმსახურებს:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'kendal.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "ოთო" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'იყოს ძმაო ეს კარგი კეთილი ექიმი:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'doc.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "ეკა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ჩემი და ხარ და არ გაგწირაააავ:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'ara.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);

    }else if(variable == "ელენე" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ბულინგზე პასუხია :)))))))):';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'kaxaberi.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "გიგი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'შენი ბედისწერაა:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'gigi.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "ჯოლოხავა" ){

    }else if(variable == "ქალები" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ყველა ქალი იმსახურებს მსგავს მამაკაცს:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'lomebi.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);

    }else if(variable == "ჩიქო" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'მარტო მეგობრები გეყოლება შენ';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'lv2.png';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "ვაჟა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'შენი ბედისწერაც ესაა ლოგიკურად:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'gigi.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "გიორგი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ვხედავ გოგოს რომლის სახელიც ლი-ზე იწყება:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'lv.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "ლიზი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ვხედავ ვიღაც ბიჭს რომლის სახელშიც - შემდეგი ასოები "იორგი" ურევია';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'boo.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);

    }else if(variable == "ნონა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'შენ ეს ვაჟბატონი შეგეფერება ქალბატონო:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'xum.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);

    }else if(variable == "ლუკა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'შენ ნამდვილად საუკეთსო შეგეფერება ძმაუ:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'jolo.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);

    }else if(variable == "ბერელა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'შენ ნამდვილად საუკეთსო შეგეფერება ძმა:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'anj.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);

    }else if(variable == "ნინო" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ნინო , შენ კაი გოგოხარ ალბათ ეს მამაკაცი შეგეფერება::';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'ilo.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "ნანა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ნანა , შენ ეს ლამასი ბიჭი შეგეფერება';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = 'gigiy.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }   



}

