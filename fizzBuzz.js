const a = process.argv[2];
const a1 = Number(a);
let output=''
if(a1 === 0){
    console.log("4")
}
else if(a1%15 === 0){
    output += 'JavaScript'
    console.log("JavaScript")
}
else if(a1%5 === 0){
    output += 'Script'
    console.log("Script")
}
else if(a1%3 === 0){
    output += 'Java'
    console.log("Java")
}
else{
    output += a1
    console.log(a1)
}

