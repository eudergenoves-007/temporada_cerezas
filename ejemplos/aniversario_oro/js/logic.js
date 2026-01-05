gsap.registerPlugin(ScrollTrigger);

function openLegacy() {
    const gate = document.querySelector('.golden-gate');
    const emblem = document.querySelector('.emblem-container');
    const content = document.getElementById('legacy-content');

    // Desactivar clic
    emblem.onclick = null;

    const tl = gsap.timeline();

    // 1. El emblema brilla intensamente y se expande
    tl.to(emblem, { scale: 1.5, opacity: 0, duration: 1, ease: "power2.in" })
      .to(gate, { opacity: 0, duration: 1.5 }, "-=0.5")
      .set(gate, { display: "none" })
      
    // 2. Revelar contenido
      .set(content, { display: "block" })
      .to(content, { opacity: 1, duration: 2 })
      .from(".couple-title", { y: 50, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=1")
      .from(".years-display", { scaleX: 0, duration: 1 }, "-=1")
      
    // 3. Activar Scroll
      .call(() => {
          document.body.style.overflow = "auto";
          iniciarTimeline();
      });
}

function iniciarTimeline() {
    gsap.utils.toArray('.milestone').forEach(item => {
        gsap.from(item.querySelector('.milestone-content'), {
            y: 50, opacity: 0, duration: 1,
            scrollTrigger: { trigger: item, start: "top 85%" }
        });
    });
}
