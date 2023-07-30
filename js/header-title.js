const getGreet = (arr)=>arr[Math.floor(Math.random()*arr.length)];


const title = document.querySelector('.header-best-products__title');

const greet = [
    'The best products start with Figma'
]
const colors =[
    '#2091F9',
    'white'
]
title.innerText = getGreet(greet);
title.style.color = getGreet(colors);
