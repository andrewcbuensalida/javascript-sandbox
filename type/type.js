// type Person = {
// 	name: string;
// 	age: number;
//   gender?:string
// }
var PersonType = /** @class */ (function () {
    function PersonType() {
    }
    return PersonType;
}());

function test(person) {
    return "hello";
}
var person2 = {
    height: 123,
    name: "cool",
    age: 23,
    gender: "male",
};

test(person2);
