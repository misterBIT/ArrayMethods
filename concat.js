// Array.prototype.concat();

var people1 = [
  {
    name: 'Muki'
  },
  {
    name: 'Puki'
  }
];

var people2 = [
  {
    name: 'Alla'
  },
  {
    name: 'Babala'
  }
];

people1.concat(people2)
  .forEach(function (person) {
    console.log(person.name);
  });

  // Note: people1, people2 are not affected by concat



  