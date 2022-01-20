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
        console.log(`${kind.value} named ${name.value} says ${msg}!!!`);
    }
};
let animal = new Animal(animalName, animalKind)
btn.addEventListener('click', () => {
    console.log(animal.speak(msg.value));
});


//homework part 3
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let readingStatus = document.querySelector('#status')
let submitBtn = document.querySelector('.btn');

function Books(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.bookInfo = function () {
        let status = readingStatus.value;
        if (status == 'true') {
            alert (`Already read ${title.value} by ${author.value}`)
        } else if (status == 'false') {
           alert(`You still need to read ${title.value} by ${author.value}`)
        } else {
            alert(`Please enter 'true' or 'false' in the last field!`)
        };
     }
}
let someBook = new Books (title, author, readingStatus)
submitBtn.addEventListener('click', () => {
    someBook.bookInfo()
})
