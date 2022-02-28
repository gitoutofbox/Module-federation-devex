const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account.controller");

router.get("/", (req, res) => {
    res.send("dashboard")
});
router.get("/accounts", accountController.getAccounts);
router.get("/account/:id", accountController.getAccountDetails);

module.exports = router;