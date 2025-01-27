function BreakText() {
    var h1 = document.querySelector('h1');
    var h1Text = h1.textContent;

    var splitText = h1Text.split("");
    var half = Math.floor(splitText.length / 2);

    var clutter = ""

    splitText.forEach(function (elem, index) {
        
        if (index < half) {
            clutter += `<span class="left">${elem}</span>`
        }
        else {
            clutter += `<span class="right">${elem}</span>`
        }
    })

    console.log(clutter)
    h1.innerHTML = clutter;
}

BreakText()

//LEFT TO RIGHT ANIMATION
gsap.from("h1 .left", {
    duration: 3,
    y: 60,
    opacity: 0,
    stagger: 0.1,
    ease: "back.inOut(8)",
})

//RIGHT TO LEFT ANIMATION
gsap.from("h1 .right", {
    duration: 3,
    y: 70,
    opacity: 0,
    stagger: -0.1,
    ease: "back.inOut(8)",
})