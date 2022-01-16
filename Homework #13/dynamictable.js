let button = document.querySelector('#btn');

function createTable() {
    let numRows = document.querySelector('#rows').value;
    let numCols = document.querySelector('#columns').value;
    let theader = '<table border="1">\n';
    let tbody = '';
    for (let i = 1; i <= numRows; i++) {
        tbody += '<tr>';
        for (let j = 1; j <= numCols; j++) {
            tbody += '<td>';
            tbody += 'Row' + i + ', Column' + j;
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    let tfooter = '</table>';
    document.querySelector('#table').innerHTML = theader + tbody + tfooter;
}

button.addEventListener('click', createTable);