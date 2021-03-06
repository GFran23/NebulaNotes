// These notes describe some scenarios when we are utilizing conditionals and loops together

// Write a function that checks strings within an array for a number 
// let colors = ['b1ue', 'pink', 'yellow', 'purple', 'red', 'O3range'];
// let cars = ['Porche', 'BMW', 'Toy0ta', 'O3range'];

// function redChecker(arr){
//     let colorsWithNums = [];

//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i];

//         if( element.indexOf('0') > -1 
//         || element.indexOf('1') > -1 
//         || element.indexOf('2') > -1 
//         || element.indexOf('3') > -1 
//         || element.indexOf('4') > -1 
//         || element.indexOf('5') > -1 
//         || element.indexOf('6') > -1 
//         || element.indexOf('7') > -1 
//         || element.indexOf('8') > -1 
//         || element.indexOf('9') > -1 ){
//             colorsWithNums.push(element);
//         }
//     }

//     return colorsWithNums;
// }

// console.log(redChecker(colors));
// console.log(redChecker(cars));

// checking an array of strings for a specific substring
    // real life example is checking comments for curse words
    // in this scenario look for 'zz'

// let words = ['Test', 'Hello', 'World', 'Pizza', 'Frizzy'];

// // console.log('Test'.indexOf('zz'));// -1 
// // console.log('Hello'.indexOf('zz'));// -1
// // console.log('World'.indexOf('zz'));// -1
// // console.log('Pizza'.indexOf('zz'));// 2
// // console.log('Frizzy'.indexOf('zz'));// 3

// function subStrSearch(arr){
//     let zzWords = [];

//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i];
//             //check if our word has the string 'zz'
//         if( element.indexOf('zz') > -1 ){
//             // if so push that word into our zzWords array
//             zzWords.push(element);
//         }
//     }

//     return zzWords;
// }

// console.log(subStrSearch(words));

// write a function that checks how often an element appears in an array
    // example
        // check for 'red'
        // input:['black']; output: 0;
        // input:['red', 'blue', 'red', 'yellow', 'red']; output: 3;
        // input:['red', 'blue', 'red', 'yellow', 'black']; output: 2;

let colors1 = ['red', 'blue', 'red', 'yellow', 'red'];
let colors2 = ['red', 'blue', 'red', 'yellow', 'black'];
    
function redCounter(arr){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        // check if our current element is 'red'
        if( element === 'red' ){
            count = count + 1; // count += 1 // count++;
        }
    }
    
    return count;
}

console.log(redCounter(colors1));
console.log(redCounter(colors2));


// Write a function that takes in two parameters and checks how 
// often the second parameter appears in an array (the first parameter)

let arr1 = ['January', 'May', 'March', 'August']
let arr2 = ['January', 'March', 'January']

function paramCheck(months, month){
    let count = 0;
    for(let i = 0; i < months.length; i++){
        let element = months[i];
        if (element === month){
            count = count +1
        }
    }
    return count;
}
console.log(paramCheck(arr1,'May'));
console.log(paramCheck(arr2,'January'));

