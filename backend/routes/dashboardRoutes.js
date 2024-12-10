const express = require('express');
const { getStatistics } = require('../controllers/dashboardController');
const authMiddleware = require("../middleware/authToken");

const router = express.Router();

router.get('/statistics', authMiddleware, getStatistics);

module.exports = router;
