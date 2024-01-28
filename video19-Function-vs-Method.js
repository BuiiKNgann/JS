let sum = (a,b) => {
return a +b;

}
console.log('check sum: 9 + 6 = ', sum(9, 6))
 

let obj = {
    name: 'ngan',
    address: 'TPHCM',
    getname: function() {
        return this.name
    }
}
console.log(obj.name, obj.address);