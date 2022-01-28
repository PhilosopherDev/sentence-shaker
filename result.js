window.onload = () => {
    const orgKor = document.querySelector('.result__origin-kor');
    const orgEn = document.querySelector('.result__origin-en');

    orgKor.innerText = localStorage.getItem('orgKor');
    const en = localStorage.getItem('orgEn');

    shuffle(en.trim().split(" ")).forEach((str) => {
        const sp = document.createElement("li");
        sp.innerText = str;
        orgEn.appendChild(sp);
    });
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