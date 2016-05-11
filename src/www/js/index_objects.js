
let person = {
	firstName: 'Bob',
	lastName: 'Martin',
	address: {
		street: '1600 Pennsylvania Ave.',
		city: 'Washington',
		state: 'DC',
		zipCode: '1'
	},
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
};

person["Hi! Niket! You are amazing! That is what Hormazd said..."] = false;

//propName = "ssn";
//person[propName] = someValue;

let person2 = {
	firstName: 'Niket',
	lastName: 'N',
	address: person.address,
	getFullName: person.getFullName
};

console.log(person);
console.log(person2);

console.log(person.getFullName());
console.log(person2.getFullName());

console.log(person.address === person2.address);
