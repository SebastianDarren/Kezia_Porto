(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const ie="https://www.linkedin.com/in/kezia-valerine-793673411/",N="https://www.instagram.com/vale.portofolio",F="createbykezia@gmail.com",fe=(e,t)=>Array.from({length:t},(s,a)=>`${e}-${String(a+1).padStart(2,"0")}`),U=[{id:"starters",name:"Starters",note:"to begin with"},{id:"mains",name:"Mains",note:"the big ones"},{id:"sweets",name:"Sweets",note:"to end on a high"}],X=[{slug:"gelang-hera",course:"starters",title:"Gelang Hera Buah yang Unik",kind:"Children’s picture book",year:"2025",role:"Book Illustrator & Layout Designer",tags:["Illustration","Layout","Storytelling"],accent:"#d8a548",pick:!0,cover:{src:"gelang-02",fit:"cover",pos:"50% 40%"},link:{href:"http://bit.ly/43qNHmG",label:"View publication"},desc:["As the illustrator of “Gelang Hera Buah yang Unik”, I was responsible for bringing the story to life through visual storytelling. I created the character designs, environments, and illustrations while ensuring that each scene clearly communicated the emotions and events in the story.","To create an engaging experience for young readers, I researched children’s book illustration styles, color usage, and page composition.","Through this project, I combined illustration, storytelling, and layout design to produce a visually appealing book that promotes creativity, family values, and cultural representation while making the story easy and enjoyable for children to understand."],gallery:{type:"hscroll",title:"Turn the pages",ratio:865/610,items:fe("gelang",13).map((e,t)=>({src:e,alt:t===0?"Book cover: Gelang Hera Buah yang Unik":`Book spread ${t+1}`,cap:t===0?"Cover":`Spread ${t+1}`}))}},{slug:"miracle-cell-7",course:"starters",title:"Re-design Poster into Horror Theme",kind:"Miracle in Cell No. 7 · movie poster",year:"2026",role:"Graphic Designer",tags:["Poster","Concept","Horror"],accent:"#c4472f",cover:{src:"poster-after",fit:"contain",pos:"50% 50%",bg:"radial-gradient(120% 90% at 50% 40%, #1d2a24, #0e1512)"},link:{href:"https://bit.ly/4v4kI4c",label:"View publication"},desc:["The original poster of Miracle in Cell No. 7 focuses on the love between a father and his daughter. The poster usually uses bright colors and a warm feeling. The characters look happy or emotional, showing the family relationship and touching moments in the movie. The main goal of the original poster is to show that the movie is a sad but heartwarming story about family and love.","In the redesigned poster, the concept is darker and more dramatic. The characters are placed around a hole and looking down. This makes the audience feel like they are inside the hole and everyone is looking at them. The purpose of this redesign is to make the poster look like a horror movie. The characters looking down into the hole make the audience feel like they are trapped and being watched. The dark colors and shocked expressions create a scary and mysterious atmosphere that makes people curious about the story."],gallery:{type:"compare",title:"Before & after",before:{src:"poster-before",alt:"Original Miracle in Cell No. 7 poster, bright and warm"},after:{src:"poster-after",alt:"Redesigned poster with a dark horror theme"},phone:{src:"poster-phone",alt:"Redesigned poster shown on a phone held in a hand"}}},{slug:"selerine",course:"mains",title:"Selerine",kind:"Digital banking app concept",year:"Concept",role:"UI Designer",tags:["UI Design","Mobile app","Fintech"],accent:"#5fa3a6",pick:!0,cover:{src:"selerine-wide",fit:"cover",pos:"50% 40%"},link:{href:"https://selerine.vercel.app",label:"Visit website"},desc:["Selerine is a digital banking app concept designed to make managing money easier, simpler, and more enjoyable, especially for younger users. I created this project with a focus on modern UI design, combining a clean interface, attractive visuals, and easy-to-use features.","The app allows users to manage their money, make transfers, pay with QRIS, track their expenses, and set personal savings goals in one place. My goal was to create a banking experience that feels modern, practical, and engaging, so young users can feel more comfortable managing their finances in their daily lives."],gallery:{type:"phone",title:"What’s on the plate",image:{src:"selerine-wide",alt:"Selerine app splash screen on a phone held in a hand"},features:["Manage money","Transfers","Pay with QRIS","Track expenses","Savings goals"]}},{slug:"bank-mayapada",course:"mains",title:"Re-design Bank Mayapada Logo",kind:"Brand identity",year:"2026",role:"Graphic Designer",tags:["Branding","Logo","Identity system"],accent:"#7c9a77",pick:!0,cover:{src:"mayapada-09",fit:"cover",pos:"50% 50%"},link:{href:"https://bit.ly/4xlIQAP",label:"View publication"},desc:["This project focuses on redesigning the visual identity of Bank Mayapada to create a more modern, professional, and memorable brand image. After analyzing the existing logo, I researched banking industry branding, logo design principles, color psychology, and the visual identities of other financial institutions to better understand how visual design can communicate trust, stability, and growth.","Based on this research, I developed a new logo concept inspired by financial growth and continuous development, using a flowing symbol to represent progress and future opportunities. The combination of green and blue reflects growth, security, trust, and professionalism, while the clean sans-serif typography improves readability and creates a modern appearance.","To ensure consistency across different applications, I also developed a complete brand identity system, including logo variations, color palettes, typography guidelines, stationery designs, and promotional merchandise. Through this project, I strengthened my skills in branding, graphic design, and visual communication while creating a cohesive visual identity that effectively represents Bank Mayapada’s values and vision."],gallery:{type:"stack",title:"The brand book",ratio:1.42,items:[{src:"mayapada-01",alt:"Logo philosophy slide",cap:"Filosofi Logo"},{src:"mayapada-02",alt:"Visual character slide",cap:"Karakter Visual"},{src:"mayapada-03",alt:"Logo configuration slide",cap:"Konfigurasi Logo"},{src:"mayapada-04",alt:"Logo proportion slide",cap:"Proporsi Logo"},{src:"mayapada-05",alt:"Logo color variations slide",cap:"Variasi Warna Logo"},{src:"mayapada-06",alt:"Identity typography slide",cap:"Tipografi Identitas"},{src:"mayapada-07",alt:"Identity color palette slide",cap:"Palet Warna Identitas"},{src:"mayapada-08",alt:"Stationery and documentation mockups",cap:"Alat Perkantoran dan Perdokumentasi"},{src:"mayapada-09",alt:"Promotional merchandise mockups",cap:"Cinderamata"}]}},{slug:"campus-life",course:"sweets",title:"Campus Life",kind:"Photo series",year:"2026",role:"Photographer & Layout Designer",tags:["Photography","Layout","Cinematic"],accent:"#c9704f",cover:{src:"campus-02",fit:"cover",pos:"50% 50%"},link:{href:"http://bit.ly/43qNHmG",label:"View publication"},desc:["This photography project aims to capture meaningful moments of student life and present them through a cinematic visual style inspired by streaming platform interfaces. Before taking the photos, I researched photography techniques, camera settings, and visual storytelling to understand how lighting, composition, ISO, aperture, and color can influence emotions and create atmosphere.","The main goal was not only to document activities, but also to make viewers feel the emotions behind each moment, such as focus, friendship, reflection, and personal growth. To achieve this, I carefully adjusted the ISO and aperture settings to control light, depth of field, and image clarity, while using warm and dark color tones to create a dramatic and intimate mood.","Through this project, I combined technical photography skills with storytelling and design principles to create images that are visually engaging and emotionally meaningful, allowing viewers to connect with the stories behind each photograph."],gallery:{type:"hscroll",title:"Now showing",ratio:1500/1064,items:[{src:"campus-01",alt:"Close-up of a student’s eyes in a cinematic frame",cap:"Still 1"},{src:"campus-02",alt:"Quiet Time Alone: a student praying",cap:"Quiet Time Alone"},{src:"campus-03",alt:"A student working on a laptop in the library",cap:"Still 3"},{src:"campus-04",alt:"Presentation Day: a student studying in the library",cap:"Presentation Day"},{src:"campus-05",alt:"Two friends laughing between classes",cap:"Still 5"},{src:"campus-06",alt:"First Day on Campus: a camera in a hand",cap:"First Day on Campus"}]}},{slug:"final-project",course:"sweets",title:"Final Project",kind:"3D modeling & rendering",year:"2026",role:"Graphic Designer",tags:["3D","Product visual","Character"],accent:"#d8a548",cover:{src:"final-04",fit:"cover",pos:"50% 50%"},link:{href:"https://bit.ly/4v4kI4c",label:"View publication"},desc:["This project was created as part of my university examination to demonstrate my skills in 3D modeling, texturing, lighting, composition, and rendering. The project consists of two different themes: a tea cup series and a Funko Pop inspired character based on Catwoman.","Before creating the models, I researched product photography, toy design, materials, lighting techniques, and composition to understand how to make 3D objects look realistic and visually appealing. The main challenge was creating detailed models while maintaining a balanced composition and realistic lighting. To solve this, I carefully adjusted the materials, textures, camera angles, and lighting setup to highlight the shapes, colors, and details of each object.","The tea cup series was designed to showcase elegant product visualization, while the Catwoman inspired Funko Pop focused on character design and storytelling. Through this project, I combined creativity and technical skills to create high quality renders that demonstrate my understanding of 3D design principles and visual communication."],gallery:{type:"grid",title:"Fresh out of the render",items:[{src:"final-01",alt:"Tea cup render, blue and white porcelain",w:2},{src:"final-04",alt:"Catwoman inspired Funko Pop character render",w:1},{src:"final-02",alt:"Glass tea cup render with a warm drink",w:1},{src:"final-05",alt:"Funko Pop character beside a duck figure",w:2},{src:"final-03",alt:"Tea set render with several cups",w:2},{src:"final-06",alt:"Character render with soft bokeh lights",w:1},{src:"final-07",alt:"Porcelain tea cup close-up",w:1},{src:"final-08",alt:"Character and lamp composition",w:2}]}}],ge=["Illustrator","Photoshop","After Effects","Blender","Figma","Canva","CapCut"],ve=["Illustration","Branding","UI Design","Photography","3D","Poster"],p=(e,t=document)=>t.querySelector(e),k=(e,t=document)=>[...t.querySelectorAll(e)],L=matchMedia("(prefers-reduced-motion: reduce)").matches,ne=matchMedia("(hover: hover) and (pointer: fine)").matches,y=(e,t=0,s=1)=>Math.min(s,Math.max(t,e)),O=e=>new Promise(t=>setTimeout(t,e)),o=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),$=e=>`img/${e}.webp`,Y=e=>1-Math.pow(1-e,3),ye=e=>1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2),M=p("#app"),K=p("#bar");let w=innerHeight,W=innerWidth;const C=U.flatMap(e=>X.filter(t=>t.course===e.id)),oe=e=>String(C.indexOf(e)+1).padStart(2,"0");let Z=[],H=[],P=null;const x=e=>Z.push(e),D=e=>H.push(e),g=(e,t,s,a)=>{e.addEventListener(t,s,a),D(()=>e.removeEventListener(t,s,a))};let V=scrollY;function re(){const e=scrollY;for(const s of Z)s(e);const t=e-V;K.classList.toggle("solid",e>24),e>420&&t>6?K.classList.add("hide"):(t<-4||e<420)&&K.classList.remove("hide"),V=e,requestAnimationFrame(re)}addEventListener("resize",()=>{w=innerHeight,W=innerWidth});function be(e){e.setAttribute("aria-label",e.textContent.replace(/\s+/g," ").trim());let t=0;const s=a=>{const n=document.createDocumentFragment();return a.childNodes.forEach(i=>{if(i.nodeType===3)i.textContent.split(/(\s+)/).forEach(l=>{if(!l)return;if(/^\s+$/.test(l)){n.append(" ");return}const f=document.createElement("span");f.className="w",f.setAttribute("aria-hidden","true");const h=document.createElement("span");h.style.setProperty("--i",t++),h.textContent=l,f.append(h),n.append(f)});else if(i.nodeType===1){const l=i.cloneNode(!1);l.append(s(i)),n.append(l)}}),n};e.replaceChildren(s(e))}function we(){P=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),P.unobserve(t.target))})},{threshold:.14,rootMargin:"0px 0px -6% 0px"}),k("[data-in],[data-reveal],[data-split]").forEach(e=>P.observe(e))}function ke(e){const t=e.textContent.trim();e.setAttribute("aria-label",t),e.innerHTML=t.split(/\s+/).map(a=>`<span class="sw" aria-hidden="true">${o(a)}</span>`).join(" ");const s=k(".sw",e);if(L){s.forEach(a=>a.classList.add("on"));return}x(()=>{const a=e.getBoundingClientRect(),n=y((w*.82-a.top)/(a.height+w*.2));s.forEach((i,l)=>i.classList.toggle("on",l/s.length<n*1.04))})}function le(e){L||x(()=>{e.forEach((t,s)=>{const a=e[s+1];if(!a)return;const n=a.offsetTop-t.offsetTop,i=y(1-(a.getBoundingClientRect().top-t.getBoundingClientRect().top)/n);t.style.setProperty("--q",i.toFixed(3)),t.style.transform=`scale(${1-i*.06})`})})}function ce(){const e=k(".badge");e.length&&x(t=>{const s=L?0:performance.now()/1e3;e.forEach(a=>{a.style.transform=`rotate(${s*9+t*.12}deg)`})})}function $e(){!ne||L||k(".btn").forEach(e=>{g(e,"pointermove",t=>{const s=e.getBoundingClientRect();e.style.transform=`translate(${(t.clientX-s.left-s.width/2)*.22}px,${(t.clientY-s.top-s.height/2)*.32}px)`}),g(e,"pointerleave",()=>{e.style.transform=""})})}const m={el:p("#lb"),img:p("#lbImg"),cap:p("#lbCap"),items:[],i:0,opener:null};function de(){const e=m.items[m.i];m.img.src=e.src,m.img.alt=e.alt,m.cap.textContent=`${e.cap} · ${m.i+1} / ${m.items.length}`}function Le(e,t,s){m.items=e,m.i=t,m.opener=s,de(),m.el.hidden=!1,document.body.classList.add("lock"),requestAnimationFrame(()=>m.el.classList.add("show")),p("#lbClose").focus()}function Q(){m.el.hidden||(m.el.classList.remove("show"),document.body.classList.remove("lock"),setTimeout(()=>{m.el.hidden=!0},380),m.opener&&m.opener.focus({preventScroll:!0}))}const z=e=>{m.i=(m.i+e+m.items.length)%m.items.length,de()};p("#lbClose").onclick=Q;p("#lbPrev").onclick=()=>z(-1);p("#lbNext").onclick=()=>z(1);m.el.addEventListener("click",e=>{e.target===m.el&&Q()});addEventListener("keydown",e=>{m.el.hidden||(e.key==="Escape"&&Q(),e.key==="ArrowLeft"&&z(-1),e.key==="ArrowRight"&&z(1))});function xe(e,t){const s=t.map(a=>({src:$(a.src),alt:a.alt,cap:a.cap||a.alt}));k("[data-lb]",e).forEach(a=>{const n=()=>Le(s,+a.dataset.lb,a);g(a,"click",n),g(a,"keydown",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n())})})}const T='target="_blank" rel="noopener noreferrer"',q=(e="")=>`<a class="btn ${e}" href="${ie}" ${T}>Meet me <span class="arr">↗</span></a>`,j='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z"/></svg>',pe=()=>`
  <div class="badge" aria-hidden="true"><img src="img/icon.webp" alt="" width="640" height="640"></div>`,_=()=>`
  <footer class="foot">
    <div class="wrap">
      <p class="script" data-reveal>hungry for more?</p>
      <h2 class="big-h" data-split>Let’s cook something <em>together.</em></h2>
      <div class="foot-links" data-reveal style="--d:300">
        <a class="btn" href="#/contact">Say hello <span class="arr">→</span></a>
        ${q("ghost")}
      </div>
      <div class="foot-small"><span>© ${new Date().getFullYear()} Kezia Valerine · Create by Kezia</span><a href="#/menu">Back to the menu</a></div>
    </div>
  </footer>`;function J(){const e=C,t=ve.map((a,n)=>`<span class="${n%2?"o":""}">${n%2?a:`<em>${a}</em>`}</span>${j}`).join("");return{html:`
  <section class="hero" aria-label="Introduction">
    <div class="hero-pin">
      <div class="copy-stack">
        <div class="c1">
          <p class="script hero-script">table for one, please</p>
          <h1 aria-label="Fresh from the kitchen of Kezia."><span class="line"><span style="--l:0">Fresh from</span></span><span class="line"><span style="--l:1">the kitchen</span></span><span class="line"><span style="--l:2">of <em>Kezia.</em></span></span></h1>
          <p class="hero-sub">Creative designer, <b>served one dish at a time.</b></p>
        </div>
        <div class="c2">
          <p class="script">today’s special</p>
          <h2>Kezia <em>Valerine</em></h2>
          <p class="hero-sub">A future app developer who turns ideas into <b>simple, useful apps</b> that look good and are easy to use.</p>
        </div>
        <div class="hero-cta">
          <a class="btn" href="#/menu">See the menu <span class="arr">→</span></a>
          ${q("ghost")}
        </div>
      </div>
      <div class="stage">
        ${pe()}
        <span class="spark" style="left:4%;top:24%">${j}</span>
        <span class="spark" style="left:88%;top:58%;width:3.2%">${j}</span>
        <span class="spark" style="left:44%;top:4%;width:3%">${j}</span>
        <span class="spark" style="left:-1%;top:58%;width:3%">${j}</span>
        <div class="shadow"></div><div class="plate"></div>
        <div class="medal"><img src="img/kezia.webp" alt="Portrait of Kezia Valerine" width="560" height="613"></div>
        <svg class="steam" viewBox="0 0 120 120" aria-hidden="true"><path d="M30 120C10 95 50 80 30 50S45 15 30 0"/><path d="M60 120C40 90 80 75 60 45S75 10 60-5"/><path d="M90 120C70 95 108 80 90 52S102 18 90 2"/></svg>
        <button class="cloche idle" aria-label="Lift the lid to meet Kezia">
          <svg viewBox="0 0 400 290" aria-hidden="true">
            <defs>
              <linearGradient id="cg" x1="0" x2="1"><stop offset="0" stop-color="#cdbfa6"/><stop offset=".42" stop-color="#f3eada"/><stop offset="1" stop-color="#a09279"/></linearGradient>
              <linearGradient id="cb" x1="0" x2="1"><stop offset="0" stop-color="#b3a58c"/><stop offset=".5" stop-color="#ece1cc"/><stop offset="1" stop-color="#968870"/></linearGradient>
            </defs>
            <path d="M24 256C24 120 112 40 200 40s176 80 176 216Z" fill="url(#cg)"/>
            <path d="M58 232C62 142 116 80 176 62" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="10" stroke-linecap="round"/>
            <rect x="4" y="250" width="392" height="28" rx="14" fill="url(#cb)"/>
            <rect x="188" y="16" width="24" height="28" rx="6" fill="#b3a58c"/>
            <circle cx="200" cy="14" r="15" fill="url(#cb)"/>
          </svg>
        </button>
      </div>
      <div class="hint"><span>Lift the lid</span><i></i></div>
    </div>
  </section>

  <section class="marquee" aria-hidden="true"><div class="mq-track"><div class="mq-item">${t}</div><div class="mq-item">${t}</div></div></section>

  <section class="picks">
    <div class="wrap">
      <div class="sec-head">
        <div><p class="script" data-reveal>chef’s picks</p><h2 data-split>Kezia’s <em>Signatures</em></h2></div>
        <a class="btn ghost" href="#/menu" data-reveal>Full menu <span class="arr">→</span></a>
      </div>
      <div class="stack-cards">
        ${e.map((a,n)=>`
        <a class="pick" href="#/dish/${a.slug}" style="--k:${n};--accent:${a.accent}" aria-label="${o(a.title)}">
          <div class="pick-img"><img src="${$(a.cover.src)}" alt="" loading="lazy" style="object-fit:${a.cover.fit};object-position:${a.cover.pos};${a.cover.bg?`background:${a.cover.bg}`:""}"></div>
          <div class="pick-body">
            <div>
              <div class="pick-n">${oe(a)}</div>
              <h3>${o(a.title)}</h3>
              <p>${o(a.kind)} · ${o(a.year)}</p>
            </div>
            <div class="chips">${a.tags.map(i=>`<span class="chip">${o(i)}</span>`).join("")}</div>
          </div>
        </a>`).join("")}
      </div>
      <div class="picks-cta"><a class="btn" href="#/menu">See the whole menu <span class="arr">→</span></a></div>
    </div>
  </section>

  <section class="note">
    <div class="wrap">
      <p class="label">The chef’s note</p>
      <p class="note-text" data-words>I’m a future app developer with an interest in UI/UX design. I enjoy turning ideas into simple and useful apps that look good and are easy to use.</p>
      <div class="hero-cta"><a class="btn" href="#/about">More about me <span class="arr">→</span></a></div>
    </div>
  </section>
  ${_()}`,title:"Create by Kezia — Kezia Valerine, portfolio",nav:"",mount(){Ie(),Ce(p(".marquee")),le(k(".pick")),ke(p("[data-words]")),ce()}}}function Ie(){const e=p(".hero"),t=p(".cloche"),s=p(".medal"),a=p(".steam"),n=p(".stage"),i=p(".c1"),l=p(".c2"),f=p(".hint"),h=k(".spark",n);if(L){t.style.display="none",s.style.opacity=1,a.style.opacity=1,h.forEach(c=>{c.style.opacity=1});return}let r=!1;const u=setTimeout(()=>{r=!0},he+2200);D(()=>clearTimeout(u));let v=0;const d=c=>{const b=Y(y((c-.04)/.42));t.classList.toggle("idle",c<.004),c>=.004?(t.style.transform=`translate3d(0,${-b*n.offsetHeight*1.05}px,0) rotate(${-b*16}deg)`,t.style.opacity=1-y((b-.72)/.28)):(t.style.transform="",t.style.opacity=1);const S=ye(y((c-.2)/.4));s.style.opacity=y((c-.18)/.12),s.style.transform=`translate3d(0,${(1-S)*14}%,0) scale(${.55+.45*S})`,a.style.opacity=y((c-.45)/.2),h.forEach((ae,ue)=>{const se=y((c-.42-ue*.04)/.2);ae.style.opacity=se,ae.style.transform=`scale(${.4+.6*se})`});const R=1-y((c-.1)/.22);i.style.opacity=R,i.style.transform=`translate3d(0,${-(1-R)*44}px,0)`,i.style.visibility=R<.02?"hidden":"";const te=y((c-.5)/.22);l.style.opacity=te,l.style.transform=`translate3d(0,${(1-te)*44}px,0)`,f.style.opacity=r?1-y(c/.06):0};d(0),x(()=>{const c=e.getBoundingClientRect(),b=y(-c.top/(c.height-w));v+=(b-v)*.1,Math.abs(b-v)<5e-4&&(v=b),d(v)}),g(t,"click",()=>{const c=e.getBoundingClientRect().top+scrollY;scrollTo({top:c+(e.offsetHeight-w)*.7,behavior:"smooth"})})}function Ce(e){const t=p(".mq-track",e);let s=0,a=scrollY,n=0;x(i=>{const l=t.firstElementChild.offsetWidth;if(n+=(i-a-n)*.12,a=i,s-=L?0:.8+n*.55,l){for(;s<-l;)s+=l;for(;s>0;)s-=l}t.style.transform=`translate3d(${s}px,0,0)`})}function Te(){let e=0;return{html:`
  <div class="page">
    <div class="wrap pg-back"><a class="back" href="#/">← Back to home</a></div>
    <div class="wrap">
      <header class="menu-head">
        <p class="script" data-reveal>create by kezia · est. 2025</p>
        <h1 class="big-h" data-split>The <em>Menu</em></h1>
        <p class="lead" data-reveal style="--d:250">Six dishes, freshly made between 2025 and 2026. Hover a plate to peek, tap to order.</p>
      </header>
      <div class="menu-list">
      ${U.map(s=>`
        <section class="course" aria-label="${s.name}">
          <div class="course-h" data-in><h2>${s.name}</h2><span class="script">${s.note}</span></div>
          ${X.filter(a=>a.course===s.id).map(a=>{const n=e++;return`
          <a class="row" href="#/dish/${a.slug}" data-in data-idx="${n}">
            <span class="row-n">${String(n+1).padStart(2,"0")}</span>
            <img class="row-thumb" src="${$(a.cover.src)}" alt="" loading="lazy" style="object-position:${a.cover.pos}">
            <span class="row-main">
              ${a.pick?'<span class="pickstar">★ chef’s pick</span>':""}
              <span class="row-title">${o(a.title)}</span>
              <span class="row-sub">${o(a.kind)} · ${a.tags.map(o).join(", ")}</span>
            </span>
            <span class="row-dots" aria-hidden="true"></span>
            <span class="row-year">${o(a.year)}</span>
            <span class="row-go" aria-hidden="true">→</span>
          </a>`}).join("")}
        </section>`).join("")}
      </div>
      <div class="menu-end"><span class="script">that’s the whole menu</span>Nothing contains nuts. Everything is made with love.</div>
    </div>
    ${_()}
  </div>`,title:"The Menu — Create by Kezia",nav:"menu",mount(){const s=p("#peek");s.innerHTML=C.map(c=>`<img src="${$(c.cover.src)}" alt="" style="object-fit:cover;object-position:${c.cover.pos}">`).join("");const a=k("img",s);if(D(()=>{s.classList.remove("on"),s.innerHTML=""}),!ne)return;let n=-999,i=0,l=-999,f=0,h=.3,r=.3,u=0,v=-1;g(document,"pointermove",c=>{l=c.clientX,f=c.clientY},{passive:!0}),k(".row").forEach(c=>{g(c,"pointerenter",()=>{const b=+c.dataset.idx;v>=0&&a[v].classList.remove("on"),a[b].classList.add("on"),v=b,s.classList.add("on"),r=1,n<-900&&(n=l,i=f)}),g(c,"pointerleave",()=>{s.classList.remove("on"),r=.3})});const d=()=>s.offsetWidth;x(()=>{const c=l-n;n+=c*.14,i+=(f-i)*.14,h+=(r-h)*.14,u+=(y(c*.06,-14,14)-u)*.15;const b=d(),S=Math.min(n+b*.55,W-b*.55-12);s.style.transform=`translate3d(${S-b/2}px,${i-b/2}px,0) scale(${h}) rotate(${u}deg)`})}}}function je(e){const t=X.find(r=>r.slug===e);if(!t)return J();const s=C.indexOf(t),a=C[(s+1)%C.length],n=U.find(r=>r.id===t.course),i=t.gallery,l=t.cover;let f="";return i.type==="hscroll"?f=`
    <section class="hs" data-hs aria-label="${o(i.title)}">
      <div class="hs-pin">
        <div class="g-head"><h2 data-split>${o(i.title)}</h2><div class="hs-ctrl"><p>Swipe sideways, drag or use the arrows · tap to zoom</p><button class="hs-btn" data-hs="-1" aria-label="Previous">←</button><button class="hs-btn" data-hs="1" aria-label="Next">→</button></div></div>
        <div class="hs-track">
          ${i.items.map((r,u)=>`
          <figure class="hs-item zoomable" style="--r:${i.ratio}" data-lb="${u}" tabindex="0" role="button" aria-label="Zoom: ${o(r.alt)}">
            <img src="${$(r.src)}" alt="${o(r.alt)}" decoding="async"><figcaption>${o(r.cap)}</figcaption>
          </figure>`).join("")}
        </div>
        <div class="hs-bar" aria-hidden="true"><i></i></div>
      </div>
    </section>`:i.type==="stack"?f=`
    <section class="stk" aria-label="${o(i.title)}">
      <div class="wrap"><div class="g-head"><h2 data-split>${o(i.title)}</h2><p>Keep scrolling · tap a slide to zoom</p></div></div>
      <div class="stk-wrap"><div class="stk-list">
        ${i.items.map((r,u)=>`
        <div class="stk-item" style="--k:${u};--r:${i.ratio}">
          <figure class="stk-card zoomable" data-lb="${u}" tabindex="0" role="button" aria-label="Zoom: ${o(r.alt)}"><img src="${$(r.src)}" alt="${o(r.alt)}" loading="lazy" decoding="async"></figure>
          <div class="stk-cap"><span>${o(r.cap)}</span><span>${u+1} / ${i.items.length}</span></div>
        </div>`).join("")}
      </div></div>
    </section>`:i.type==="grid"?f=`
    <section class="wrap grd-sec" aria-label="${o(i.title)}" style="padding-bottom:4vw">
      <div class="g-head"><h2 data-split>${o(i.title)}</h2><p>Tap a render to zoom</p></div>
      <div class="grd">
        ${i.items.map((r,u)=>`
        <figure class="grd-item zoomable" data-in style="--w:${r.w};--d:${u%3*110}" data-lb="${u}" tabindex="0" role="button" aria-label="Zoom: ${o(r.alt)}"><img src="${$(r.src)}" alt="${o(r.alt)}" loading="lazy" decoding="async"></figure>`).join("")}
      </div>
    </section>`:i.type==="compare"?f=`
    <section class="wrap" aria-label="${o(i.title)}">
      <div class="g-head"><h2 data-split>${o(i.title)}</h2><p>Drag the handle, or use ← →</p></div>
      <div class="cmp-wrap">
        <div class="cmp" data-cmp style="--pos:100%">
          <img class="before" src="${$(i.before.src)}" alt="${o(i.before.alt)}" decoding="async">
          <img class="after" src="${$(i.after.src)}" alt="${o(i.after.alt)}" decoding="async">
          <span class="cmp-tag l">Before</span><span class="cmp-tag r">After</span>
          <div class="cmp-handle"><button role="slider" aria-label="Reveal the redesign" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">&lsaquo;&rsaquo;</button></div>
        </div>
        <div class="cmp-side" data-reveal>
          <img class="phone-fl" src="${$(i.phone.src)}" alt="${o(i.phone.alt)}" loading="lazy">
          <p>The new poster, on a phone in your hand.</p>
        </div>
      </div>
    </section>`:i.type==="phone"&&(f=`
    <section class="wrap" aria-label="${o(i.title)}">
      <div class="g-head"><h2 data-split>${o(i.title)}</h2></div>
      <div class="ph">
        <div class="ph-card" data-reveal><img src="${$(i.image.src)}" alt="${o(i.image.alt)}"></div>
        <div data-in>
          <p class="script">everything in one place</p>
          <div class="pills">${i.features.map((r,u)=>`<span class="pill" style="--i:${u}">${o(r)}</span>`).join("")}</div>
        </div>
      </div>
    </section>`),{html:`
  <article class="page dish" style="--accent:${t.accent}">
    <div class="wrap d-hero">
      <a class="back" href="#/menu">← Back to the menu</a>
      <p class="kicker" data-reveal><span class="k-n">${oe(t)}</span><span class="label">${o(n.name)} · ${o(t.kind)}</span></p>
      <h1 data-split>${o(t.title)}</h1>
      <ul class="meta" data-reveal style="--d:400">
        <li><span>Served</span><b>${o(t.year)}</b></li>
        <li><span>Role</span><b>${o(t.role)}</b></li>
      </ul>
    </div>
    <figure class="d-cover"><div class="cover-frame ${l.fit==="contain"?"contain":""}" ${l.bg?`style="background:${l.bg}"`:""}><img src="${$(l.src)}" alt="${o(t.title)}" style="object-fit:${l.fit};object-position:${l.pos}" fetchpriority="high"></div></figure>
    <div class="wrap d-info">
      <div class="d-text"><span class="label" data-reveal>About the dish</span>${t.desc.map((r,u)=>`<p data-reveal style="--d:${u*80}">${o(r)}</p>`).join("")}</div>
      <aside class="d-side" data-reveal style="--d:150">
        <div><span class="label">Ingredients</span><div class="chips">${t.tags.map(r=>`<span class="chip">${o(r)}</span>`).join("")}</div></div>
        <a class="btn" href="${o(t.link.href)}" ${T}>${o(t.link.label)} <span class="arr">↗</span></a>
      </aside>
    </div>
    ${f}
    <section class="wrap d-next">
      <p class="label" data-reveal>Next dish</p>
      <a class="next-link" href="#/dish/${a.slug}" style="--accent:${a.accent}" data-reveal>${o(a.title)} <span class="arr">→</span></a>
    </section>
  </article>`,title:`${t.title} — Create by Kezia`,nav:"menu",mount(){const r=p(".cover-frame"),u=p("img",r);L||x(()=>{const v=r.getBoundingClientRect(),d=y((w-v.top)/(w*.75)),c=y((w-v.top)/(w+v.height));r.style.transform=`scale(${.88+.12*Y(d)})`,l.fit!=="contain"&&(u.style.transform=`translate3d(0,${(c-.5)*-5}%,0) scale(1.12)`)}),i.type==="hscroll"&&Ee(p("[data-hs]")),i.type==="stack"&&le(k(".stk-item")),i.type==="grid"&&Pe(k(".grd-item")),i.type==="compare"&&Ae(p("[data-cmp]")),i.items&&xe(M,i.items)}}}function Ee(e){const t=p(".hs-track",e),s=p(".hs-bar i",e),a=k("[data-hs]",e),n=()=>{const d=t.scrollWidth-t.clientWidth,c=d>0?y(t.scrollLeft/d):0;s.style.transform=`scaleX(${c})`,a.forEach(b=>{b.disabled=+b.dataset.hs<0?t.scrollLeft<=2:t.scrollLeft>=d-2})};g(t,"scroll",n,{passive:!0}),g(window,"resize",n),n();let i=!1,l=!1,f=0,h=0,r=0;g(t,"pointerdown",d=>{d.pointerType!=="mouse"||d.button!==0||(i=!0,l=!1,f=d.clientX,h=t.scrollLeft,r=d.pointerId)}),g(t,"pointermove",d=>{i&&(!l&&Math.abs(d.clientX-f)>6&&(l=!0,t.setPointerCapture(r),t.classList.add("drag")),l&&(t.scrollLeft=h-(d.clientX-f)))});const u=()=>{i=!1,t.classList.remove("drag"),setTimeout(()=>{l=!1},0)};g(t,"pointerup",u),g(t,"pointercancel",u),g(t,"click",d=>{l&&(d.stopPropagation(),d.preventDefault())},!0);const v=d=>{const c=p(".hs-item",t);t.scrollBy({left:d*(c.offsetWidth+24),behavior:"smooth"})};a.forEach(d=>g(d,"click",()=>v(+d.dataset.hs))),g(window,"keydown",d=>{if(!m.el.hidden||/input|textarea/i.test(d.target.tagName))return;const c=e.getBoundingClientRect();c.top>w*.5||c.bottom<w*.5||(d.key==="ArrowRight"&&(d.preventDefault(),v(1)),d.key==="ArrowLeft"&&(d.preventDefault(),v(-1)))})}function Pe(e){L||x(()=>{e.forEach(t=>{const s=t.getBoundingClientRect();if(s.bottom<-50||s.top>w+50)return;const a=y((s.top+s.height/2-w/2)*-.06,-s.height*.05,s.height*.05);p("img",t).style.transform=`translate3d(0,${a}px,0)`})})}function Ae(e){const t=p(".cmp-handle button",e);let s=100,a=!1,n=0;const i=h=>{s=y(h,0,100),e.style.setProperty("--pos",`${s}%`),t.setAttribute("aria-valuenow",Math.round(100-s))},l=h=>{const r=e.getBoundingClientRect();i((h-r.left)/r.width*100)};g(e,"pointerdown",h=>{cancelAnimationFrame(n),a=!0,e.classList.add("drag"),e.setPointerCapture(h.pointerId),l(h.clientX)}),g(e,"pointermove",h=>{a&&l(h.clientX)}),["pointerup","pointercancel"].forEach(h=>g(e,h,()=>{a=!1,e.classList.remove("drag")})),g(t,"keydown",h=>{h.key==="ArrowLeft"&&(h.preventDefault(),i(s-5)),h.key==="ArrowRight"&&(h.preventDefault(),i(s+5))});const f=new IntersectionObserver(([h])=>{if(!h.isIntersecting)return;if(f.disconnect(),L){i(50);return}const r=performance.now(),u=v=>{if(a)return;const d=y((v-r)/1800);i(100-50*Y(d)),d<1&&(n=requestAnimationFrame(u))};n=requestAnimationFrame(u)},{threshold:.45});f.observe(e),D(()=>{f.disconnect(),cancelAnimationFrame(n)})}function Se(){const e=["#d8a548","#c4472f","#7c9a77","#5fa3a6","#c9704f","#d8a548","#c4472f"],t=[-2,1.5,-1,2,-1.5,1,-2];return{html:`
  <div class="page">
    <div class="wrap pg-back"><a class="back" href="#/">← Back to home</a></div>
    <section class="wrap a-hero">
      <div class="a-stage" data-in>
        <div class="a-medal"><img src="img/kezia.webp" alt="Portrait of Kezia Valerine" width="560" height="613"></div>
        ${pe()}
      </div>
      <div class="a-copy">
        <p class="script" data-reveal>the chef’s note</p>
        <h1 data-split>Hi, I’m Kezia <em>Valerine.</em></h1>
        <p class="lead" data-reveal style="--d:250">I’m a future app developer with an interest in UI/UX design. I enjoy turning ideas into simple and useful apps that look good and are easy to use.</p>
        <p data-reveal style="--d:350">I use tools like Adobe Illustrator, Photoshop, After Effects, Blender, Figma, Canva, and CapCut to create designs and digital experiences that help people in their daily lives.</p>
        <div class="hero-cta" data-reveal style="--d:450">${q()}<a class="btn ghost" href="#/menu">See the menu <span class="arr">→</span></a></div>
      </div>
    </section>
    <section class="pantry">
      <div class="wrap">
        <p class="script" data-reveal>the pantry</p>
        <h2 class="big-h" data-split>Tools I cook <em>with</em></h2>
        <div class="jars" data-in>${ge.map((a,n)=>`<span class="jar" style="--i:${n};--rot:${t[n%7]}deg;--c:${e[n%7]}">${o(a)}</span>`).join("")}</div>
      </div>
    </section>
    <section class="wrap">
      <div class="facts">
        <div class="fact" data-reveal><span class="label">Studying at</span><b>Jakarta International University</b></div>
        <div class="fact" data-reveal style="--d:120"><span class="label">Cooking</span><b>Illustration, branding, UI, photography &amp; 3D</b></div>
        <div class="fact" data-reveal style="--d:240"><span class="label">Find me</span><b><a href="${N}" ${T}>@vale.portofolio</a></b></div>
      </div>
    </section>
    ${_()}
  </div>`,title:"About — Create by Kezia",nav:"about",mount(){ce()}}}function Be(){const e=Array.from({length:34},(s,a)=>`<i style="--i:${a};--h:${40+a*37%60}"></i>`).join("");return{html:`
  <div class="page">
    <div class="wrap pg-back"><a class="back" href="#/">← Back to home</a></div>
    <section class="wrap c-wrap">
      <div>
        <p class="script" data-reveal>ready to order?</p>
        <h1 class="big-h" data-split>Let’s cook something <em>together.</em></h1>
        <p class="lead" data-reveal style="--d:300">Say hi. I’d love to hear about your project, your idea, or just what you’re hungry for.</p>
        <div class="hero-cta" data-reveal style="--d:400">
          <a class="btn" href="mailto:${F}">Email me <span class="arr">→</span></a>
          <a class="btn ghost" href="${N}" ${T}>Instagram <span class="arr">↗</span></a>
          ${q("ghost")}
        </div>
      </div>
      <div class="slot" data-in>
        <div class="slot-clip">
          <div class="paper" aria-label="Contact receipt">
            <h3>CREATE BY KEZIA</h3>
            <p class="sub">TABLE FOR ONE · ORDER #2026</p>
            <hr>
            <a class="ln row-in" style="--i:0" href="mailto:${F}">1× Email<i></i><em>${F}</em></a>
            <a class="ln row-in" style="--i:1" href="${N}" ${T}>1× Instagram<i></i><em>@vale.portofolio</em></a>
            <a class="ln row-in" style="--i:2" href="${ie}" ${T}>1× LinkedIn<i></i><em>kezia-valerine</em></a>
            <hr>
            <div class="tot row-in" style="--i:3"><span>TOTAL</span><span>one great project</span></div>
            <p class="ty row-in" style="--i:4">thank you, come again!</p>
            <div class="bars" aria-hidden="true">${e}</div>
          </div>
        </div>
      </div>
    </section>
  </div>`,title:"Contact — Create by Kezia",nav:"contact",mount(){}}}p("#toast");const Me={"#home":"#/","#about":"#/about","#project":"#/menu","#contact":"#/contact"},ze=[[/^#\/?$/,J],[/^#\/menu\/?$/,Te],[/^#\/about\/?$/,Se],[/^#\/contact\/?$/,Be],[/^#\/dish\/([\w-]+)\/?$/,je]],A=e=>Me[e]||e||"#/";function De(e){for(const[t,s]of ze){const a=e.match(t);if(a)return()=>s(...a.slice(1))}return J}let he=0;function G(e,t,s=t){Z=[],H.forEach(n=>n()),H=[],P&&P.disconnect(),m.el.hidden||(m.el.hidden=!0,m.el.classList.remove("show"),document.body.classList.remove("lock"));const a=De(e)();M.style.setProperty("--boot",`${t/1e3}s`),he=s,M.innerHTML=a.html,document.title=a.title,k("[data-nav]").forEach(n=>{const i=n.dataset.nav===a.nav;n.classList.toggle("on",i),i?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),scrollTo(0,0),V=0,k("[data-split]").forEach(be),a.mount(),$e(),setTimeout(we,s),t&&M.focus({preventScroll:!0})}let ee={x:innerWidth/2,y:innerHeight/2};document.addEventListener("pointerdown",e=>{e.target.closest('a[href^="#/"]')&&(ee={x:e.clientX,y:e.clientY})},!0);document.addEventListener("click",e=>{const t=e.target.closest('a[href^="#/"]');if(t){if(e.detail===0){const s=t.getBoundingClientRect();ee={x:s.left+s.width/2,y:s.top+s.height/2}}A(t.getAttribute("href"))===A(location.hash)&&(e.preventDefault(),scrollTo({top:0,behavior:"smooth"}))}});const I=p("#wipe");let B=!1,E=null;async function me(e){if(e=A(e),B){E=e;return}if(B=!0,L){G(e,0),B=!1;return}const{x:t,y:s}=ee,a=Math.hypot(Math.max(t,W-t),Math.max(s,w-s))+10;I.style.visibility="visible",await I.animate([{clipPath:`circle(0px at ${t}px ${s}px)`},{clipPath:`circle(${a}px at ${t}px ${s}px)`}],{duration:700,easing:"cubic-bezier(.7,0,.2,1)",fill:"forwards"}).finished,I.classList.add("on"),G(e,650),await O(420),I.classList.remove("on"),await I.animate([{transform:"translateY(0)"},{transform:"translateY(-101%)"}],{duration:800,easing:"cubic-bezier(.7,0,.2,1)",fill:"forwards"}).finished,I.getAnimations().forEach(n=>n.cancel()),I.style.visibility="hidden",B=!1,E&&E!==A(location.hash)?(E=null,me(location.hash)):E=null}addEventListener("hashchange",()=>me(location.hash));history.scrollRestoration="manual";(async function(){const t=p("#loader");let s=!1;try{s=sessionStorage.getItem("kezi-seen")==="1"}catch{}const a=s||L;if(G(A(location.hash),0,a?0:1500),requestAnimationFrame(re),a){t.remove(),document.body.classList.add("ready");return}await Promise.all([O(1500),Promise.race([document.fonts?document.fonts.ready:0,O(2500)])]),t.classList.add("done"),document.body.classList.add("ready");try{sessionStorage.setItem("kezi-seen","1")}catch{}setTimeout(()=>t.remove(),1200)})();
