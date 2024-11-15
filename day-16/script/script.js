// const elements = document.getElementsByClassName('para')
// const elements = document.getElementsByTagName('p')
// const elements = document.querySelectorAll('.p')
// const elements = document.querySelector('.para')
// console.log(elements)


const nav = document.getElementById("nav");
const hamburger = document.getElementById('hamburger');
const toggle = document.getElementById('close')
const box = document.getElementById('box')
const box2 = document.getElementById('box2')
const text = document.getElementById('text')
const button = document.getElementById('increasefontsize')

hamburger.addEventListener("click", function() {
    nav.style.display = "flex";
    toggle.style.display = "block"
    hamburger.style.display = "none"
})

toggle.addEventListener("click", function() {
    nav.style.display = "none";
    toggle.style.display = "none"
    hamburger.style.display = "block"
})

const mouseenter = () => {
    box.style.backgroundColor ='black'
};
const mouseleave = () => {
    box2.style.backgroundColor ='blue'
};
button.addEventListener("click", function() {
    text.style.fontSize = '20px'
})