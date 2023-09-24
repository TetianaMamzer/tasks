"use strict";

// ------ DATA
const users = [];

// ------ ELEMENTS

const form = document.forms.addUser;
const tablet = document.querySelector(".table-body");
const thead = document.querySelector("thead");
const search = document.querySelector('[type="search"]');
const nameIsValid = document.querySelector('.name-valid');
const emailIsValid = document.querySelector('.email-valid');
const codeIsValid = document.querySelector('.code-valid');

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
    // console.clear();
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

// Array.from( document.forms).forEach(form => {
//   form.addEventListener('submit', event => {
//     if (!form.checkValidity()) {
//       event.preventDefault()
//       event.stopPropagation()
//       form.classList.add('was-validated')
//     } else {
//       form.classList.remove('was-validated');
//       formHandle(event);
//     }
//   }, false)
// })

Array.from(document.forms).forEach(form => {
  const name = form.elements.name;
  const email = form.elements.email;
  const code = form.elements.code;

  const validInput = 'Looks good!';

  form.addEventListener('input', debounce(() => {
    const regName = /^[ \a-zA-Z0-9_-]{3,20}$/;
    if (name.value.trim().length > 0 && regName.test(name.value.trim())) {
      name.classList.remove('is-invalid')
      name.classList.add('is-valid')

      nameIsValid.classList.remove('invalid-feedback');
      nameIsValid.classList.add('valid-feedback');
      nameIsValid.innerText = validInput;
    } else {
      name.classList.remove('is-valid')
      name.classList.add('is-invalid')
      
      nameIsValid.classList.remove('valid-feedback');
      nameIsValid.classList.add('invalid-feedback');
      nameIsValid.innerText = 'Please enter name. The name must contain more than 3 characters.';
    }
  }));

  form.addEventListener('input', debounce(() => {
    const regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (regEmail.test(email.value.trim())) {
      email.classList.remove('is-invalid')
      email.classList.add('is-valid')

      emailIsValid.classList.remove('invalid-feedback');
      emailIsValid.classList.add('valid-feedback');
      emailIsValid.innerText = validInput;
    } else {
      email.classList.remove('is-valid')
      email.classList.add('is-invalid')
      
      emailIsValid.classList.remove('valid-feedback');
      emailIsValid.classList.add('invalid-feedback');
      emailIsValid.innerText = 'Please enter email. For example: example@gmail.com';
    }
  }));

  form.addEventListener('input', debounce(() => {
    const regCode = /^([0-9]{4})$/;
    if (regCode.test(code.value.trim())) {
      code.classList.remove('is-invalid')
      code.classList.add('is-valid')

      codeIsValid.classList.remove('invalid-feedback');
      codeIsValid.classList.add('valid-feedback');
      codeIsValid.innerText = validInput;
    } else {
      code.classList.remove('is-valid')
      code.classList.add('is-invalid')
      
      codeIsValid.classList.remove('valid-feedback');
      codeIsValid.classList.add('invalid-feedback');
      codeIsValid.innerText = 'Please enter code. The code must contain 4 numbers';
    }
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    if(name.classList.contains('is-valid') && email.classList.contains('is-valid') && code.classList.contains('is-valid')) {
      name.classList.remove('is-valid');
      code.classList.remove('is-valid');
      email.classList.remove('is-valid');
      formHandle(event);

    } else {
      alert('Please fill in all fields!')
    }
      });

      
})

function nameValid(name) {
  
}

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

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
