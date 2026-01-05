gsap.registerPlugin(ScrollTrigger);

// Efecto Paralaje en Hero
gsap.to(".hero-bg", {
    yPercent: 30, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

// Aparición de elementos
gsap.utils.toArray('.fade-up').forEach(item => {
    gsap.from(item, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 85%" }
    });
});
