(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


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
},{}]},{},[1]);
