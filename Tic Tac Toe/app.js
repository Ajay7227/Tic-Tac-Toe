
let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');
let msgcontainer=document.querySelector('.msg-container');
let turnO=true; //playerX,playerY;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       console.log('button was clicked');
       if(turnO){
        box.innerText="O";
        turnO = false;
       }
        else {
            box.innerText='X';
            turnO=true;
        }
      box.disabled=true;
      checkWinner();
    })
})

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add('hide');
    
}

const enableboxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
     document.querySelector('imgbox').getElementsByTagName('img').style.width='200px'
    msgcontainer.classList.remove('hide');
    disableboxes();
}

const checkWinner=()=>{
    for(let  pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val != "",pos2val != "",pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val && pos3val===pos1val){
                console.log("Winner",pos1val);
              showWinner(pos1val);
             
          
            }
            
        }
    }
}

resetbtn.addEventListener('click',resetgame);