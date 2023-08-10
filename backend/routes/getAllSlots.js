const express = require('express');
const slotsRouter = express.Router();
const { fetchData } = require('../utilityFunctions');

slotsRouter.post("/allslots", async (req, res) => {
    const queryParams = {
        clinic_id: "clinic27",
        doctor_id: req.body.doctorId,
        start_date: req.body.apptDate,
        end_date: req.body.apptDate
    };

    try {
        const response = await fetchData("getAllSlotsforWeb1.jsp", "GET", queryParams);

        if (response.result.status.statusCode === "0") {
            res.send({ status: 0, data: { slots: response.slots, slotsDetail: response.slots_detail }, message: "SUCCESS" });
        } else {
            res.status(501).send({ status: 3, error: response, message: response.result.status.errorMessage });
        }
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});


module.exports = slotsRouter;