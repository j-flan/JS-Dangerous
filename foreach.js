/*let a = ["ant","bat","cat",42];
a.forEach(function(el){
    console.log(el);
});*/

//let str = "To be or not to be, that is the question:";
//Array.from(str).forEach((arr) => {console.log(arr)});

/*let num = [98,8,34,17];
num.sort((a,b) =>  a - b);
num.forEach(a => console.log(a));

console.log("Squared:");
let a = num.map( n => n * n);
a.forEach(b => console.log(b));*/

console.log("state-url conversion:\nBefore:");
let states = ["Michigan","Colorado","West Virginia","South Carolina"];

console.log(states,"\nAfter:");
let urlSafe = (index) =>{
    return index.toLowerCase().split(/\s+/).join("-");
}
let convertStates = (state) => {
    return state.map(i => urlSafe(i));
}
let makeUrl = (arr) =>{
    let a = convertStates(arr);
    return a.map(b => `http://example.com/${b}`);
}
let outPut = (arr) =>{
    arr = makeUrl(arr);
    arr.forEach(s => console.log(s));
}
outPut(states);