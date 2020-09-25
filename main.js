
//Canal Florin Pop Youtube - 10 JavaScript Projects in 1 Hour - Coding Challenge 
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    document.body.style.background= randomRb();
    console.log(randomRb())
})

function randomRb(){
    
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}