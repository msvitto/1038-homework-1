const getGreet = (arr)=>arr[Math.floor(Math.random()*arr.length)];


const title = document.querySelector('.header-best-products__title');

const greet = [
    'Hi!',
    'Hello!',
    'How are you!',
    'Good morning!',
]
const colors =[
    'red',
    'blue',
    'white',
    'green',
]
title.innerText = getGreet(greet);
title.style.color = getGreet(colors);
