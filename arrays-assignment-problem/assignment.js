const numbersArray = [2330, 53, 3, 1, 33, 2330, 2, 1, 53, 99, 93];

const biggerThan33 = numbersArray.filter((num) => {
	return num > 22;
});

const transToObj = numbersArray.map((num) => ({ num: `${num}` }));

let sum;
const reducedNums = numbersArray.reduce((num1, num2) => (sum = num1 * num2));

const findedMax = () => {
	const min = Math.min(...biggerThan33);
	const max = Math.max(...biggerThan33);

	return [min, max];
};
const [min, max] = findedMax();
console.log([min, max]);

let unique = [...new Set(numbersArray)];
console.log(unique);
