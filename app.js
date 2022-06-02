const body=document.getElementsByTagName('body')[0]
const li=document.getElementsByTagName('li')
const nav=document.getElementById('nav')
const scrollBtn=document.getElementById('scroll')
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-nav")[0]
const images = document.getElementsByClassName("image")
const tabBtns = document.getElementsByClassName("tab")


for (let index = 0; index < tabBtns.length; index++) {
    const element = tabBtns[index];
    element.addEventListener("click",()=>{
        change(index)
    })
}


toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('active')
})

function over(){
    let text=document.getElementById('text')
    let arr=['A Backend developer.','A Frontend developer.','A Kotlin developer.','A Competitive programmer','glad to meet you.']
    arr.forEach(function (el, index) {
        setTimeout(function () {
            text.innerText=el
        }, index * 1500);
    });
}

function blink() {
    let text=document.getElementById('text')
    text.classList.toggle("blink")
}

setInterval(() => {
    blink()
}, 1500);

window.onscroll=() => {
    if (window.scrollY>=100){
        scrollBtn.style.display='block'
    }
    else{
        scrollBtn.style.display='none'
    }
    if (window.scrollY>=500){
        if (!nav.classList.contains("bg")){
            nav.classList.toggle('bg')
        }
    }
    else{
        if (nav.classList.contains("bg")) {
            nav.classList.toggle("bg")
        }
    }
}


scrollBtn.addEventListener('click',()=>{
    location.href='#'
})


let count = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var prevSlide = () => {
    if(count > 0) {
      count--
      change(count)
    }
    else{
        count = images.length-1
        change(count)
    }
    await sleep(2000)
}


var nextSlide = () => {
    if(count < images.length-1) {
      count++
      change(count)
    }
    else{
        count = 0
        change(count)
    }
    await sleep(2000)
}


var change = (count) =>{
    for (let index = 0; index < images.length; index++) {
        const element = images[index];
        const btn = tabBtns[index];
        if (element.classList.contains("active")){
            element.classList.remove("active")
        }
        if (btn.classList.contains("active")){
            btn.classList.remove("active")
        }
    }
    let element=images[count]
    let btn = tabBtns[count]
    element.classList.toggle("active")
    btn.classList.toggle("active")
}

document.getElementById("previous").onclick = prevSlide
document.getElementById("next").onclick = nextSlide


change(count)
setInterval(() => {
    nextSlide()
}, 2000);
