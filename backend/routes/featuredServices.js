const express = require('express');
const featuredServicesRouter = express.Router();
const db = require('../db');
const { orgCode } = require('../utilityFunctions');

featuredServicesRouter.get("/featuredservices", (req, res) => {
    try {
        db.query(`SELECT * FROM featuredservices WHERE isActive=1  AND orgCode='${orgCode}';`, (err, result) => {
            if (err) {
                res.status(501).send({ status: 3, error: err, message: "UNEXPECTED ERROR" });
            } else {
                res.send({ status: 0, data: result, message: "SUCCESS" });
            }
        });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});

module.exports = featuredServicesRouter;