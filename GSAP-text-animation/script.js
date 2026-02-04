function splitToSpan() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;
  let h1Split = h1Text.split("");

  let clutter = "";

  h1Split.forEach((elem, idx) => {
    if(idx < h1Split.length/2) {
        console.log(elem)
        clutter += `<span class="a">${elem}</span>`;
    }else {
        console.log(elem)
        clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
splitToSpan()

gsap.from (".a", {
    y:50,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15,
})

gsap.from (".b", {
    y:50,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
})