var old = console.log;
var logger = document.getElementById('log');
console.log = function () {
for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == 'object') {
        logger.innerHTML += `${(JSON && JSON.stringify ? JSON.stringify(arguments[i],undefined,2):arguments[i])}<br />`;
    } else {
        logger.innerHTML += `${arguments[i]}<br/>`;
    };
    };
};

function enter(txt) {
    if(event.key === 'Enter') {
        if(txt.value === ''){
            return;
        };
        if(typeof Number(txt.value) === 'number'){
            console.log(txt.value);
        };
        try{
           eval(txt.value); 
        } catch(err) {
            console.log(err.toString());
        };
        document.getElementById('enter').value = '';
    };
};