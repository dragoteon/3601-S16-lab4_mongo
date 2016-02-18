'use strict';

// Defining the "grades" API module
// =======================================


var express = require('express');
var controller = require('./grades.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:grade_id', controller.destroy);

module.exports = router;