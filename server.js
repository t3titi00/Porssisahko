const express = require('express')
const cors = require('cors');
const axios = require('axios')
const app = express()
const port = 3000
app.use(cors());

app.get('/api/porssisahko', async (req, res) => {
    const { date, hour } = req.query;
  
    if (!date || !hour) {
      return res.status(400).json({ error: 'Date and hour query parameters are required' });
    }
  
    try {
      const response = await axios.get(`https://api.porssisahko.net/v1/price.json?date=${date}&hour=${hour}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'API call failed', details: error.message });
    }
  });

  app.get('/api/porssisahko/all', async (req, res) => {
    try {
      const response = await axios.get('https://api.porssisahko.net/v1/latest-prices.json');
      res.json(response.data.prices);
    } catch (error) {
      res.status(500).json({ error: 'API call failed', details: error.message });
    }
  });

  app.listen(port, () => {
    console.log('Palvelin käyttää porttia: ' + port);
  });