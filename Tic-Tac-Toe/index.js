const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//lets create a function to initialize a game

function initGame() {
    currentPlayer = "X"
    gameGrid=["","","","","","","","",""];
    //UI pr empty bhi karna padega
    boxes.forEach((box,index) =>
    {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //css property ko dubara se initialize kar diye
        box.classList=`box box${index+1}`;
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`current player- ${currentPlayer}`;
}

initGame();

function swapTurn()
{
    if(currentPlayer === "X")
    {
        currentPlayer="O";
    }
    else{
        currentPlayer = "X";
    }
    //UI update
    gameInfo.innerText=`current player- ${currentPlayer}`;
}

function checkGameOver()
{
    let answer ="";
    winningPositions.forEach((position) =>
    {
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
        && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]]))
    {
        //check if winner is X
        if(gameGrid[position[0]] === "X")
        {
            answer="X";
        }
        else{
            answer="O";
        }

        //display pointer events
        boxes.forEach((box) =>
        {
            box.style.pointerEvents = "none";
        })
        //Know we know X/O is winner
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
    }
    });

    if(answer !== "")
    {
        gameInfo.innerText = `Winner player -${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    let fillcount =0;
    boxes.forEach((box)=>
    {
        if(box !== "")
        {
            fillcount++;
        }
    });
    if(fillcount === 9)
    {
        gameInfo.innerText = "Game Tie";
        newGameBtn.classList.add("active");
    }
}

function handleClick(index)
{
    if(gameGrid[index] === "")
    {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        //swap karo turn
        swapTurn();
        //check koi jeeta ki nhi
        checkGameOver();
    }
}

boxes.forEach((box,index) =>
{
    box.addEventListener("click",()=>
    {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click",initGame);