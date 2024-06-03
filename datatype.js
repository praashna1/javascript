let name="praashna"
let age=22
let isloggedIn= false
let state;

//number => 2 to power 53
//bigint
// string=> ""
// boolean=>true/false
// null=>stand alone value
// undefined=> 
// symbol=>unique
const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id==anotherId);


//objects, array, functions

console.log(typeof undefined); //undefined
console.log(typeof null); //object

const hero=["batman","shaktiman","superman"]
let myObj= {
    name:"praashna",
    age: 22
}

const myfunction=function(){
    console.log("hello world");
}

//stack(primitive), heap(non-primitive)

let score=22

// console.log(typeof score);

// let valueInNumber= Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33"=> 33
//"33abc"=>NaN
// true=>1; false=>0

let isloggedInn= 1
let booleanIsLoggedIn= Boolean(isloggedInn)
// console.log(booleanIsLoggedIn);
//1= true ; o=false
//""=false
//"praashna"=true

let someNumber=55
let stringNumber=String(someNumber)
console.log(typeof stringNumber);