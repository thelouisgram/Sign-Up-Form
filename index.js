import selectMode from "./app.js"
import {mode} from "./app.js"


mode.addEventListener('click', selectMode)

let form = document.getElementById('form')
let fName = document.getElementById('first-name')
let lName = document.getElementById('last-name')
let email = document.getElementById('user-email')
let phoneNumber = document.getElementById('phone-number')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm-password') 
let error = document.querySelector('.error')


form.addEventListener('submit', (e) => {
    let messages = []

    if (password.value != confirmPassword.value){
        messages.push('Password do not match')
    } 
    
    if (password.value.length < 8){
        messages.push('Password is Weak')
    }

    if (messages.length > 0){
      e.preventDefault()
      error.innerText = messages.join(', ')
    }
})