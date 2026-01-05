// Lógica Principal de Temporada de Cerezas

function inaugurar() {
    const tl = gsap.timeline();
    
    // 1. Abrir listón
    tl.to(".ribbon-left", { x: '-100%', rotation: -10, duration: 1.2, ease: "power2.in" })
      .to(".ribbon-right", { x: '100%', rotation: 10, duration: 1.2, ease: "power2.in" }, "-=1.2")
      
    // 2. Desvanecer cortina
      .to("#curtain", { opacity: 0, duration: 1, ease: "none" }, "-=0.5")
      .set("#curtain", { display: "none" })
      
    // 3. Mostrar vitrina
      .set("#main-content", { display: "block" })
      .to("#main-content", { opacity: 1, duration: 0.5 })
      
    // 4. Animar tarjetas (Efecto cascada)
      .to(".card", { 
          y: 0, opacity: 1, duration: 1, 
          stagger: 0.2, ease: "back.out(1.7)" 
      });
}

function togglePricing() {
    const modal = document.getElementById('pricing-modal');
    if (!modal) return;

    if (getComputedStyle(modal).display === "flex") {
        // Cerrar
        gsap.to(modal, { opacity: 0, duration: 0.5, onComplete: () => modal.style.display = "none" });
    } else {
        // Abrir
        modal.style.display = "flex";
        gsap.to(modal, { opacity: 1, duration: 0.5 });
    }
}
