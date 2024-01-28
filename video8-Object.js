  console.log("Hello HTML");

// key: value (lấy giá trị thông qua key)
let obj = { name: 'ngan',
 address: 'HCM',
email: '',
gender: '', 
  a: function() {
    console.log('hello ')
    return ''
} 
};   
let b = 'name';
//obj[b] = "Ngan Bui"

obj.name = 'Ali'
console.log('what  is your name ? ', `my name's : `, obj['name'], obj)
console.log('where are you from ? ', `I'm from: `, obj['address'])
 
//console.log('call function:', obj.a());
 

