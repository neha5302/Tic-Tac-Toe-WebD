console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let symbol = "X";
let over = false;

const changeSymbol = ()=>{ //Arrow function 
    return symbol === "X"?"O":"X";
}

const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]


wins.forEach(e=>{
    if ((boxText[e[0]].innerText === boxText[e[1]].innerText)&&(boxText[e[2]].innerText === boxText[e[1]].innerText)&&(boxText[e[0]].innerText !=="")) 
    {
    document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won!"    
    over =true;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
    }
})
}

// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if (boxText.innerText==='') {
            boxText.innerText = symbol;
            symbol = changeSymbol();
            turn.play();
            checkWin();
            if (!over) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + symbol;    
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element=>{
        element.innerText = ""
    });
    symbol = "X"
    over = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + symbol;    
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})