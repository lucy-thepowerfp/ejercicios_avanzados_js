const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, index1, index2){
    let value = array[index1];
    array.splice(index1, 1, array[index2]);
    array.splice(index2, 1, value);
}

swap(fantasticFour, 0, 1);

console.log(fantasticFour);