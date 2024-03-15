class Person {
  constructor(name){
    this.name = name
  }
  #attack(){
    console.log('attacking')
  }
  greet(){
    console.log('hello')
    this.#attack()
  }
}

const p1 = new Person('joe')
console.log(`Example p1: `, p1)
p1.greet()

