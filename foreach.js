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
let states = ["Michigan","Colorado","North Carolina","South Carolina"];
let states2 = states;

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

console.log("Carolinas:");

let carolinas = (states) =>{
    return states.filter(state => state.split(/\s+/).length === 2);
}
let include = (states) =>{
    let arr = [];
    states.forEach((s) => {
        if (s.includes('Carolina'))
            arr.push(s);
    });
    return arr;
}
console.log(carolinas(states2));
console.log(include(states2));

let numbers = [1,3,55,30,25,87,55,41];
console.log(`${numbers}\nSum:`);

console.log(numbers.reduce((total, n) => {return total += n;}, 0));

let lengths = (state) =>{
    return state.reduce((length,state) => {
                        length[state] = state.length;
                        return length;},{});
}
console.log(lengths(states2));