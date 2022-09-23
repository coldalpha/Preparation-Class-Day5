// LOOP WITH RANGE
function RangeAngka(inputPertama, inputKedua) {
    hasilArray = [];
    for (i = inputPertama; i <= inputKedua; i++) {
        hasilArray.push(i);
    }
    console.log("Input Pertama : " + inputPertama);
    console.log("Input Kedua : " + inputKedua);
    console.log("Output di Browser : " + hasilArray);
}
RangeAngka(4, 8);