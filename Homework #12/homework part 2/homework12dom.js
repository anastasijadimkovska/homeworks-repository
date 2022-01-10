// Homework part 2
// first attempt
// let numbers = [1,2,3,4,5];

// function printList(arr) {
//     let sum = 0;
//     let list = document.querySelector('#list');
//         for (let i = 0; i < arr.length; i++) {
//         let li = `<li>${arr[i]}</li>`
//         list.innerHTML += li;
//         
//     }

// }


// printList(numbers);
let numbers = [1, 2, 3, 4, 5];

function printList(arr) {
    let sum = 0;
    let list = document.querySelector('#list');
    let p = document.querySelector('#result');
    let p2 = document.querySelector('#equation');
    let equation = '';
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerText = arr[i];
        list.append(li);
        sum += arr[i];
        if (i === arr.length - 1) {
            equation += arr[i];
        } else {     
        equation += `${arr[i]} + `;
        }
    }
    equation += ` = ${sum}`;
    p.innerText = sum;
    p2.innerText = equation;
    console.log(equation)
}

printList(numbers);



