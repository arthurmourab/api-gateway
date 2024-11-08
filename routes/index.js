const express = require('express');
const router = express.Router();
const axios = require('axios');
const registry = require('./registry.json');
const {response} = require("express");

router.all('/:apiName/:path', (req, res) => {
    registry.services[req.params.apiName] ?
        axios({
            method: req.method,
            url: `${registry.services[req.params.apiName].url}${req.params.path}`,
            data: req.body
        }).then((response) => {
            res.send(response.data)
        })
    : res.send("Api Name doesn't exist");
})

module.exports = router;
