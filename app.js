const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const cells = document.querySelectorAll('.grid-box');

//variables
var playGame = true;
var xNext = true;

//event listeners
start.addEventListener('click',function() {
    playGame =! playGame
    alert("Starting Game");
})
reset.addEventListener('click',function() {
    playGame =! playGame;
    alert("Restarting Game!");
})

for(const cell of cells){
    cell.addEventListener('click',function(){
        //checking the locaion of the cell clicked
        const classList = cell.classList;
        const location = classList[1];        

        //making sure it cant be both X and O
        if(classList[2] == 'X'|| classList[2] == 'O'){
            return;
        } 

        //making the choice X or O
        if(xNext){  
            //adding an x class to the cells chosen by x
            classList.add('X');   
            xNext = !xNext;
        }else{
            //adding an o class to the cells chosen by o
            classList.add('O');
            xNext = !xNext;
        }
    })
}

