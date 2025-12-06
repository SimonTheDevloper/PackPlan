import { daten } from "./daten.js";

function renderStundenplan() {

    daten.stundenplan.forEach(tag => {
        const ul = document.getElementById(`fächer${tag.wochenTag}`)

        ul.innerHTML = '';

        // für jeden Tag die fächer in ner li hinzufügen
        tag.fächer.forEach(fachname => {
            const li = document.createElement('li');
            li.textContent = fachname;
            console.log(fachname);
            ul.appendChild(li);
        });
    });
};
document.addEventListener('DOMContentLoaded', renderStundenplan);

const hinzufügenBtn = document.getElementById('addfächerBtn');

hinzufügenBtn.addEventListener('click', () => {
    const fachNamenArray = daten.fächer.map(fach => fach.fachname);
    console.log(fachNamenArray);
    const fach = prompt(`Wähle ein Fach aus diesen aus: ${fachNamenArray}`);
    const tag = prompt(`zu welchem Tag soll dieses Fach (${fach}) hinzugefügt werden.`);

    const wochenTagObj = daten.stundenplan.find(t => t.wochenTag === tag);
    wochenTagObj.fächer.push(fach);
    console.log(wochenTagObj);
    renderStundenplan()
})