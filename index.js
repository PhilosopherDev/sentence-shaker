window.onload = () => {
    const orgKor = document.querySelector('.sentence__origin-kor');
    const orgEn = document.querySelector('.sentence__origin-en');

    orgKor.value = localStorage.getItem('orgKor');
    orgEn.value = localStorage.getItem('orgEn');
}


const confirmBtn = document.querySelector('.btn-confirm');

confirmBtn.addEventListener('click', () => {
    localStorage.setItem('orgKor', document.querySelector('.sentence__origin-kor').value);
    localStorage.setItem('orgEn', document.querySelector('.sentence__origin-en').value);
    localStorage.setItem('level', document.querySelector('#level').value);
    localStorage.setItem('order', document.querySelector('#order').value);
    
    if (window.location.href.indexOf("index.html") > -1) {
        window.location = "/result.html";
    } else {
        window.location = window.location.href + "result.html";
    }
});