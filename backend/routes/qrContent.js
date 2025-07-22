const express = require('express');
const qrRouter = express.Router();
const { asyncQuery, orgCode } = require('../utilityFunctions');

qrRouter.get("/qrcontent", async (req, res) => {
    try {
        // Execute both queries concurrently using Promise.all
        const [qrResult] = await Promise.all([
            asyncQuery(`SELECT * FROM qr WHERE isActive=1 AND orgCode='${orgCode}';`)
        ]);

        // Extract the results into data object
        const data = {
            qr: qrResult
        };

        res.send({ status: 0, data, message: "SUCCESS" });

    } catch (error) {
        console.error('Error executing queries:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});


module.exports = qrRouter;