const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


let btn = document.getElementById('btn');
let color = document.querySelector('.color');
let index = 0
btn.addEventListener('click', function() {
    if (index === colors.length) {
        index = 0;
    }
    document.body.style.backgroundColor = colors[index];
    color.textContent = colors.at(index);
    
    
    index++;
    
})

function getRandomNumber() {
    
    return Math.random()
}




