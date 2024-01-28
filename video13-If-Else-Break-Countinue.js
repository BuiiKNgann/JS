//let arrTop4 = ['Live', 'Chelsea', 'Mu', 'Man City']

//let i =0;


/*
while(i<arrTop4.length) {
    // if else 
    if(arrTop4[i].length===2) {
        console.log('Top club: ', i +1, arrTop4[i] );

    } else if (arrTop4[i].length===4) {
        console.log('Top club: ', i +1, arrTop4[i] );
    } else {

    }
    
    i++
}
 */ 
 

/*
while(i<arrTop4.length) {
    i++;
if (arrTop4[i] === 'Chelsea'){

    console.log('found it: ', arrTop4[i])
   break ; 
}
console.log('>>>check i: ', i)
 

}

 */


// break
/*
for (var i = 0; i<10;i++){
    if(i===5) {
        break;
       
    }
    console.log(i)
}
*/
// continue 

for(var i = 1; i < 10; i++){
    if(i==2 || i==5 || i==7){
        continue;
    }
console.log(i);
}