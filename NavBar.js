let nav = document.querySelector('.nav')
vMenu = document.querySelector('.visible-menu')
hMenu = document.querySelector('.hidden-menu')
burger = document.querySelector('.burger')
burgerCount = document.querySelector('.burger-count')
breaks = []


function updateNav() {

    let navWidth = burger.classList.contains('hidden') ? nav.offsetWidth : nav.offsetWidth - burger.offsetWidth
    let vMenuWidth = vMenu.offsetWidth
    if (vMenuWidth > navWidth) {
        breaks.push(vMenuWidth)
        hMenu.prepend(vMenu.lasteElementChild)
        burger.classList.remove('hidden')
        burgerCount.innerText = breaks.length
        updateNav()
    }
    else {

    }
}

window.addEventListener('resize', updateNav)
document.addEventListener('DOMContentLoaded', updateNav)