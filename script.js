var cursor = document.querySelector("#bubble");
var main = document.querySelector("#main2");

window.addEventListener('mousemove', function(details){
    gsap.to(cursor, {
        x: details.x,
        y: details.y,
        duration: 0.4,
        ease: "back.out"
    })
})
