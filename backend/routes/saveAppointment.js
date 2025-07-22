const express = require('express');
const appointmentRouter = express.Router();
const db = require('../db');
const { sendEmail, orgCode } = require('../utilityFunctions');

appointmentRouter.post("/saveappointment", (req, res) => {
    const sql = `INSERT INTO appointments (patientName, patientEmail, patientPhone, patientAge, patientAddress, message, drName, apptDate, apptTime, created, orgCode) VALUES ('${req.body.patientName}', '${req.body.patientEmail}', '${req.body.patientPhone}', '${req.body.patientAge}', '${req.body.patientAddress}', '${req.body.message}', '${req.body.drName}', '${req.body.apptDate}', '${req.body.apptTime}', current_timestamp(), '${orgCode}');`;

    try {
        db.query(sql, (err, result) => {
            if (err) {
                res.status(501).send({ status: 3, error: err, message: "UNEXPECTED ERROR" });
            } else {
                res.send({ status: 0, data: result, message: "SUCCESS" });

                // try {
                //     sendEmail({ toEmail: "nsoumyaprakash@gmail.com", subject: req.body.subject, details: req.body });
                // } catch (error) {
                //     console.error('Error Sending Email:', error);
                //     res.status(500).send({ status: 1, error, message: "SOME ERROR HAPPENED WHILE SENDING EMAIL" });
                // }
            }
        });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});


module.exports = appointmentRouter;