module.exports = function calc (numberOne, numberTwo, operand){
    if (operand === '+') {
        return numberOne + numberTwo
    } if(operand === '-') {
       return numberOne - numberTwo
    } if (operand === '*') {
        return numberOne * numberTwo
    } if (operand === '/'){
        return numberOne / numberTwo
    } else {
        return 'invalid operand'
    }
}
