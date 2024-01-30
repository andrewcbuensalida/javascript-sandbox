class Person {
	static name = "a";
	name2 = "b";
}

Person.age = 35;

const p = new Person();
const p2 = new Person();
Person.prototype.gender = 'male'
console.log(`Example p.age: `, p.age) // undefined
console.log(`Example p.name: `, p.name) // undefined
Person.name = 'test'
console.log(`Example p.name: `, p.name) // test
console.log(`Example p2.name: `, p2.name) // undefined
console.log(`Example Person.name2: `, Person.name2) // undefined
console.log(`Example Person.gender: `, Person.gender) // undefined
console.log(`Example Person: `, Person); // [[class a]] { name: 'a', age: 35 }
console.log(`Example p: `, p); // a { name2: 'b' }
console.log(`Example p.gender: `, p.gender) // male




function Animal() {
	this.height = 10;
  power = 'ppppoower' // doesn't show up anywhere
}

Animal.weight = 20; 
Animal.prototype.color = "blue"; // won't show up if logging the whole a object, but will if logging a.color
const a = new Animal();
console.log(`Example Animal: `, Animal) // [Function: Animal] { weight: 20 }
console.log(`Example Animal.prototype.color: `, Animal.prototype.color) // blue
console.log(`Example Animal.prototype.power: `, Animal.prototype.power) // undefined
console.log(`Example Animal.power: `, Animal.power) // undefined
console.log(`Example a: `, a); // Animal { height: 10 }
console.log(`Example a.color: `, a.color) // blue

