function readRaw(file, callback) {
    var raw = new XMLHttpRequest();
    raw.overrideMimeType('application/json');
    raw.open('GET', file, true);
    raw.onreadystatechange = function() {
        if (raw.readyState === 4 && raw.status == '200') {
            callback(raw.responseText);
        }
    }
    raw.send(null);
}

const url = 'http://ip-api.com/json';

var ips = {
    'fakeIP':{'actions':0,'limit':20}
};

var limit = 20;

var delay = async (ms = 1000) => new Promise(handler => setTimeout(handler,ms));

async function waitLoop(ip,length,code,ms) {
    for (var i = 0; i < length; i++) {
        if (ip.actions>=limit) {
            console.log('limit reached!');
            console.table(ips);
            break;
        } else {
            ip.actions+= 1;
            eval(code);
        }
        console.log('current actions: '+ip.actions);
        await delay(ms);
    };
};

readRaw(url, function(json){
    var data = JSON.parse(json);
    ips[data.query] = {'actions':0,'limit':20,};
    console.table(ips);
    var ip = ips[data.query];
    console.log(`${data.query}'s limit: ${ip.limit}`);
    waitLoop(ip,Infinity,``,250);
});