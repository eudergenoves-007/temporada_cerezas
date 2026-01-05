gsap.registerPlugin(ScrollTrigger);

// Función para mostrar/ocultar detalles bancarios
function toggleBank() {
    const info = document.getElementById('bankInfo');
    if(info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
        gsap.from(info, {height: 0, opacity: 0, duration: 0.5});
    }
}

// Función Maestra: Abrir Invitación
function abrirInvitacion() {
    const tl = gsap.timeline();
    const btn = document.getElementById('masterBtn');
    
    // Desactivar clics
    if(btn) btn.onclick = null;
    const wax = document.querySelector('.wax-seal');
    if(wax) wax.onclick = null;

    tl.addLabel("start")
      // 1. Animación del botón (giro y pulso)
      .to("#masterBtn", { rotation: 360, scale: 1.2, duration: 0.8, ease: "back.out(1.7)" }, "start")
      .to("#masterBtn", { scale: 1, duration: 0.4 }, "-=0.4")
      
      // 2. Deslizamiento del sobre
      .to("#envelope-wrapper", { y: '100%', opacity: 0, duration: 1.5, ease: "power4.inOut" }, "start+=0.2")
      
      // 3. Aparición del contenido
      .to("#invitation-content", { opacity: 1, duration: 1.5 }, "start+=0.4")
      
      // 4. Limpieza final
      .set("#envelope-wrapper", { display: "none" })
      .call(() => {
          document.body.style.overflow = "auto";
          iniciarEfectosScroll();
      });
}

// Efectos al hacer scroll
function iniciarEfectosScroll() {
    // Paralaje Hero
    gsap.to("#heroBg", { 
        y: "25%", 
        scrollTrigger: { trigger: ".parallax-hero", start: "top top", end: "bottom top", scrub: 1.5 } 
    });
    
    // Elementos animados (Itinerario, Regalos, etc.)
    gsap.utils.toArray('.anim-item').forEach(item => {
        gsap.to(item, {
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" }
        });
    });
}
