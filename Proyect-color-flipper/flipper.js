const colors= ["green","red","rgba(133,122,200)","#f15025"];
const btn= document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // obten randon number entre 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// Copiar color al portapapeles
function copiarSimple(){
    let colores=document.getElementById('colores');
    let button=document.getElementById('copiar');

    navigator.clipboard.writeText(colores.textContent);
    button.textContent='Copiado'; 

    // Reset al boton Copiar
    btn.addEventListener('click', function(){
        button.textContent = 'Copiar'
    });
}