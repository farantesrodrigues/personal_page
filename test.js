/**
 * Created by fran on 30/03/16.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/unit-tests.html');
});

app.use('/node_modules/jasmine-core',   express.static(__dirname + '/node_modules/jasmine-core'  ));
app.use('/app',                         express.static(__dirname + '/app'                        ));

app.listen(process.env.PORT || 8000, function () {
    console.log('Testing personal page on port 8000!');
});