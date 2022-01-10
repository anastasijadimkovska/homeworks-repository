// let paragraphs = Array.from(document.querySelectorAll('.paragraph'));
let paragraphs = document.getElementsByClassName('paragraph');

for (let paragraph of paragraphs){
    paragraph.innerText = 'This paragraph is changed';
    console.log(paragraph);
}

let headers = Array.from(document.querySelectorAll('h1, h3'));
for (let header of headers) {
    header.innerText = 'This header is changed';
    console.log(header);
}