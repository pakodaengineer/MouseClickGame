let startingPage = document.getElementById("starting");
let startButton = document.getElementById("startButton");
let counter = document.getElementById("counter");
let shapesGrid = document.getElementById("shapesGrid");
let shapes = document.getElementsByClassName("shapes");
let clicks = document.getElementById("noOfClicks");
let attempts = document.getElementById("noOfAttempts");
let meter = document.getElementById("meter");
let count = 0;
let count1 = 0;
let rounds = 1;

function startGame() {
  createDivs();
  runningGame();
}

function runningGame() {
  clearStarting();
  loadShapes();
  timer();

  setTimeout(() => {
    let conf = askConfirm();
    count1 = count1 + count;
    if (conf == true && rounds < 3) {
      console.log(count1);
      count = 0;
      clicks.value = count;
      rounds++;
      attempts.value = rounds;
      runningGame();
    } else {
      endScreen();
      setTimeout(() => {
        location.reload();
      }, 7000);
    }
  }, 10000);
}

function createDivs() {
  for (let index = 0; index < 30; index++) {
    shapesGrid.innerHTML = shapesGrid.innerHTML + `<div class="shapes"></div>`;
  }
}
function clearStarting() {
  startingPage.innerHTML = "";
  countmeter.style.filter = "none";

  // shapesGrid.outerHTML = shapesGrid.outerHTML.replace(/template/g,"div");
  shapesGrid.style.display = "grid";
  shapesGrid.style.gridTemplateColumns = "repeat(6, auto)";
  shapesGrid.style.gridTemplateRows = "repeat(5, auto)";
}

function endScreen() {
  main.innerHTML = `<h2 style="text-shadow:1px 1px 2px white; font-size:50px;  animation: tubtub 1.5s infinite"> We have our new Clickanator</h2>
    <h2> You have clicked ${count1} shapes in ${rounds} rounds</h2>`;
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
}

function loadShapes() {
  let funList = ["getSquare(i)", "getCircle(i)", "getTriangle(i)"];
  for (const i of shapes) {
    getGrid(i);
  }
  for (const i of shapes) {
    eval(funList[Math.floor(Math.random() * funList.length)]);
  }
}

function getGrid(shape) {
  shape.style.width = "220px";
  shape.style.height = "100px";

  // shape.style.backgroundColor="#521"+side
  // shape.style.transform="rotate("+side+"deg)"
}

function getSquare(shape) {
  let side = String(Math.floor(Math.random() * 100) + 25);
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  shape.innerHTML = `<div style="display:flex; justify-content:flex-end; height:100%; align-items: center">
  <div style="width:${side}px; height:${side}px; background-color:#${randomColor}; transform:rotate(${side}deg); transform:translateX(${
    side - 10
  }); " onclick="tmpcount(this)" ></div></div>`;
  // shapes.style.display="flex"
  // shape.outerHTML.style.justifyContent="center"
}

function getCircle(shape) {
  let side = String(Math.floor(Math.random() * 100) + 25);
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  shape.innerHTML = `<div style="display:flex; justify-content:flex-start; height:100%; align-items: center">
    <div style="width:${side}px; height:${side}px; background-color:#${randomColor}; border-radius:50%;  transform:translateX(${
    side - 10
  });" onclick="tmpcount(this)" ></div></div>`;
  // shapes.style.display="flex"
  // shape.outerHTML.style.justifyContent="center"
}

function getTriangle(shape) {
  let side = String(Math.floor(Math.random() * 100) + 10);
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  shape.innerHTML = `<div style="display:flex; justify-content:center; height:100%; align-items: center">
    <div style="width: 0;
	height: 0;
	border-left: ${side}px solid transparent;
	border-right: ${side}px solid transparent;
	border-bottom: ${
    side * 1.2
  }px solid #${randomColor}; transform:rotate(${side}deg); transform:translateX(${
    side - 10
  }); " onclick="tmpcount(this)" ></div></div>`;
  // shapes.style.display="flex"
  // shape.outerHTML.style.justifyContent="center"
}

function tmpcount(tag) {
  count++;
  tag.style.display = "none";
  // tag.style.display = "flex";
  // tag.style.justifyContent = "center"
  // tag.style.alignItems = "center"
  clicks.value = count;
}

function timer() {
  meter.value = 100;

  let tmp = setInterval(() => {
    let i = meter.value - 1;
    meter.value = i;
    if (i == 0) {
      clearInterval(tmp);
    }
  }, 100);
}

function askConfirm() {
  return confirm(
    `You have clicked ${count} shapes in this round. \n Do you want to continue?`
  );
}
