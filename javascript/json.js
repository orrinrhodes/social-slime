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

readRaw('./json/accounts.json', function(json){
    var data = JSON.parse(json);
    console.table(data.accounts);
});