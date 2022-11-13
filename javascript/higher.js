//<canvas id='space' width='750' height='750'></canvas>

console.log('hi');

function spawnElem(elem,prop){
    var newElem = document.createElement(elem);
    var newProp = document.createTextNode('hi');

    newElem.appendChild(newProp);
}

spawnElem('div');