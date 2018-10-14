let menubtn = document.querySelector('.menu-btn')
let nav = document.querySelector('.nav-ctn')
let name = document.querySelector('#email')
let login = document.querySelector('.login-ctn')
let mapa = document.querySelector('.map-ctn')
document.querySelector('.menu-btn').addEventListener('click', () => {
    nav.classList.add('show')
})

document.querySelector('.btn-hide').addEventListener('click', () => {
    document.querySelector('.nav-ctn').classList.remove('show')
})

document.querySelector('.btn-login').addEventListener('click', () => {
    if (name.value == 'cliente@gmail.com') {
        document.querySelector('.login-ctn').remove()
        mapa.classList.remove('hide')
    }
})
