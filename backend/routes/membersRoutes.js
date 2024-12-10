const express = require('express');
const authMiddleware = require("../middleware/authToken");
const {createMember, getMembers} = require("../controllers/membersController");

const router = express.Router();

router.get('/', authMiddleware, getMembers);
router.post('/', authMiddleware, createMember);

module.exports = router;
