const randomNumber = Math.random();
const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
	alert(
		`Both ${randomNumber} and ${randomNumber2} are greater than *** 0.7 ***`
	);
} else if (randomNumber < 0.2 || randomNumber2 < 0.2) {
	if (randomNumber < 0.2 && randomNumber2 >= 0.2) {
		alert(`RandomNumber 1: ${randomNumber} is less than 0.2`);
	} else if (randomNumber >= 0.2 && randomNumber2 < 0.2) {
		alert(`RandomNumber 2: ${randomNumber2} is less than 0.2`);
	} else if (randomNumber < 0.2 && randomNumber2 < 0.2) {
		alert(
			`RandomNumber 1: ${randomNumber} and RandomNumber 2: ${randomNumber2} are less than *** 0.2 ***`
		);
	} else {
		alert(
			`RandomNumber 1: ${randomNumber} and RandomNumber 2: ${randomNumber2} are greater than *** 0.2 ***`
		);
	}
}

for (let i = arrNumbers.length; i > 0; i--) {
	console.log(arrNumbers[i - 1]);
}

if (randomNumber > 0.7) {
	alert(`${randomNumber} is greater than 0.7`);
}
