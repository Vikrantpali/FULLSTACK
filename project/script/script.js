const nav = document.getElementById("nav");
const hamburger = document.getElementById('hamburger');
const toggle = document.getElementById('close')
const blog = document.getElementById('blog')
const arrowdown = document.getElementById('arrowdown')
const dropdown = document.getElementById('dropdown')
const cat = document.getElementById('cat-image')
const whitecat = document.getElementById('cat2-image')
const section = document.getElementById('content')
const blogHeader = document.getElementById('blog-header')
const blogPara = document.getElementById('para')
const smallText = document.getElementById('small-text')
const mediumText = document.getElementById('medium-text')
const largeText = document.getElementById('large-text')
const increaseWidth = document.getElementById('increase-width')
const decreaseWidth = document.getElementById('decrease-width')
const submitbutton = document.getElementById("submitbutton")
const background = document.getElementById("background")
const popup = document.getElementById("popup")
const closepopup = document.getElementById("close-popup")
const namefield = document.getElementById("nameField")
const emailfield = document.getElementById("emailField")
const messagefield = document.getElementById("messageField")
const tabone = document.getElementById("tabone")
const tabtwo = document.getElementById("tabtwo")

const showTabOne = () =>{
    tabone.style.display = 'block'
    tabtwo.style.display = 'none'
};

const showTabTwo = () =>{
    tabone.style.display = 'none'
    tabtwo.style.display = 'block'
};


submitbutton.addEventListener("click", function (e) {
    e.preventDefault();
    background.style.display = 'block'
    popup.style.display = 'flex'
});

closepopup.addEventListener("click", function (e) {
    e.preventDefault();
    background.style.display = 'none'
    popup.style.display = 'none'
});

namefield.addEventListener("change", (e) => {
    console.log(e.target.value);
});

emailfield.addEventListener("change", (e) => {
    console.log(e.target.value);
});

messagefield.addEventListener("change", (e) => {
    console.log(e.target.value);
});

hamburger.addEventListener("click", function() {
    nav.style.right = "0px";
    toggle.style.display = "block"
    hamburger.style.display = "none"
})

toggle.addEventListener("click", function() {
    nav.style.right = "-100vw";
    toggle.style.display = "none"
    hamburger.style.display = "block"
})

let dropdownopen = false;
blog.addEventListener('click', () =>{
    if (dropdownopen === false) {
        dropdownopen = true;
        arrowdown.style.rotate = '180deg'
        dropdown.style.display = 'flex'
    } else if (dropdownopen === true) {
        dropdownopen = false;
        arrowdown.style.rotate = '0deg'
        dropdown.style.display = 'none'
    }
    
})

// setTimeout(() => {
//     cat.setAttribute("src", "../assets/cat2.jpg");
// }, 1000)

    // setTimeout(() => {
    //     cat.style.display = 'none'
    // }, 1000);
    // setTimeout(() => {
    //     whitecat.style.display = 'block'
    // }, 1000);

smallText.addEventListener("click", function() {
    blogHeader.style.fontSize = "20px"
    blogPara.style.fontSize = "14px"
})

mediumText.addEventListener("click", function() {
    blogHeader.style.fontSize = "30px"
    blogPara.style.fontSize = "16px"
})

largeText.addEventListener("click", function() {
    blogHeader.style.fontSize = "50px"
    blogPara.style.fontSize = "20px"
})

increaseWidth.addEventListener("click", function() {
    section.style.padding ="100px 300px 100px 80px"
})

decreaseWidth.addEventListener("click", function() {
    section.style.padding ="100px 400px"
})

document.addEventListener("DOMContentLoaded", () => {
    const cat = document.getElementById("cat-image");
    const whitecat = document.getElementById("cat2-image");

    let currentImage = true;

    function changeImage() {
        if (currentImage === true){
            cat.classList.add("opacity-0");
            whitecat.classList.remove("opacity-0");
        } else{
            cat.classList.remove("opacity-0");
            whitecat.classList.add("opacity-0");
        }

        currentImage = !(currentImage);
        setTimeout(changeImage, 3000);
    }
    setTimeout(changeImage, 3000);
});