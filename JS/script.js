const daten = {
    fächer: [],
    stundenplan: [
        {
            wochenTag: "Montag",
            fächer: []
        },
        {
            wochenTag: "Dienstag",
            fächer: []
        },
        {
            wochenTag: "Mittwoch",
            fächer: []
        },
        {
            wochenTag: "Donnerstag",
            fächer: []
        },
        {
            wochenTag: "Freitag",
            fächer: []
        }
    ]
}

const dropdownWochenTage = document.getElementById("wochenTage");
const neuesFachInput = document.getElementById("neuesFach");
const hinzufügenButton = document.getElementById("fachHinzufügen");


hinzufügenButton.addEventListener('click', neusesFachHinzufügen);
const ausgewählterTag = "Montag"
const fächerFürTag = ["Mathe", "Geo", "Englisch"]

function neusesFachHinzufügen() {
    const tag = dropdownWochenTage.value;
    const richtigerTag = daten.stundenplan.find(t => t.wochenTag === tag);
    console.log(richtigerTag)

    richtigerTag.fächer.push(neuesFach.value);
    console.log(daten.stundenplan)
}
/*function fächerHinzufügen(tag, fächer) {
    const richtigerTag = daten.stundenplan.find(t => t.wochenTag === tag);
    console.log(richtigerTag)

    richtigerTag.fächer.push(...fächer);
    //richtigerTag.fächer.push('Mathematik');
}

fächerHinzufügen(ausgewählterTag, fächerFürTag)

console.log(daten.stundenplan)
*/