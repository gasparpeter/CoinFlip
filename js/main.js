const coin = document.getElementById("coin");
const text = document.getElementById("text");

const headsBtn = document.getElementById("heads-tip");
const tailsBtn = document.getElementById("tails-tip");

const myScore = document.getElementById("my-score");
const opponentScore = document.getElementById("opponent-score");

let myTip;

const scoreIncrement = 100;

coin.addEventListener("click", fejVagyIras);

headsBtn.addEventListener("click", headsBtnClick);
tailsBtn.addEventListener("click", tailsBtnClick);

function headsBtnClick() {
  tisztitsdGombokat();
  headsBtn.classList.add("active");
  myTip = "fej";
}

function tailsBtnClick() {
  tisztitsdGombokat();
  tailsBtn.classList.add("active");
  myTip = "iras";
}

function fejVagyIras() {
  if (myTip == undefined) {
    alert("Valassz egy oldalt....");

    return;
  }

  if (Math.random() < 0.5) {
    console.log("fej");

    tisztitsd();

    coin.classList.add("fej");

    text.innerText = "Fej";

    // itt tudjuk hogy fej
    // nezzuk meg hogy mit valasztottunk

    if (myTip === "fej") {
      incrementMyScore();
    } else {
      incrementOpponentScore();
    }
  } else {
    console.log("iras");

    tisztitsd();

    coin.classList.add("iras");

    text.innerText = "Iras";

    if (myTip === "iras") {
      incrementMyScore();
    } else {
      incrementOpponentScore();
    }
  }

  // Ha van rajta "rotate" szedd le...
  // Ha nincs tedd fel
  // ez a .toggle
  coin.classList.toggle("rotate");
}

function tisztitsd() {
  coin.classList.remove("iras");
  coin.classList.remove("fej");
}

function tisztitsdGombokat() {
  headsBtn.classList.remove("active");
  tailsBtn.classList.remove("active");
}

function incrementMyScore() {
  myScore.innerText = parseInt(myScore.innerText) + scoreIncrement;
  opponentScore.innerText = parseInt(opponentScore.innerText) - scoreIncrement;
}

function incrementOpponentScore() {
  opponentScore.innerText = parseInt(opponentScore.innerText) + scoreIncrement;
  myScore.innerText = parseInt(myScore.innerText) - scoreIncrement;
}
