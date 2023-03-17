const buttons = document.querySelectorAll('.button');
for (let btn of buttons) {
    btn.addEventListener('click', () => {
        let counter = btn.nextElementSibling;
        counter.innerText = parseInt(counter.innerText) + 1
    });
}
