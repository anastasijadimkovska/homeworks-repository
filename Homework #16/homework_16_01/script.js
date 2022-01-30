let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let phoneNumber = document.querySelector('#phoneNumber');
let btn = document.querySelector('#btn');
let tbody = document.querySelector('#tbody');
let formEdit = document.querySelectorAll('.form');
let newName = document.querySelector('#newName');
let newLastName = document.querySelector('#newLastName');
let newPhoneNumber = document.querySelector('#newPhoneNumber');
let saveChanges = document.querySelector('#saveChanges');
let objectArray = [];
let contactIndex;

function PhoneBook(id, name, surname, nb) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.phoneNumber = nb;
};
function validateInputs(name, surname, number) {
    if (!name.value) {
        return false;
    }
    if (!surname.value) {
        return false;
    }
    if ((!number.value) || (isNaN(number.value))) {
        return false;
    };
    return true;
};

function clearInputs(name, surname, number) {
    name.value = '';
    surname.value = '';
    number.value = '';
};

function generateTable(contacts) {
    tbody.innerHTML = '';
    for (const contact of contacts) {
        let deleteBtn = document.createElement('button');
        let editBtn = document.createElement('button');
        let row = document.createElement('tr');
        let btnTd = document.createElement('td');
        deleteBtn.innerText = 'Delete';
        editBtn.innerText = 'Edit';

        row.innerHTML += `
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phoneNumber}</td>  
            `;
        deleteBtn.addEventListener('click', () => {
            row.remove();
            contactIndex = contacts.indexOf(contact);
            contacts.splice(contactIndex,1);
        });
        editBtn.addEventListener('click', () => {
            formEdit.forEach(form => {
                form.toggleAttribute('hidden');
                contactIndex = contacts.indexOf(contact)
            });
        });
        deleteBtn.classList.add('btn', 'btn-danger');
        editBtn.classList.add('btn', 'btn-info');
        btnTd.classList.add('options_wrapper');
        btnTd.appendChild(deleteBtn);
        btnTd.appendChild(editBtn);
        row.appendChild(btnTd);
        tbody.appendChild(row);
    }
};

function editContact(contact) {
    contact.firstName = newName.value;
    contact.lastName = newLastName.value;
    contact.phoneNumber = newPhoneNumber.value;
}

saveChanges.addEventListener('click', () => {
    if (!validateInputs(newName, newLastName, newPhoneNumber)) {
        alert('Please Enter Correct Values!')
        return;
    }
    editContact(objectArray[contactIndex]);
    generateTable(objectArray);
    clearInputs(newName, newLastName, newPhoneNumber);
});

btn.addEventListener('click', function () {
    if (!validateInputs(firstName, lastName, phoneNumber)) {
        alert('Please Enter Correct Values!')
        return;
    };
    objectArray.push(new PhoneBook(Symbol(), firstName.value, lastName.value, phoneNumber.value));
    generateTable(objectArray);
    clearInputs(firstName, lastName, phoneNumber);

});