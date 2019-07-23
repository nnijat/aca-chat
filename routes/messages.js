`use strict`
const express = require('express');
const router = express.Router();
const { list, create } = require('../controllers/messages')

router.get('/messages', list)
router.post('/messages', create);

module.exports = router;