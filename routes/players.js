var express = require('express');
var router = express.Router();
var player = require('../models/player');

//get all players in database
router.get('/', (req,resp,next) => {
    player.find( {}, null, {sort: {name: 1}}, (err, players) => {
        if(err){
            resp.status(400).send("error with database");
        }
        resp.status(200).json(players);
    })
});

module.exports = router;
