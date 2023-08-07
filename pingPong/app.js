const button1 = document.querySelector("#bt1");
const button2 = document.querySelector("#bt2");
const resetGame = document.querySelector("#bt3")
const display1 = document.querySelector("#ply1");
const display2 = document.querySelector("#ply2");
const scoreSelect = document.querySelector("#selectScore");

let score1 = 0;
let score2 = 0;
let win = 3;
let gameOver = false;

button1.addEventListener("click", function(){
    if(!gameOver){
        score1 += 1;
        if(score1 === win){
            gameOver = true;
            display1.classList.add("winner");
            display2.classList.add("loser");
            button1.disabled = true;
            button2.disabled = true;
        }
        display1.textContent = score1;
    }
    
})

button2.addEventListener("click", function(){
    if(!gameOver){
        score2 += 1;
        if(score2 === win){
            gameOver = true;
            display1.classList.add("loser");
            display2.classList.add("winner");
            button1.disabled = true;
            button2.disabled = true;
        }
        display2.textContent = score2;
    }
    
})


resetGame.addEventListener("click", reset)

scoreSelect.addEventListener("change", function(){
     win = parseInt(this.value)
      reset();

})

function reset(){
    gameOver = false;
    score1 = 0;
    score2 = 0;
    display1.textContent = 0;
    display2.textContent = 0;
    display1.classList.remove("winner", "loser");
    display2.classList.remove("winner", "loser");
    button1.disabled = false;
    button2.disabled = false;
}