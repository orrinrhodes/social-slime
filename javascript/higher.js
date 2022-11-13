console.log('hi');

var slimes = [];

function draw(amt){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle ='beige';
    ctx.font = "50px Arial";
    ctx.fillText('cliques',50,70);
    
    for (i=1; i < amt+1; i++){
        var slime = drawSlime(20);
        slimes.push(
            {slime:slime,name:'bob',personality:{emo:0,coolkid:0}},
            // {slime:slime,name:'bob',personality:{emo:12,coolkid:100}},
            // {slime:slime2,name:'georgia',personality:{emo:65,misandrist:100}}
        );
    };
};

function update(slimes){

};

function spawnElem(elem,prop){
    var newElem = document.createElement(elem);
    var newProp = document.createTextNode('hi');

    newElem.appendChild(newProp);

    if (elem == 'canvas'){
        if (newElem.getContext) {
            newElem.style.backgroundColor = 'grey';
            newElem.height = 500;
            newElem.width = 500;
            document.body.appendChild(newElem);
        };
    };

    var string = newElem.toString();
    console.log(`${string.substring(12,string.length-1)} spawned.`);
    return newElem;
};

var canvas = spawnElem('canvas');
var ctx = canvas.getContext('2d');

function drawSlime(diam){
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    
    ctx.fillStyle = 'green';

    // var circle = new Path2D();
    ctx.beginPath();
    ctx.arc(x,y,diam,0,Math.PI * 2); // circle
    ctx.closePath();
    ctx.fill();
    
    return ctx;
};

var div1 = spawnElem('div');
draw(5);

console.warn('-'.repeat(75));

function read(){
    console.table(slimes);
    slimes.forEach(function(slime){
    var personality = slime.personality;
    for (const [attribute,value] of Object.entries(personality)) {
        // console.log(attribute,value);
    };
    console.warn(slime.name);
    console.table(personality)
});
};

read();