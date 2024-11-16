const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.post('/contacts', contactController.addContact);

router.get('/contacts', contactController.getContacts);

router.put('/contacts/:id', contactController.updateContact);

router.delete('/contacts/:id', contactController.removeContact);

module.exports = router;
