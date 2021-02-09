// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

let range = document.getElementById('font-size-control')
let span = document.getElementById('text')
span.style.fontSize = range.value +'px'
range.addEventListener('input', event => span.style.fontSize = event.target.value +'px')
