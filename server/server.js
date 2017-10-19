const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'to do app v1.0'
    });
});


app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Darth Vader',
        age: 180
    }, 
    {
        name: 'Corina',
        age: 29
    }]);
});
app.listen(3000);

module.exports.app = app;