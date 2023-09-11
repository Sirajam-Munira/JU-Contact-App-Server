var express = require('express');
var router = express.Router();
const Model = require('../models/Token');
const mongoose = require('../utils/mongoose')
const jwt = require('passport-jwt')
const Auth = require('../middlewares/Auth')

// Lazy Responder :)
function responder(res, err, data) {
    if (err || !data) {
        console.log({
            err, data
        })
        res.status(400).send({
            err, data
        })
    } else {
        console.log("Data: " + data)
        res.status(200).send(data)
    }
}

// C
router.post('/', (req, res) => {
    Model.createData(req.body, (err, data) => {
        responder(res, err, data)
    })
})

// R1
router.get('/byid/:id', (req, res) => {
    Model.getOneData({ _id: req.params['id'] }, (err, data) => {
        responder(res, err, data)
    })
})

// Ra
router.get('/', (req, res) => {
    Model.getAllData({}, req.query['page'] ? req.query['page'] : 0, (err, data) => {
        responder(res, err, data)
    })
})

module.exports = router;