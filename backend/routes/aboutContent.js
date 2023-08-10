const express = require('express');
const aboutRouter = express.Router();
const { asyncQuery, orgCode } = require('../utilityFunctions');

aboutRouter.get("/aboutcontent", async (req, res) => {
    try {
        // Execute both queries concurrently using Promise.all
        const [aboutResult, aboutKeysResult] = await Promise.all([
            asyncQuery(`SELECT * FROM about WHERE isActive=1 AND orgCode='${orgCode}';`),
            asyncQuery(`SELECT * FROM about_keys WHERE isActive=1 AND orgCode='${orgCode}';`)
        ]);

        // Extract the results into data object
        const data = {
            about: aboutResult,
            aboutKeys: aboutKeysResult
        };

        res.send({ status: 0, data, message: "SUCCESS" });

    } catch (error) {
        console.error('Error executing queries:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});


module.exports = aboutRouter;