var favoritePet = {
    name: "dog",
    breed: "German Shepherd",
    origin: "german",
    weightForMale: "30-40 kg",
    weightForFemale: "22-32 kg"
};
console.log('Exercise 4: ');
console.log('My favorite pet is:' + favoritePet.name);
console.log('His breed: ' + favoritePet.breed);
console.log('From: ' + favoritePet.origin);
console.log('Weighing: ' + favoritePet.weightForMale + ' a male and ' + favoritePet.weightForFemale + ' a female.');

function returningMyName(name) {

    return 'Buna, numele meu este ' + name + '.';

}
console.log('Exercise 5: ');
console.log(returningMyName('Mara'));