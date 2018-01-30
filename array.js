// The JavaScript Array object is a global object that is used in
// the construction of arrays; which are high-level, list-like objects.


//creating array

var array = ['name','family'];
console.log(`array length: ${array.length}`);

//looping throgh an array
array.forEach((item,index,array)=>console.log(`item: ${item} index: ${index} array:${array}`));
//basically forEach takes a function which has item,index,array arguments
//arrat is whole array

//push() method inserts item to the array
array.push("peyman","ghazvini");
console.log(array);

//pop() removes item from end of the array
//removing last element
array.pop();
console.log(array);

//shift() removes item from the front of the array
array.shift();
console.log(array);


//unshift() add item to the front of the array
array.unshift("Hi");
console.log(array);

//indexOf() find the index of an item
console.log(array.indexOf("peyman"));

//slice() making a copy of an array
var secondArray = array.slice();
console.log(`secondArray: ${secondArray}`);
//reverse() reverse the array , first element becomes the last element
secondArray.reverse();
console.log(secondArray);

//copyWithin(): arr.copyWithin(target, start, end)


//The concat() method is used to merge two or more arrays. This method does not
//change the existing arrays, but instead returns a new array.

secondArray.push("bahman");
let con = array.concat(secondArray);
console.log(con);

//The splice() method changes the contents of an array by removing existing
//elements and/or adding new elements.

//The fill() method fills all the elements of an array from a start index to
//an end index with a static value.
// syntax : arr.fill(value[, start[, end]])
