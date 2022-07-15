//From HTML to JavaS
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const cells = document.querySelectorAll('.grid-box');

//variables
var playGame = false; //need to push start
    console.log(playGame);
var xNext = true;

//functions
function playing(){
    while(playGame == true){

    const TopL = cells[0].classList[1];
    const TopM = cells[1].classList[1];
    const TopR = cells[2].classList[1];
    const MiddleL = cells[3].classList[1];
    const MiddleM = cells[4].classList[1];
    const MiddleR = cells[5].classList[1];
    const BottomL = cells[6].classList[1];
    const BottomM = cells[7].classList[1];
    const BottomR = cells[8].classList[1];

    if(TopL && TopL === TopM && TopL === TopR){
        whoWon(TopL);
    }else if(MiddleL &&  MiddleL === MiddleM && MiddleL === MiddleR){
        whoWon(MiddleL); 
    }else if(BottomL && BottomL === BottomM && BottomL === BottomR){
        whoWon(BottomL); 
    }else if(TopL && TopL === MiddleL && TopL === BottomR){
        whoWon(TopL); 
    }else if(TopM && TopM === MiddleM && TopM === BottomM){
        whoWon(TopM); 
    }else if(TopR && TopR === MiddleR && TopR === BottomR){
        whoWon(TopR); 
    }else if(TopL && TopL === MiddleM && TopL === BottomR){
        whoWon(TopL); 
    }else if(TopR && TopR === MiddleM && TopR === BottomL){
        whoWon(TopR); 
    }else if(TopL&&TopM&&TopR&&MiddleL&&MiddleM&&MiddleR
        &&BottomL&&BottomM&&BottomR){
        //when there is a tie      
        alert("There was a tie!")
        playGame = false;   
    }
    else{
        xNext = !xNext;
    }
    }
}
function whoWon(winner){
    if(winner == 'X'){
        alert('X Has Won!');
        playGame = false; 
    }else{
        alert('O has won'); 
        playGame = false;
    }
}
function resetGame(){
    if (playGame = false){
       xNext = true;
       for (const cell of cells){
            cell.classList.remove([1]);
            cell.classList.remove([1]);
        } 
    }
}
//event listeners
start.addEventListener('click',function() {
    playGame =! playGame
    alert("Starting Game");
    playing();
})
reset.addEventListener('click',function() {
    playGame =! playGame;
    alert("Restarting Game!");
    resetGame();
})
while(playGame = true){
for(const cell of cells){
    cell.addEventListener('click',function(){
        //checking the locaion of the cell clicked
        const classList = cell.classList;  

        //making sure it cant be both X and O
        if(classList[1] == 'X'|| classList[1] == 'O'){
            return;
        } 
             //making the choice X or O
            if(xNext){  
                //adding an x class to the cells chosen by x
                classList.add('X');   
                playing();
                xNext = !xNext;
            }else{
                //adding an o class to the cells chosen by o
                classList.add('O');
                playing();
                xNext = !xNext;
         }
    })
}
}