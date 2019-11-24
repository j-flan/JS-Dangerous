function today(){
    const dayOfWeek = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];          
    let now = new Date();
    day = dayOfWeek[now.getDay()];
    return day;
}
function greeting(){
    let day = today();
    return document.querySelectorAll("h1")[0].textContent =`What a glorious ${day}!`;
}