const createPerson = (name, age) => {
  return {
    name: name, 
    age: age,
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Object.hasOwn(object, property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map (x => x.age);
};

const findByName = (name, people) => {
  return people.find(x => x.name === name);
};

const findHondas = cars => {
  return cars.filter(x => x.manufacturer == 'Honda');
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
