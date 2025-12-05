import { daten } from "./daten.js";

const container = document.getElementById('fachContainer');

container.innerHTML = '';

daten.fächer.forEach(fach => {
    const fachName = fach.fachname
    const materialListe = fach.materialien

    console.log(fachName)
    const fachDiv = document.createElement('div');

    fachDiv.innerHTML += `<h2>${fachName}</h2>`;

    const materialSektion = document.createElement('section');
    materialSektion.innerHTML += '<h3>Materialien:</h3>';

    const ul = document.createElement('ul');

    materialListe.forEach(material => {
        ul.innerHTML += `<li>${material}</li>`
    });

    materialSektion.appendChild(ul);

    fachDiv.appendChild(materialSektion);


    container.appendChild(fachDiv)
});