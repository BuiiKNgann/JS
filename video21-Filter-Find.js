//let arr = [1,2,3,4,5,6,7,8,9,10]
 let arr = [
{name: 'Ngan', age: 25},
{name: 'A', age: 20},
{name: 'B', age: 25},
{name: 'C', age: 29},
{name: 'D', age: 25},
]
// filter, find

let filter= arr.filter((item,index) => {
console.log('item: ', item, 'index: ',index);
return item && item.age === 25;
});
console.log(filter);  

 

// filter()
  let numbers = [1,2,3,4,5];
 let evenNumber = numbers.filter((number) => number %2 ===0);
 console.log(evenNumber);
 
 // find()

 let numbers1 = [1,2,3,4,5,6];
 let foundNumber = numbers1.find((number1) => number1 > 3);
 console.log(foundNumber);