gsap.from(".startFromFirst", {
    stagger: 1, // Delays the start of each element's animation by 1 second
    opacity: 0, // Starts with elements fully transparent
    duration: 1, // Each animation lasts 1 second
    y: 20, // Starts 20 pixels below the final position
    delay: 1 // Delays the entire animation sequence by 1 second
});

gsap.from(".startFromLast", {
    stagger: -1, // Delays the start of each element's animation by 1 second
    opacity: 0, // Starts with elements fully transparent
    duration: 1, // Each animation lasts 1 second
    y: 20, // Starts 20 pixels below the final position
    delay: 1 // Delays the entire animation sequence by 1 second
});
