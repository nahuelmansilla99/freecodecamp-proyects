const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log(hexColor);
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

// Copiar color al portapapeles
function copiarHex(){
    let colores=document.getElementById('colores');
    let button=document.getElementById('copiar');

    navigator.clipboard.writeText(colores.textContent);
    button.textContent='Copiado';
    
    // Reset al boton Copiar
    btn.addEventListener('click', function(){
        button.textContent = 'Copiar'
    });
}