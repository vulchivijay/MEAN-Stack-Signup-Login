const express = require('express');
const router = express.Router();

const ctrlUser = require('./../controllers/user');
const jwtHelper = require('./../config/jstHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('./userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;