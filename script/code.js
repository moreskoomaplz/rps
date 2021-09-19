
let userPlay = prompt("rock, paper or scissors?"); //prompt user for rock, paper or scissors
    console.log("you played " + userPlay);
//check if valid input
let computerPlay1, computerPlay2, computerPlay3; //define thee options for computer
function rng(){
    computerOption = Math.floor(Math.random()*3);//make random number generator between 0 and 2
    if (computerOption < 1){
        computerPlay = "rock";//if 1/3 value, return rock
        console.log("computer plays " + computerPlay);
        if (computerPlay === userPlay){
            console.log("It's a draw!");
            }
        else if (computerPlay === "rock" && userPlay === "scissors"){ //rock function
            console.log("you lose");
                }
                else{
                    console.log("you win");
                }
    }
    else if (computerOption < 2){//if 2/3 value, return paper
        computerPlay = "paper";
        console.log("computer plays " + computerPlay);
        if (computerPlay === userPlay){
            console.log("It's a draw!");
            }
        else if (computerPlay === "paper" && userPlay === "rock"){ //rock function
            console.log("you lose");
                }
        else{
                    console.log("you win");
                }
    }
    else {
        computerPlay = "scissors";//if 3/3 value, return scissor
        console.log("computer plays " + computerPlay);
        if (computerPlay === userPlay){
            console.log("It's a draw!");
            }
        else if (computerPlay === "scissors" && userPlay === "rock"){ //rock function
            console.log("you win");
                }
else{
                    console.log("you lose");
                }
    }
    
    
    
    

}






//rock function
//if computer paper lose, else win
//paper function

//scissors function
//if computer rock lose, else win




function computerPlay(yourChoice){
    let option1, option2, option3;

}