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


//in arrow functions , one line statements are considered as
//expression function

// now lets see what are the differences of calling functions

functionName.prototype.name = "peyman";

function functionName(z){
  console.log(this.name);
  let x = "there is no losing only learning";
  if(z!==undefined){
    return console.log(x+" "+z);
  }else
    return console.log(x);

}

//calling function
functionName();
//calling function and make prototype for the function
new functionName();
//apply method pass can bind this, and pass values in an array as arguments
functionName.apply(this,["hi"]);
//call method pass can bind this, and pass values in array as arguments
functionName.call(this,"hi");



//A function declaration tells the compiler about a function's name, return type,
// and parameters. A function definition provides the actual body of the function.





//what is set and get keyword?

/*
  The set syntax binds an object property to a function to be called when there is an attempt to set that property.
  example:
  let obj = {
    set setProp(name){
      this.log.push(name);
    },
    log:[]
  };

  obj.setProp = 'name';


  The get syntax binds an object property to a function that will be called when that property is looked up.
  example:

  let obj = {
    get getProp(){
      if(this.log.length!==0){
        return this.log[this.log.length-1];
      }
    },
    log:['a','b','c']
  };

  console.log(obj.getProp);


*/