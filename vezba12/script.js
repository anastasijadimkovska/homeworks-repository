

const printName = (element, name) => element.innerText = name;

const createTd = value => {
    const td = document.createElement('td')
    td.classList.add("table-dark")
    td.innerText = value;
    return td;
};
const createTr = (key, value) => {
    const tr = document.createElement('tr');
    tr.classList.add("table-dark")
    tr.appendChild(createTd(key));
    tr.appendChild(createTd(value));
    return tr;
};

const makeTable = (element, data) => {
    const keys = Object.keys(data);
    keys.forEach(key => {
        if(typeof data[key] === 'string') {
            element.append(createTr(key, data[key]))
        }
    })};

    $('.rocketship').click(() =>{
        // $(function() {
        //     $.ajax({
        //         url: 'https://swapi.dev/api/starships/9/',
        //         success: res => {
        //             const table = $('#result');
        //             table.addClass("table table-dark table-hover")
        //             console.log({x: res.name});
        //             printName(res.name);
        //             makeTable(table, res)
        //         },
        //         error: err => {
        //             console.log
        //         }
        //     })
        // });
        async function fetchData(url) {
            let call = await fetch(url);
            let dataJson = await call.json();
            return dataJson;
        }
        fetchData('https://swapi.dev/api/starships')
        .then(data => {
            console.log(data);
        })
     })