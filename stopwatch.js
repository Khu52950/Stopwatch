let timer = null;
let seconds = 0;

let start = document.getElementById("btn-strt");
start.addEventListener('click', () => {
        timer = setInterval(() => {
        seconds++;
        console.log(seconds);      
    }, 1000);
});

let stopp = document.getElementById("btn-stop");
stopp.addEventListener('click',() => {
    
        clearInterval(timer);
        timer = null;
        console.log("Timer Stopped");

});

