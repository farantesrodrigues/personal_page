
/**
 * Created by fran on 05/03/16.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/favicon', express.static(__dirname + '/favicon'));

app.listen(process.env.PORT || 8000, function () {
    console.log('Example app listening on port 8000!');
});