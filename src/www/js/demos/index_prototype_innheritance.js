

let parent = {
	amt: 2000,
	address: {
		city: 'Riga',
		country: 'Latvia'
	}
};

let child = Object.create(parent);

//console.log(Object.getPrototypeOf(child) === parent);

console.log(child.amt);
parent.amt = 4000;
console.log(parent.amt);
console.log(child.amt);

child.amt = 100;

console.log(parent.amt);
console.log(child.amt);

delete child.amt;

console.log(parent.amt);
console.log(child.amt);

console.log(child.address.country);
child.address = {
	country: 'Japan'
};


console.dir(child);
