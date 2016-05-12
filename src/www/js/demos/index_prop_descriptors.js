
var o = {

};

// Object.defineProperty(o, 'name', {
// 	configurable: true,
// 	enumerable: true,
// 	//value: 'Eric',
// 	//writable: false
// 	get: function() {
// 		console.log("getting");
// 		return this._gene;
// 	},
// 	set: function(value) {
// 		console.log("setting");
// 		this._gene = value;
// 	}
// });

// Object.defineProperty(o, 'name', {
// 	configurable: true,
// 	enumerable: true,
// 	value: 'Eric',
// 	writable: true
// });
//
// Object.defineProperty(o, 'name', {
// 	configurable: true,
// 	enumerable: false,
// 	writable: true
// });

o.name = 'Bob';

console.log(o.name);

console.dir(o);

function Person() {

}

Person.create = function() {

}


class Person {

	static create() {

	}

	constructor(firstName, lastName) {
		this._firstName = firstName;
		Person.create

	}

	get firstName() {
		return this._firstName;
	}

	set firstName(value) {
		this._firstName = value
	}

}
