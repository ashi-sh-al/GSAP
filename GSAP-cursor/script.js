let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove",(e)=>{
    gsap.to(cursor, {
        x:e.x,
        y:e.y,
        duration:0.5,
        ease: "back.out(1.7)",
    })
})

image.addEventListener("mouseenter", (e) => {
    cursor.innerHTML = "View more"
    gsap.to(cursor, {
        scale:2,
        backgroundColor:"#ffffff8a"
    })
})

image.addEventListener("mouseleave", (e) => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale:1,
        backgroundColor: "#fff"
    })
})