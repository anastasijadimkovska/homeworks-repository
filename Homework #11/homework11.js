// homework part 1
let sedcArr = ["Hello", "there", "students", "of", "SEDC", "!"];

function bigString(x) {
    let text = "";
    for (i = 0; i < x.length; i++) {
        text += x[i] + " ";
    }
    return text;
}

alert(bigString(sedcArr));

//another solution would be  alert(sedcArr.join(' ')); using the join method

//homework part 2

function numberPairs() {
    let n = '';
    for (i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            n += i + ' ';
        } else if (i % 2 === 0) {
            n += i + '\n';
        }
    }
    return n;
}

console.log(numberPairs());

// homework part 3

let arr = [22, 36, 74, 'no', 2000, 'ok', true];

function sumMinMax(array) {
    min = array[0];
    max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (validateNumber(array[i]) === true) {
            if (array[i] < min) {
                min = array[i];
            }
            if (array[i] > max) {
                max = array[i];
            }
        }
    }
    return min + max;
}
console.log (`Happy ${sumMinMax(arr)} !`);

function validateNumber(value) {
    if (isNaN(value)) {
        return false;
    }

    if (!Number.isFinite(value)) {
        return false;
    }

    return true;
}



//homework part 4
let firstNames = ['Harry', 'Niall', 'Zayn', 'Liam'];
let lastNames = ['Styles', 'Horan', 'Malik', 'Payne'];

function fullNames(name, surname) {
    let full = [];
    for (let i = 0; i < name.length; i++) {
        full.push (`${i + 1}. ${name[i]} ${surname[i]}`)
    }
    return full;
}

console.log(fullNames(firstNames, lastNames));