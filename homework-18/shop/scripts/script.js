// ________Моя попытка 3________//
// const menu = document.getElementById('menu');
//
//     //______Отслеживаем клик на всем меню_____//
// menu.addEventListener('click', (event) => {
//
//     //______Если кликнули НЕ по Span_____//
//     if (event.target.tagName !== 'SPAN') {
//         return false;
//     }
//     //______Получаем родителя(li) которому будем навешивать active _____//
//     const currentParent = event.target.parentNode;
//
//     // ______ Делаем так чтобы мог быть открыт только один список ______//
//     // if (parent.classList.contains('active')) {
//     //         parent.classList.remove('active');
//     //     } else {
//     //         const items = document.querySelectorAll('ul li');
//     //         items.forEach((item) => {
//     //             item.classList.remove('active');
//     //         })
//     //     }
//     closeAllSubMenu(currentParent);
//     currentParent.classList.toggle('active');
//
// });
//
// //______ Делаем через Функцию так чтобы мог быть открыт только один список ______//
// function closeAllSubMenu(currentItem = null) {
//     let parents = [];
//     if (currentItem) {
//         console.dir(currentItem);
//         let currentParent = currentItem.parentNode;
//         while (currentParent) {
//             if (currentParent.classList.contains('menu')) break;
//             if (currentParent.nodeName === 'LI') {
//                 parents.push(currentParent);
//             }
//             currentParent = currentParent.parentNode;
//         }
//
//     }
//     const items = document.querySelectorAll('ul li');
//     Array.from(items).forEach((item) => {
//         if (item !== currentItem && !parents.includes(item)) {
//             item.classList.remove('active');
//         }
//     });
// }

//______Моя попытка 4______//
const menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
    //______Условие выполняется если мы нажимаем на SPAN_____//
    if (event.target.tagName === 'SPAN') {
        //______Создаем переменную текущий родитель(li)--Span_____//
        const currentParentLI = event.target.parentNode;
        //______Перебираем li которые имеют class .active_____//
        document.querySelectorAll('.active').forEach((activeParentLI) => {
            if (activeParentLI !== currentParentLI) {
                activeParentLI.classList.toggle('active', activeParentLI.contains(currentParentLI));
            }
        });
        currentParentLI.classList.toggle('active');
    }
    if (event.target.tagName === 'BUTTON') {
        const currentParentDIV = event.target.closest('.product');
        console.log(currentParentDIV);
        currentParentDIV.classList.toggle('active');
        setTimeout(() => {
            document.querySelectorAll('.active').forEach((activeEl) => {
                activeEl.classList.remove('active')
            })
        },2000);
    }
});