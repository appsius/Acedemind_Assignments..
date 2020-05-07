// const sayHello = (name) => console.log('Hi ' + name);

const sayHello1 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello2 = () => console.log('Hi Hard Coded!');
const sayHello3 = (name) => 'Hi ' + name;

// sayHello('Appsius phrasely');

// sayHello1('Hi', 'Appsius name and phrase');
// sayHello2();
// console.log(sayHello3('Appsius returned'));

const sayHello = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

// sayHello('Appsius');
// sayHello('Webiar', 'Merhaba');

const checkInput = (cb, ...strings) => {
	let hasEmptyText = false;

	for (const text of strings) {
		if (!text) {
			hasEmptyText = true;
			break;
		}
	}

	if (!hasEmptyText) {
		cb();
	}
};

checkInput(
	() => {
		console.log('All not empty');
	},
	'Strmg',
	'Callback',
	'Rest',
	'444',
	'spread'
);
