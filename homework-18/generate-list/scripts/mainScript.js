const list = document.getElementById('list');
list.addEventListener('click', function (event) {
    const trigger = event.target.closest('span');
    if (trigger) {
        trigger.classList.toggle('hide');
    }
});
const addBtn = document.getElementById('btn-add');
let counter = 2;
addBtn.addEventListener('click',function () {
    function HTML(title,startNumber) {
        return `<span class="title">${title} список</span> 
                <ul class="extra-list">
                <li class="extra-item">${startNumber} элемент списка</li>
                <li class="extra-item">${startNumber + 1} элемент списка</li>
                <li class="extra-item">${startNumber + 2} элемент списка</li>
                <li class="extra-item">${startNumber + 3} элемент списка</li>
                </ul>`
    }
    if (counter > 9) {
        return false;
    }
    const li = document.createElement('li');
    li.classList.add('item');
    if (counter === 0) {
        li.innerHTML = HTML('Первый',1);
    }
    if (counter === 1) {
        li.innerHTML = HTML('Второй',5);
    }
    if (counter === 2) {
        li.innerHTML = HTML('Третий',9);
    }
    if (counter === 3) {
        li.innerHTML = HTML('Четвертый',13);
    }
    if (counter === 4) {
        li.innerHTML = HTML('Пятый',17);
    }
    if (counter === 5) {
        li.innerHTML = HTML('Шестой',21);
    }
    if (counter === 6) {
        li.innerHTML = HTML('Седьмой',25);
    }
    if (counter === 7) {
        li.innerHTML = HTML('Восьмой',29);
    }
    if (counter === 8) {
        li.innerHTML = HTML('Девятый',33);
    }
    if (counter === 9) {
        li.innerHTML = HTML('Десятый',37);
    }
    counter++;
    list.appendChild(li);
});
const btnRemove = document.getElementById('btn-remove');
btnRemove.addEventListener('click', () => {
    document.querySelector('.item:last-child').remove();
    counter--;
})
