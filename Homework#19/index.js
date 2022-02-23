const studentArray = [];
function getStudentsUnder18(array) {
    const youngStudents = array.filter(student => student.age < 18);
    return youngStudents;
};
function getFullStudentNames(array) {
    const fullNames = array.map(student => `${student.firstName} ${student.lastName}`);
    return fullNames;
};
function upperCaseCities(array) {
    array.forEach(student => console.log(student.city.toUpperCase()));
};
function getMaleStudentsOver21(array) {
    const olderMaleStudents = array.filter(student => student.age > 21 && student.gender === 'Male');
    return olderMaleStudents;
};
function calculateAverage(array) {
    const sum = array.reduce((sum, student) => { return sum + student.averageGrade }, 0);
    const avgGrade = sum / array.length;
    return `The average grade of all students is ${avgGrade}`;
};
function addToAvgGrade(array) {
    array.forEach((student) => console.log(student.averageGrade += 2))
};
function sortByLastName(array) {
    return array.sort(function (a, b) {
        return a.lastName.localeCompare(b.lastName);
    });
};
// function sortItems(array) {
//     for (let studentA of array) {
//         for (let studentB of array) {
//             if (array[studentB.age] > array[studentB.age + 1]) {
//                 let temp = array[studentB.age];
//                 array[studentB.age] = array[studentB.age + 1];
//                 array[studentB.age + 1] = temp;
//             }
//         }
//     }
//     console.log(array);
// }  example with bubble sort 
function sortByAge(array) {
    return array.sort((studentA, studentB) => studentA.age - studentB.age);
}; //example with array sort method
function maleAndFemaleStudents(array) {
    let initial = {male: [], female: []};
    let reducer = function (acc, student) {
        
        if (student.gender === 'Male') {
            acc.male[acc.male.length] = student;
        } else {
            acc.female[acc.female.length] = student;    }
        return acc;
    }
    let result = array.reduce(reducer, initial)
    return result;
}
async function getStudentData(url) {
    let response = await fetch(url);
    let data = await response.json();

    for (let student of data) {
        studentArray.push(student)
    }
    console.log(getStudentsUnder18(studentArray));
    console.log(getFullStudentNames(studentArray));
    upperCaseCities(studentArray);
    console.log(getMaleStudentsOver21(studentArray));
    console.log(calculateAverage(studentArray));
    addToAvgGrade(studentArray);
    console.log(studentArray);
    console.log(sortByLastName(studentArray));
    console.log(sortByAge(studentArray));
    console.log(maleAndFemaleStudents(studentArray))
}
try {
    getStudentData("https://json-server-boris.herokuapp.com/api/students");
}
catch (error) {
    console.log(error);
}

