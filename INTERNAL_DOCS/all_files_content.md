# Project File Contents

_Generated: 2026-01-04 23:42:19_

## Index
- **ejemplos/**    - **boda_elegante/**            - [index.html](#ejemplosboda_eleganteindexhtml)    - [GUIA_MAESTRO.md](#GUIA_MAESTROmd)    - [GUIA_MAESTRO_CEREZA.md](#GUIA_MAESTRO_CEREZAmd)    - [IDENTIDAD_CEREZA.md](#IDENTIDAD_CEREZAmd)    - [index.html](#indexhtml)
---
## ejemplos/boda_elegante/index.html
<a name="ejemplosboda_eleganteindexhtml"></a>
_(Total lines: 107)_
```html
1 | <!DOCTYPE html>
2 | <html lang="es">
3 | <head>
4 |     <meta charset="UTF-8">
5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
6 |     <title>Sofía & Alejandro | Boda Elite</title>
7 |     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
8 |     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
9 |     <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=Pinyon+Script&family=Montserrat:wght@300;600&display=swap" rel="stylesheet">
10 |     <style>
11 |         :root { --cherry: #7a0019; --gold: #d4af37; --paper: #fffcf9; }
12 |         body, html { margin: 0; padding: 0; background: #120305; overflow: hidden; font-family: 'Montserrat', sans-serif; }
13 | 
14 |         /* --- EL SOBRE VIRTUAL --- */
15 |         #envelope-wrapper {
16 |             position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 3000; background: #1a0509;
17 |         }
18 |         .envelope {
19 |             width: 90%; max-width: 400px; height: 300px; background: var(--cherry); border-radius: 10px;
20 |             position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center;
21 |         }
22 |         .wax-seal {
23 |             width: 80px; height: 80px; background: radial-gradient(circle, #d4af37, #b8860b);
24 |             border-radius: 50%; border: 2px solid #f4e1c1; cursor: pointer;
25 |             display: flex; justify-content: center; align-items: center; font-family: 'Pinyon Script';
26 |             font-size: 2rem; color: var(--cherry); box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 10;
27 |         }
28 | 
29 |         /* --- LA INVITACIÓN (EL CONTENIDO) --- */
30 |         #invitation-scroll {
31 |             display: none; height: 100vh; overflow-y: auto; background: var(--paper); color: #333; opacity: 0;
32 |         }
33 |         .hero-wedding {
34 |             height: 100vh; background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)),
35 |             url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80');
36 |             background-size: cover; background-position: center; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
37 |         }
38 |         .names { font-family: 'Pinyon Script', cursive; font-size: 5rem; color: var(--cherry); margin: 0; }
39 |         .details { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; letter-spacing: 3px; text-transform: uppercase; margin-top: 20px; }
40 | 
41 |         /* --- BOTONES ESTILO BOUTIQUE --- */
42 |         .btn-gold {
43 |             display: inline-block; padding: 18px 35px; margin: 20px 10px; background: var(--cherry); color: var(--gold);
44 |             text-decoration: none; border: 1px solid var(--gold); border-radius: 0; font-weight: 600; letter-spacing: 2px;
45 |             transition: 0.3s;
46 |         }
47 |         .btn-gold:hover { background: var(--gold); color: var(--cherry); }
48 | 
49 |         /* --- CUENTA REGRESIVA --- */
50 |         .countdown { display: flex; gap: 20px; margin: 40px 0; font-family: 'Cormorant Garamond'; }
51 |         .count-item { text-align: center; }
52 |         .count-num { font-size: 2.5rem; display: block; color: var(--cherry); }
53 |     </style>
54 | </head>
55 | <body>
56 | 
57 |     <div id="envelope-wrapper">
58 |         <div class="envelope" id="env">
59 |             <div class="wax-seal" onclick="breakSeal()">TC</div>
60 |             <p style="position: absolute; bottom: 20px; color: var(--gold); font-size: 0.7rem; letter-spacing: 2px;">TOCA EL SELLO PARA ABRIR</p>
61 |         </div>
62 |     </div>
63 | 
64 |     <div id="invitation-scroll">
65 |         <section class="hero-wedding">
66 |             <p style="letter-spacing: 8px; font-size: 0.8rem; margin-bottom: 20px;">NUESTRA BODA</p>
67 |             <h1 class="names">Sofía & Alejandro</h1>
68 |             <div class="countdown">
69 |                 <div class="count-item"><span class="count-num">152</span> Días</div>
70 |                 <div class="count-item"><span class="count-num">12</span> Horas</div>
71 |                 <div class="count-item"><span class="count-num">45</span> Min</div>
72 |             </div>
73 |             <p class="details">15 . Agosto . 2026</p>
74 |             <div style="margin-top: 50px;">
75 |                 <a href="#" class="btn-gold"><i class="fas fa-map-marker-alt"></i> UBICACIÓN</a>
76 |                 <a href="#" class="btn-gold"><i class="fab fa-whatsapp"></i> CONFIRMAR</a>
77 |             </div>
78 |         </section>
79 | 
80 |         <section style="padding: 100px 20px; background: #fff;">
81 |             <h2 style="font-family: 'Cormorant Garamond'; font-size: 2.5rem;">Mesa de Regalos</h2>
82 |             <p style="max-width: 600px; margin: 20px auto; line-height: 1.8;">
83 |                 Vuestra presencia es el mejor regalo, pero si deseáis tener un detalle con nosotros, os dejamos nuestra lista de deseos.
84 |             </p>
85 |             <a href="#" class="btn-gold" style="background: transparent; color: #333; border-color: #333;">VER LISTA DE AMAZON</a>
86 |         </section>
87 |     </div>
88 | 
89 |     <script>
90 |         function breakSeal() {
91 |             const tl = gsap.timeline();
92 | 
93 |             // 1. Efecto de "romper" el sello
94 |             tl.to(".wax-seal", { scale: 1.5, opacity: 0, duration: 0.5, ease: "power2.in" })
95 |               .to("#env", { y: '100vh', opacity: 0, duration: 1.2, ease: "expo.inOut" }, "-=0.2")
96 |               .set("#envelope-wrapper", { display: "none" })
97 | 
98 |             // 2. Revelar la invitación con un slide-up elegante
99 |               .set("#invitation-scroll", { display: "block" })
100 |               .to("#invitation-scroll", { opacity: 1, duration: 1.5 })
101 |               .call(() => {
102 |                   document.body.style.overflow = "auto";
103 |               });
104 |         }
105 |     </script>
106 | </body>
107 | </html>
```
---
## GUIA_MAESTRO.md
<a name="GUIA_MAESTROmd"></a>
_(Total lines: 344)_
_(Showing up to 10 lines, max 2000 characters)_
```markdown
1 | # Project Directory Tree
2 | 
3 | _Generated: 2026-01-04 23:41:07_
4 | 
5 | **Detected extensions:** `.html, .md`
6 | 
7 | _(Files: 6, Folders: 8)_
8 | 
9 | ```text
10 | temporada_cerezas/
```
---
## GUIA_MAESTRO_CEREZA.md
<a name="GUIA_MAESTRO_CEREZAmd"></a>
_(Total lines: 2)_
_(Showing up to 10 lines, max 2000 characters)_
```markdown
1 | DONE -> Directory tree saved in ./INTERNAL_DOCS/directory_tree.md
2 | DONE -> File contents saved in ./INTERNAL_DOCS/all_files_content.md
```
---
## IDENTIDAD_CEREZA.md
<a name="IDENTIDAD_CEREZAmd"></a>
_(Total lines: 14)_
_(Showing up to 10 lines, max 2000 characters)_
```markdown
1 | # 🍒 IDENTIDAD VISUAL: TEMPORADA DE CEREZAS
2 | 
3 | **Misión:** Crear invitaciones digitales que se sientan como regalos de lujo. Ser el gancho para servicios de eventos premium.
4 | 
5 | ## Paleta de Colores Base
6 | * **Cereza Profundo (Primary):** #990033 (Para acentos fuertes, botones de lujo)
7 | * **Rosa Cereza Suave (Secondary):** #FFCCD5 (Para fondos, brillos de cristal)
8 | * **Dorado/Crema (Accent):** #F4E1C1 (Para tipografía elegante y bordes)
9 | * **Cristal Oscuro (Glass):** rgba(30, 0, 10, 0.6) con desenfoque (blur).
10 | 
```
---
## index.html
<a name="indexhtml"></a>
_(Total lines: 169)_
```html
1 | <!DOCTYPE html>
2 | <html lang="es">
3 | <head>
4 |     <meta charset="UTF-8">
5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
6 |     <title>Temporada de Cerezas 🍒 | Invitaciones de Lujo</title>
7 |     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
8 |     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
9 |     <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=Pinyon+Script&family=Montserrat:wght@300;600&display=swap" rel="stylesheet">
10 |     <style>
11 |         :root { --cherry: #7a0019; --gold: #d4af37; --bg: #120305; }
12 | 
13 |         /* Reset para permitir el scroll después */
14 |         html, body {
15 |             margin: 0; padding: 0; width: 100%; height: 100%;
16 |             background: var(--bg); color: #fff; font-family: 'Montserrat', sans-serif;
17 |             overflow-x: hidden;
18 |         }
19 | 
20 |         /* --- PANTALLA DE ENTRADA (MISTERIO) --- */
21 |         #curtain {
22 |             position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
23 |             background: radial-gradient(circle, #3d000d 0%, var(--bg) 100%);
24 |             display: flex; flex-direction: column; justify-content: center; align-items: center;
25 |             z-index: 2000;
26 |         }
27 |         .cherry-emblem {
28 |             font-family: 'Pinyon Script', cursive; font-size: 6rem;
29 |             color: var(--gold); margin-bottom: 20px; filter: drop-shadow(0 0 10px rgba(212,175,55,0.3));
30 |         }
31 |         .ribbon {
32 |             width: 100%; height: 70px;
33 |             background: linear-gradient(to bottom, #b8860b, #f4e1c1, #b8860b);
34 |             box-shadow: 0 10px 40px rgba(0,0,0,0.8);
35 |             display: flex; justify-content: center; align-items: center;
36 |             cursor: pointer; position: relative; z-index: 2001;
37 |             border-top: 1px solid rgba(255,255,255,0.2); border-bottom: 1px solid rgba(255,255,255,0.2);
38 |         }
39 |         .ribbon-text {
40 |             font-family: 'Montserrat', sans-serif; font-weight: 600;
41 |             color: var(--cherry); letter-spacing: 5px; font-size: 0.85rem;
42 |         }
43 | 
44 |         /* --- PÉTALOS --- */
45 |         #petal-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1500; }
46 |         .petal { position: absolute; background: #ffccd5; border-radius: 150% 0 150% 0; opacity: 0.6; }
47 | 
48 |         /* --- CONTENIDO PRINCIPAL (VITRINA) --- */
49 |         #main-content {
50 |             display: none; /* Se activa con JS */
51 |             opacity: 0; padding-top: 100px; padding-bottom: 50px;
52 |         }
53 |         .glass-nav {
54 |             position: fixed; top: 0; width: 100%; padding: 25px;
55 |             backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
56 |             border-bottom: 1px solid rgba(255,255,255,0.1);
57 |             display: flex; justify-content: space-between; align-items: center; z-index: 1000;
58 |         }
59 |         .logo { font-family: 'Pinyon Script', cursive; font-size: 2.2rem; color: var(--gold); text-decoration: none; }
60 | 
61 |         .showroom {
62 |             padding: 40px 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
63 |             gap: 40px; max-width: 1200px; margin: auto;
64 |         }
65 |         .card {
66 |             height: 550px; border-radius: 40px; overflow: hidden;
67 |             border: 1px solid rgba(255,255,255,0.1); position: relative;
68 |             transition: transform 0.5s ease;
69 |         }
70 |         .card:hover { transform: translateY(-10px); border-color: var(--gold); }
71 |         .card-img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6); }
72 |         .card-info {
73 |             position: absolute; bottom: 0; padding: 40px;
74 |             background: linear-gradient(transparent, rgba(18,3,5,0.95)); width: 100%; box-sizing: border-box;
75 |         }
76 |         .invitation-title { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; color: var(--gold); margin: 0; }
77 |         .badge {
78 |             font-family: 'Montserrat'; background: var(--cherry); padding: 6px 18px;
79 |             border-radius: 50px; font-size: 0.7rem; font-weight: 600; margin-bottom: 15px; display: inline-block;
80 |         }
81 |     </style>
82 | </head>
83 | <body style="overflow: hidden;"> <div id="curtain">
84 |         <div class="cherry-emblem">Temporada de Cerezas</div>
85 |         <p style="font-family: 'Cormorant Garamond'; font-style: italic; font-size: 1.4rem; color: #f4e1c1; margin-bottom: 40px; letter-spacing: 2px;">Exclusividad en cada detalle</p>
86 |         <div class="ribbon" onclick="openGift()">
87 |             <span class="ribbon-text">TOCA PARA ENTRAR</span>
88 |         </div>
89 |     </div>
90 | 
91 |     <div id="petal-container"></div>
92 | 
93 |     <div id="main-content">
94 |         <nav class="glass-nav">
95 |             <a href="#" class="logo">Temporada de Cerezas</a>
96 |             <div style="color: var(--gold); font-size: 1.2rem;"><i class="fas fa-crown"></i></div>
97 |         </nav>
98 | 
99 |         <section class="showroom">
100 |             <div class="card" onclick="location.href='ejemplos/boda_elegante/index.html'">
101 |                 <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" class="card-img">
102 |                 <div class="card-info">
103 |                     <div class="badge">COLECCIÓN BODAS</div>
104 |                     <h3 class="invitation-title">Sofía & Alejandro</h3>
105 |                     <p style="opacity: 0.8; font-size: 0.9rem;">Elegancia clásica con integración GPS.</p>
106 |                 </div>
107 |             </div>
108 | 
109 |             <div class="card">
110 |                 <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80" class="card-img">
111 |                 <div class="card-info">
112 |                     <div class="badge">MIS QUINCE</div>
113 |                     <h3 class="invitation-title">Noche de Estrellas</h3>
114 |                     <p style="opacity: 0.8; font-size: 0.9rem;">Interactividad neón y confirmación RSVP.</p>
115 |                 </div>
116 |             </div>
117 | 
118 |             <div class="card">
119 |                 <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80" class="card-img">
120 |                 <div class="card-info">
121 |                     <div class="badge">BAUTIZOS</div>
122 |                     <h3 class="invitation-title">Nubes de Algodón</h3>
123 |                     <p style="opacity: 0.8; font-size: 0.9rem;">Diseños tiernos con galería de fotos.</p>
124 |                 </div>
125 |             </div>
126 |         </section>
127 |     </div>
128 | 
129 |     <script>
130 |         function createPetals() {
131 |             const container = document.getElementById('petal-container');
132 |             for (let i = 0; i < 40; i++) {
133 |                 const petal = document.createElement('div');
134 |                 petal.className = 'petal';
135 |                 const size = Math.random() * 20 + 10 + 'px';
136 |                 petal.style.width = size;
137 |                 petal.style.height = size;
138 |                 petal.style.left = Math.random() * 100 + 'vw';
139 |                 petal.style.top = -20 + 'px';
140 |                 container.appendChild(petal);
141 | 
142 |                 gsap.to(petal, {
143 |                     y: '110vh', x: '+=' + (Math.random() * 200 - 100),
144 |                     rotation: Math.random() * 720, duration: Math.random() * 4 + 3,
145 |                     delay: Math.random() * 2, ease: "none", repeat: -1
146 |                 });
147 |             }
148 |         }
149 | 
150 |         function openGift() {
151 |             const tl = gsap.timeline();
152 | 
153 |             // 1. Desaparece el listón y la cortina
154 |             tl.to(".ribbon", { scaleX: 0, opacity: 0, duration: 0.8, ease: "power2.in" })
155 |               .to("#curtain", { y: '-100%', duration: 1.2, ease: "expo.inOut" }, "-=0.3")
156 | 
157 |             // 2. Muestra el contenido y HABILITA EL SCROLL
158 |               .set("#main-content", { display: "block" })
159 |               .to("#main-content", { opacity: 1, duration: 1 })
160 |               .call(() => {
161 |                   // AQUÍ ESTÁ EL TRUCO: Forzamos al body a recuperar el scroll
162 |                   document.body.style.overflow = "visible";
163 |                   document.documentElement.style.overflow = "visible";
164 |                   createPetals();
165 |               });
166 |         }
167 |     </script>
168 | </body>
169 | </html>
```
---
