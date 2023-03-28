let number_one = Math.ceil(Math.random()*8) +1

let number_too = Math.ceil(Math.random()*8) +1

let number_result = number_one * number_too

function audit() {
    const reply = document.querySelector('.reply')
    reply.classList.add('watch')
    dataDefinition()
    .then(reply.innerHTML = '<i class="fa-solid fa-face-smile"></i>' )
    .catch(error => reply.innerHTML = error.message )
}

function dataDefinition() {
    const result = Number(document.querySelector('.result').value)

    const promise = new Promise((resolve, reject) => {
        if (result !== number_result) {
            reject({status:'not ok', message: '<i class="fa-solid fa-face-frown red"></i>'})
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
const button = document.querySelector('#verify')
button.addEventListener('click', audit)
const next = document.querySelector('#next')
next.addEventListener('click', reboot)

one.innerHTML = `${number_one}`
too.innerHTML = `${number_too}`
