import { daten } from "../utils/daten.js";
import { speichereDaten, ladeDaten } from "../utils/speicher.js";
import { renderFächerContainer } from "./fächerContainer.js";

let aktuelleDaten = ladeDaten();

if (!aktuelleDaten) {
    console.log("Speicher war leer. Lade leere Struktur und speichere sie jetzt.");

    aktuelleDaten = daten;

    speichereDaten(aktuelleDaten);
}
const neuesFachDialog = document.getElementById('neuesFachDialog');
const neuesFachEingabe = document.getElementById('neuesFachEingabe');
const neuesFachAceptiern = document.getElementById('neuesFachAceptiern');
const abbrechenKnopf = document.getElementById('abbrechenKnopf');
const fachHinzufuegenBtn = document.getElementById('fachHinzufuegenBtn');

//  öffnen
fachHinzufuegenBtn.addEventListener('click', () => {
    neuesFachEingabe.value = '';
    neuesFachDialog.style.display = 'flex';
});

//schließen
abbrechenKnopf.addEventListener('click', () => {
    neuesFachDialog.style.display = 'none';
});

// Außerhalb des Dialogs klicken schließt ihn
neuesFachDialog.addEventListener('click', (e) => {
    if (e.target === neuesFachDialog) {
        neuesFachDialog.style.display = 'none';
    }
});


neuesFachAceptiern.addEventListener('click', () => {
    const fachName = neuesFachEingabe.value.trim();

    if (fachName) {
        const neuesFachObjekt = {
            fachname: fachName,
            materialien: []
        };
        aktuelleDaten.fächer.push(neuesFachObjekt);
        speichereDaten(aktuelleDaten);
        renderFächerContainer();
        neuesFachDialog.style.display = 'none';
    }
    console.log("ee")
});