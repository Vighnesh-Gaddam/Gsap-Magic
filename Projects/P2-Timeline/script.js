var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");
var full = document.querySelector("#full");


var tl = gsap.timeline({paused:true});

tl.to("#full", {
    right: 0,
    duration: 1,
})
tl.from("#full h4", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})
tl.from("#full i", {
    opacity: 0,
    duration: 0.6
})

menu.addEventListener("click", function () {
    console.log('h')
    tl.play();
})

close.addEventListener("click", function () {
    tl.reverse();
})