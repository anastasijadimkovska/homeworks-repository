let loadBtn = document.querySelector('#loadData');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let tableBody = document.querySelector('#tbody');
let table = document.querySelector('#table');

function refreshMemory(r) {
    memory.previous = r.info.prev;
    memory.next = r.info.next;
    memory.data = r.results.map(data =>  new Episode (data))
}

async function fetchData(url) {
    let call = await fetch(url);
    let dataJson = await call.json();
    refreshMemory(dataJson);
    return dataJson;
}

const memory = {
    url: 'https://rickandmortyapi.com/api/episode',
    data: [],
    previous: null,
    next: null
}

class Episode  {
    constructor (obj) {
        const  {id, name, air_date, url, episode} = obj
        this.id = id;
        this.name = name;
        this.airDate = air_date;
        this.url = url;
        this.episode = episode;
    }
}

async function populateTable (e){
        let ep = new Episode (e);
        let row = document.createElement('tr');
        row.innerHTML += 
        `<td>${ep.id}</td>
        <td>${ep.name}</td>
        <td>${ep.airDate}</td>
        <td>${ep.url}</td>
        <td>${ep.episode}</td>
        <th><button id='details' class="btn btn-outline-success">Details</button></th>`
        tableBody.append(row)
}
function refreshTable (){
    tableBody.innerHTML = '';
}
loadBtn.addEventListener ('click', async function () {
    refreshTable ()
    prevBtn.toggleAttribute('hidden');
    nextBtn.toggleAttribute('hidden');
    table.toggleAttribute('hidden');
    let data = await fetchData(`${memory.url}`);
    console.log(data);
    data.results.forEach(e => {
    populateTable(e);
    })
})


 
nextBtn.addEventListener ('click', async function (e){
      const data = await fetchData(`${memory.next}`);
      refreshTable();
      data.results.forEach(e => {
        populateTable(e)
      })
     
    
})

prevBtn.addEventListener ('click', async function (){
    const data = await fetchData(`${memory.previous}`);
    refreshTable();
    data.results.forEach(e => {
      populateTable(e)
    })
})