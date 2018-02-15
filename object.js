//reference:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({}, object1);

console.log(object2.c);

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);



const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15





//map
const mapArray = [1,2,3];
const testOne = mapArray.map((current,index)=>current*index);
console.log(`test 1: ${testOne}`);

//filter
const filterArray = [1,2,3];
const testTwo = filterArray.filter((arg)=>arg<2);
console.log(`test 2: ${testTwo}`);

//reduce
const reduceArray = [10,2,3,4];
const testFour = reduceArray.reduce((_,current)=>_+current );
console.log(`test 3: ${testFour}`);
