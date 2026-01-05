gsap.registerPlugin(ScrollTrigger);

function unlockParty() {
    const btn = document.querySelector('.access-btn');
    const lock = document.getElementById('lock-screen');
    const content = document.getElementById('party-content');

    // Desactivar clic
    btn.onclick = null;

    const tl = gsap.timeline();
    
    // 1. Animación "Explosión" del botón
    tl.to(btn, { scale: 50, duration: 1, ease: "power2.in" })
      .to(lock, { opacity: 0, duration: 0.5 }, "-=0.2")
      .set(lock, { display: "none" })
      .set(btn, { display: "none" }) // Limpiar botón
      
      // 2. Mostrar contenido
      .set(content, { display: "block" })
      .to(content, { opacity: 1, duration: 1 })
      
      // 3. Activar scroll
      .call(() => {
          document.body.style.overflow = "auto";
          iniciarAnimacionesNeon();
      });
}

function iniciarAnimacionesNeon() {
    // Títulos que parpadean
    gsap.from(".hero-content", {
        scale: 0.8, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.3)"
    });

    // Cards deslizando
    gsap.utils.toArray('.glass-card').forEach(card => {
        gsap.from(card, {
            y: 50, opacity: 0, duration: 0.8,
            scrollTrigger: { trigger: card, start: "top 80%" }
        });
    });
}
