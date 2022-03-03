const peopleSection = document.querySelector('.people');
const shipsSection = document.querySelector('.ships');
let nextBtn = document.querySelector('#next');

let prevBtn = document.querySelector('#previous');
const shipsTable = document.querySelector('#shipsData');
const homeSection = document.querySelector('.wrapper')
const peopleTable = document.querySelector('#peopleData');

class Person {
    constructor(obj) {
        const { name, height, mass, gender, birth_year, homeworld, films } = obj;
        this.name = name;
        this.height = `${height}cm`;
        this.mass = `${mass}kg`;
        this.gender = gender;
        this.birthYear = birth_year;
        this.homeworld = homeworld;
        this.appearances = Array.isArray(films) && films.length || null;
    }
}

class ShipDetails {
    constructor(obj) {
        const { cost_in_credits, cargo_capacity, passengers, starship_class } = obj;
        this.cost = `${cost_in_credits} credits`;
        this.cargoCapacity = cargo_capacity;
        this.peopleCapacity = passengers;
        this.class = starship_class;
    }
}

class Ship extends ShipDetails {
    constructor({ name, model, manufacturer, cost_in_credits, cargo_capacity, passengers, starship_class }) {
        const obj = { cost_in_credits, cargo_capacity, passengers, starship_class };
        super(obj)
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
    }
}


const memory = {
    url: 'https://swapi.dev/api/',
    currentContext: '',
    people: 'people',
    starships: 'starships',
    data: [],
    previous: null,
    next: null
};


async function fetchData(url, context) {
    let call = await fetch(url);
    let dataJson = await call.json();
    memory.currentContext = context;
    return dataJson;
}


function refreshMemory(r, context) {
    memory.previous = r.previous;
    memory.next = r.next;
    memory.data = r.results.map(data => context === memory.people ? new Person(data) : new Ship(data));
}
async function getPeople(url) {
    const data = await fetchData(url, memory.people);
    refreshMemory(data, memory.people);
}
async function getShips(url) {
    const data = await fetchData(url, memory.starships);
    refreshMemory(data, memory.ships);
}

document.querySelector('.human').addEventListener('click', async function () {
   
    peopleTable.innerHTML = '';
    peopleSection.toggleAttribute('hidden');
    homeSection.toggleAttribute('hidden');
    nextBtn.toggleAttribute('hidden')
    const humanData = await fetchData(`${memory.url}${memory.people}`)
    console.log(humanData);
    humanData.results.forEach(e => {
        let person = new Person(e);
       
        let row = document.createElement('tr');
        row.innerHTML +=
            `<td>${person.name}</td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.gender}</td>
            <td>${person.birthYear}</td>
            <td>${person.homeworld}</td>
            <td>${person.appearances}</td>`;
       
        peopleTable.append(row)
    });

})

document.querySelector('#rocketshipWrapper').addEventListener('click', async function () {
  
    shipsTable.innerHTML = '';
    const shipsData = await fetchData(`${memory.url}${memory.starships}`)
    shipsSection.toggleAttribute('hidden');
    homeSection.toggleAttribute('hidden');
    nextBtn.toggleAttribute('hidden');
    console.log(shipsData);
    shipsData.results.forEach(e => {
        let ship = new Ship(e);
       
        let row = document.createElement('tr');
        row.innerHTML +=
            `<td>${ship.name}</td>
            <td>${ship.model}</td>
            <td>${ship.manufacturer}</td>
            <td>${ship.cost}</td>
            <td>${ship.cargoCapacity}</td>
            <td>${ship.peopleCapacity}</td>
            <td>${ship.class}</td>`;
       
        shipsTable.append(row)
    });
});



nextBtn.addEventListener('click', async () => {
    prevBtn.removeAttribute('hidden');
    if (memory.next) {
        
        if (memory.currentContext === memory.people) {
            getPeople(memory.next);
        } else if (memory.currentContext === memory.starships) {
            getShips(memory.next);
        }
    }

})

prevBtn.addEventListener('click', async () => {

    if (memory.previous) {
    
        if (memory.currentContext === memory.people) {
            getPeople(memory.previous);
        } else if (memory.currentContext === memory.starships) {
            getShips(memory.previous);
        }
    }

})


