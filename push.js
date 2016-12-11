const pets = ["Cat", "Fish"];
const more = ["Hamster", "Dog"]

pets.push.apply(pets, more);
// ES6, even better:
pets.push(...more)
console.log(pets);