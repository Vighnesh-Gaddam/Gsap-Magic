gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({});

function page1Animation() {
    tl.from("nav h1,nav h4,nav button", {
        y: -20,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
        stagger: 0.2
    })

    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    }, "-=0.3")

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part2 img", {
        x: 200,
        opacity: 0,
        duration: 0.5,
    }, "-=0.7")

    tl.from(".section1bottom img", {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.15
    })
}

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top -70%",
            scrub:2
        }
    });
    
    tl2.from(".service", {
        y: 30,
        opacity: 0,
        duration: 0.5,
    })
    
    
    //Line 1 Animation
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"hi")
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"hi")
    
    //Line 2 Animation
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"hi2")
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"hi2")
    
    //Line 3 Animation
    tl2.from(".elem.line3.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"hi3")
    tl2.from(".elem.line3.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"hi3")
    
    //Line 4 Animation
    tl2.from(".elem.line4.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"hi4")
    tl2.from(".elem.line4.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"hi4")
}

page1Animation();
page2Animation();