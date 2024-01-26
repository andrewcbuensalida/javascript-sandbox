class CoffeeMachine {
	_waterAmount = 0;
  #color
  #toDelete = 'delete me'
  _protectMe = 'protectttt'

  get color(){
    return this.#color
  }

  set color(color){
    this.#color = color
  }

	set waterAmount(value) {
		if (value < 0) {
			value = 0;
		}
		this._waterAmount = value;
	}

	get waterAmount() {
		return this._waterAmount;
	}

	constructor(power) {
		this._power = power;
    // delete this.#toDelete // errors, can't delete private fields
	}
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
coffeeMachine.color = 'red'
coffeeMachine._protectMe = 'you are protected'
console.log(`Example coffeeMachine: `, coffeeMachine)
console.log(`Example coffeeMachine: `, coffeeMachine.color)

