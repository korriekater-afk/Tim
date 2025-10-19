const programmaPerDag = {
  1: {
    titel: "Dag 1 - Aankomst en verkenning",
    inhoud: `
      - Aankomst in Athene<br>
      - Inchecken in het hotel<br>
      - Wandeling door Plaka<br>
      - Diner in een lokale taverna<br><br>
      <strong>Andere leuke ideeën:</strong><br>
      - Zonsopgang bij Filopappou Hill<br>
      - Probeer een gyros bij een streetfood-kraampje
    `
  },
  2: {
    titel: "Dag 2 - Akropolis en omgeving",
    inhoud: `
      - Bezoek aan de Akropolis en het Parthenon<br>
      - Akropolismuseum<br>
      - Lunch in de wijk Monastiraki<br>
      - Zonsondergang bij de Tempel van Zeus<br><br>
      <strong>Andere leuke ideeën:</strong><br>
      - Ga op zoek naar street art in Psiri<br>
      - Probeer een Grieks dessert
    `
  },
  3: {
    titel: "Dag 3 - Cultuur en relaxen",
    inhoud: `
      - Nationaal Archeologisch Museum<br>
      - Relaxen in de Nationale Tuin<br>
      - Koffie drinken bij een lokaal café<br>
      - Avondwandeling door Kolonaki<br><br>
      <strong>Andere leuke ideeën:</strong><br>
      - Bezoek een rooftop bar<br>
      - Ga naar de vlooienmarkt
    `
  },
  4: {
    titel: "Dag 4 - Dagexcursie",
    inhoud: `
      - Excursie naar Kaap Sounion en de Tempel van Poseidon<br>
      - Zwemmen bij een strand onderweg<br>
      - Diner aan zee<br><br>
      <strong>Andere leuke ideeën:</strong><br>
      - Bezoek het eiland Aegina met de boot<br>
      - Maak een boottocht bij zonsondergang
    `
  },
  5: {
    titel: "Dag 5 - Laatste dag",
    inhoud: `
      - Vrije tijd voor souvenirs of nog een museum<br>
      - Lunch in de stad<br>
      - Terugreis voorbereiden<br><br>
      <strong>Andere leuke ideeën:</strong><br>
      - Picknick in de tuin van Zappeion<br>
      - Maak een lijst met je favoriete herinneringen
    `
  }
};

function toonDag(dag) {
  const data = programmaPerDag[dag];
  const programmaDiv = document.getElementById('programma');
  programmaDiv.innerHTML = `<h2>${data.titel}</h2><p>${data.inhoud}</p>`;
}
