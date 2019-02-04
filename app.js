const cells = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset');
let isPlayerOne = true;

let column1 = [];

for (var i = 0; i < 42; i++) {
  if (i % 7 == 0) column1.push(i);
}

let column2 = column1.map(x => x + 1)
let column3 = column2.map(x => x + 1)
let column4 = column3.map(x => x + 1)
let column5 = column4.map(x => x + 1)
let column6 = column5.map(x => x + 1)
let column7 = column6.map(x => x + 1)

var divArray = document.querySelectorAll(".cell");

var column1position = 0
var column2position = 0
var column3position = 0
var column4position = 0
var column5position = 0
var column6position = 0
var column7position = 0

for (let i = 0; i < cells.length; i++) {
  cells[i].innerText = i
  cells[i].addEventListener('click', (evt) => {

    var match = findColumn(evt.target);

    if (isPlayerOne) {
      match.style.backgroundColor = "red";
    } else {
      match.style.backgroundColor = "green";
    }
    isPlayerOne = !isPlayerOne;
    match.style.pointerEvents = "none";
  });
}

resetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.pointerEvents = "auto";
    cells[i].style.backgroundColor = "lightblue";
    isPlayerOne = true;

    column1position = 0
    column2position = 0
    column3position = 0
    column4position = 0
    column5position = 0
    column6position = 0
    column7position = 0
  }
});



function findColumn(item) {
  //column1
  if (column1.indexOf(parseInt(item.innerText)) > -1) {
    var lastCol1 = column1[column1.length - 1];
    return divArray[lastCol1 - (column1position++ * 7)];

  }
  //column2
  if (column2.indexOf(parseInt(item.innerText)) > -1) {
    var lastCol1 = column2[column2.length - 1];
    return divArray[lastCol1 - (column2position++ * 7)];
  }
  //column3
  if (column3.indexOf(parseInt(item.innerText)) > -1) {
    var lastCol1 = column3[column3.length - 1];
    return divArray[lastCol1 - (column3position++ * 7)];
  }
  //column4
  if (column4.indexOf(parseInt(item.innerText)) > -1) {
    var lastCol1 = column4[column4.length - 1];
    return divArray[lastCol1 - (column4position++ * 7)];
  }
  //column5
  if (column5.indexOf(parseInt(item.innerText)) > -1) {
    var lastCol1 = column5[column5.length - 1];
    return divArray[lastCol1 - (column5position++ * 7)];
  }
  //column6
  if (column6.indexOf(parseInt(item.innerText)) > -1) {
    var lastCol1 = column6[column6.length - 1];
    return divArray[lastCol1 - (column6position++ * 7)];

  }
  //column7
  if (column7.indexOf(parseInt(item.innerText)) > -1) {
    var lastCol1 = column7[column7.length - 1];
    return divArray[lastCol1 - (column7position++ * 7)];
  }
}