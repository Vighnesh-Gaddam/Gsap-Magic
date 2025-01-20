gsap.to("#box1", {
    x: 1150, // will move 500 pixels to the right
    duration: 2, // will animate for 5 seconds
    delay: 1, // will start the animation after 1 seconds
    rotate: 360, // will rotate 360 degrees
    repeat: 1 // will repeat the animation once
})
gsap.to("#box2", {
    x: 1150, // will move 500 pixels to the right
    duration: 2, // will animate for 5 seconds
    delay: 1, // will start the animation after 1 seconds
    rotate: 360, // will rotate 360 degrees
    repeat: -1 // will repeat the animation once
})
gsap.to("#box3", {
    x: 1150, // will move 500 pixels to the right
    duration: 2, // will animate for 5 seconds
    delay: 1, // will start the animation after 1 seconds
    rotate: 360, // will rotate 360 degrees
    repeat: -1, // will repeat the animation once
    yoyo: true
})