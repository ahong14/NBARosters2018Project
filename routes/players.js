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
    });
});

//search players based on search query
//regex, match any string
//options i, case insensitive
router.get('/searchPlayers', (req,resp,next) => {
    var searchQuery = req.query.search;
    player.find({$or:[{'name': {"$regex": searchQuery, $options:'i' }}, {'college': {"$regex": searchQuery, $options:'i' }}, {'position': {"$regex": searchQuery, $options:'i' }}]}, (err, players)=>{
        //if error with database
        if(err){
            resp.status(400).send("error with database");
        }

        //send response of matching players
        resp.status(200).json(players);
    });
});

module.exports = router;
