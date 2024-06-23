const express = require("express");
const router = express.Router();
const companyListController = require("../controllers/companyListController");

router.get("/companylist",companyListController.getTopCompanies);

module.exports = router;
