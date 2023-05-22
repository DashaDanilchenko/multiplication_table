let number_one = Math.ceil(Math.random()*8) +1
let number_too = Math.ceil(Math.random()*8) +1
let number_result = number_one * number_too

function audit() {
    const reply = document.querySelector('#multiplication')
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
        resolve({status:'ok'})
    })
    return promise
}

const one = document.querySelector('.one')
const too = document.querySelector('.too')
const button = document.querySelector('#verify')
button.addEventListener('click', audit)

one.innerHTML = `${number_one}`
too.innerHTML = `${number_too}`

// ------ application -------

let application_random_one = Math.ceil(Math.random()*9)
let application_result = Math.ceil(Math.random()*(10 - application_random_one)) + application_random_one
let application_random_too = application_result - application_random_one

function auditApplication() {
    const replyApplication = document.querySelector('#application')
    replyApplication.classList.add('watch')
    dataDefinitionApplication()
    .then(replyApplication.innerHTML = '<i class="fa-solid fa-face-smile"></i>' )
    .catch(error => replyApplication.innerHTML = error.message )
}

function dataDefinitionApplication() {
    const resultApplication = Number(document.querySelector('.result_application').value)

    const promiseApplication = new Promise((resolve, reject) => {
        if (resultApplication !== Number(application_result)) {
            reject({status:'not ok', message: '<i class="fa-solid fa-face-frown red"></i>'})
        }
        resolve({status:'ok'})
    })
    return promiseApplication
}

const application_one= document.querySelector('.application_one')
const application_too = document.querySelector('.application_too')
const application_button = document.querySelector('#verify_application')
application_button.addEventListener('click', auditApplication)

application_one.innerHTML = `${application_random_one}`
application_too.innerHTML = `${application_random_too }`

function reboot() {
    location.reload()
}

const next = document.querySelector('#next')
next.addEventListener('click', reboot)
