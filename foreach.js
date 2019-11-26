/*let a = ["ant","bat","cat",42];
a.forEach(function(el){
    console.log(el);
});*/

//let str = "To be or not to be, that is the question:";
//Array.from(str).forEach((arr) => {console.log(arr)});

let num = [98,8,34,17];

//sort traverses the array, and returns a boolean value
//for every index and index+1, (swap on a false)
//without the comparison, it sorts alphabetically instead
num.sort((a,b) =>  a - b);
num.forEach(a => console.log(a));

//single operations need no parenthesis or brackets
console.log("Squared:");
let a = num.map( n => n * n);
a.forEach(b => console.log(b));

console.log("state-url conversion:\nBefore:");
let states = ["Michigan","Colorado","North Carolina","South Carolina"];
let states2 = states;

//removes spaces at each index in the states array
//and replaces them with dashes
console.log(states,"\nAfter:");
let urlSafe = (index) =>{
    return index.toLowerCase().split(/\s+/).join("-");
}
//map makes every index in the array do the same function
//this uses no loop, as the map function handles this
let convertStates = (state) => {
    return state.map(i => urlSafe(i)); //i is the iterator for state array
}
//uses the new mapped array, to map the indexes again
//and adds the url address to each index
let makeUrl = (arr) =>{
    let a = convertStates(arr);
    return a.map(b => `http://example.com/${b}`);
}
//uses foreach to output each index
let outPut = (arr) =>{
    arr = makeUrl(arr);
    arr.forEach(s => console.log(s));
}
outPut(states);

console.log("Carolinas:");

//filter returns an array exclusive to the filter parameter
let carolinas = (states) =>{
    return states.filter(state => state.split(/\s+/).length === 2);
}
//the foreach solution to the function above (not as cool)
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

//sum the array using reduce (foreach n in numbers)
//(for (let total = 0...))
console.log(numbers.reduce((total, n) => {return total += n;}, 0));

//create new object (associative array) of state(key) and length of state(val)
let lengths = (state) =>{
    return state.reduce((length,state) => {
                        length[state] = state.length;
                        return length;},{});
}
console.log(lengths(states2));

