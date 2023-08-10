const express = require('express');
const mainMenusRouter = express.Router();
const { asyncQuery, orgCode } = require('../utilityFunctions');

mainMenusRouter.get("/mainmenus", async (req, res) => {
    try {
        // Execute both queries concurrently using Promise.all
        const [mainMenuResult, subMenuResult] = await Promise.all([
            asyncQuery(`SELECT * FROM menus WHERE deleted IS NULL AND orgCode='${orgCode}' ORDER BY sl_no;`),
            asyncQuery(`SELECT * FROM sub_menus WHERE deleted IS NULL AND orgCode='${orgCode}';`)
        ]);

        for (let i = 0; i < mainMenuResult.length; i++) {
            mainMenuResult[i].subMenus = [];
            for (let j = 0; j < subMenuResult.length; j++) {
                if (mainMenuResult[i].id === subMenuResult[j].mainmenu_id) {
                    mainMenuResult[i].subMenus.push(subMenuResult[j]);
                }
            }
        }

        res.send({ status: 0, data: mainMenuResult, message: "SUCCESS" });

    } catch (error) {
        console.error('Error executing queries:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});


module.exports = mainMenusRouter;