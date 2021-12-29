// homework part 1
function typeChecker(x) {
    let result = typeof x;
    return result;
};

typeChecker(null);
typeChecker(5 > 2);
typeChecker(3 - 2);
typeChecker('I hate everyone');
typeChecker();

// homework part 2
function humanDogYears(people, dog) {
    let dogYears = people / 7;
    let age = dog * 7;
    return (`You are ${dogYears} years old in dog years! Your dog is ${age} years old in human years!`);

}

humanDogYears(24, 5);


// homework part 3

let balance = 2000;
let atmIsOn = true;
function withdraw(amount) {
    let message;
    if (amount <= balance) {
        balance -= amount;
        message = `You took ${amount} dollars. You have ${balance} dollars left.`;
    } else if (amount > balance) {
        message = 'Not enough money.';
    }
    alert(message);
}

function checkBalance() {
    alert(`You have ${balance} dollars in your account.`);
}

function atmMachine() {
    let action = prompt('Enter 1 to withdraw money. Enter 2 to check balance. Enter 3 to quit');    
    if (action === '1') {
        let amount = parseInt(prompt('Enter the amount of money you want to withdraw.'));
        withdraw(amount);
    } else if (action === '2') {
        checkBalance()
    }  else if (action === '3') {
        atmIsOn = !atmIsOn; 
    } else {
        alert('Invalid input.');
    }

}

while (atmIsOn) {
    atmMachine();
}

