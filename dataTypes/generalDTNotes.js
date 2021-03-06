// This file is where I am creating my first GitHub Repo
// console.log() is used to print (AKA log) information to the Command Line Interface (CLI)
//     console.log("Hello World, I've updated this file!")  
    
// A variable is a symbol that stands for another value
// var x = 2;`
// console.log(1+x);

// JavaScript Data types

//     1. Strings
//     A set of characters surrounded by quotes " ", ' ', ` `
// var name = "Nic";
// console.log("My name is " + name);

// var singleQuote = 'single-quoted';
// var doubleQuote = "double-quoted";
// var backticks = `backticks`;

// back ticks can be used for more complicated stuff
// var multiplePeople = `Desmond
// Geo
// Nat
// `
// The following are template literals
// console.log(`My name is ${name}`)
// console.log(`${multiplePeople}`)

// We can reference a single letter by its index
// var str = "Highness";
// console.log('Index 2: ' + str[2] + '.'); //g
//Highness
//01234567 <- indices

// var str2 = "Sleepy";
// console.log(str2[1] + str2[2] + str2[3]);
//Sleepy
//012345 <- indices
// var alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet[13] + alphabet[8] + alphabet[2]);
// console.log("Hi," + name + ' welcome to FB!');
// console.log(`Hi ${name}, welcome to FB!`);


//a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 <- indices

// //Declare str1 and give it a value
// var  str1 = "Hello";
// //Goal is to change one letter of str1

// //We forget string are immutable and try to swap a letter, this doesnt work
// str1[0] = "J"; // Hello -> Jello; // DOESNT WORK

// //We create a new string (str2) and assign it a value by referencing indicies of str1
// var str2 =  `J${str1[1] + str1[2] + str1[3] + str1[4]}`;

// //We set str1 equal to str2
// // str1 = str2;

// //we check to see the value of str1
// console.log('str1: ' + str1 + ', ' + 'str2: ' + str2);
// // str[0] = "h"; // wont work

// console.log(str)
// //Strings are immutable, which means that they cannot be changed (however, the variable can)
// var str = "Hello";
// str = "Hello World!"; // we want new string to be "Hello World!"
// console.log(str)

//Getting string length & last character
    // var str = "Hello"; // length of 5, the o is at index 4
    // //Hello <- 5 characters = length of 5
    // var lengthOfStr = str.length; 
    // var lastStrChar = str[lengthOfStr - 1];
    // console.log(lastStrChar);




// //Get a specific substring, a substring is any small portion of a string
//     // Create our fullName variable 
//     // var fullName = 'Kaya;Chouprouta';
//     var fullName = 'Nic;Leask';
//     // Look for 'divider' index. AKA the index of ';'.
//     var divider = fullName.indexOf(';'); // a number
//     // Slice fullname into its first part starting from index 0 until the index of ';'. AKA the divider.
//     var first = fullName.slice(0, divider)
//     // Slice fullname into its last part starting the index of ';' until the end ';'. 
//     // +1 is to account for inclusiveness.
//     var last = fullName.slice(divider + 1, fullName.length)
//     // Show on the CLI. 
//     console.log(first);
//     console.log(last);

//Character doesn't exist 
    // Declare fullName and assign it a value.
    // var fullName = 'Nic Leask';
    // // Look for the index of ';'
    // var divider = fullName.indexOf(';'); // a number
    // // Show the result
    // console.log(divider); //Produces -1




// Making a string lower case
    // var meme = "tHiS is a MEmE";
    // var smallMeme = meme.toLowerCase();
    // var bigMeme = meme.toUpperCase();

    // console.log(meme)
    // console.log(smallMeme)
    // console.log(bigMeme);

    // // Example with no caps
    //     var fullName = 'leisser espana';
    //     var divider = fullName.indexOf(' ');
    //     var fixedFirst = 'L' + fullName.slice(1, divider); //'Leisser';
    //     var fixedLast = "E" + fullName.slice(divider + 2, fullName.length); //'Espana';
    //     var fixedName = fixedFirst + ' ' + fixedLast;
    //     console.log(fixedName);

    // //Variable naming conventions
    //     // camelCase
    //         var fullName = "Nic Leask";
    //     // snake_case
    //         var full_name = "Nic Leask";
    //     // PascalCase
    //         var FullName = "Nic Leask";
    
//str.replace('substring', 'newSubstring') 🔥IMMUTABILITY🔥
    // replace() is a method which searches for a specific string and replaces it with a new one.
    // Example:
    //     // Assign a variable to a string
    //     var str = "Hello World.";
    //     // Looking for a specific character and replacing it 
    //     // Setting our orignial variable to the new string
    //     str = str.replace('.', '!');
    //     // Logging it to the console
    //     console.log(str);

    // 'Hello World';
    // "Don't";
    // var secondWord = 'World';
    // `Hello ${secondWord}`;

// String Summary
//      A set of characters surrounded by quotes " ", ' ', ` `
//      String are immutable, which means they cannot be changed.
//      Use variables to create new strings 
//      Backticks (template literals) vs Single or Double Quotes:
//          - You can include JavaScript within backticks by using ${}, which is called interpolation
//          - Backticks are very literal, until you close them out everything (included new lines will be included)
//          - Backticks are very literal, they inlucde new line characters
//              var string = `
//               `
//              //Single or double quoutes will see a new line as a statement finisher
//              var string2 = '
//              '

//      Concatenation
//          - Joining together of multiple strings 
//              - Examples: 
//                  - str1 + str2
//                  - 'Hello' + 'World' = 'Hello World'
//                  - "Hello" + "World" = "Hello World"

//      Indicies
//          - Each character in a string has an index
//          - Index starts at 0 and counts upwards until the end of the string
//          - Note: .indexOf() is a method, see methods below

//      Getting Specific Characters
//          - We can get specific characters by using square brackets
//          - Example
//              - 'Hello World'[0] = 'H'
//              - 'Hello World'[3] = 'l'
//              - 'Hello World'[5] = ' '
//          - Note: Empty quotes and quots with a space are completely different
//              - '' ≠ ' '
//          - A common thing is to look for the last character the code for that looks like this:
//              - var str = 'Hello World'
//              - str[str.length - 1] will equal 'd'
//          - We can search for a substring and we will get where it starts as a value
//              - Example: 'Hello World'.indexOf('llo') = 2

//      Methods
//          - Length
//              - All strings have a length 
//              - We can find the length with the length method.
//                  - Example: 
//                      - 'Hello World'.length = 11
//              - Length is usually 1 more than the highest index (because index starts at 0 and length starts at 1)
//                  - Think, what is the length of "h"?
//              - Case
//                  - We have two methods for changing case
//                      - 'Hello World'.toUpperCase() equals 'HELLO WORLD'
//                      - 'Hello World'.toLowerCase() equals 'hello world'
//          - Slice
//              - We can grab a substring starting from index #1 (inclusive) to index #2 (exclusive)
//                  - Example:
//                      - 'Hello World'.slice(6, 11) = World
//          - Replace
//              - We can replace a substring by using .replace()
//                  - Example:
//                      - 'Hello World'.replace('H', 'J') = 'Jello World'
//                      - 🔥IMPORTANT🔥 the string 'Hello World' has not been changed, it is immutable
//          - IndexOf
//              - We can find this index using the method .indexOf()
//                  - For example: 'Hello World'.indexOf('e') will be equal to 1
//              - If we search for a character that doesn't exist we will get -1
//                  - For example: 'Hello World'.indexOf('x') will be equal to -1
//              - If we search for a character that appears multiple times we'll get the first instance
//                  - For example: 'llama'.indexOf('l') will be equal to 0, which is the first instance of the l
//              - Capitals and lowercase letters are not the same
//                  - For example: 
//                      - 'Bobby'.indexOf('B') will be equal to 0
//                      - 'Bobby'.indexOf('b') will be equal to 2


//  What is syntax:
    // The syntax of JavaScript is the set of rules that define a correctly structured JavaScript program.
        // Similar to Grammer
            // Lets eat, Grandpa! // this means lets eat with gradpa
            // Lets eat  Grandpa! // this means something cannibal
            // Examples:
                
                // var variableName1; //declare variable syntax
                // var variableName2 = 'Test'; // assign variable a value syntax
                // if(condition){
                //     execution;
                // }; // if statement syntax
                // for (let index = 0; index < array.length; index++) {
                //     'do something here'
                // } //for loop syntax
                // console.log(variableName);

// Q1:
// var fruit = 'Banana';

// Remove the first a from 'Banana'
// console.log(fruit.replace('a',''))

// Remove all 'a's from Banana using a loop (immutability makes this slightly more difficult)
// //Solution 1:
// var finalStr = '';
// for (var i = 0; i < fruit.length; i++) {
//     var letter = fruit[i];  
//     //if the letter is a 
//     if(letter.indexOf('a') === -1){
//         //remove the letter
//         console.log(letter);
//         finalStr = finalStr + letter
//     };
// };
// console.log(finalStr);


// //Solution 2:
// var finalStr = '';
// for (let i = 0; i < fruit.length; i++) {
//     //if the letter is a 
//     if(fruit[i] !== 'a'){
//         //remove the letter
//         console.log(letter);
//         finalStr = finalStr + letter;
//     };
// }
// console.log(finalStr);