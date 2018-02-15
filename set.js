// setImmediate() vs setTimeout()
// setImmediate and setTimeout() are similar, but behave in different ways depending on when they are called.
//
// setImmediate() is designed to execute a script once the current poll phase completes.
// setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.
// The order in which the timers are executed will vary depending on the context
// in which they are called. If both are called from within the main module,
// then timing will be bound by the performance of the process
// (which can be impacted by other applications running on the machine).

var fs = require('fs');

setTimeout(()=>{
  console.log("time out!");
},0);

setImmediate(()=>{
  console.log("set immediate!");
});

// However, if you move the two calls within an I/O cycle,
// the immediate callback is always executed first:

fs.readFile(__filename,()=>{
  setTimeout(()=>{
    console.log('timeout!');
  },0);
  setImmediate(()=>{
    console.log('immediate');
  });
});

//
// process.nextTick()
// Understanding process.nextTick()
// You may have noticed that process.nextTick() was not displayed in the diagram,
// even though it's a part of the asynchronous API. This is because process.nextTick()
//  is not technically part of the event loop. Instead, the nextTickQueue will be
//  processed after the current operation completes, regardless of the current
//  phase of the event loop.
//
// Looking back at our diagram, any time you call process.nextTick() in a given phase,
//  all callbacks passed to process.nextTick() will be resolved before
//  the event loop continues. This can create some bad situations because it
//   allows you to "starve" your I/O by making recursive process.nextTick() calls,
//   which prevents the event loop from reaching the poll phase.


//
// process.nextTick() vs setImmediate()
// We have two calls that are similar as far as users are concerned, but their names are confusing.
//
// process.nextTick() fires immediately on the same phase
// setImmediate() fires on the following iteration or 'tick' of the event loop

// Why use process.nextTick()?
// There are two main reasons:
//
// Allow users to handle errors, cleanup any then unneeded resources, or
// perhaps try the request again before the event loop continues.
//
// At times it's necessary to allow a callback to run after the call stack
// has unwound but before the event loop continues.





// The Set object lets you store unique values of any type,
//  whether primitive values or object references.

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false













//
// The Symbol() function returns a value of type symbol,
// has static properties that expose several members of built-in objects,
//  has static methods that expose the global symbol registry,
//  and resembles a built-in object class
//  but is incomplete as a constructor because it does not support
//  the syntax "new Symbol()".
//
// Every symbol value returned from Symbol() is unique.
// A symbol value may be used as an identifier for object properties;
// this is the data type's only purpose.  Some further explanation about
// purpose and usage can be found in the glossary entry for Symbol.
//
// The data type symbol is a primitive data type.
//
//
//




const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false



//
// Except for null and undefined, all primitive values have object equivalents
// that wrap around the primitive values:
//
// String for the string primitive.
// Number for the number primitive.
// Boolean for the Boolean primitive.
// Symbol for the Symbol primitive.
// The wrapper's valueOf() method returns the primitive value.
//
//
