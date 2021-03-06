// Functions
    // A function is a block of code designed for a specific task
    // Functions are usually invoked more than once 
        // Note:
            // The proper way of saying 'used' is 'invoked'
        
    // Why even use functions?
       // You can reuse code by defining the code once, and using it many times.
       // This reduces potential errors 
       // Simplifies our programs

    //Basic Syntax
        // function myFunction(){
        //     console.log('Hello World!')
        // };
            // return ends the function and the function evaluates to what is being returned
                // example:
                // function sayHello(){
                //     return 'Hello';
                // }
                    // DOESNT inherently write to the CLI, remember console.log does that

                    // Invoking the function

                        // Notes: 
                            // Not all functions post to CLI, we may need to console.log
                            // The parenthesis after the function are what makes it run
                                // Without we will just get a reference 
                            // sayHello() // This would invoke our function (still wont write to CLI)
                            // console.log(sayHello()) // This DOES write to CLI
                        // Example:
                            // the following function will evaluate to the number 3
                                // function returnNumber(){
                                    // return 3;
                                // }
            // parameters
                // A function can require parameters
                    // the following function returns the first item in an array
                        //                  ⬇️ Our parameter, we can have an infinite number of parameters
                    // function pickFirst(array){
                    //      return array[0];
                    // }
                    // arguments
                        // Arguments are the values assigned to paremters when the function is invoked
                        // Invoke, assign arguments, and write to the CLI
                        // console.log(pickFirst(['zero', 'one', 'two']))

        // note: there are many ways of invoking or creating a function
            // We are just sticking to the basics for now!


    // Scope is:
        // What is accessible within a specific function
            // Situation 1:

                // If a variable is defined outside the curly brackets of a function 
                // it will be accessible inside the function 
                
                // var str1 = 'Hello World!';
                // function thirdLetter(){
                //     return str1[2];
                // };
                // console.log(str1);

            // Situation 2:
            
                // If a variable is defined within the curly brackets of a function  
                // it will not be accessible outside the function

                // function thirdLetter(){
                //     var str2 = 'Hello World!'
                //     return str2;
                // };
                // console.log(str2);


            // Example:
                // Global scope
                // var name = 'Nicholas Leask';

                // function thirdLetter(){
                //     name = name + ' MD';
                //     return name;
                // };
                // console.log(thirdLetter());
            // Note:
                // We have block and global scope.
                // A function is a 'block' 
                // The whole file or program is global
            

    // A function can be invoked many times with different arguments and produce results based on those arguments
        // Example a: 
            // We create the following function that adds two numbers, a and b, together
            // a and b are our parameters
            // function addTwoNumbers(a, b){
            //     return(a + b);
            // }
            // We are invoking the function with the arguments 1 & 2 where a = 1 and b = 2
            // this results in 3 being logged to the console
                // console.log(addTwoNumbers(1, 2)); 
            // We are invoking the function with the arguments 3 & 4 where a = 3 and b = 4
            // this results in 7 being logged to the console
                // console.log(addTwoNumbers(3, 4)); 
            // We are invoking the function with the arguments 5 & 6 where a = 5 and b = 6
            // this results in 11 being logged to the console
                // console.log(addTwoNumbers(5, 6));
        // Example b:
            // function squareOneNumber(a){
            //     return (a * a);
            // }
            // console.log(squareOneNumber(2)); // returns 4
            // console.log(squareOneNumber(12)); // returns 144
        // Example c:
            // var arr1 = ['This', 'is', 'a', 'sentence'];
            // var arr2 = ['I', "can't", 'wait', 'for', 'the', 'weekend'];
            
            // function makeSentence(array){
            //     return (array.join(' '));
            // }

            // console.log(makeSentence(arr1)); // logs 'This is a sentence' 
            // console.log(makeSentence(arr2)); // logs 'I can't wait for the weekend'

        // Example d:
            // this is a function that gives us the date
            // function createDate(){
            //     return new Date();
            // }
            // Show the result of createDate on the CLI
            // console.log(createDate());

        // Example e: (Scope)
            // function showName(){
            //     var name = 'Peter';
            //     console.log(name);
            // }
            // We have access to the variable inside the block scope (the inside of the function)
                // The following line will produce 'Peter    
                // console.log(showName());
            // the following line doesnt work
                // we dont have access to name as it is inside the showName function
                // console.log(name); // causes an error
        // Example f: (Scope)
            // function showAnimal(){
            //     var animal = '🐶';
            //     console.log(animal);
            // }
            // We invoke the function which returns the value of the variable 'animal'
                // console.log(showAnimal());
            // the following line doesnt work
                // we dont have access to animal as it is inside the showAnimal function
                // console.log(animal);
        // Example g: (Scope)
            // in this instance we have a function being called inside another function
                // Two layers of scope!
            // function funkTwo(){
            //     var test = 'test'
            //     console.log(test)
            // }
            // function funkOne(){
            //     funkTwo();
            //     console.log(test);
            // }
            // funkOne();

            