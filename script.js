console.log("this is my simple cheatsheet");

// ===ARRAYS===

const names = ["anne", "bonnie", "clyde"]; 
names[0]; //"anne", zero-based index
names.length; //returns number of items
names[names.length-1]; //returns last item
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
names.splice(1,2, "betty", "carol", "deedee"); 
/*param1 - index number to add element to;
param2 - number of items to be removed;
extra params - elements to add.
splice method returns an array of removed elements. 
So, splice method can be used for both adding and removing elements*/
const namesSliced = names.slice(1,3);
/* slice method creates new array by slicing out a piece of old array.
slice selects elements from the start argument, and up to (BUT NOT INCLUDING) the end argument. 
If the second arg is ommited, rest of the array will be sliced*/

// LOOPS

