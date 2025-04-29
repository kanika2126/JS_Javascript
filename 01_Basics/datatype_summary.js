//primitive

// 7 types : String, number, boolean, null,undefined,symbol ,BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1230')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 32456987411255555558n



// refrence type(non primitive)

// Array , Objects , Functions 

const heros = ["shaktiman","doga"]
let myobj = {
    name: "kanika",
    age: 21,
}

const myfunction = function(){
    console.log("hello world");
    
}
console.log(typeof outsideTemp);
