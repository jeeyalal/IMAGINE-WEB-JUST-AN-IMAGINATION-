Shery.mouseFollower();
Shery.makeMagnet(".magnet")

Shery.hoverWithMediaCircle(".heffect", { images: ["./img/shoes1.jfif", "./img/shoes2.jfif", "./img/shoes3.webp"] })

gsap.to(".fleftelem", {
    scrollTrigger: {
        trigger: "#featureimg",
        pin: true,
        start: "top top",
        end: "end end",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelem");

Shery.imageEffect(".images", {
    style: 1,
    config: {onMouse: {value: 1}},
    slideStyle: (setScroll) => {
        sections.forEach(function (section,index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog) {
                    setScroll(prog.progress+index)          
                    },
            });
        });
    },
});

Shery.imageEffect(".glass", {
    style: 1,
    config: {onMouse: {value: 1}},
    
});

Shery.textAnimate(".anim" /* Element to target.*/, {
    
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 0.1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
