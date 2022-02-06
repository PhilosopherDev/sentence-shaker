window.onload = () => {
  const orgKor = document.querySelector('.result__origin-kor');
  const orgEnCorrect = document.querySelector('.result__origin-en-correct');
  const orgEnShuffle = document.querySelector('.result__origin-en-shuffle');

  orgKor.innerText = localStorage.getItem('orgKor');
  
  const en = localStorage.getItem('orgEn');
  orgEnCorrect.innerText = en;

  const str = shuffle(en.trim().split(" ")).join(" / ");
  orgEnShuffle.innerText = `( ${str} )`;
};

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function copy_to_clipboard(e) {
  let copyText;
  if (e.target.id === "copy__kor") {
    copyText = document.querySelector(".result__origin-kor").innerText;
  } else if (e.target.id === "copy__en-correct") {
    copyText = document.querySelector(".result__origin-en-correct").innerText;
  } else if (e.target.id === "copy__en-shuffle") {
    copyText = document.querySelector(".result__origin-en-shuffle").innerText;
  }
  
  const textToCopy = copyText;

  const myTemporaryInputElement = document.createElement("input");
  myTemporaryInputElement.type = "text";
  myTemporaryInputElement.value = textToCopy;

  document.body.appendChild(myTemporaryInputElement);

  myTemporaryInputElement.select();
  document.execCommand("copy");

  document.body.removeChild(myTemporaryInputElement);
}

document.getElementById("copy__kor").addEventListener("click", copy_to_clipboard);
document.getElementById("copy__en-correct").addEventListener("click", copy_to_clipboard);
document.getElementById("copy__en-shuffle").addEventListener("click", copy_to_clipboard);