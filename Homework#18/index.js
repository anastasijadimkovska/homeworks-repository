// the array I will work with 
const myArray = [1, 2, 3, 4, 5, 7];
// using HOF regularly 
console.log(myArray.map(x => x + 1));
console.log(myArray.filter(x => x % 2 === 0));
myArray.forEach(x => console.log(x -= 1));
// function that is supposed to work like .map
function myMap (array, callback){
    let map = [];
    for (let num of array){
        map.push(callback(num))
    }
    return map;
}
console.log(myMap(myArray, x => x + 1));
// function that is supposed to work like .filter
function myFilter (array, callback) {
    let filter = [];
    for (let num of array){
        let value = callback(num)
        if (value !== undefined && value === value) {
            filter.push(value)
        }
    }
    return filter;
}
console.log (myFilter(myArray, (x) => {
    if (x % 2 === 0) {
        return x;
    } 
}))
// function that is supposed to work like .forEach
function myForEach (array, callback) {
     for (let num of array) {
       callback(num)
        }
   
    }
myForEach(myArray, x => console.log(x -= 1)); 

//bonus
//callable map function
Array.prototype.myMap = function (callback) {
    let mapArray = [];
    for(let i = 0; i < this.length; i++){
        mapArray.push(callback(this[i]))
    }
    return mapArray
}
let result = myArray.myMap(x => x + 1)
console.log(result)
//callable filter function
Array.prototype.myFilter = function (callback) {
    let filterArray = [];
    for(let i = 0; i < this.length; i++){
        callback(this[i]) ? filterArray.push(this[i]) : '';
        }
        return filterArray;
}

console.log(myArray.myFilter(x => x % 2 === 0))

// another approach for callable filter with reduce method 
// Array.prototype.myFilter = function (callback) {
//     return this.reduce(
//         (prev, current) => {if (!callback(current)) return prev;
//         return[...prev, current];}
//        ,[]
//       );
// }

// callable forEach function
Array.prototype.myForEach = function(callback){
    for(i = 0; i < this.length; i++){
        callback(this[i])
    }
}

myArray.myForEach(x => console.log(x -= 1));