const entry = document.getElementById('entry')
const body = document.querySelector('body')
const toggleSwitch = document.getElementById('toggle-switch')
const calcButton = document.getElementById('calc-button')
const buttons = document.querySelectorAll('.buttons')
const reset = document.getElementById('reset')
const equal = document.getElementById('equal')
const del = document.querySelector('.del')
const circle = document.querySelectorAll('.toggle-circle')
const t1 = document.querySelector('.t-1')
const t2= document.querySelector('.t-2')
const t3 = document.querySelector('.t-3')
function appendToDisplay(input) {
  entry.value += input;
}
function effacer () {
  entry.value = entry.value.slice(0,-1)
}
function clearAll() {
  entry.value = "";
}
function calculate() {
  try {
    entry.value = eval(entry.value)
  }
  catch (error) {
  entry.value = "ERROR"
  }
}
function changeTheme1() {
  buttons.forEach(button => {
    button.style.backgroundColor = 'hsl(30, 25%, 89%)'
  })
  buttons.forEach(button => {
  button.style.color = 'hsl(221, 14%, 31%)'
})
  body.style.backgroundColor = 'hsl(222, 26%, 31%)'
  body.style.color = ' hsl(0, 0%, 100%)'
  calcButton.style.backgroundColor = 'hsl(223, 31%, 20%)'
  toggleSwitch.style.backgroundColor = 'hsl(223, 31%, 20%)'
  entry.style.backgroundColor = 'hsl(224, 36%, 15%)'
  entry.style.color = 'white'
  equal.style.backgroundColor = 'hsl(6, 63%, 50%)'
  circle.forEach(circle => {
    circle.style.backgroundColor = 'hsl(6, 63%, 50%)'
  })
  del.style.backgroundColor = 'hsl(225, 21%, 49%)'
  del.style.color = 'white'
  reset.style.backgroundColor = 'hsl(225, 21%, 49%)'
  t1.style.backgroundColor = 'hsl(6, 63%, 50%)'
  t2.style.backgroundColor = 'hsl(223, 31%, 20%)'
  t3.style.backgroundColor = 'hsl(223, 31%, 20%)'
}
function changeTheme2() {
  buttons.forEach(button => {
    button.style.backgroundColor = 'hsl(45, 7%, 89%)'
  })
  buttons.forEach(button => {
  button.style.color = 'hsl(60, 10%, 19%)'
})
  body.style.backgroundColor = 'hsl(0, 0%, 90%)'
  body.style.color = 'black'
  calcButton.style.backgroundColor = 'hsl(0, 5%, 81%)'
  toggleSwitch.style.backgroundColor = 'hsl(0, 5%, 81%)'
  entry.style.backgroundColor = 'hsl(0, 0%, 93%)'
  entry.style.color = 'black'
  equal.style.backgroundColor = 'hsl(25, 98%, 40%)'
  circle.forEach(circle => {
    circle.style.backgroundColor = 'hsl(25, 98%, 40%)'
  })
  del.style.backgroundColor = 'hsl(185, 42%, 37%)'
  del.style.color = 'white'
  reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
  t1.style.backgroundColor = 'hsl(0, 5%, 81%)'
  t3.style.backgroundColor = 'hsl(0, 5%, 81%)'
}
function changeTheme3() {
  buttons.forEach(button => {
    button.style.backgroundColor = 'hsl(268, 47%, 21%)'
  })
  buttons.forEach(button => {
  button.style.color = 'hsl(52, 100%, 62%)'
})
  body.style.backgroundColor = 'hsl(268, 75%, 9%)'
  body.style.color = ' hsl(52, 100%, 62%)'
  calcButton.style.backgroundColor = 'hsl(268, 71%, 12%)'
  toggleSwitch.style.backgroundColor = 'hsl(268, 71%, 12%)'
  entry.style.backgroundColor = 'hsl(268, 71%, 12%)'
  entry.style.color = 'hsl(52, 100%, 62%)'
  equal.style.backgroundColor = 'hsl(176, 100%, 44%)'
  equal.style.color = 'black'
  circle.forEach(circle => {
    circle.style.backgroundColor = 'hsl(6, 63%, 50%)'
  })
  del.style.backgroundColor = 'hsl(281, 89%, 26%)'
  del.style.color = 'white'
  reset.style.backgroundColor = 'hsl(281, 89%, 26%)'
  t1.style.backgroundColor = 'hsl(268, 71%, 12%)'
  t2.style.backgroundColor = 'hsl(268, 71%, 12%)'
  t3.style.backgroundColor = 'hsl(176, 100%, 44%)'
}
