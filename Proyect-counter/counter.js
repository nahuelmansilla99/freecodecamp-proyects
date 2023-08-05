let count = 0;

// Dark-light Mode
const theme = document.querySelector('#theme');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

theme.addEventListener('click', () => {
    console.log('Cambiaste el tema')
    console.log(prefresDarkScheme)
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-mode')
    } else {
        document.body.classList.toggle('dark-mode')
    }
})



// seleccionar value y buttons
const value = document.querySelector("#value");//el # es para llamar al ID
const btns = document.querySelectorAll(".btn"); // el . es para llamar una CLASS

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            if(document.body.classList.contains('light-mode')){
                value.style.color = 'black'
            }else{
                value.style.color = 'white'
            }
        }
        value.textContent = count;
    })
});


