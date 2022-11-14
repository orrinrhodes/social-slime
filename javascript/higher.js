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

var delay = async (ms = 1000) => new Promise(handler => setTimeout(handler,ms));

async function waitLoop(length,code,ms) {
    for (var i = 1; i < length; i++) {
        eval(code);
        await delay(ms);
    };
};

// waitLoop(Infinity,`console.log('❗');`,250);

var canvas = spawnElem('canvas');
var ctx = canvas.getContext('2d');

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
};

var div1 = spawnElem('div');

console.log('-'.repeat(70));

function linear(start,end,t){
    return start*(1-t)+end*t;
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

function slimeInstance(amt){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = 'beige';
    ctx.font = "50px Arial";
    ctx.fillText('cliques',50,70);

    for(var i=0; i<amt; i++){
        var color = colors[Math.floor(Math.random()*colors.length)];
        var name = names[Math.floor(Math.random()*names.length)];
        if(slimes[i]){
            color = slimes[i].color;
            name = slimes[i].name;
        }else{
            // console.log('no slime, give props.');
            slimes.push(
                {
                    name:name,
                    color:color,
                    personality:{
                        emo:0,
                        coolkid:0,
                    },
                },
            );
        };
        drawSlime(20,color);
    };
};

function read(){
    console.log('<h1 id="slimeTitle">slimes:</h2>',slimes,'');
    slimes.forEach(function(slime){
    var personality = slime.personality;
    for (const [attribute,value] of Object.entries(personality)) {
        // console.log(attribute,value);
    };
    // console.warn(slime.name);
    // console.log(personality)
    });
    console.log('-'.repeat(70));
};

waitLoop(Infinity,`slimeInstance(3);`,250);

read();