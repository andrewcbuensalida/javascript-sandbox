class Person {
  name;
  constructor(name){
    this.name = name
  }
  greet(){
    console.log("heelo");
    
  }
}

const p1 = new Person("Andrew")
Person.prototype.age = 36
console.log(`Example p1: `, p1)
console.log(`Example Person age: `, Person.prototype.age)
p1.greet()


const p2 = new Person("Buensalida")
console.log(`Example p2: `, p2)

function Person2(name){
  this.name = name
}

Person2.prototype.age = 37
const p3 = new Person2("Three")
console.log(`Example p3: `, p3)
console.log(`Example Person2 age: `, Person2.prototype.age)

const y = {100:200}
const x = {[y]:'a'}
console.log(x[y]);

