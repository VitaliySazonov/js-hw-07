// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let input = document.getElementById('validation-input')
let attr = input.getAttribute('data-length')
input.addEventListener('focusout', ()=> {
  console.log()
  if (input.value.length <= attr) {
    input.classList.remove('invalid')
    input.classList.add('valid')
  } else {
    input.classList.remove('valid')
    input.classList.add('invalid')
  }
})