var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.post('/', function (req, res) {
    var ownerId = req.params.id;
    console.log('pet post');
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO pets (name, breed, color, owner_id) VALUES ($1, $2, $3, $4);', [req.body.name, req.body.breed, req.body.color, ownerId], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});

router.get('/', function (req, res) {
    console.log('pet get');
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT owners.first_name, owners.last_name, pets.id, pets.name, pets.breed, pets.color, visits.check_in_date, visits.check_out_date FROM visits LEFT OUTER JOIN pets ON visits.pet_id = pets.id LEFT OUTER JOIN owners ON pets.owner_id = owners.id;', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

module.exports = router;