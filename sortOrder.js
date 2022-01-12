const firstValue = process.argv[2];
let a=firstValue.toLowerCase()
//console.log(a)
const secondValue = process.argv[3];
let b=secondValue.toLowerCase()
//console.log(secondValue)
if(a>b){
    console.log("1")
}
else if(a<b){
    console.log("-1")
}
else{
    console.log("0")
}
