const express = require('express');
const app = express();

require(__dirname + '/config/config');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());



app.get('/usuario', (req, res) => {
    //salida un json
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "No se introducio un nombre"
        })
    }

    //salida un json
    res.json({
        body
    });
});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    res.json({
        id
    });
    //salida un json
    res.json('put usuario');
});

app.delete('/usuario', (req, res) => {
    //salida un json
    res.json('delete usuario');
});



app.listen((process.env.PORT), () => {
    console.log("Escuchando en el puerto " + process.env.PORT);
})