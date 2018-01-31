/*
closure is a combination of lexical environment and a function within function declared.
*/

 // This is an example of lexical scoping
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

/*
The word "lexical" refers to the fact that lexical scoping uses the location
where a variable is declared within the source code to determine where that
variable is available. Nested functions have access to variables declared in
their outer scope.
*/
