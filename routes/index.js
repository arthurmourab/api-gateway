const express = require('express');
const router = express.Router();
const axios = require('axios');

router.all('/:apiName', (req, res) => {
    axios.get(`http://localhost:3001/${req.params.apiName}`).then((response) => {
        res.send(response.data)
    });
})

module.exports = router;
