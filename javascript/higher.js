console.log('hi');

function spawnElem(elem,prop){
    var newElem = document.createElement(elem);
    var newProp = document.createTextNode('hi');

    newElem.appendChild(newProp);

    if (elem == 'canvas'){
        if (newElem.getContext) {
            
            newElem.style.backgroundColor = 'black';
            newElem.height = 500;
            newElem.width = 500;

            document.body.appendChild(newElem);
        };
    };

    var string = newElem.toString();
    console.log(`${string.substring(12,string.length-1)} spawned.`);
    return newElem;
};

function spawnSlime(cnvs,x,y,diam){
    var ctx = cnvs.getContext('2d');
    ctx.font = '50px Comic Sans MS';
    ctx.fillStyle = 'green'
    ctx.fillText('cliques', 10, 50);

    // ctx.fillRect(25, 25, 100, 100);
    // x,y relative to canvas != body
    ctx.arc(x, y, diam, 0, Math.PI * 2, true); // circle
    ctx.fill();
};

var div1 = spawnElem('div');
var canvas = spawnElem('canvas');


spawnSlime(canvas,100,150,20);
spawnSlime(canvas,200,300,20);