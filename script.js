// var baseServer = 'http://192.168.4.1:81';
// var baseServer = 'https://cloud.arest.io/6fyd7fek/digital/0';
var baseServer = 'https://cloud.arest.io';
var deviceId = '';
var _btnLiga = document.getElementById('btnLiga');
var _btnDesliga = document.getElementById('btnDesliga');
var _txtDeviceId = document.getElementById('txtDeviceId');

// _btnDesliga.disabled = true;
// _btnLiga.classList.remove('disabled');

// _btnDesliga.attr("disabled", "disabled");
// _btnLiga.removeAttr("disabled");

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function connectDevice() {
    this.deviceId = _txtDeviceId.value;
    httpGetAsync(`${this.baseServer}/${this.deviceId}`, response => {
        var res = JSON.parse(response);
        console.log(res);
        alert(res.message);
        if (res.connected) {
            _btnLiga.classList.remove('disabled');
            _btnDesliga.classList.remove('disabled');
            _btnDesliga.disabled = false;
            _btnLiga.disabled = false;
        } else {
            _btnLiga.classList.add('disabled');
            _btnDesliga.classList.add('disabled');
            _btnDesliga.disabled = true;
            _btnLiga.disabled = true;
        }
    });
    console.log(this.deviceId);
}

function onLigar() {
    console.log('onLigar');
    // httpGetAsync(`${baseServer}/turn_on`, function () {});
    // httpGetAsync(`${baseServer}/1`, function (response) {
    //     alert(response);
    //     console.log(response);
    // });

    _btnLiga.disabled = true;
    _btnDesliga.disabled = false;

    _btnLiga.classList.add('disabled');
    _btnDesliga.classList.remove('disabled');
};

function onDesligar() {
    console.log('onDesligar');
    // httpGetAsync(`${baseServer}/turn_off`, function () {});
    // httpGetAsync(`${baseServer}/0`, function (response) {
    //     alert(response);
    //     console.log(response);
    // });
    _btnDesliga.disabled = true;
    _btnLiga.disabled = false;

    _btnDesliga.classList.add('disabled');
    _btnLiga.classList.remove('disabled');
};