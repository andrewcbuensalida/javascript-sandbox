// type Person = {
// 	name: string;
// 	age: number;
//   gender?:string
// }
class PersonType {
	name: string;
	age: number;
	gender?: string;
}

function test(person: PersonType): string {
	return "hello";
}

const person2 = {
	height: 123,
	name: "cool",
	age: 23,
	gender: "male",
};

test(person2);

