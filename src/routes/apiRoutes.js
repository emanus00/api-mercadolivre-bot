const express = require('express');
const router = express.Router();
const scrappingControllers = require('../controllers/scrappingControllers'); // Corrigido para 'scrapeControllers'
//const { scrapeMercadoLivre } = require('../scripts/webScraper');

router.get('/scrape', scrappingControllers.scrape); // Corrigido para 'scrapeControllers'

module.exports = router;

