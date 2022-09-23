// 50 BILANGAN GANJIL
function cetakGanjil(batasAwal, batasAkhir) {
    let hasilArray = [];

    for (i = batasAwal; i < batasAkhir; i++) {
        if (i % 2 != 0) {
            hasilArray.push(i);
        }
    }
    console.log(
        "Deret Bilangan Ganjil dari " + batasAwal + " sampai " + batasAkhir
    );
    console.log("Hasil : " + hasilArray);
    console.log("Jumlah Bilangan : " + hasilArray.length);
}
cetakGanjil(1, 100);