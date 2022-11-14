console.log('hi');

var slimes = [];
var names = [
    'bob',
    'georgia',
    'rhodes',
    'claudia',
    'graw'
];

var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'white'
]

const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

function linear(start,end,t){
    return start*(1-t)+end*t;
};

async function draw(amt){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = 'beige';
    ctx.font = "50px Arial";
    ctx.fillText('cliques',50,70);

    for (i=1; i < amt+1; i++){
        var color = colors[Math.floor(Math.random()*colors.length)];
        slimes.push(
            {
                slime:slime,
                name:names[Math.floor(Math.random()*names.length)],
                color:color,
                personality:{emo:0,coolkid:0}
            },
        );
        var slime = drawSlime(20,color);
    };

    drawSlime(50);

    //loop(draw)

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
            document.getElementById('space').appendChild(newElem);
        };
    };

    var string = newElem.toString();
    console.log(`${string.substring(12,string.length-1)} spawned.`);
    return newElem;
};

var canvas = spawnElem('canvas');
var ctx = canvas.getContext('2d');

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
};

function drawSlime(diam,color){
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    
    ctx.fillStyle = color;

    // var circle = new Path2D();
    ctx.beginPath();
    ctx.arc(clamp(x,diam,canvas.width-diam),clamp(y,diam,canvas.height-diam),diam,0,Math.PI * 2); // circle
    ctx.closePath();
    ctx.fill();

    
    return ctx;
};

var div1 = spawnElem('div');

console.log('-'.repeat(70));

function read(){
    console.log(slimes,'\n');
    slimes.forEach(function(slime){
    var personality = slime.personality;
    for (const [attribute,value] of Object.entries(personality)) {
        // console.log(attribute,value);
    };
    // console.warn(slime.name);
    // console.log(personality)
});
};

draw(3);
read();