gsap.registerPlugin(ScrollTrigger);

window.onload = function() {
    const video = document.getElementById('droneVideo');
    const heroImg = document.getElementById('heroImg');

    // 1. INTRODUCCIÓN: Desvanece la imagen fija para revelar el video
    const tlIntro = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-intro",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
    tlIntro.to(heroImg, { opacity: 0 }, 0)
           .to(video, { opacity: 1 }, 0);

    // 2. VIDEO SCRUBBING: Control del drone con el dedo
    // Aseguramos que el video esté cargado
    if (video) {
        video.pause(); // Importante: pausado para que GSAP lo controle
        
        let videoDuration = 10; // Valor seguro por defecto
        video.onloadedmetadata = function() {
            videoDuration = video.duration;
            initVideoScroll(videoDuration);
        };
        // Si ya cargó los metadatos (caché)
        if(video.readyState >= 1) initVideoScroll(video.duration);
    }

    function initVideoScroll(duration) {
        gsap.to(video, {
            currentTime: duration,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1 // Suavizado de 1 segundo
            }
        });
    }

    // 3. APARICIONES DE ROMMEL
    // Rommel saluda (Izquierda)
    gsap.to("#rommel1", {
        x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)",
        scrollTrigger: { trigger: "#trigger1", start: "top center", toggleActions: "play reverse play reverse" }
    });

    // Rommel señala (Derecha)
    gsap.to("#rommel2", {
        x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)",
        scrollTrigger: { trigger: "#trigger2", start: "top center", toggleActions: "play reverse play reverse" }
    });

    // 4. ANIMACIÓN HERO TEXT
    gsap.to(".hero-title", {
        y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5
    });
};
