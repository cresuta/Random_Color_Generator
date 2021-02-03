const btn = document.querySelector('button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')

const randomColor = (num) => {
    const r = Math.floor(Math.random() * num);
    const g = Math.floor(Math.random() * num);
    const b = Math.floor(Math.random() * num);
    return `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener('click', () => {
    const newColor = randomColor(256);
    body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})