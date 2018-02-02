// The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.

let a = 10;

try{
    if(a==9){
        console.log(`a is : ${a}`);
    } else throw 'myException';
}catch(e){
    console.log(`error is : ${e}`)
}