const printGreeting = () =>{
    console.log("hello world");
}
printGreeting();

const printGreetings = (num1, num2) =>{
    return num1+num2;

}
console.log(printGreetings(4,7));

const printGtreet = (num1, num2) => num1*num2;
console.log(printGtreet(3,5));

//callBack function
const numbers = [1,2,3,4];
const doubleNumbers = numbers.map((number)=> number *2);