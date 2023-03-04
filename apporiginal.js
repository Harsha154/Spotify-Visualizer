

var redirect_url = "http://localhost:8080/";
//var redirect_url = "https://h4rsha.com/";


var access_token = null;
var refresh_token = null;
var track_id = null;
var seg_times = []
var bars_times = []
var beats_times = []
var Sections_times = []
var Tantum_times = []

var client_id = "737b8942f0a04f0f87ce71a78f408ab8"; 
var client_secret = "393abdfa1426465a94c5d7b88ea2c374";

const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";
const DEVICES = "https://api.spotify.com/v1/me/player/devices";
const PLAYER = "https://api.spotify.com/v1/me/player";
const AUDIOFEATURES = "https://api.spotify.com/v1/audio-features/";
const AUDIOANALYSIS = "https://api.spotify.com/v1/audio-analysis/";
const PLAYERTIME = "https://api.spotify.com/v1/me/player/play?device_id=";

function onPageLoad(){

    if (window.location.search.length > 0){
        handleRedirect();
    }
    else{
        access_token = localStorage.getItem("access_token");
        if ( access_token == null ){
            document.getElementById("tokenSection").style.display = 'block';  
        }
        else {
            document.getElementById("deviceSection").style.display = 'block';  
            refreshDevices();
            currentlyPlaying();
            draw();
            
        }
    }
}





function requestAuthorization(){

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_url);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email streaming user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's authorization screen
}



function handleRedirect(){
    let code = getCode();
    fetchAccessToken( code );
    window.history.pushState("", "", redirect_url); // remove param from url
}

function fetchAccessToken( code ){
    let body = "grant_type=authorization_code";
    body += "&code=" + code; 
    body += "&redirect_uri=" + encodeURI(redirect_url);
    body += "&client_id=" + client_id;
    body += "&client_secret=" + client_secret;
    callAuthorizationApi(body);
}


function getCode(){
    let code = null;
    const queryString = window.location.search;
    if ( queryString.length > 0 ){
        const urlParams = new URLSearchParams(queryString);
        code = urlParams.get('code')
    }
    return code;
}

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret)); //
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if ( data.access_token != undefined ){
            access_token = data.access_token;
            localStorage.setItem("access_token", access_token);
        }
        if ( data.refresh_token  != undefined ){
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
        onPageLoad();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}


function callApi(method, url, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(body);
    xhr.onload = callback;
}



function refreshDevices(){
    callApi( "GET", DEVICES, null, handleDevicesResponse );
}

function handleDevicesResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        removeAllItems( "devices" );
        data.devices.forEach(item => addDevice(item));
    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function addDevice(item){
    let node = document.createElement("option");
    node.value = item.id;
    node.innerHTML = item.name;
    document.getElementById("devices").appendChild(node); 
}

function refreshAccessToken(){
    refresh_token = localStorage.getItem("refresh_token");
    let body = "grant_type=refresh_token";
    body += "&refresh_token=" + refresh_token;
    body += "&client_id=" + client_id;
    callAuthorizationApi(body);
}

function removeAllItems( elementId ){
    let node = document.getElementById(elementId);
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function currentlyPlaying(){
    callApi( "GET", PLAYER + "?market=US", null, handleCurrentlyPlayingResponse );
    
}


function handleCurrentlyPlayingResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        if ( data.item != null ){
            document.getElementById("albumImage").src = data.item.album.images[0].url;
            document.getElementById("trackTitle").innerHTML = data.item.name;
            document.getElementById("trackArtist").innerHTML = data.item.artists[0].name;
            document.getElementById("trackID").innerHTML = data.item.id;
            track_id = data.item.id;
            localStorage.setItem("track_id", track_id);
            callApi( "GET", AUDIOFEATURES + track_id,  null, DisplayAudioFeatures);
            document.getElementById("trackID").innerHTML = data.item.id;

            progress_ms = data.progress_ms;
            localStorage.setItem("progress_ms", progress_ms);

            (function() {
                window.requestAnimFrame = (function(){
                    return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
                })();
                /*var lastTime = (new Date()).getTime();
                var display = document.getElementById('display');
                var numSeconds = (progress_ms/1000);

                (function timer() {
                    requestAnimFrame(timer);
                    var currentTime = (new Date()).getTime();
                    
                    if (currentTime - lastTime >= 0) {
                        lastTime = currentTime
                        var num5 = numSeconds.toFixed(5)
                        var numSecString = num5.toString()
                        
                        if (Tantum_times.includes(num5)) {
                            numSeconds=numSeconds+0.016789;
                            console.log("It works")
                        }
                        else{
                            numSeconds=numSeconds+0.016789;                    }

                            
                        display.innerText = num5;
                        
                        
                    }
                }());*/
            }());
            
        if ( data.device != null ){
            // select device
            currentDevice = data.device.id;
            document.getElementById('devices').value=currentDevice;
            localStorage.setItem("currentDevice", currentDevice);

    }
    else if ( this.status == 204 ){

    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}
}
}

/*

function getPlaybackState(){
    spotifyApi.getMyCurrentPlaybackState({}).then(
        function(data){
            return data;
        },
        function(err){
            console.log('Could not get playback state', err);
            return null;
        }
    )
}

function DisplayAudioFeatures(){
    
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        if ( data != null ){
           document.getElementById("danceability").innerHTML = data.danceability;
           danceability = data.danceability;
           localStorage.setItem("danceability", danceability);

           document.getElementById("acousticness").innerHTML = data.acousticness;
           acousticness = data.acousticness;
           localStorage.setItem("acousticness", acousticness);

           document.getElementById("duration_ms").innerHTML = data.duration_ms;
           duration_ms = data.duration_ms;
           localStorage.setItem("duration_ms", duration_ms);
            
           document.getElementById("energy").innerHTML = data.energy;
           energy = data.energy;
           localStorage.setItem("energy", energy);

           document.getElementById("instrumentalness").innerHTML = data.instrumentalness;
           instrumentalness = data.instrumentalness;
           localStorage.setItem("instrumentalness", instrumentalness);

           document.getElementById("liveness").innerHTML = data.liveness;
           liveness = data.liveness;
           localStorage.setItem("liveness", liveness);

           document.getElementById("loudness").innerHTML = data.loudness;
           loudness = data.loudness;
           localStorage.setItem("loudness", loudness);

           document.getElementById("speechiness").innerHTML = data.speechiness;
           speechiness = data.speechiness;
           localStorage.setItem("speechiness", speechiness);

           document.getElementById("tempo").innerHTML = data.tempo;
           tempo = data.tempo;
           localStorage.setItem("tempo", tempo);

           document.getElementById("valence").innerHTML = data.valence;
           valence = data.valence;
           localStorage.setItem("valence", valence);


            }
        }
    else if ( this.status == 204 ){

    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
    
}

function AudioAnalysis(){
    callApi( "GET", AUDIOANALYSIS + track_id, null, DisplayAudioAnalysis);
    

}

function DisplayAudioAnalysis(){
    
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);

        }
    else if ( this.status == 204 ){

    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
    
}

function SegmentTimes(){
    callApi( "GET", AUDIOANALYSIS + track_id, null, SegmentStartTimes);

}


function SegmentStartTimes(){
    
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        if ( data != null ){
            document.getElementById("segments").src = data.segments;
            var segments_string = JSON.stringify(data.segments);
            localStorage.setItem("segments_string", segments_string);
            var stringify = JSON.parse(segments_string)
            for (var i = 0; i < stringify.length; i++) {
                seg_times.push(stringify[i]['start'])
            }
        }
        localStorage.setItem("seg_times", seg_times)
        console.log(seg_times)
        const WIDTH = 1500;
        
        
        }
    else if ( this.status == 204 ){

    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
    
}

function BarTimes(){
    callApi( "GET", AUDIOANALYSIS + track_id, null, BarStartTimes);

}
function BarStartTimes(){
    
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);

        if ( data != null ){
            document.getElementById("bars").src = data.bars;
            var bars_string = JSON.stringify(data.bars);
            localStorage.setItem("bars_string", bars_string);
            var stringify = JSON.parse(bars_string)
            for (var i = 0; i < stringify.length; i++) {
                bars_times.push(stringify[i]['start'])
            }
        }
        localStorage.setItem("bars_times", bars_times)
        console.log(bars_times)

        }
    else if ( this.status == 204 ){

    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function BeatTimes(){
    callApi( "GET", AUDIOANALYSIS + track_id, null, BeatStartTimes);

}
function BeatStartTimes(){
    
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);

        if ( data != null ){
            document.getElementById("beats").src = data.beats;
            var beats_string = JSON.stringify(data.beats);
            localStorage.setItem("beats_string", beats_string);
            var stringify = JSON.parse(beats_string)
            for (var i = 0; i < stringify.length; i++) {
                beats_times.push(stringify[i]['start'])
        
            }
        }
        localStorage.setItem("beats_times", beats_times)
        console.log(beats_times)
    }
        
    else if ( this.status == 204 ){

    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
    
}


function SectionsTimes(){
    callApi( "GET", AUDIOANALYSIS + track_id, null, SectionsStartTimes);

}
function SectionsStartTimes(){
    
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        
        if ( data != null ){
            document.getElementById("sections").src = data.sections;
            var Sections_string = JSON.stringify(data.sections);
            localStorage.setItem("Sections_string", Sections_string);
            var stringify = JSON.parse(Sections_string)
            for (var i = 0; i < stringify.length; i++) {
                Sections_times.push(stringify[i]['start'])
            }
        }
        localStorage.setItem("Sections_times", Sections_times)
        console.log(Sections_times)

    }
    else if ( this.status == 204 ){

    }

    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}


function TantumTimes(){
    callApi( "GET", AUDIOANALYSIS + track_id, null, TantumStartTimes);

}
function TantumStartTimes(){
    
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        
        if ( data != null ){
            document.getElementById("tatums").src = data.tatums;
            var Tantum_string = JSON.stringify(data.tatums);
            localStorage.setItem("Tantum_string", Tantum_string);
            var stringify = JSON.parse(Tantum_string)
            for (var i = 0; i < stringify.length; i++) {
                Tantum_times.push(stringify[i]['start'])
            }
        }
        localStorage.setItem("Tantum_times", Tantum_times)
        console.log(Tantum_times)

        }
    else if ( this.status == 204 ){

    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
    
}
*/
function draw() {
    const canvas = document.getElementById('myCanvas');
    const cntx = canvas.getContext('2d');
    var danceNum = parseFloat(window.localStorage.getItem('danceability')) ; 
    var tempoNum = parseFloat(window.localStorage.getItem('tempo')) ; 
    var energyNum = parseFloat(window.localStorage.getItem('energy'))
    var loudnessNum = parseFloat(window.localStorage.getItem('loudness'))
    var valanceNum = parseFloat(window.localStorage.getItem('valence'))
    if (canvas.getContext) {
    
        if (valanceNum>=0.500 && energyNum<0.750) { //Visualize one, energy source
            var w = canvas.width = window.innerWidth,
            h = canvas.height = window.innerHeight,
            t = 0,
            num = 9655.7 + ((0.74-(energyNum/10))*100), //energy determines the size of the source
            u = 0, 
            s, a, b,
            x, y, _x, _y,
            _t = 1 / (50/tempoNum); //tempo determines the speed of the pulsing

            var anim = function() {
            cntx.globalCompositeOperation = 'source-over';
            cntx.fillStyle = 'hsla('+((tempoNum**-5)/1009000)+',100%,5%, 1)'; 
            cntx.fillRect(0, 0, w, h);
            cntx.globalCompositeOperation = 'lighter';
            for (var i = 0; i < 2; i++) {
                x = 0;
                _u = (u / ((1-danceNum)/10)) + i, col = u + (_u / 2); //danceNum determines the speed of the color switch
                cntx.beginPath();
                for (var j = 0; j < num; j++) {
                x += .55 * Math.sin(18);
                y = x * Math.sin(i + 0.9 * t + x / 40) / 10.5;
                _x = x * Math.cos(b) - y * Math.sin(i);
                _y = x * Math.sin(b) + y * Math.cos(i);
                b = (j * 11.464) * Math.PI / 3.9;
                cntx.lineWidth = .1;
                cntx.arc(w / 2 - _x, h / 2 - _y, 1, 0, Math.PI * 2);
                }
                var g = cntx.createLinearGradient(w / 2 + _x, h / 2 + _y, 1, w / 2 + _x, h / 2 + _y);
                g.addColorStop(0.1, 'hsla(' + col * i  + ',90%,50%,.7)');
                g.addColorStop(1, 'hsla(' + _u * i + ',95%,50%,.09)');
                cntx.strokeStyle = g;
                cntx.stroke();
            }
            t += _t;
            u -= .2;
            window.requestAnimationFrame(anim);
            };
            anim();
            window.addEventListener('resize', function() {
                canvas.width = w = window.innerWidth;
                canvas.height = h = window.innerHeight;
              }, false);

              
            }
        else if (valanceNum>=0.500 && energyNum>=0.750){ //Visualizer 2, dance floor https://codepen.io/toshiya-marukubo/pen/NWjKwvJ
            var w = canvas.width, h = canvas.height, 
            k = 0.69, 
            cell_size = ((1/tempoNum)*3500), real_size = k*cell_size, //tempo determines the number of boxes
            nx = ~~(w/cell_size), offx = .5*(w%cell_size), 
            ny = ~~(h/cell_size), offy = .5*(h%cell_size), 
            cells = [], n;
            var rand = function(max, min, is_int) {
                var max = (max || max === 0)?max:1, 
                        min = min || 0, 
                        gen = min + (max - min)*Math.random();
                return (is_int)?Math.round(gen):gen;
            };
            var Cell = function(x, y) {
                this.x = x;
                this.y = y;
                this.f = (danceNum/6)/(1 + rand())*Math.PI; //dancenum determines the speed of color change
                this.φ = rand(2*Math.PI);
                this.update = function(t) {
                    var hue = (this.x/w*360 + 6.5*t)%360, 
                            l = (valanceNum*50) - 30*Math.cbrt(Math.sin(this.φ + t*this.f)); //valence determines brightness of all boxes
                    cntx.shadowColor = cntx.fillStyle = 
                        'hsl(' + hue + ',100%,' + l + '%)';
                    cntx.shadowBlur = ~~((1 - k)*cell_size*l/80);
                    cntx.fillRect(this.x, this.y, real_size, real_size);
                }
            };

            for(var i = 0; i < nx; i++) {
                for(var j = 0; j < ny; j++) {
                    cells.push(new Cell(offx + (i + .5*(1 - k))*cell_size, offy + (j + .5*(1 - k))*cell_size));
                }
            }
            n = cells.length;
            (function ani(t) {
                cntx.clearRect(0, 0, w, h);
                for(var i = 0; i < n; i++) {
                    cells[i].update(t);
                }
                requestAnimationFrame(ani.bind(this, ++t));
            })(0);
                    
            }
        else if (energyNum>=0.500 && valanceNum<0.500) {  //https://codepen.io/tmrDevelops/pen/obWzxq //visualizer 3, disco orbs
           var w = canvas.width = window.innerWidth;
            var h = canvas.height = window.innerHeight;
            var st = 1 / ((1.5-danceNum)*100), t = 4; //danceability determines the speed of rotation
            function draw() {  
            cntx.globalCompositeOperation = "source-over";
            cntx.fillStyle = 'hsla(0, 0%, 0%, 1)';
            cntx.fillRect(0, 0, w, h);
            cntx.globalCompositeOperation = "lighter";
            Math.seed = 4;
            for (var j = 0; j < 3300 + ((loudnessNum+5)*350); j++) { 
                var x = 4 * rnd() - 2 - Math.cos(3.14 * (tempoNum/30) *t); //tempoNum determines the speed of rotation
                var y = 4 * rnd() - 2 - Math.sin(3.14 * t); 
                if (x * x + y * y < 1) {
                var d = Math.pow(x * x + y * y, 1 / 4);
                x /= d; y /= d;
                var s = (2 + Math.sin(t * 2.2)) / 3;
                x *= s; y *= s;
                x = x * (100 + (energyNum)*100) + w / 2; //higher energy makes circle bigger
                y = y * (100 + (energyNum)*100) + h / 2;
                cntx.fillStyle = 'hsla('+(tempoNum)*20+',75%,50%, 1)'; // tempoNum determines the color of the dots. No correlation, just different depending on the tempo
                cntx.beginPath();
                cntx.arc(x, y, 1, 0, 2*Math.PI);
                cntx.fill();
                
            }}
            var cnt =  ((0.65-valanceNum)**-1) ; //valence controls the brightness of the overall ball
            for (var i = 0; i < cnt; i++) {
                var val = cnt - 1 - i;
                noise(cntx, canvas, w, h, Math.pow(9, 0.2 / Math.pow(1, val / 6)));}
            t += st;
            window.requestAnimationFrame(draw);
            ;
            }
            draw();
            function noise($, c, w, h, sc) {
            cntx.save();
            cntx.translate(w / 2, h / 2);
            cntx.scale(sc, sc);
            cntx.translate(-w / 2, -h / 2);
            cntx.drawImage(c, 0,0);
            cntx.restore();
            }
            function rnd() {
            Math.seed = (Math.seed * 108013 + 2531011) & 0xffffffff;
            return Math.abs(Math.seed >> 16) / 32869;
            }
            window.addEventListener('resize',function(){
            canvas.width = w = window.innerWidth;
            canvas.height = h = window.innerHeight;
            });
            
        }
        else if (energyNum<0.500 && valanceNum<0.500){ //bubbles
            var w = canvas.width = window.innerWidth;
            var h = canvas.height = window.innerHeight;
            var arr = [];
            var x = 0, y = 0;

            for(var i = 0; i < tempoNum; i++) arr.push(new part()); //tempoNum determines the number of bubbles

            function part(){
            this.x = Math.random()*w;
            this.y = Math.random()*h;
            this.vx = Math.random();
            this.vy = Math.random();
            this.col = 'hsla('+Math.random()*(danceNum*800)+', 85%, 60%, 1)'; //higher danceability means more colorful
            this.rad = Math.random()*(energyNum*300); //higher energy means more brigther bubbles
            }

            function draw(){
            cntx.globalCompositeOperation = 'source-over';
            cntx.fillStyle = 'hsla(0, 0%, 0%, 1)';
            cntx.fillRect(0, 0, w, h);
            cntx.globalCompositeOperation = 'lighter';
            for(var j = 0; j < arr.length; j++){
                var p = arr[j];
                cntx.beginPath();
                var g = cntx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.rad);
                g.addColorStop(0, 'hsla(0,0%,0%,.4)');
                g.addColorStop(valanceNum, p.col); //higher valence, larger bubbles
                g.addColorStop(1, 'hsla(0,0%,0%,0)');
                cntx.fillStyle = g;
                cntx.arc(p.x, p.y, p.rad, Math.PI*2, false);
                cntx.fill();
                p.x += p.vx;
                p.y += p.vy;
                if(p.x < -50) p.x = w+50;
                if(p.y < -50) p.y = h+50;
                if(p.x > w+50) p.x = -50;
                if(p.y > h+50) p.y = -50;
            }
            window.requestAnimationFrame(draw);
            }
            draw();

            window.addEventListener('resize', function(){
            canvas.width = w = window.innerWidth;
            canvas.height = h = window.innerHeight;
            }, false);
        }
        }
       
    }
            
        

