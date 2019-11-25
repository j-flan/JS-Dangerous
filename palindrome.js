function reverse(word){
    return word.split("").reverse().join("");
}

function palindrome(){

    let word = document.getElementById("pal").value.toLowerCase();
    let answer = document.getElementById("output");
    
    if (word){
        let s = reverse(word);      
        if(s === word)
            answer.textContent = `${word} is a palindrome!`;
        else
            answer.textContent = `${word} is not a palindrome.`;
    }
    else
        answer.textContent = "Please enter some text";
}

function listener(){
    let btn = document.getElementById("btn");
    btn.addEventListener("click", palindrome, false);
}

window.addEventListener("load", listener, false);