const input = document.getElementById('input');
const btn = document.getElementById('btn');
const error = document.getElementById('error')
const urlPattern = new RegExp(/^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i)


btn.addEventListener('click', function (event) {
    if (!urlPattern.test(input.value)) {
        error.innerText = 'Неверный адрес страницы'
    } else {
        if (input.value.substring(0, 8) === 'https://') {
            window.location.href = input.value;
        } else {
            window.location.href = 'https://' + input.value;
        }
    }

})


