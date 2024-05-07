const button = document.querySelector("button");

button.addEventListener("click" , updatename);

function updatename(){
    const name = prompt("Enter your name");
    button.textContent= `PLAYER 1: ${name}`;
}