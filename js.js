var endGame = false;
var player = null;
var selectedPlayer = document.getElementById("selected-player");
var squares = document.getElementsByClassName("square");

switchPlayer("X");

function clickSquare(id) {
  if (endGame) return;
  var square = document.getElementById(id);
  if (square.innerHTML !== "*") return;
  square.innerHTML = player;
  square.style.color = "black";
  player = player === "X" ? "O" : "X";
  switchPlayer(player);
  if (checkWinner()) {
    endGame = true;
    selectedPlayer.innerHTML = `${player === "X" ? "O" : "X"} won!!!`;
  }
}

function switchPlayer(value) {
  player = value;
  selectedPlayer.innerHTML = player;
}

function checkWinner() {
  if (testSelected(0, 1, 2)) return true;
  if (testSelected(3, 4, 5)) return true;
  if (testSelected(6, 7, 8)) return true;
  if (testSelected(0, 3, 6)) return true;
  if (testSelected(1, 4, 7)) return true;
  if (testSelected(2, 5, 8)) return true;
  if (testSelected(0, 4, 8)) return true;
  if (testSelected(2, 4, 6)) return true;
  return false;
}

function testSelected(positionOne, positionTwo, positionThree) {
  if (
    squares[positionOne].innerHTML === squares[positionTwo].innerHTML &&
    squares[positionTwo].innerHTML === squares[positionThree].innerHTML &&
    squares[positionOne].innerHTML !== "*"
  ) {
    squares[positionOne].style.background = "#2FC90A";
    squares[positionTwo].style.background = "#2FC90A";
    squares[positionThree].style.background = "#2FC90A";
    return true;
  }
  return false;
}

function restart() {
  endGame = false;
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "*";
    squares[i].style.color = "rgb(221, 226, 228)";
    squares[i].style.background = "rgb(221, 226, 228)";
    switchPlayer("X");
  }
}
