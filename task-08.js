// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


let boxes = document.getElementById('boxes')
let createBtn = document.querySelector('button[data-action=render]')
let clearBtn = document.querySelector('button[data-action=destroy]')
let inputNumber = document.getElementById('boxNumber')


createBtn.addEventListener('click', () => createBoxes(inputNumber.value))
clearBtn.addEventListener('click', () => destroyBoxes())

let createBoxes = amount => {
  destroyBoxes()
  for(let i = 1; i <= amount; i += 1) {
    let div = document.createElement('div')
    div.style.width = 20 + i * 10 + 'px'
    div.style.height = 20 + i * 10 + 'px'
    div.style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    boxes.append(div)
  }
  inputNumber.value = '0'
}
let destroyBoxes = () => boxes.innerHTML = ''

