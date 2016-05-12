

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
};

var p = new Person('Bob', 'Martin');
console.log(p.getFullName());

console.log(Object.getPrototypeOf(Person) === Person.prototype);
console.log(Object.getPrototypeOf(p) === Person.prototype);
console.dir(Person);
console.dir(p);

class Person2 {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName
	}

	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

var p2 = new Person2('Bob', 'Martin');
console.log(p.getFullName());

console.log(typeof Person);
console.log(typeof Person2);

console.dir(p);
console.dir(p2);
