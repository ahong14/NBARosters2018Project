var express = require('express');
var router = express.Router();
var team = require('../models/team');

router.get('/', (req,resp,next) => {
    team.find({}, (err, teams) =>{
        if(err){
            resp.status(400).send("error with database");
        }

        //send back list of teams
        resp.status(200).send(teams);
    });
});

module.exports = router;
