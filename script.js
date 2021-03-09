const form = document.querySelector('form')
const input = document.querySelector('input')
let status = document.querySelector('.status')
let str;

form.addEventListener('submit', e => {
  e.preventDefault()

  if (input.value.length === 0) {
    status.innerHTML = 'TYPE A NORMAL STRING IDIOT!'
  } else if (input.value.length > 100) {
    status.innerHTML = 'TYPE A STRING LESS THEN 100 SYMBOLS IDIOT!'
  } else {
    str = input.value
    str = str.split(' ').join('')
    status.innerHTML = `Length of your string: ${str.length}`
  }

  form.reset()
})

