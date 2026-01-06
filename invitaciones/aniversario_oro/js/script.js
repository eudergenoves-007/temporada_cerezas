// Lógica de Apertura del Sobre
let isOpen = false;

function openEnvelope() {
    if (isOpen) return;
    isOpen = true;

    const envelope = document.getElementById('envelope');
    const introScene = document.getElementById('intro-scene');
    const mainContent = document.getElementById('main-content');
    
    const tl = gsap.timeline();

    // 1. Abrir sobre
    tl.to('.wax-seal', { scale: 1.5, opacity: 0, duration: 0.3 })
      .to('.flap.top', { rotateX: 180, zIndex: 0, duration: 0.8, ease: "power2.inOut" })
      
    // 2. Sacar tarjeta
      .to('.card-preview', { 
          y: -100, 
          scale: 1.2, 
          duration: 1, 
          zIndex: 50,
          ease: "back.out(1.7)" 
      })
      
    // 3. Transición a pantalla completa
      .to(introScene, { opacity: 0, duration: 1, delay: 0.5 })
      .set(introScene, { display: 'none' })
      .set(mainContent, { display: 'block' })
      .to(mainContent, { opacity: 1, duration: 1 })
      
    // 4. Animar elementos del contenido
      .from('.names', { y: 50, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=0.5")
      .from('.golden-text', { opacity: 0, duration: 1 }, "-=1");

    // Activar ScrollTrigger para el resto
    initScrollAnimations();
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.fade-up').forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });
}
