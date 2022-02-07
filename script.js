console.log(`Based on "The Odin Project" curriculum`);

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
names.join(" and "); //also joins elements to string but you can specify separator. "anne and bonnie and clyde"
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
//namesSliced.forEach(myFunction); //call a function for each item
const upperNames = namesSliced.map(name => name.toUpperCase()); // map() - do something to each item and creates a new collection
const namesWithH = evenMoreNames.filter(name => name.includes("h")); //filter() - creates a new collection of items that return "true"



