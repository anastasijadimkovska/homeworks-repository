//homework part 1
// let person = ['Stacy', 'moody', 'sleeping'];

let person = {
    name: 'Stacy',
    mood: 'moody',
    activity: 'sleeping'
}

function tellStory(person) {
    // let name = person[0];
    // let mood = person[1];
    // let activity = person[2];
    // return text = `This is ${name}. ${name} is a nice  Today they are ${mood}. They are ${activity} all day `;
    return text = `This is ${person.name}. ${person.name} is a nice person. Today they are ${person.mood}. They are ${person.activity} all day `;
}
// I was experimeting with objects to find a better solution for this, the commented out section is for the ARRAY solution. let me know which one would be better
alert(tellStory(person));

//homework part 2
let numArr = [1, 2, 3, 4, 5];
let sum = 0;
function sumOfNumbers(arr) {
    for (i = 0; i < arr.length; i++) {
        if (validateNumber(arr[i])) {
            sum += arr[i];
        } else {
            return `${arr[i]} is not a number!`;
        }
    }
    return sum;
}

alert(sumOfNumbers(numArr));

function validateNumber(value) {
    if (isNaN(value)) {
        return false;
    }

    if (!Number.isFinite(value)) {
        return false;
    }

    return true;
}
