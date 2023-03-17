const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const img = document.querySelectorAll('.photo');
let counter = 0;

btnRight.addEventListener('click', function () {
    //Делаю видимой левую кнопку//
    btnLeft.style.display = 'block';
    //Скрываем текущий слайдер//
    img[counter].style.display = 'none';
    //Показываем следующий слайд//
    img[++counter].style.display = 'block';
    //Скрываем кнопочку если данный слайд последний//
    if (counter === img.length - 1) {
        btnRight.style.display = 'none';
    }
});

btnLeft.addEventListener('click', function () {
    btnRight.style.display = 'block';
    img[counter].style.display = 'none';
    img[--counter].style.display = 'block';
    if (counter === 0) {
        btnLeft.style.display = 'none'
    }
})
