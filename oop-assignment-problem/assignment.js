class Course {
	#price;

	get price() {
		return '$' + this.#price;
	}

	set price(value) {
		if (value < 0) {
			throw 'Invalid Number';
		}
		this.#price = value;
	}

	constructor(title, length, price) {
		this.title = title;
		this.length = length;
		this.price = price;
	}

	calcPriceAndLength() {
		const len = this.length.split(' ');
		console.log((this.#price / +len[0]).toFixed(3));
	}
	reflectSummary() {
		console.log(
			`This course has a title of ${this.title}, a length of ${this.length}, a price of \$${this.price}.`
		);
	}
}

class PracticalCourse extends Course {
	constructor(title, length, price, exersNum) {
		super(title, length, price);
		this.exersNum = exersNum;
	}
	countExersNum() {
		console.log(this.exersNum);
	}
}

class TheoreticalCourse extends Course {
	constructor(title, length, price) {
		super(title, length, price);
	}

	publish() {
		console.log('From Theoretical Course Subclass...');
	}
}

const course4 = new TheoreticalCourse('Constructors', '55 hours', 5);
console.log(course4);

course4.price = 400;
console.log(course4.price);

console.log(course2.calcPriceAndLength());
console.log(course1.calcPriceAndLength());

console.log(course1.reflectSummary());
console.log(course2.reflectSummary());

const course1 = new Course('Money and Monkeys', '12 hours', 300);
const course2 = new Course('Minds and Puzzles', '33 hours', 200);

const course3 = new PracticalCourse('Sub-calsses', '44 hours', 3, 66);
const course4 = new TheoreticalCourse('Constructors', '55 hours', 5);

console.log(course3.calcPriceAndLength());
console.log(course4.calcPriceAndLength());
console.log(course3.reflectSummary());
console.log(course4.reflectSummary());

console.log(course3.countExersNum());
console.log(course4.publish());
