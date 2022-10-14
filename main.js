const tl = gsap.timeline({ defaults: { duration: 3, ease: "none" } })

tl
    .from('.img-container', {
        xPercent: 100,

    })
    .from('#logo', {
        rotation: -30
    }, '<')





ScrollTrigger.create({
    animation: tl,
    trigger: ".main-container",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    anticipatePin: 1
})
