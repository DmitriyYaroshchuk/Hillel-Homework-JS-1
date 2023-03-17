const textInput = document.getElementById('input');
const textDiv = document.getElementById('div');


textInput.addEventListener('focus',function () {
    textDiv.style.visibility = 'visible';
});
textInput.addEventListener('blur', function () {
    textDiv.style.visibility = 'hidden';
})
