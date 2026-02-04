let tl = gsap.timeline();

let menu = document.querySelector(".menu");
let cross = document.querySelector(".close-btn");

tl.to("#full", {
    right:0,
    duration:0.5,
})

tl.from("#full h4",{
    x:200,
    duration:0.3,
    stagger:0.2,
    opacity:0,
})

tl.from("#full i", {
    opacity:0,
})

tl.pause()

menu.addEventListener("click", () => {
    tl.play()
})

cross.addEventListener("click", () => {
    tl.reverse()
})