const { scrapeMercadoLivre } = require('../scripts/webScraper');

const scrapeController = {
  scrape: async (req, res) => {
    try {
      const data = await scrapeMercadoLivre();
      res.json(data);
    } catch (error) {
      console.log('Houve um erro ' + error);
      res.status(500).json({ error: "Erro ao fazer o scraping" });
    }
  },
};

module.exports = scrapeController;
