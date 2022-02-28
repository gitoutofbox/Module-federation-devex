const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account.controller");
const reportController = require("../controllers/report.controller");

router.get("/", (req, res) => {
    res.send("dashboard")
});
router.get("/accounts", accountController.getAccounts);
router.get("/account/:id", accountController.getAccountDetails);

router.get("/reports", reportController.get);
router.get("/report/:id", reportController.details);


module.exports = router;