var express = require('express');
var app = express();
var http = require('http').Server(app);

                        //requete, resultat
app.get('/html', function(req, res){
    res.sendFile(__dirname + '/AperoTime.html');
});

app.get('/html', function(req, res){
    res.sendFile(__dirname + '/AperoTimeP2.html');
});

app.get('/html', function(req, res){
    res.sendFile(__dirname + '/AperoTimeP3.html');
});

app.use('/css' , express.static(__dirname + '/css'));
app.use('/js' , express.static(__dirname + '/js'));
app.use('/img' , express.static(__dirname + '/img'));
app.get('/AperoTime', function(req, res){
    res.sendFile(__dirname + '/AperoTime.html');
});

http.listen(1337, function(){ 
    console.log('listening on *:1337');
});





