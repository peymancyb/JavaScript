// varibales in js are
// boolean
// strings
// numbers

//note: All numbers in JavaScript are represented as floating-point values

//global variable
var saman = 'saman';
console.log(saman);

function funcName(){
  console.log(saman);
  //local variable
  var peyman = 'peyman';
  console.log(peyman);
}
funcName();

// Global Variables − A global variable has global scope which means it can be
// defined anywhere in your JavaScript code.

//=======================================

// Local Variables − A local variable will be visible only within a function
// where it is defined. Function parameters are always local to that function.



/*
there are 6 data types that are primitive in JS;
-numbers
-strings
-boolean
-null
-undefined
-Symbol
Important note: Global variables are not created automatically in "Strict Mode".
Note − Use the var keyword only for declaration or initialization, once for
the life of any variable name in a document. You should not re-declare same
variable twice.

JavaScript is untyped language. This means that a JavaScript variable can hold
a value of any data type. Unlike many other languages, you don't have to tell
JavaScript during variable declaration what type of value the variable will
hold. The value type of a variable can change during the execution of a program
and JavaScript takes care of it automatically.

*/

//===========


//References in JavaScript
/*
 - Javascript is always pass by value, but when a variable refers to an object
 (including arrays), the "value" is a reference to the object.

 -Changing the value of a variable never changes the underlying primitive or
 object, it just points the variable to a new primitive or object.

 -However, changing a property of an object referenced by a variable does change
  the underlying object.

  * In JavaScript, primitive types such as integers and strings are passed by
  value whereas objects are passed by reference.

  */


    var a = ["1", "2", {foo:"bar"}];
    var b = a[1]; // b is now "2";
    var c = a[2]; // c now references {foo:"bar"}
    a[1] = "4";   // a is now ["1", "4", {foo:"bar"}]; b still has the value
                  // it had at the time of assignment
    a[2] = "5";   // a is now ["1", "4", "5"]; c still has the value
                  // it had at the time of assignment, i.e. a reference to
                  // the object {foo:"bar"}
    console.log(b, c.foo); // "2" "bar"



    function f(a,b,c) {
    // Argument a is re-assigned to a new value.
    // The object or primitive referenced by the original a is unchanged.
    a = 3;
    // Calling b.push changes its properties - it adds
    // a new property b[b.length] with the value "foo".
    // So the object referenced by b has been changed.
    b.push("foo");
    // The "first" property of argument c has been changed.
    // So the object referenced by c has been changed (unless c is a primitive)
    c.first = false;
}

var x = 4;
var y = ["eeny", "miny", "mo"];
var z = {first: true};
f(x,y,z);
console.log(x, y, z.first); // 4, ["eeny", "miny", "mo", "foo"], false




/*


Boolean type
Numeric types
String types
Array type
Object types
Global scope
Local scope


JS variables divides into to 2 types:
primitive types:
Boolean
numbers
strings
null
undefined
Symbols

**Some types, such as string, allow method calls.

complex types:
array
object



scopes:
Local
global


**primitive does not have properties.
*/





//reference example
function someThing(a,b,c){
  a=11;
  b.push("mina");
  k.first= true;
}

var h=10;
var j=["peyman","saman"];
var k={first:false};
someThing(h,j,k);

console.log(h,j,k);




/*
let allows you to declare variables that are limited in scope to the block,
statement, or expression on which it is used. This is unlike the var keyword,
which defines a variable globally, or locally to an entire function regardless
of block scope.
const is read only , it means we can only assign it once.

The difference is scoping. var is scoped to the nearest function block and let
is scoped to the nearest enclosing block, which can be smaller than a
function block. Both are global if outside any block.

Also, variables declared with let are not accessible before they are
declared in their enclosing block. As seen in the demo, this will throw a
ReferenceError exception.



differences of undefined error and reference error?

undefined: In JavaScript, an undeclared variable is assigned the value undefined
at execution and is also of type undefined.

ReferenceError: In JavaScript, a ReferenceError is thrown when trying to access
a previously undeclared variable.



what is hoisting?
Hoisting is the JavaScript interpreter's action of moving all variable
and function declarations to the top of the current scope. However, only
the actual declarations are hoisted. Any assignments are left where they are.



Hoisting is JavaScript's default behavior of moving all declarations to
the top of the current scope (to the top of the current script or the current function).
*/
