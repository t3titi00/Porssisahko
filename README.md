# Pörssisähkön hinta-sivusto

Tämä on kouluprojekti, joka näyttää pörssisähkön spot-hinnan reaaliajassa sekä hinnat viimeisen 48:n tunnin ajalta. Tiedot haetaan käyttämällä [porssisahko.net](https://porssisahko.net/api)-sivuston avointa rajapintaa.

## Projektin sisältö

Projektissa on seuraavat tiedostot:
- `index.html` – HTML-rakenne sivustolle.
- `style.css` – Sivuston tyylitiedosto.
- `server.js` – Node.js-palvelin, joka hakee hinnat API:sta.
- `functions.js` – JavaScript-toiminnot frontendille.

## Käyttöönotto

1. **Asenna tarvittavat riippuvuudet ja käynnistä nodejs-palvelin**  
   Varmista, että sinulla on Node.js asennettuna. Asenna tarvittavat paketit projektin juurikansiosta komennolla **npm install** ja käynnistä palvelin komennolla **node server.js**.

2. **Käynnistä sivu Live Serverillä**  
   Avaa projekti esim. Visual Studio Codessa ja käynnistä **Live Server** -lisäosa.  
   Tämä varmistaa, että sivu renderöidään oikein ja voi kommunikoida palvelimen kanssa.


