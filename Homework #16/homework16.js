
//Homework Part 1
let inputs = document.querySelector('.inputs');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let phoneNumber = document.querySelector('#phoneNumber');
let btn = document.querySelector('#btn');
let objectArray = [];

function PhoneBook(name, surname, nb) {
    this.firstName = name;
    this.lastName = surname;
    this.phoneNumber = nb;

};

btn.addEventListener('click', () => {
    let person = PhoneBook(firstName.value, lastName.value, phoneNumber.value)

});


//homework part 2

let toDo = document.querySelector('#toDo');
let button = document.querySelector('#button');
let list = document.querySelector('#list');
let toDoArr = [];
let checkbox = document.createElement("INPUT");
checkbox.setAttribute("type", "checkbox");

function ToDo(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
    this.checkTask = function () {
        if (this.isCompleted) {
            list.innerHTML += `<li><s>
            ${this.name} <s> </li>`;
        } else {
            list.innerHTML += `<li> ${this.name} </li>`;

        }
    }
};

button.addEventListener('click', () => {
    list.append(checkbox);
    let someTask = new ToDo(toDo.value, checkbox.checked);
    someTask.checkTask();
    toDoArr.push(new ToDo);
    toDo.value = '';
    console.log(someTask)
});


