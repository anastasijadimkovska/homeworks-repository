// homework part 1
$(document).ready(function () {
    $('#btn').first().click(function () {
        $('#h1').first().text(`Hello there ${$('#msg').first().val()}`)
    });
});
//Homework part 2
let color = $('#color').first();
let text = $('#text').first();
let headings = $('.headings').first()

function isColor(strColor) {
    if (!strColor) {
        return false;
    }
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
};

$(document).ready(function () {
    $('#button').first().click(() => {
        // if CSS.supports()
        if (isColor(color.val()) && text.val()) {
            // headings.html(`<h1>
            // ${text.val()}
            // </h1>`);
            headings.append(`<h1 style='color:${color.val()}'>${text.val()}</h1>`);
            // headings.css(`color`, `${color.val()}`)
        } else {
            $('#msgs').first().text('Error! Please enter a valid color and text')
        }


    });
});

//print digints of number
const myNum = 9564;
let myNumber = String(myNum);
for (let i = 0; i < myNumber.length; i++){
    console.log(myNumber[i])
};

//or 
const myNum = 6574;
let digits = myNum.toString().split("");
console.log(digits);
