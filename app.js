const cells = document.querySelectorAll('.cell');
let currentPlayer = 1;

let resetBtn = document.querySelector('.reset');

for (let i = 0; i < cells.length; i++) {

  cells[i].addEventListener('click', (evt) => {

    if (currentPlayer === 1) {
      // evt.target.style.backgroundColor = "red";
      evt.target.style.color = "red";
      evt.target.innerText = "X";
      currentPlayer = 2;
    } else {
      // evt.target.style.backgroundColor = "green";
      evt.target.style.color = "green";
      evt.target.innerText = "O";
      currentPlayer = 1;
    }
    // disable click
    evt.target.style.pointerEvents = "none";
    evt.target.style.fontSize = "120px";

  });
}
console.log(resetBtn);
resetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.pointerEvents = "auto";
    currentPlayer = 1;
  }
});