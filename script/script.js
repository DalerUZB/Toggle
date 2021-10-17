let buttons = document.querySelectorAll('button');


buttons[0].addEventListener('click', function () {
    document.body.setAttribute('class', 'morning')
})
buttons[1].addEventListener('click', function () {
    document.body.setAttribute('class', 'night')
})