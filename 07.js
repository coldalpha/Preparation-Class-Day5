// Add To Array

function addToArray(arrayAwal, arrayAkhir) {
    const stuff = ["Meja", "Buku", "Topi", "Baju", "Kayu"];
    stuff.unshift(arrayAwal);
    stuff.push(arrayAkhir);
    console.log(stuff);
}
addToArray("Handuk", "Celana");