// Création de la map numéro 3:

const centroid = [50.859619, 4.316703];
const map = L.map('mapid').setView(centroid, 16.5);

// Add OSM tiles:
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Ajout de POI:

textMarker1 = `
<b>Parc du Karreveld</b>
<br>
<img src="./Molenbeek/assets/img/molen28.jpeg" alt="un truc" />
<br>
Niveau de difficulté : facile
<br>
Distance : 1.5km<br>Dénivelé : nulle`
const marker1 = L.marker([50.85916, 4.31190]) // Génération du marqueur
    .addTo(map)                                 // Ajout à la carte
    .bindPopup(textMarker1)                     // Ajout du popup au marker
    .openPopup();                               // Ouvre le popup

textMarker2 = `
<b>Cimetière de Molenbeek</b>
<br>
<img src="./Molenbeek/assets/img/Chateau_du_karreveld.jpeg" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 2.5km<br>Dénivelé : nulle  `
const marker2 = L.marker([50.86030, 4.31561]).addTo(map)
    .addTo(map)
    .bindPopup(textMarker2);

textMarker3 = ` 
<b>Quartier Diongre</b>
<br>
<img src="./Molenbeek/assets/img/Gare-aux-fantomes.jpeg" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 3.5km<br>Dénivelé : nulle  `

const marker3 = L.marker([50.857623, 4.325175]).addTo(map)
    .addTo(map)
    .bindPopup(textMarker3);

textMarker4 = `
<b>Stade Edmond Machtens</b>
<br>
<img src="./Molenbeek/assets/img/stade.jpeg" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 4.5km<br>Dénivelé : nulle    `
const marker4 = L.marker([50.855942, 4.311382]).addTo(map)
    .addTo(map)
    .bindPopup(textMarker4);

textMarker5 = `
<b>Parc des muses</b>
<br>
<img src="./Molenbeek/assets/img/parcDesMuses.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 5.5km<br>Dénivelé : nulle   `
const marker5 = L.marker([50.854320, 4.316353]).addTo(map)
    .addTo(map)
    .bindPopup(textMarker5);

textMarker6 = `
<b>Parc Albert & Marie-José</b>
<br>
<img src="./Molenbeek/assets/img/parcAlbert&MJ.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 6.5km<br>Dénivelé : nulle    `
const marker6 = L.marker([50.851194, 4.313364]).addTo(map)
    .addTo(map)
    .bindPopup(textMarker6);

textMarker7 = `
<b>Parc du Scheutbos</b>
<br>
<img src="./Molenbeek/assets/img/parcScheutbos.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `
const marker7 = L.marker([50.851597, 4.300140]).addTo(map)
    .addTo(map)
    .bindPopup(textMarker7);

