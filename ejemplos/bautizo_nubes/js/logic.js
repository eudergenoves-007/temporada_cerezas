gsap.registerPlugin(ScrollTrigger);

function popBubble() {
    const bubble = document.querySelector('.bubble-btn');
    const container = document.querySelector('.bubble-container');
    const content = document.getElementById('content');

    // Desactivar clic
    bubble.onclick = null;

    const tl = gsap.timeline();

    // 1. Efecto "Pop"
    tl.to(bubble, { scale: 1.2, duration: 0.2 })
      .to(bubble, { scale: 0, opacity: 0, duration: 0.2, ease: "back.in(2)" })
      .to(container, { opacity: 0, duration: 0.5 }, "-=0.1")
      .set(container, { display: "none" })
      
    // 2. Mostrar Contenido
      .set(content, { display: "block" })
      .to(content, { opacity: 1, duration: 1 })
      
    // 3. Animación de elementos
      .from(".photo-frame", { y: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
      .from(".baby-name", { scale: 0.8, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)" }, "-=0.8")
      
    // 4. Activar Scroll
      .call(() => {
          document.body.style.overflow = "visible"; // Permite scroll en el body
          document.documentElement.style.overflow = "visible"; 
          iniciarScroll();
      });
}

function iniciarScroll() {
    gsap.utils.toArray('.fade-up').forEach(item => {
        gsap.to(item, {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: { trigger: item, start: "top 85%" }
        });
    });
}
