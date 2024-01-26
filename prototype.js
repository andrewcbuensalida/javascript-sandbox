class Person {
	static name = "a";
	name2 = "b";
}

Person.age = 35;

const p = new Person();
Person.prototype.gender = 'male'
console.log(`Example p.age: `, p.age)
console.log(`Example p.name: `, p.name)
console.log(`Example Person.name2: `, Person.name2)
console.log(`Example Person.gender: `, Person.gender)
console.log(`Example Person: `, Person);
console.log(`Example p: `, p);
console.log(`Example p.gender: `, p.gender)




function Animal() {
	this.height = 10;
  power = 'ppppoower' // doesn't show up anywhere
}

Animal.weight = 20; 
Animal.prototype.color = "blue"; // won't show up if logging the whole a object, but will if logging a.color
const a = new Animal();
console.log(`Example Animal: `, Animal)
console.log(`Example Animal.prototype.color: `, Animal.prototype.color)
console.log(`Example Animal.power: `, Animal.power)
console.log(`Example a: `, a);
console.log(`Example a.color: `, a.color)

