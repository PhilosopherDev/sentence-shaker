function generateShakedSentence() {
    const k_textarea = document.getElementById("korean");
    const e_textarea = document.getElementById("english");
    const r_textarea = document.getElementById("result");

    const kv = k_textarea.value.split('\n');
    const ev = e_textarea.value.split('\n');

    const e_result = ev.map((s) => {
        return `( ${shuffle(s.trim().split(" ")).join(" / ")} )`;
    });

    const result = kv.map((s, i) => {
        return s + '\n' + e_result[i];
    }).join('\n');

    r_textarea.value = result;
}

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
    const result_textarea = document.querySelector("#result");
    const copyText = result_textarea.value;
    navigator.clipboard.writeText(copyText);
}

function reload() {
    location.reload(true);
}

document.getElementById("btn-confirm").addEventListener("click", generateShakedSentence);
document.getElementById("btn-copy").addEventListener("click", copy_to_clipboard);
document.getElementById("molang").addEventListener("click", reload);