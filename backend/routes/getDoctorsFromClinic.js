const express = require('express');
const doctorsFromClinicRouter = express.Router();
const { fetchData } = require('../utilityFunctions');

doctorsFromClinicRouter.get("/doctorsfromclinic", async (req, res) => {
    try {
        const response = await fetchData("getDoctorsFromClinic.jsp", "GET", { clinic_id: "clinic1" });

        if (response.result.status.statusCode === "0") {
            res.send({ status: 0, data: response.doctors, message: "SUCCESS" });
        } else {
            res.status(501).send({ status: 3, error: response, message: response.result.status.errorMessage });
        }
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});

module.exports = doctorsFromClinicRouter;