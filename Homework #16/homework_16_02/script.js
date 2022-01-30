

let input = document.querySelector('#toDo');
let button = document.querySelector('#button');
let list = document.querySelector('#list');
let toDoArr = [];



function ToDo(name) {
    this.name = name;
    this.isCompleted = false;
    this.complete = function () {
        this.isCompleted = !this.isCompleted;
    }
};

function generateTask() {
    let task = new ToDo(input.value);
    toDoArr.push(task);
    console.log(toDoArr);
};

function generateList(arr) {
    list.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        let name = document.createElement('p');
        checkbox.setAttribute('type', 'checkbox');
        if (arr[i].isCompleted) {
            checkbox.checked = true;
            name.classList.add('deleted');
        }
        name.innerText = arr[i].name;
        checkbox.addEventListener('click', function () {
            name.classList.toggle('deleted');
            arr[i].complete();
            console.log(arr[i])
        });
        li.append(name);
        li.append(checkbox);
        list.append(li);
        input.value = '';
    }
};


button.addEventListener('click', () => {
    generateTask();
    generateList(toDoArr);
});
