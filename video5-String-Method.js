 
 // đếm số lượng
 
 let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

// slice: Slice là một phần của một chuỗi gốc được trích xuất.
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7,13)

let part1= text1.slice(-12)

let part2= text1.slice(-12,-6)
console.log(part1)

// substring: Substring là một chuỗi con được lấy từ một chuỗi gốc.

let sub = "Apple, Banana, Kiwi";
let part3 = sub.substring(7,13)
let part4 = sub.substr(-4);

console.log(part4)

// Replace: Thay thế 1 nội dung nào đó trong chuỗi bằng nội dung mới
let rep = "Please visit Microsoft";
let newrep = rep.replace("Microsoft", "W3school");
console.log(newrep)

//phương thức chỉ thay thế kết quả phù hợp đầu tiên:replace()
let rep2 = "Please visit Microsoft and Microsoft!";
let newrep2 = rep2.replace("Microsoft", "W3Schools");
console.log(newrep2)

// phương pháp này phân biệt chữ hoa chữ thường. Viết MICROSOFT (với chữ hoa) sẽ không hoạt động:replace()
/*
let rep3 = "Please visit Microsoft";
let newrep3 = rep3.replace(MICROSORT/i, "W3S")
console.log(rep3)
*/

// Thay thế tất cả bằng cách sử dụng regex
// Biểu thức chính quy được viết mà không có dấu ngoặc kép.
/*let newrep4 = rep2.replace(/Microsoft/g, 'w3s')
console.log(newrep4) */ 

// replaceAll
let repAll = "I love cats. Cats are very easy to love. Cats are very popular."
let newrepAll = repAll.replaceAll("cats", "dogs")
let newrepAll1 = repAll.replaceAll("Cats", "Dogs")
console.log(newrepAll)
console.log(newrepAll1)

// toLowerCase: chuyển toàn bộ kí tự về chữ thường
let lower = "HELLO JS"
let textLower = lower.toLowerCase();
console.log(textLower)

// toUpperCase: chuyển toàn bộ kí tự về chữ Hoa
let upper = "hello js"
let textUpper = upper.toUpperCase();
console.log(textUpper)

// concat(): nối chuỗi lại 
let textcc = "Hello";
let textcc2 = "world";
let textcc3 = textcc.concat(" ",textcc2)
console.log(textcc3)

// trim: loại bỏ khoảng trắng đầu, cuối 

let tr = "  Hello World  "
 let tr2 = tr.trim();
console.log(tr2.length)

//trimStart(): loại bỏ khoảng trắng đầu
let trs = "     Hello World    "
let trs1 = trs.trimStart();
console.log(trs1.length)

// trimEnd(): Loại bỏ khoảng trắng cuối
let trE = "     Hello World    "
let trE1 = trE.trimEnd();
console.log(trE1)

//padStart add thêm một số ký tự phía trước string ban đầu với một độ dàixác định.
 let ps = "5";
 let textps= ps.padStart( 4, "000")
 console.log(textps)

 //padEnd add thêm một số ký tự phía sau string ban đầu với một độ dài xác định.

 let pe = "5"
 let textpe = pe.padEnd(4,"X")
 console.log(textpe)
 // phương pháp này chỉ dành cho chuỗi 

 let numb = 5;
let textnumb = numb.toString();
let padded = textnumb.padStart(4,"0");
console.log(padded)

// charAt () : trích 1 ký tự trong chuỗi
let char = "Hello world";
let textChar = char.charAt(0)
console.log(textChar)


// charCodeAt(): phương thức trả về UTF-16 của ký tự tại một chỉ mục được chỉ định trong một chuỗi
let charCode = "Hello"
let textCharCode = charCode.charCodeAt(0)
console.log(textCharCode);
 
// split(): Phương thức split() trong JavaScript được sử dụng để chia một chuỗi thành một mảng con các phần tử dựa trên một ký tự hoặc biểu thức chính quy cụ thể

let chuoi = "Học lập trình";
let mang = chuoi.split(" ")
console.log(mang);

// ví dụ 2:

let chuoi1= "1,2,3,4,5";
let mang1= chuoi1.split(",")
console.log(mang1);

// indexOf: trả về chỉ mục của chuỗi trùng khớp được tìm thấy đầu tiên

let index = "Please locate where 'locate' occurs!";
let textindex = index.indexOf("locate")
console.log(textindex);

// lastIndexOf(): trả về chỉ mục của chuỗi trùng khớp được tìm thấy sau cùng
let index1 = "Please locate where 'locate' occurs!";
let textindex1 = index1.lastIndexOf("locate")
console.log(textindex1);


//Cả hai phương pháp đều chấp nhận tham số thứ hai làm vị trí bắt đầu cho tìm kiếm:

let index3 = "Please locate where 'locate' occurs!";
let textindex3 = index3.indexOf("locate", 6)
console.log(textindex3);

// search():  được sử dụng để tìm kiếm một chuỗi con trong một chuỗi chính và trả về vị trí đầu tiên của chuỗi con được tìm thấy.
// Phương thức search() có thể sử dụng biểu thức chính quy để tìm kiếm chuỗi con.
let sea = "Please locate where 'locate' occurs!";
let textSearch = sea.search("where");
console.log(textSearch)

//Phương thức search() có thể sử dụng biểu thức chính quy để tìm kiếm chuỗi con.

let sea1 = "Please locate where 'locate' occurs!";
let textSearch1 = sea1.search(/where/);
console.log(textSearch1)

// includes(): phương thức trả về true nếu một chuỗi chứa 1 giá trị được chỉ đinh
let inncl = "Hello world, welcome to the universe.";
let textIncl = inncl.includes("world");
console.log(textIncl);