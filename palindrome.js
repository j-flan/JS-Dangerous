function palindrome(){
    let word = document.getElementById("pal").value;
    let s = word.split("");
    s.reverse();
    s = s.join("");
    if(s === word){
        document.getElementById("output").textContent = "Palindrome found!";
    }
    else{
        document.getElementById("output").textContent = "not a palindrome";
    }
}

function listener(){
    let btn = document.getElementById("btn");
    btn.addEventListener("click", palindrome, false);
}

window.addEventListener("load", listener, false);