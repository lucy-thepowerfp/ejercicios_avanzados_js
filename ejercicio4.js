const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// 1
function findArrayIndex(array, text) {
    function ismatch(element){
        return element == text;
    }
    return(mainCharacters.findIndex(ismatch));
}

console.log(findArrayIndex(mainCharacters, "Anakin"));

// 2

function removeItem(array, text){
    array.splice(findArrayIndex(array, text), 1);
}

removeItem(mainCharacters, "Anakin");

console.log(mainCharacters);