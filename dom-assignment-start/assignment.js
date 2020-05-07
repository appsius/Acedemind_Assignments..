const taskOne = document.getElementById('task-1');
taskOne.style.color = 'white';
taskOne.style.backgroundColor = 'black';

const title = document.querySelector('title');
title.textContent = 'Assignment Solved';
const headTitle = document.head;
const title2 = headTitle.querySelector('title');
title2.textContent = 'Assignment Solved!';

const h1 = document.querySelector('h1');
h1.textContent = 'Assingment Solved';

const h1Second = document.getElementsByTagName('h1');
h1Second[0].textContent = 'Assignment Solved!!!';
