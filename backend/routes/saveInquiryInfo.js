const express = require('express');
const inquiryRouter = express.Router();
const db = require('../db');
const { sendEmail, orgCode } = require('../utilityFunctions');

inquiryRouter.post("/saveinquiry", (req, res) => {
    const sql = `INSERT INTO inquiryinfo (name, email, subject, message, created, orgCode) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.subject}', '${req.body.message}', current_timestamp(), '${orgCode}');`;

    try {
        db.query(sql, (err, result) => {
            if (err) {
                res.status(501).send({ status: 3, error: err, message: "UNEXPECTED ERROR" });
            } else {
                res.send({ status: 0, data: result, message: "SUCCESS" });

                try {
                    sendEmail({ toEmail: "nsoumyaprakash@gmail.com", subject: req.body.subject, details: req.body });
                } catch (error) {
                    console.error('Error Sending Email:', error);
                    res.status(500).send({ status: 1, error, message: "SOME ERROR HAPPENED WHILE SENDING EMAIL" });
                }
            }
        });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});


module.exports = inquiryRouter;