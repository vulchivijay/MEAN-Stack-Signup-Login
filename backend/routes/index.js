const express = require('express');
const router = express.Router();

const ctrlUser = require('./../controllers/user');
const ctrlTickets = require('./../controllers/tickets');
const jwtHelper = require('./../config/jstHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/tickets', ctrlTickets.getTickets);
router.get('/tickets/:id', ctrlTickets.getTicket);
router.put('/tickets/:id', ctrlTickets.updateTicket);
router.delete('/tickets/:id', ctrlTickets.deleteTicket);
router.post('/tickets', ctrlTickets.postTickets);

module.exports = router;