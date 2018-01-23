//differences between function expression and function decleration

//function expression is a function defined whithin an expression

var myFunction = function(){
  const text = "function expression";
  return console.log(text);
}

//function decleration is a function with the specified parameters

factorial(10,9);

function factorial(width,height){
  return console.log(width*height);
};


//the difference is that in javascrtipt
//function declerations are hoisted
//but
//function expression are not hoisted
