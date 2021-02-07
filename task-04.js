// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0
let value = document.getElementById('value')
value.innerHTML = counterValue
let addBtn = document.querySelector('button[data-action=increment]')
let delBtn = document.querySelector('button[data-action=decrement]')

let increment = () => counterValue += 1
let decrement = () => counterValue -= 1
delBtn.addEventListener('click', () => value.innerHTML = decrement())
addBtn.addEventListener('click', () => value.innerHTML = increment())

