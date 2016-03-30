
/**
 * Created by fran on 05/03/16.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/system.conf.js', function (req, res) {
    res.sendFile(__dirname + '/system.conf.js');
});

app.use('/jspm_packages',   express.static(__dirname + '/jspm_packages' ));
app.use('/node_modules',    express.static(__dirname + '/node_modules'  ));
app.use('/favicon',         express.static(__dirname + '/favicon'       ));
app.use('/app',             express.static(__dirname + '/app'           ));

app.listen(process.env.PORT || 8000, function () {
    console.log('Personal page listening on port 8000!');
});