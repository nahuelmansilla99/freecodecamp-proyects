const boton = document.querySelector('#boton');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

boton.addEventListener('click', () => {
    console.log('Diste click')
    console.log(prefresDarkScheme)
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-mode')
    } else {
        document.body.classList.toggle('dark-mode')
    }
})

let audio = new Audio('sonido.mp3');
play = document.getElementById('boton');
play.addEventListener('click', ()=>{audio.play()});