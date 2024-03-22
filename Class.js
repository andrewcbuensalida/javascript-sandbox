class Person {
  constructor(name){
    this.name = name
  }
  // private
  #attack(){
    console.log('attacking')
  }
  greet(){
    console.log('hello')
    this.#attack()
  }
}

const p1 = new Person('joe')
console.log(`Example p1.name: `, p1['name'])
p1.greet()

const x = {a:'b'}
console.log(x['a']);