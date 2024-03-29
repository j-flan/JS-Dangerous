

String.prototype.reverse = function(){
    return Array.from(this).reverse().join("");
}

function Phrase(content){
    this.content = content.toLowerCase();
    this.original = content;

    this.refine = function refine(){
        return(this.content.match(/[a-z]/gi) || []).join("");
    }
    this.palindrome = function(){
       return this.refine().reverse();

    }   
}

function compare(event){
    event.preventDefault();
    let word = new Phrase(document.getElementById("pal").value);
    let answer = document.getElementById("output");
    
    if (word.content){
        if(word.palindrome() === word.refine())
            answer.textContent = `"${word.original}" is a palindrome!`;
        else
            answer.textContent = `"${word.original}" is not a palindrome.`;
    }
    else
        answer.textContent = "Please enter some text";
}

function listener(){
    let btn = document.getElementById("btn");
    btn.addEventListener("click", compare, false);
}

window.addEventListener("load", listener, false);