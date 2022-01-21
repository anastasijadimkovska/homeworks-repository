//homework part 1
let students = [];
let button = document.querySelector('#btn');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let age = document.querySelector('#age');

function StudentInfo(firstName, lastName, age) {
    this.firstName = firstName,
        this.lastName = lastName;
    this.age = age;
};

button.onclick = () => {
    let student = new StudentInfo(firstName.value, lastName.value, parseInt(age.value))
    students.push(student);
    console.log(student);
    listStudents(students);
};

function listStudents(array) {
    let list = document.querySelector('#list');
    list.innerHTML = '';
    for (let student of array) {
        list.innerHTML += `<li>Name: ${student.firstName}; Surname: ${student.lastName}; Age: ${student.age}</li>`
    }
};
//homework part 2
let animalName = document.querySelector('#name');
let animalKind = document.querySelector('#kind');
let msg = document.querySelector('#msg');
let btn = document.querySelector('#button');

function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    this.speak = function (msg) {
        console.log(`${this.kind} named ${this.name} says ${msg}!!!`);
    }
};
btn.addEventListener('click', () => {
    let animal = new Animal(animalName.value, animalKind.value)
    animal.speak(msg.value);
});


//homework part 3
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let readingStatus = document.querySelector('#readingStatus');
let submitBtn = document.querySelector('.btn');

function Books(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    // this.message = readingStatus ? `Already read ${this.title} by ${this.author}` : `You still need to read ${this.title} by ${this.author}`;
    this.bookInfo = function () {
        // alert(this.message);
        if (this.readingStatus) {
            alert (`Already read ${this.title} by ${this.author}}`)
        } else {
            alert(`You still need to read ${this.title} by ${this.author}`)
        }
     }
}

submitBtn.addEventListener('click', () => {
    let someBook = new Books (title.value, author.value, readingStatus.checked)
    someBook.bookInfo();
    console.log(someBook);
})

