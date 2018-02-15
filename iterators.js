function makeIterator(array) {
    var nextIndex = 0;

    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}


var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true


function makeIterate(arr){
  var indexCurrent = 0;
  return{
    next: ()=>{
      return indexCurrent<arr.length?{value:arr[indexCurrent++],done:false}:{done:true}
    }
  }
}

let iter = makeIterate([1,2,3]);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().done);




let arrTwo = [[1,'one'],[2,'two'],[3,'three'],[4,'four']];

for(let i in arrTwo){
  console.log(i,arrTwo[i]);
}


//
// function callYield(index){
//   while(index<10){
//      console.log(index);
//      index++;
//   }
// }

// let iterr = callYield(1);
// console.log(callYield(1));
// console.log(iterr.next().value);
// console.log(iterr.next().value);

//
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]
