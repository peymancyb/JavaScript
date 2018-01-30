//Template literals
/*
Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.
They were called "template strings" in prior editions of the ES2015 specification.
*/



//in this example via template literals we can write multiple lines without
//using \n or +
var a = `line 1
line 2`;
var b = "line 1 \n line 2";
console.log(a);
console.log(b);

// `` this is called grave accent

/*
                        ***
    To escape a back-tick in a template literal,
    put a backslash \ before the back-tick.
              `\`` === '`' // --> true
                        ***


    In addition, the String.raw() method exists to create
    raw strings just like the default template function and string
    concatenation would create.


    source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

//difference of using String.raw
var str = `Hi\n${2+3}!`;
console.log(str.length);

var str2 = String.raw`Hi\n${2+3}!`;
console.log(str2.length);
