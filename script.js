let number_one = Math.ceil(Math.random()*8) +1

let number_too = Math.ceil(Math.random()*8) +1

let number_result = number_one * number_too

function audit() {
    const reply = document.querySelector('.reply')
    dataDefinition()
    .then(reply.innerHTML = 'Вірно')
    .catch(error => reply.innerHTML = error.message)
}

function dataDefinition() {
    const result = Number(document.querySelector('.result').value)

    const promise = new Promise((resolve, reject) => {
        if (result !== number_result) {
            reject({status:'not ok', message: 'Не вірно!'})
        }
        resolve({status:'ok', result})
    })
    return promise
}

function reboot() {
    location.reload()
}

const one = document.querySelector('.one')
const too = document.querySelector('.too')
const button = document.querySelector('.button')
button.addEventListener('click', audit)
const next = document.querySelector('.next')
next.addEventListener('click', reboot)

one.innerHTML = `${number_one}`
too.innerHTML = `${number_too}`
