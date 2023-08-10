const express = require('express');
const footerMenusRouter = express.Router();
const { asyncQuery, orgCode } = require('../utilityFunctions');

footerMenusRouter.get("/footermenus", async (req, res) => {
    try {
        // Execute both queries concurrently using Promise.all
        const [footerMenuResult, footerSubMenuResult, disclaimerResult] = await Promise.all([
            asyncQuery(`SELECT * FROM footer_menus WHERE deleted IS NULL  AND orgCode='${orgCode}' ORDER BY sl_no;`),
            asyncQuery(`SELECT * FROM footer_sub_menus WHERE deleted IS NULL  AND orgCode='${orgCode}' ORDER BY sl_no;`),
            asyncQuery(`SELECT * FROM disclaimer WHERE deleted IS NULL  AND orgCode='${orgCode}';`)
        ]);

        for (let i = 0; i < footerMenuResult.length; i++) {
            footerMenuResult[i].subMenus = [];
            for (let j = 0; j < footerSubMenuResult.length; j++) {
                if (footerMenuResult[i].id === footerSubMenuResult[j].footermenu_id) {
                    footerMenuResult[i].subMenus.push(footerSubMenuResult[j]);
                }
            }
        }

        const data = {
            footerMenuResult: footerMenuResult,
            disclaimerResult: disclaimerResult
        }

        res.send({ status: 0, data, message: "SUCCESS" });

    } catch (error) {
        console.error('Error executing queries:', error);
        res.status(500).send({ status: 1, error, message: "INTERNAL SERVER ERROR" });
    }
});


module.exports = footerMenusRouter;