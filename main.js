function openRegister() {
    const openRegister = document.querySelector('.login__form-register')
    const formBox = document.querySelector('.login__register-box')
    const closeRegister = document.querySelector('.login__close')

    openRegister.addEventListener('click', () => {
        formBox.classList.add('active')
    })

    closeRegister.addEventListener('click', () => {
        formBox.classList.remove('active')
    })
}


openRegister()