console.log(`Based on "The Odin Project" curriculum`);

// ===BASICS===

let message = "Hello, world!"; //returns undefined, cannot assign and read value at the same line.
const RED = "#FF0000"; //must be assigned value on declaration, cannot be reassigned.
var oldVar = "don't use me"; //var are global scoped or function scoped, can be redeclared.

// ===DATA TYPES===

/*
number - integer or floating-point
bigint - integer numbers of arbitrary length.
string - zero or more characters.
boolean - true/false.
null - unknown values, explicitly declared
undefined - unassigned values
object - more complex data structures. { key: "value"}
symbol - unique identifiers...
*/

typeof message; //"string"

// ===1.Numbers

// ===Arithmetic operators     //beside the usual

/* 
+ - also concatenates strings
% - modulus(remainder)
** - exponentiation, a**b, same as Math.pow(a,b)
++ - increment: prefix and postfix: a++ increments a but returns old value, ++a returns new value immediately;
-- - decrement
+= - asignment operator, a += b is the same as a = a + b
*/

let a = 2;
let b = 3;
let c = 2.77891234;
let d = "58" //typeof d "string"

// ===Useful number methods

c.toFixed(2); //2.78 round number to fixed number of decimal places, returns string!
Number(d) //convert string to number
    + d //unary operator, also converts strings to numbers
d.toString(); //number to string
Math.random(); //a number from 0 to <1
Math.floor(c); //2, Returns the largest integer less than or equal to c, rounds the number down. Math.ceil() rounds up
Math.round(c); //3, rounds to nearest integer
Math.max(a, b, c, d); //58, converts if needed. Also Math.min()

// ===Comparison operators

// <=, >=, ===, !== - less than or equal to, greater than or equal to, strict equality, strict non-equality

d == +d //true
d === +d //strict equality false, not same type

// ===Logical operators

/* 
&& - AND 
|| - OR
! - NOT
*/

// ===2.Strings

message.length; //13
message[0]; //"H"
message[message.length - 1]; //"!
message.includes("ss"); //tests whether string contains substring
message.startsWith("H");
message.endsWith("!");
message.slice(1, 3); //"el", provide index at which to start exctracting and optional index to stop(non inclusive);
message.substring; // like slice but cannot accept negative indexes
message.charAt(0); //"H", extracts character at known index
message.replace("world", "everyone"); //'Hello, everyone!'Params are the string we want to replace, and the string we want to replace it with.
message.replace(/l/g, "w"); //'Hewwo, worwd!' the global flag /g replaces all instances, no quotes needed. /i is case-insensitive flag
message.indexOf("l", 6); //finds index number of first occurence of l, starting from index 6, start param is optional, if not found returns -1!
message.concat(" Nice to meet you all!"); //concatenates, same as plus operator
message.split(""); //['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
message.split(","); //['Hello', ' world!']

// ===CONDITIONALS===

if (a > b) {                                            //if and else...if
    console.log(`${a} is greater than ${b}`);
} else if (a == b) {
    console.log(`${a} and ${b} are equal`);
} else {
    console.log(`${b} is greater than ${a}`);
}

switch (true) {                                         //switch statement
    case (a > b):
        console.log(`${a} is greater than ${b}`);
        break;
    case (a < b):
        console.log(`${b} is greater than ${a}`);
        break;
    default:
        console.log(`${a} and ${b} are equal`);
}

(a > b) ? console.log(`${a} is greater.`) : console.log(`${b} is greater.`); //ternary operator, condition ? do if true : do if false

// ===FUNCTIONS===

myFunction("argument"); //function invoking, function declaration always hoisted

function myFunction(parameter = "no argument given") {            //function declaration, with default parameter
    console.log(`${parameter} is my function's parameter`);
}

function random(number) {
    return Math.floor(Math.random() * number) + 1;               //useful, returns random int from 1 to number
}

let twoDecimalPlaces = function (x) {                             //function expression, named function expression are called using the variable name.
    return +x.toFixed(2);
}
twoDecimalPlaces(c);                                          //  anony funcs are often used as parameters for other functions

function funcWithRestParameters(...params) {                   //func with rest parameters, params gets put in an array
    console.log(params);
}

funcWithRestParameters("unknown", "number", "of", "params");

let multiply = (y, z) => y * z;         //arrow function, a short form of function expression

// ===ARRAYS===

const names = ["anne", "bonnie", "clyde"];
names[0]; //"anne", zero-based index
names.length; //returns number of items
names[names.length - 1]; //returns last item
names.push("dexter"); // adds element to end of array. Returns new length.
names.unshift("zion"); //adds element to begining. Returns new length.
names.pop(); //removes last element. Returns popped element.
names.shift(); //removes first element, and shifts other elements to lower index. Returns shifted out element.
names.toString(); //"anne,bonnie,clyde"
names.join(" and "); //also joins elements to string but you can specify separator. "anne and bonnie and clyde". "" - no space
names.reverse(); //['clyde', 'bonnie', 'anne']
names.includes("clyde"); //true, returns true if array contains specified value
const newNames = names.concat("delphy", "eunice");
const moreNames = ["fiona", "gerry"];
const evenMoreNames = newNames.concat(moreNames, "helena");
/*concat merges arrays and returns new array (doesn't change old ones). 
concat method can take arrays or strings as arguments. */
names.splice(1, 2, "betty", "carol", "deedee");
/*param1 - index number to add element to;
param2 - number of items to be removed;
extra params - elements to add.
splice method returns an array of removed elements. 
So, splice method can be used for both adding and removing elements*/
const namesSliced = names.slice(1, 3); // ['betty', 'carol']
/* slice method creates new array by slicing out a piece of old array.
slice selects elements from the start argument, and up to (BUT NOT INCLUDING) the end argument. 
If the second arg is ommited, rest of the array will be sliced*/
const andMoreNames = [...evenMoreNames, "iris"]; //spread operator, copies items from array, or puts items in array
const lastName = [..."johnson", "s", "hello"]; //['j', 'o', 'h', 'n', 's', 'o', 'n', 's', 'hello']

// ===LOOPS===

for (let i = 0; i <= 3; i++) {  //standard "for;;" loop, inline-declared var, visible only inside loop.
    console.log(i);
}

outer: for (let i = 0; i < 3; i++) {   //nested loop, with labels
    inner: for (let j = 0; j < 3; j++) {
        console.log(`${i},${j}`);
    }
}

//============
let i = 0;                      //while loop (this i is global)
while (i <= 3) {
    console.log(i);
    i++;
}

//============

i = 0;
do {                            // "do...while" loop, runs at least once
    console.log(i);
    i++;
} while (i <= 3);

//============

for (let i = 1; i <= 10; i++) { //break and continue
    if (i % 2 !== 0) continue   // if true skip to next iteration
    if (i > 7) break            // exit loop, even though the stop condition is not yet met
    console.log(`${i} is even`);
}

//============

/* for iterating over items in collections there are more specialized kinds of looping */

for (const name of namesSliced) {   //"for...of" construct 
    console.log(name);
}
namesSliced.forEach(name => console.log(name)); //forEach() method
namesSliced.forEach(myFunction); //call a function for each item
const upperNames = namesSliced.map(name => name.toUpperCase()); // map() - do something to each item and creates a new collection
const namesWithH = evenMoreNames.filter(name => name.includes("h")); //filter() - creates a new collection of items that return "true"
const hasT = names.some(name => name.includes("t")); //true, some() tests whether any item matches condition, returns boolean.
const hasE = names.every(name => name.includes("y")); //false, every() tests if all items match condition, returns boolean.
const startsWithB = names.find(name => name.includes("b")); //"betty", returns single item, first it finds
const indexStartsWithB = names.findIndex(name => name.includes("b")); //1, returns index of first found item.
const namesSorted = [...names].sort((first, next) => { //spread operator copies the array, otherwise sort() mutates original arr
    if (first > next) { //sort() takes two items at a time and compares them
        return 1;
    } else { //to compare numbers instead of strings, minus sign is used instead of greater than
        return -1;
    }
});
const sum = [1,2,3,4].reduce((total, current) => total + current, 10); //optional third arg is starting value, can be empty brackets.

// ===DOM MANIPULATION AND EVENTS

// 1.Selecting elements:
const myButton = document.querySelector("#my-button"); //returns first element that matches
const counterPara = document.querySelector("#click-counter");
const multipleButtons = document.querySelectorAll(".multi-btn"); //returns nodelist, if needed nodelist can be converted to array with [...]
const myParas = [...document.getElementsByTagName("p")]; //returns html collection of <p> elements, here converted to array
const playgroundSection = document.getElementById("playground");
const nestedDivs = [...document.getElementsByClassName("nested")];
const playgroundCards = document.getElementsByClassName("card card--playground");//for multi classes, only elements with ALL of the classNames are selected.
const keyboardEvents = document.querySelector(".key-event");
// relational selectors or traversing the DOM
myButton.parentNode //we can chain multiple properties to get i.e. grandparents etc
playgroundSection.children //returns htmlcol of children element nodes, no text nodes and white spaces, childNodes return everything
playgroundSection.firstElementChild //and lastElementChild;
playgroundSection.previousElementSibling //and nextElementSibling; 
// 2.Creating, manipulating and placing:
const createdPara = document.createElement("p"); //creates <p></p> in memory, does not add it to page
createdPara.textContent = "I'am a paragraph created by Javascript"; //creates text node and appends it to elem. Or use...
createdPara.innerHTML = "<span>I'm a paragraph created by <em>Javascript</em></span>"; //renders html inside element, should be used sparingly
//playgroundSection.appendChild(createdPara); //parent.appendChild(child) adds elem as last child. Or moves already placed node to end of parent.
playgroundSection.insertBefore(createdPara, playgroundSection.lastElementChild); //parent.insertBefore(newChild, reference child)
myParas.forEach(para => para.style.lineHeight = "2"); //add inline styles with style property
myButton.style.setProperty("color", "red");
myButton.style.getPropertyValue("color");
myButton.style.removeProperty("color");
createdPara.setAttribute("class", "card"); //or we can use set-, get- and removeAttribute...
myButton.setAttribute("style", "font-size: 1.2rem; background-color: var(--clr-green)"); //...which allow us to  add multiple rules
myButton.classList.add('new'); //also remove and toggle classes
// 3. Events
myButton.addEventListener('click', () => { //here we used anonymous function, we can also used named func
    counterPara.textContent = `You clicked me!`
});
multipleButtons.forEach((btn) => {      //attaching listeners to every element of an array or nodelist
    btn.addEventListener("click", () => {
        btn.textContent = `Hi!`
    });
});
myButton.addEventListener('click', (e) => { //we can pass an *event parameter* to the function we're calling
    e.target.style.backgroundColor = "var(--clr-orange)"; //here e.target is the elem which triggered the event
});

nestedDivs.forEach((div) => {
    div.addEventListener("click", (e) => {
        e.currentTarget.style.backgroundColor = "var(--clr-orange)"
        e.target.style.backgroundColor = "var(--clr-green)";
        //e.stopPropagation();  
    });
});
document.addEventListener("keydown", (e) => {
    keyboardEvents.textContent = `You pressed ${e.key}. The code is ${e.code}`
});

// ===OBJECTS===

const myObject = { //object literal, curly brackets with key:value pairs(properties and methods)
    name: {
        first: "Jane", //values can be anything, even other objects.
        last: "Doe",
    },
    age: 38,
    greeting: function () {
        console.log(`Hi! I'm ${this.name.first}.`) //dot notation. object's "this" reffers to the current object
    },
    sayAge() { //shorter way of writing function.
        console.log(`I'm ${this["age"]} years old.`) //bracket notation, must be quoted.
    },
    interests: ["coding", "hiking"],
    job: "unemployed", //hanging comma
}
let myNewKey = "height";
myObject[myNewKey] = "1.65m"; //we can use bracket notation to dinamically set names.

function constructNewObject(name) { //regular function, initialize empty object, define one property and one method, return object
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
}
const newObject = constructNewObject("a New Object");
newObject.introduceSelf();

function Person(name, age) { //constructor function, capital first by convention, named for the type of object they create
    this.name = name;
    this.age = age;
    this.introduceSelf = function () {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old!`);
    }
}
const janie = new Person("Janie", 38); //we call a constructor function with "new" keyword
janie.introduceSelf();

console.log("name" in myObject); //true, the "in" operator tests whether the property exists in object

for (let prop in myObject) { //the "for...in" loops over all keys in objects
    console.log(prop); //property names
    console.log(myObject[prop]); //property values
}





//playground

//01-interactive list

const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");

form.addEventListener("submit", addListItem);

function addListItem(e) {
    let itemText = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const btnDelete = document.createElement("button");
    listItem.textContent = itemText;
    btnDelete.textContent = "X";
    btnDelete.style.fontSize = "1rem";
    listItem.appendChild(btnDelete);
    list.appendChild(listItem);
    btnDelete.addEventListener("click", () => {
        listItem.remove();
    })
    input.focus();
    e.preventDefault();
}
