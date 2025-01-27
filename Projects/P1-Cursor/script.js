// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")
// var imageDiv = document.querySelector("#image")

// main.addEventListener("mousemove", function(dets){
//     gsap.to(cursor, {
//         x: dets.x,
//         y: dets.y,
//         duration: 1
//     })
// })

// imageDiv.addEventListener("mouseenter", function(dets){
//     cursor.innerHTML = "view more"
//     gsap.to(cursor, {
//         scale:2.5,
//         backgroundColor:"#ffffff8a"
//     })
// })
// imageDiv.addEventListener("mouseleave", function(dets){
//     cursor.innerHTML = ""
//     gsap.to(cursor, {
//         scale:1,
//         backgroundColor:"#ffffff"
//     })
// })


var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
var image = document.querySelector("#image img");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.pageX - cursor.offsetWidth / 2,
        y: dets.pageY - cursor.offsetHeight / 2,
        duration: 0.1,
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.style.height = "100px";
    cursor.style.width = "100px";
    var imageURL = image.getAttribute("src");
    cursor.classList.add("zoomed");
    cursor.style.backgroundImage = `url(${imageURL})`;
});

imageDiv.addEventListener("mousemove", function (dets) {
    var rect = imageDiv.getBoundingClientRect();
    var x = dets.clientX - rect.left; // X-coordinate relative to the image
    var y = dets.clientY - rect.top;  // Y-coordinate relative to the image

    var xPercent = (x / rect.width) * 100;
    var yPercent = (y / rect.height) * 100;

    cursor.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

imageDiv.addEventListener("mouseleave", function () {
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    cursor.classList.remove("zoomed");
    cursor.style.backgroundImage = "";
    cursor.style.backgroundPosition = "center center";
});
