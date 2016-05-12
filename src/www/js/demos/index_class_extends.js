

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
};

function Student(studentId, firstName, lastName) {
	this._super.call(this, firstName, lastName);
	this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getRecordInfo = function() {
	return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
};

var p = new Student(1, 'Bob', 'Martin');
console.log(p.getFullName());
console.log(p.getRecordInfo());

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

class Student2 extends Person2 {

	constructor(studentId, firstName, lastName) {
		super(firstName, lastName);
		this.studentId = studentId;
	}

	getRecordInfo() {
		return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
	}

}

var p2 = new Student2(1, 'Bob', 'Martin');
console.log(p2.getFullName());
console.log(p2.getRecordInfo());

console.log(typeof Person);
console.log(typeof Person2);

console.dir(p);
console.dir(p2);
