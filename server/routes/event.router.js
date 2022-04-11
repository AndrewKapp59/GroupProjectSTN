const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all events' information
router.get('/', (req, res) => {
    
    if (req.isAuthenticated()) {
        pool
            .query(`select * from events;`)
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error in GET for all events information', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});

// GET specific event information
router.get('/:id', (req, res) => {

    let id = req.params.id;

    if (req.isAuthenticated()) {
        pool
            .query(`select * from events where id = $1;`,[id])
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error in GET for specific event information', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});

// GET profile user specific event by profile.id
router.get('/organization/:id', (req, res) => {

    let id = req.params.id;

    if (req.isAuthenticated()) {
        pool
            .query(`select * from events where org_id = $1;`,[id])
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error in GET for specific organization event information', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});



/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
