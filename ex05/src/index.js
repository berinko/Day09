function compareStrictValues(m) {
    if(m != 55) {
        return "Not equal";
    }   return "Equal";
}
console.log(compareStrictValues(55));
console.log(cmmpareStrictValues("55"));
console.log(cmmpareStrictValues("12"));
console.log(cmmpareStrictValues(12));
console.log(cmmpareStrictValues("Doe"));

module.exports = compareStrictValues;