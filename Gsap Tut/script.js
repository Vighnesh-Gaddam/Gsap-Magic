
//Gsap.to
function MoveRight() {
    gsap.to("#box", {
        x: 500, // will move 1320 pixels to the right
        duration: 5, // will animate for 5 seconds
        delay: 1 // will start the animation after 2 seconds
    });
}

function Reset1() {
    gsap.to("#box", {
        x: 0, // move back to the original position
    });
}


//From Animation
function fromAnimation() {
    gsap.from("#box2", {
        x: 500, //  animates the element from x = 500 to its original position (x = 0)
        duration: 5, // will animate for 5 seconds
        delay: 1 // will start the animation after 2 seconds
    });
}

function Reset2() {
    gsap.set("#box2", {
        x: 0, //immediately resets the element to its original position
    });
}

//Rotate
function RotateAnimation() {
    gsap.to("#box3", {
        x: 500, //  animates the element from x = 500 to its original position (x = 0)
        duration: 5, // will animate for 5 seconds
        delay: 1, // will start the animation after 2 seconds
        rotate: 360
    });
}

function Reset3() {
    gsap.set("#box3", {
        x: 0, // immediately resets the element's position
        rotate: 0 // immediately resets the rotation
    });
}


//Stagger
function PositiveStagger() {
    gsap.from(".startFromFirst", {
        stagger: 1, // Delays the start of each element's animation by 1 second
        opacity: 0, // Starts with elements fully transparent
        duration: 1, // Each animation lasts 1 second
        y: 20, // Starts 20 pixels below the final position
        delay: 1 // Delays the entire animation sequence by 1 second
    });
}

function NegativeStagger() {
    gsap.from(".startFromLast", {
        stagger: -1, // Delays the start of each element's animation by 1 second
        opacity: 0, // Starts with elements fully transparent
        duration: 1, // Each animation lasts 1 second
        y: 20, // Starts 20 pixels below the final position
        delay: 1 // Delays the entire animation sequence by 1 second
    });
}

//Yoyo
function repeatNTimes() {
    gsap.to("#box4", {
        x: 900, // will move 500 pixels to the right
        duration: 2, // will animate for 5 seconds
        delay: 1, // will start the animation after 1 seconds
        rotate: 360, // will rotate 360 degrees
        repeat: 1 // will repeat the animation once
    })
}

function repeatInfinite() {
    gsap.to("#box5", {
        x: 900, // will move 500 pixels to the right
        duration: 2, // will animate for 5 seconds
        delay: 1, // will start the animation after 1 seconds
        rotate: 360, // will rotate 360 degrees
        repeat: -1 // will repeat the animation once
    })
}

function repeatYoyo() {
    gsap.to("#box6", {
        x: 900, // will move 500 pixels to the right
        duration: 2, // will animate for 5 seconds
        delay: 1, // will start the animation after 1 seconds
        rotate: 360, // will rotate 360 degrees
        repeat: -1, // will repeat the animation once
        yoyo: true
    })
}


//Timeline

function timelineInWrongWay() {
    gsap.to("#box7", {
        x: 1100,
        duration: 1.5,
        delay: 1
    })
    gsap.to("#box8", {
        x: 1100,
        duration: 1.5,
        delay: 2.5
    })
    gsap.to("#box9", {
        x: 1100,
        duration: 1.5,
        delay: 4
    })
}

function gsapTimeline() {
    var tl = gsap.timeline();

    tl.to("#box7", {
        x: 1100,
        duration: 1.5,
        delay: 1
    })
    tl.to("#box8", {
        x: 1100,
        duration: 1.5
    })
    tl.to("#box9", {
        x: 1100,
        duration: 1.5
    })

}

function Reset4() {
    gsap.set("#box7, #box8, #box9", {
        x: 0, // immediately resets the element's position
        rotate: 0 // immediately resets the rotation
    });
}