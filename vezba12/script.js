const peopleSection = document.querySelector('.people');
const shipsSection = document.querySelector('.ships');
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#previous');
const shipsTable = document.querySelector('#shipsData');
const homeSection = document.querySelector('.wrapper')
const peopleTable = document.querySelector('#peopleData');
const homeworldList = document.querySelector('.homeworldData');
const homeworldSection = document.querySelector('.homeworld');
const namesTable = document.querySelector('.dynamicTable');
const thead = document.getElementsByTagName('thead');

class Person {
    constructor(obj) {
        const { name, height, mass, gender, birth_year, homeworld, films } = obj;
        this.name = name;
        this.height = height;
        this.mass = mass;
        // this.height =`${height}cm`;
        // this.mass = `${mass}kg`;
        this.gender = gender;
        this.birthYear = birth_year;
        this.homeworld = homeworld;
        this.appearances = Array.isArray(films) && films.length || null;
    }
    get heightSuffix() {
        return this.height;
    }
    set heightSuffix(height) {
        this.height = height
        
    }

    static async returnHomeworld(obj) {
        if (obj instanceof Person) {
                let call = await fetch(`${obj.homeworld}`);
            let homeworldData = await call.json();
                homeworldSection.removeAttribute('hidden')
                let planet = new Planet(homeworldData)
                homeworldList.innerHTML = '';
                homeworldList.innerHTML += `
            <h3>${obj.name}'s Homeworld Details:</h3>
            <li>Planet Name: ${planet.name}</li>
            <li>Rotation Period: ${Table.rotationSuffix(planet.rotationPeriod)}</li>
            <li>Orbital Period: ${Table.orbitalSuffix(planet.orbitalPeriod)}</li>
            <li>Diameter: ${Table.kmSuffix(planet.diameter)}</li>
            <li>Climate: ${planet.climate}</li>
            <li>Gravity: ${planet.gravity}</li>  
            <li>Terrain: ${planet.terrain}</li> 
            <li>Surface: ${Table.surfaceWater(planet.surfaceWater)}</li>
            <li>Population: ${Table.formatCargo(planet.population)}</li>
            `
        } else {
            throw new Error('invalid object')
        }
    }
}

class ShipDetails {
    constructor(obj) {
        const { cost_in_credits, cargo_capacity, passengers, starship_class } = obj;
        this.cost = cost_in_credits;
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
    get shipCost() {
        return this.shipCost;
    }
    set shipCost(n) {
        this.shipCost = n;
        return "$ " + (Math.round(n * 100) / 100).toLocaleString();
    }
    get shipCargoCapacity() {
        return this.cargoCapacity;
    }
    set shipCargoCapacity(n) {
        this.cargoCapacity = n;
        return (Math.round(n * 100) / 100).toLocaleString() + 'kg';
    }
}

class Planet {
    constructor(obj) {
        const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population } = obj

        this.name = name;
        this.rotationPeriod = rotation_period;
        this.orbitalPeriod = orbital_period;
        this.diameter = diameter;
        this.climate = climate;
        this.gravity = gravity;
        this.terrain = terrain;
        this.surfaceWater = surface_water;
        this.population = population;
    }
}
class Table {
    static formatCost(n) {
        if (isNaN(n)){
            return 'Unknown Credits'
        }
        return (Math.round(n * 100) / 100).toLocaleString() + ' credits';}
    static formatCargo (n) {
        if (isNaN(n)){
            return 'Unknown'
        } else {
        return (Math.round(n * 100) / 100).toLocaleString()} 
    }
    static heightSuffix(n) {
        if (n === 'unknown'){
            return 'unknown'
        } else {
        return `${n} cm`
        }
    }
    static massSuffix(n) {
        if (n === 'unknown'){
            return 'unknown'
        } else{
        return `${n} kg`
        }
    }
    static rotationSuffix(n){
        if (n === 'unknown'){
            return 'unknown'
        } else{
        return `${n} h`
        }
    }
    static orbitalSuffix(n){
        if (n === 'unknown'){
            return 'unknown'
        } else{
        return `${n} d`
        }
    }
    static kmSuffix(n){
        if (n === 'unknown') {
            return 'unknown'
        } else {
            return `${n} km`
        }
    }
    static surfaceWater(n){
        if (n === 'unknown') {
            return 'unknown'
        } else {
            return `${n} %`
        }
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
    refreshMemory(dataJson, context);
    memory.currentContext = context;
    return dataJson;
}

function refreshMemory(r, context) {
    memory.previous = r.previous;
    memory.next = r.next;
    memory.data = r.results.map(data => context === memory.people ? new Person(data) : new Ship(data));
}

function generateHumanTable(e) {
    let person = new Person(e);
    let row = document.createElement('tr');
    row.innerHTML +=
        `<td>${person.name}</td>
        <td>${person.heightSuffix = `${person.height} cm`}</td>
        <td>${Table.massSuffix(person.mass)}</td>
        <td>${person.gender}</td>
        <td>${person.birthYear}</td>
        <td>${person.homeworld}</td>
        <td>${person.appearances}</td>`;

    peopleTable.append(row)
    row.addEventListener('click', () => {
        Person.returnHomeworld(person)
        console.log(person)
    })
}

function generateShipTable(e) {
    let ship = new Ship(e);
    let row = document.createElement('tr');
    row.innerHTML +=
        `<td>${ship.name}</td>
        <td>${ship.model}</td>
        <td>${ship.manufacturer}</td>
        <td>${Table.formatCost(ship.cost)}</td>
        <td>${Table.formatCargo(ship.cargoCapacity)}</td>
        <td>${ship.peopleCapacity}</td>
        <td>${ship.class}</td>`;

    shipsTable.append(row)
}

function refreshTable() {
    peopleTable.innerHTML = '';
    shipsTable.innerHTML = '';
}

document.querySelector('.human').addEventListener('click', async function () {
    refreshTable();
    peopleSection.toggleAttribute('hidden');
    homeSection.toggleAttribute('hidden');
    nextBtn.toggleAttribute('hidden')
    const humanData = await fetchData(`${memory.url}${memory.people}`, memory.people)
    humanData.results.forEach(e => {
        generateHumanTable(e);
    });
});

document.querySelector('#rocketshipWrapper').addEventListener('click', async function () {
    refreshTable();
    const shipsData = await fetchData(`${memory.url}${memory.starships}`, memory.starships)
    shipsSection.toggleAttribute('hidden');
    homeSection.toggleAttribute('hidden');
    nextBtn.toggleAttribute('hidden');
    shipsData.results.forEach(e => {
        generateShipTable(e);
    });
});

nextBtn.addEventListener('click', async () => {
    prevBtn.removeAttribute('hidden');
    const data = await fetchData(memory.next, memory.currentContext);
    refreshTable();
    data.results.forEach(e => {
        if (memory.currentContext === memory.people) {
            generateHumanTable(e);
        } else if (memory.currentContext === memory.starships) {
            generateShipTable(e)
        }
    });
});

prevBtn.addEventListener('click', async () => {
    const data = await fetchData(memory.previous, memory.currentContext);
    refreshTable();
    data.results.forEach(e => {
        if (memory.currentContext === memory.people) {
            generateHumanTable(e);
        } else if (memory.currentContext === memory.starships) {
            generateShipTable(e)
        }
    });
});
