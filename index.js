let count = 0;

// document.getElementById("count").innerText = count;
let ct=document.getElementById("count");
function increment(){
    console.log("CLICKED");
    count+=1;
    ct.innerText = count
}
let welcome = document.getElementById("welcome");
let na = "UserX";
welcome.innerText = "Welcome to the page "+ na;

let saveeEl = document.getElementById("save-el");
function save(){
    console.log(count);
    saveeEl.innerText += count + " - ";

    ct.innerText=0;
    count=0;
}
