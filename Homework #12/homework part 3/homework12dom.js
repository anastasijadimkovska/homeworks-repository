let name = prompt('What is the name of the recipe?');
let num = Number(prompt('How many ingredients do we need for the recipe?'));
let ingredients = [];

for (let i = 0; i < num; i++) {
    let item = prompt('Please enter the name of the ingredient');
    ingredients.push(item);
}

function printRecipe (recipeName, ingredients) {
    let header = document.querySelector('#recipeName');
    let list = document.querySelector('#list');
    header.innerText = recipeName;
    for (let i = 0; i < ingredients.length; i++) {
        let row = `
        <tr>
            <td>${i + 1}</td>
            <td>${ingredients[i]}</td>
        </tr>`;
        list.innerHTML += row;
    }
}

printRecipe(name, ingredients)