const express = require('express')

const router = express.Router();
const controller = require('../controllers/control');

router.get('/trans',controller.readytranslate)
      .post('/trans',controller.englishToFrensh);

module.exports = router;