//Create parallax effect depemdimg on screen size
var w = parseInt(window.innerWidth);

if (w <= 500) {
    //On scroll

    window.addEventListener("scroll", scrollParallax);

    function scrollParallax(e) {
        let scrollPage = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(movement => {
            let speed = movement.dataset.speed;
            movement.style.transform = `translateY(${scrollPage * speed}px)`;
        })
    }
} else if (w > 500) {
    //On mouse movement
    document.addEventListener("mousemove", mouseParallax);

    function mouseParallax(e) {
        this.querySelectorAll('.parallax').forEach(mouseMovement => {
            let speed = mouseMovement.dataset.speed;
            mouseMovement.style.transform = `translateX(${e.pageX * speed}px) translateY(${e.pageY * speed}px`;
        })
    }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
}