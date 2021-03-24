'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  tr.insertAdjacentHTML('beforeend', `
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Famale' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.round(person.died / 100)}</td>
  `);

  table.append(tr);
}
