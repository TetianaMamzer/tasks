"use strict";

// ------ DATA
const users = [];

// ------ ELEMENTS

const form = document.forms.addUser;
const tablet = document.querySelector(".table-body");
const thead = document.querySelector("thead");
const search = document.querySelector('[type="search"]')

// ------ INIT
init();

// ------ EVENTS
thead.addEventListener('click', sortUsers);

search.addEventListener('input', debounce(() => filterUsers()));

function formHandle(e) {
  e.preventDefault();
  // console.log(e.target)
  // update
  if (form.hasAttribute('data-id')) {

    const currentUserIndex = users.findIndex(
      (user) => user.id == form.getAttribute('data-id')
    );

    users[currentUserIndex].name = form.elements.name.value;
    users[currentUserIndex].email = form.elements.email.value;
    users[currentUserIndex].code = form.elements.code.value;

    form.removeAttribute('data-id');

  } else {
  
    // add
    const user = {
      id: Math.max(...users.map(item => item.id)) + 1,
      name: form.elements.name.value,
      email: form.elements.email.value,
      code: form.elements.code.value,
    };
    
    console.log(Math.max(...users.map(item => item.id)) + 1)
    users.push(user);
  }

  form.reset();
  logUsers();
  createTable();
};
// ------ FUNCTIONS

function getInfo() {
  return `
    id: ${this.id};
    name: ${this.name};
    email: ${this.email};
    code: ${this.code};
  `;
}

async function init() {
  await getUsers();
  createTable();
}

async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (response.ok) {
    let json = await response.json();
    let editionalUsers = json.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      code: user.address.zipcode.slice(-4),
    }));

    users.push(...editionalUsers);
    console.log(users);
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}

function logUsers() {
  for (const user of users) {
    console.clear();
    console.log(getInfo.apply(user));
  }
}

function createTable( items = users) {
  resetTable();
  for (const user of items) {
    createRow(user);
  }
}

function createRow(user) {
  const tr = document.createElement("tr");
  tr.dataset.id = user.id;
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.innerText = user.id;
  tr.append(th);

  const td1 = document.createElement("td");
  td1.innerText = user.name;
  tr.append(td1);

  const td2 = document.createElement("td");
  td2.innerText = user.email;
  tr.append(td2);

  const td3 = document.createElement("td");
  td3.innerHTML = user.code;
  tr.append(td3);

  const td4 = document.createElement("td");
  const editBtn = document.createElement("button");
  // editBtn.setAttribute('data-id', user.id);
  editBtn.dataset.id = user.id;
  editBtn.setAttribute("type", "button");
  editBtn.classList.add("btn", "btn-dark", "btn-sm", "me-2");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", editUser);
  td4.append(editBtn);

  const deleteBtn = document.createElement("button");
  // deleteBtn.setAttribute('data-id', user.id);
  deleteBtn.dataset.id = user.id;
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteUser);
  td4.append(deleteBtn);

  tr.append(td4);

  tablet.append(tr);
}

Array.from( document.forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      form.classList.add('was-validated')
    } else {
      form.classList.remove('was-validated');
      formHandle(event);
    }
  }, false)
})

function editUser(e) {
  const currentUser = users.find((item) => item.id == e.target.dataset.id);
  const currentRow = document.querySelector(`[data-id='${e.target.dataset.id}']`)
  
  currentRow.classList.add('row_edit');

  fillForm(currentUser);
  form.setAttribute("data-id", currentUser.id);

  // const indexUser = users.findIndex(user => user.id == e.target.dataset.id);
  // const currentUser = users[indexUser];

  // form.elements.button.dataset.submit = 'false';

  // form.elements.name.value = currentUser.name;
  // form.elements.email.value = currentUser.email;
  // form.elements.code.value = currentUser.code;
}

function fillForm(currentUser) {
  form.elements.name.value = currentUser.name;
  form.elements.email.value = currentUser.email;
  form.elements.code.value = currentUser.code;
}
function deleteUser(e) {
  console.log(e);
  const indexUser = users.findIndex((user) => user.id == e.target.dataset.id);
  console.log(indexUser);

  const deletedElement = tablet.querySelector(`[data-id="${e.target.dataset.id}"]`)
  deletedElement.classList.add('delete');

  setTimeout(() => {
    users.splice(indexUser, 1);
    createTable();
  }, 500)
 
}

function resetTable() {
  // tablet.innerHTML = '';
  const rows = tablet.querySelectorAll("tr");

  for (const row of rows) {
    row.remove();
  }
}

function sortUsers(e) {

  const filter = e.target.dataset.sort
  
  let sortFunc;

  if (typeof(users[0][filter]) == 'number') {

    sortFunc = (a, b) => a[filter] - b[filter];
    
  } else {

    sortFunc = (a, b) => a[filter].localeCompare(b[filter]);

  }

  users.sort(sortFunc);
  createTable();

}

function filterUsers() {
  console.log(search.value)
  let findeUsers = users.filter(user => user.name.toLowerCase().includes(search.value.toLowerCase()))

  createTable(findeUsers);
  console.log(findeUsers);
}

function debounce(func, timeout = 500){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
