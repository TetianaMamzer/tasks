"use strict";
const users = [
  {
    id: 1,
    name: "Alex",
    email: "alex@gmail.com",
  },
  {
    id: 2,
    name: "Kate",
    email: "kate@gmail.com",
  },
];

const form = document.forms.addUser;
const tablet = document.querySelector(".table-body");

form.onsubmit = (e) => {
  e.preventDefault();

  const user = {
    id: users.length + 1,
    name: form.elements.name.value,
    email: form.elements.email.value,
  };

  users.push(user);
  createTable(users);

  console.log(users);
};

const createTable = (arr) => {
  tablet.innerHTML = '';
  return arr.forEach(({ id, name, email }) => {
    const addUser = document.createElement('tr');
    addUser.innerHTML=
      `
         <th scope="row">${id}</th>
          <td>${name}</td>
          <td>${email}</td>
      `
    ;

    tablet.appendChild(addUser)
  });

};

createTable(users);

console.log(tablet);
