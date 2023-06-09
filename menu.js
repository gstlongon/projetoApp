function openMenu() {
    const open = document.querySelector('.nav__button')
    const menu = document.querySelector('.menu__box')

    open.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
}

openMenu()
