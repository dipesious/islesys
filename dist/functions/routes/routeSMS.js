/* eslint-disable max-len */
/* eslint-disable new-cap */
// Mail
const express = require('express');
const errors = require('./src/errors');

// IMPORTS

const routeSMS = express.Router();
// INASELIZE

routeSMS.post('/sendSMS/:countryCode', (req, res) => { // Route for ...
    if (!req.params.countryCode || !req.body.phone) {
        res.json({
            success: false, status: 200, // http
            code: errors.Forbidden, // route
            data: null, info: 'Please post valid data',
        });
    } else {
        res.json({
            success: true, status: 200,
            code: errors.ok,
            data: {}, info: 'Hello action',
        });
    }
});

routeSMS.get('**', (req, res) => { // Route for ...
    res.json({success: true, info: 'Invalid Get Call'});
});
routeSMS.post('**', (req, res) => { // Route for ...
    res.json({success: true, info: 'Invalid Post Call'});
});
routeSMS.put('**', (req, res) => { // Route for ...
    res.json({success: true, info: 'Invalid Put Call'});
});
routeSMS.delete('**', (req, res) => { // Route for ...
    res.json({success: true, info: 'Invalid Delete Call'});
});


module.exports = routeSMS;