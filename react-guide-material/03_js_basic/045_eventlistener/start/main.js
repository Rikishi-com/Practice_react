const h1Element = document.querySelector('h1');

console.dir(h1Element);

h1Element.textContent = 'Hello, World!';

const btnEl = document.querySelector('button');
btnEl.addEventListener('click',(e) => {
    console.log('Hello World!');
    console.dir(e.target.textContent);
});