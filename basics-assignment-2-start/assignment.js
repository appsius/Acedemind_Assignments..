const task3Element = document.getElementById('task-3');

function makeSuccess() {
	alert('You can do');
}

function inSector(name) {
	alert(name);
}

inSector('Appsius');

function concluding(a, b, c) {
	alert(`${a} ${b} ${c}`);
}

concluding('You can excel at', 'coding', ', if you works enough!');

task3Element.addEventListener('click', makeSuccess);
