function Academy (name, start, end, subjects, students = []) {
    this.name = name;
    this.students = students;
    this.subjects = subjects || [];
    this.start = start;
    this.ends = end;
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = function printStudents(){
        this.students.forEach(e => {
            console.log(e)
        });
    }
    this.printSubjects = 
    function printSubjects() {
        this.subjects.forEach(
            e => console.log(e)
        )
    }
}

function Subject (title, isElective, academy = {}, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.аcademy = academy;
    this.students = students;
    this.overrideClasses = function (number) {
        if (number >= 3){return this.numberOfClasses = number;}
        
    }
}

function Student (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academy){
        this.academy = academy;
        this.academy.students.push(this);
    }
    this.startSubject = function(subject) {
        if(this.academy && this.academy.subjects.some(el => el.title === subject.title)) {
            if (this.currentSubject) {
                this.completedSubjects.push(this.currentSubject);
            }
                this.currentSubject = subject;
                this.currentSubject.students.push(this);
        }
    }
}

let sedcAcademy = new Academy('SEDC', 'November', 'October', {}, students = []);
let subject1 = new Subject('AdvancedJs', false, sedcAcademy,students = []);
let subject2 = new Subject('Css', false, sedcAcademy,students = []);
sedcAcademy.subjects = [subject1, subject2];
let studentA = new Student('Ana', 'Dimkovska', 24);

studentA.startAcademy(sedcAcademy);
studentA.startSubject(subject1);
studentA.startSubject(subject2);
console.log(studentA);
