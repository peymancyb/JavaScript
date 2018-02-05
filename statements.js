// The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.

let a = 10;

try{
    if(a==9){
        console.log(`a is : ${a}`);
    } else throw 'myException';
}catch(e){
    console.log(`error is : ${e}`)
}





// Non-standard
// This feature is non-standard and is not on a standards track. Do not use it on
// production sites facing the Web: it will not work for every user. There may also
// be large incompatibilities between implementations and the behavior may change
// in the future.
// This method is used to break up long running operations and run a callback
// function immediately after the browser has completed other operations such
// as events and display updates.

//
// syntax
// var immediateID = setImmediate(func);


var immediateID = setImmediate(()=>console.log("call back immediately"));
