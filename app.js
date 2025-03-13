let boxes = document.querySelectorAll(".box");   // access all boxes
let resetBtn = document.querySelector("#reset-btn");   // access reset button
let newGameBtn = document.querySelector("#new-btn");    // access new button
let msgContainer = document.querySelector(".msg-container");    // access msg Container
let msg = document.querySelector("#msg");

let turn0 = true;   // playerX , player0

// using 2D array
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {                              // clickboxes and some text shown
   box.addEventListener("click", () => {  
    if(turn0){      //player 0                                // box.innerText
        box.innerText = "0";
        turn0 = false;                  // false hai toh else statement chalegi
    }                 
    else{       // player X
        box.innerText ="X";
        turn0 = true;
    }     
    box.disabled = true;       //means ek baar box me value dalne ke baad change nhi ho  
    
    checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){          // ek baar winner aane ke baad game aage nhi chalega 
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){         
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;    // winner ki value print ho jayegi 
    msgContainer.classList.remove("hide");                    // msg container bhi visible ho jayega 
    disableBoxes();
}

const checkWinner = () => {                  // check winner player condition
    for (let pattern of winPatterns){
      let pos1Val = boxes[pattern[0]].innerText;       // kis position per konsi value hai 
      let pos2Val = boxes[pattern[1]].innerText;       // innertext use karte h taki undar ki value print kar sake
      let pos3Val = boxes[pattern[2]].innerText;
    
      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){            // pos 1,2 ,3 is equal  to empty[" "]
        if(pos1Val === pos2Val && pos2Val === pos3Val){                // theno pos equal hai   
            showWinner(pos1Val);
        }
      }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

