// Array Remover
function arrayRemover(arrayHapus) {
    const fruits = ["Jeruk", "Pepaya", "Jambu", "Anggur", "Melon"];
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i] === arrayHapus) {
            fruits.splice(i, 1);
        }
    }
    console.log(fruits);
}
arrayRemover("Jambu");