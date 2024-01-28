
// sắp xếp một mảng tăng dần
const numbers = [3,1,5,7,4];
numbers.sort((a,b) => a-b);
console.log(numbers);

// sắp xếp một mảng giảm dần

const num1 = [3,1,5,7,4];
num1.sort((a,b) => b-a);
console.log(num1);

// sắp xếp mọt mảng các chuỗi theo thứ tự tăng dần
const fruits = ["apple", "banana", "orange", "grape"];
fruits.sort();
console.log(fruits);

// sắp xếp một mảng các chuỗi theo thứ tự giảm dần
const fruits1 = ["apple", "banana", "orange", "grape"];
fruits1.sort((a,b) => b.localeCompare(a));
console.log(fruits1);

// sắp xếp một mảng các đối tượng dựa trên một thuộc tính cụ thể

const products = [
    { name: "Keyboard", price: 20 },
    { name: "Mouse", price: 10 },
    { name: "Monitor", price: 200 },
  ];
  products.sort((a, b) => a.price - b.price);
  console.log(products);
  // [
  //   { name: "Mouse", price: 10 },
  //   { name: "Keyboard", price: 20 },
  //   { name: "Monitor", price: 200 }
  // ]