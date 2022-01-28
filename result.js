window.onload = () => {
    const orgKor = document.querySelector('.result__origin-kor');
    const orgEn = document.querySelector('.result__origin-en');

    orgKor.innerText = localStorage.getItem('orgKor');
    const en = localStorage.getItem('orgEn');
    en.trim().split(" ").forEach((val, idx) => {
        const sp = document.createElement("li");
        let str = '';
        for (let i = 0; i < val.length; i++) {
            str += '__';
        }
        if (idx === en.split(" ").length - 1) str += '.';
        sp.innerText = str;
        orgEn.appendChild(sp);
    });
};