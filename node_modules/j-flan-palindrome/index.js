module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}
// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.letters = function letters(){
       /* const reg = /[a-z]/i;
        let s = Array.from(this.content);
        let a = [];
        s.forEach(function(n){
            if (n.match(reg)){
                a.push(n);
            }
        });
        return a.join("");*/
        //return s.filter(n => n.match(/[a-z]/gi)).join("");
        return(this.content.match(/[a-z]/gi) || []).join("");
    }

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}