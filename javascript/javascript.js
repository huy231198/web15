// function aFunction(a){
//     console.log("Hello " + a);
// }
// var bFunction = function(name, printName){
//     printName(name);
// }
// bFunction("Huy", aFunction);

//Callback

// function add5(getNumber, print){
//     var num = getNumber() +5;
//     print(num);
// }

// function randomNumber(){
//     return Math.floor(Math.random()*1000);
// }

// function printNumber(num){
//     console.log(num);
// }

// // add5(randomNumber, printNumber);
// setTimeout(function(){
//     add5 (randomNumber, printNumber);
// }, 1000*1)

// var cVariable = aFunction;

// var cVariable = () => {
//     console.log("Hello Arrow!");

//Function scope
  

// var a = 10;

// function abc(){
//     var b =15;
//     console.log(a);
//     console.log(b);
// }

// abc();

// console.log(a);
// console.log(b);

// function printNum(num, waitTime){
//     setTimeout(function(){
//         console.log(num);
//     }, waitTime*1000);
// }

// function countDown(num){
//     var i=num;
//     for(i; i >= 0; i--){
//         printNum(i, num-i);
//     }
// }

// countDown(5);

function countDown(num){

    for(let i=num; i >= 0; i--){
        setTimeout(function(){
            console.log(i);
        }, (num-i)*1000);
    }
}

countDown(5);
