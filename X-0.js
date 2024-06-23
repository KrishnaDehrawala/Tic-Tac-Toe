let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let messageContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");
let turn0 = true;//playerX player0
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    messageContainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked")
        if (turn0 == true) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is player ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}
const draw = () => {
    msg.innerText = "Game Draw";
    messageContainer.classList.remove("hide");
}
const checkWinner = () => {
    let count = 0;
    for (let patterns of winpatterns) {
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,
        // boxes[patterns[1]].innerText,
        // boxes[patterns[2]].innerText);
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log(`congratulations, winner`, pos1Val);
                showWinner(pos1Val);
            }
            else {
                count++;
                if (count >= 8) {
                    console.log("Draw");
                    draw();
                }
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame);