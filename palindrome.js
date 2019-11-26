

function reverse(word){
    return Array.from(word).reverse().join("");
}

function Phrase(content){
    this.content = content.toLowerCase();

    this.louder = function(){
        let s = this.content.toUpperCase();
        return s;
    }
    this.palindrome = function palindrome(){
        let p = reverse(this.content);
        return p;
    }   
}

function compare(){

    let word = new Phrase(document.getElementById("pal").value);
    let answer = document.getElementById("output");
    
    if (word.content){
        let s = word.palindrome();
        if(s === word.content)
            answer.textContent = `"${word.louder()}" is a palindrome!`;
        else
            answer.textContent = `"${word.content}" is not a palindrome.`;
    }
    else
        answer.textContent = "Please enter some text";
}

function listener(){
    let btn = document.getElementById("btn");
    btn.addEventListener("click", compare, false);
}

window.addEventListener("load", listener, false);