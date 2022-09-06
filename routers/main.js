const express = require('express');
const mainController = require('../controllers/mainController.js')

const router = express.Router();

/* Render de vista Home */
router.get("/", mainController.home);
/* Render de vista About */
router.get("/about", mainController.about);

module.exports = router;