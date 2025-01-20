// INAPPROPRIATE WAY OF USING TIMELINE BY ADJUSTING DURATION AND DELAY
// 
// gsap.to("#box1",{
//     x: 1300,
//     duration: 1.5,
//     delay:1
// })
// gsap.to("#box2",{
//     x: 1300,
//     duration: 1.5,
//     delay:2.5
// })
// gsap.to("#box3",{
//     x: 1300,
//     duration: 1.5,
//     delay:4
// })



// CORRECT WAY OF USING TIMELINE 

var tl = gsap.timeline();

tl.to("#box1", {
    x: 1300,
    duration: 1.5,
    delay: 1
})
tl.to("#box2", {
    x: 1300,
    duration: 1.5
})
tl.to("#box3", {
    x: 1300,
    duration: 1.5
})