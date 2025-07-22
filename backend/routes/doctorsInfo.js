const express = require('express');
const doctorsInfoRouter = express.Router();
const doctorsInfoDCTPageRouter = express.Router();
const { asyncQuery, orgCode } = require('../utilityFunctions');

doctorsInfoRouter.get("/doctorsinfo", async (req, res) => {
    try {
        // Execute both queries concurrently using Promise.all
        const [docInfoResult, pageDescResult] = await Promise.all([
            asyncQuery(`SELECT * FROM doctorsinfo WHERE isActive=1 AND orgCode='${orgCode}';`),
            asyncQuery(`SELECT * FROM doctor_page_description WHERE isActive=1 AND orgCode='${orgCode}';`)
        ]);

        // Extract the results into data object
        const data = {
            docInfo: docInfoResult,
            pageDesc: pageDescResult
        };

        res.send({ status: 0, data, message: "SUCCESS" });

    } catch (error) {
        console.error('Error executing queries:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});

doctorsInfoDCTPageRouter.get("/doctorsinfoDCT", async (req, res) => {
    try {
        // Execute both queries concurrently using Promise.all
        const [docInfoResult, pageDescResult] = await Promise.all([
            asyncQuery(`SELECT * FROM doctorsinfo WHERE isActive=1 AND orgCode='${orgCode}';`),
            asyncQuery(`SELECT * FROM doctor_page_description WHERE isActive=1 AND orgCode='${orgCode}';`)
        ]);

        // Extract the results into data object
        const data = {
            docInfo: docInfoResult,
            pageDesc: pageDescResult
        };

        res.send({ status: 0, data, message: "SUCCESS" });

    } catch (error) {
        console.error('Error executing queries:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});

module.exports = {doctorsInfoRouter,doctorsInfoDCTPageRouter};