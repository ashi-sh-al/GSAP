// Box Animation Basic

// gsap.to("#box", {
//     x:1000,
//     duration:3,
//     delay:1,
//     rotate:360,
//     backgroundColor: "green",
//     // borderRadius:"50%",
//     repeat: -1,
//     yoyo:true,
// })

// gsap.to("#box2", {
//     x:500,
//     y:500,
//     duration:4,
//     delay:1
// })

// gsap.from("#box2", {
//     x:500,
//     y:500,
//     duration:4,
//     delay:1
// })


// Text Animation

// gsap.from("h1",{
//     opacity:0,
//     y:30,
//     duration:4,
//     delay:1,
//     stagger:1,
// })


// Timeline

// let tl = gsap.timeline();

// tl.to("#box", {
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })

// tl.to("#box2",{
//     x:1000,
//     backgroundColor:"red",
//     duraion:1.5,
// }) 

// tl.to("#box3",{
//     x:1000,
//     scale:0.5,
//     duration:2,
// })

// Practical

let tl = gsap.timeline();

tl.from ("#heading", {
    y:"-20px",
    opacity:0,
    duration:0.5,
    delay:0.2
})

tl.from ("h4",{
    y:"-20px",
    opacity:0,
    duration:0.5,
    stagger:0.3,
})

tl.from ("#companyName", {
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2,
})