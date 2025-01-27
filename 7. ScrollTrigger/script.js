gsap.registerPlugin(ScrollTrigger);

gsap.from("#C1 #box",{
    scale:0,
    duration: 2, // will animate for 5 seconds
    delay: 1, // will start the animation after 1 seconds
    rotate: -360, // will rotate 360 degrees
})
gsap.from("#C2 #box",{
    scale:0,
    duration: 2, // will animate for 5 seconds
    rotate: -360, // will rotate 360 degrees
    // scrollTrigger:"#C2 #box",          //oneLiners
    scrollTrigger:{
        trigger:"#C2 #box",
        start:"top 60%",
        end:"top 40%",
        markers: true,
        scrub:2,
        pin:true
    }
})
gsap.from("#C3 #box",{
    scale:0,
    duration: 2, // will animate for 5 seconds
    rotate: -360, // will rotate 360 degrees
    // scrollTrigger:"#C3 #box",
    scrollTrigger:{
        trigger:"#C3 #box",
        markers: true,
        start:"top 60%",
        end:"top 40%",
        scrub:2,
        pin:true
    }
})


//text Animation
gsap.to(".text h1", {
    x: "-76%", // Move the text horizontally out of view
    scrollTrigger: {
        trigger: ".text", // Element to trigger the animation
        start: "top 0%", // Animation starts when the `.text` element reaches the top of the viewport
        end: "top -350%", // Animation ends when the `.text` element scrolls out of view
        markers: true, // Debug markers to see start and end points
        pin: true, // Pin the animation to the viewport
        scrub: 1, // Smooth scrolling effect
    }
});



