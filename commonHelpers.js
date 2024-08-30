import{A as Q,S as E,N as M,K as I,i as ue,a as de}from"./assets/vendor-CZdjGj8m.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function pe(e){const t=window.innerWidth,s=window.devicePixelRatio||1;let o;return t>=1440?o=s>1?e.dataset.bgrSrcDesktop2x:e.dataset.bgrSrcDesktop1x:t>=768?o=s>1?e.dataset.bgrSrcTablet2x:e.dataset.bgrSrcTablet1x:o=s>1?e.dataset.bgrSrcMobile2x:e.dataset.bgrSrcMobile1x,o}function fe(e,t){e.forEach(s=>{if(s.isIntersecting){const o=s.target;if(o.dataset.bgSrcDesktop1x){const r=pe(o);r&&(o.style.backgroundImage=`url(${r})`),o.classList.remove("lazy-bgr")}o.dataset.src&&(o.src=o.dataset.src),t.unobserve(o)}})}const me=document.querySelectorAll(".lazy-bgr, [data-src]"),ve=new IntersectionObserver(fe);me.forEach(e=>ve.observe(e));const x=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const o=window.scrollY,r=s.getBoundingClientRect().top+o,n=performance.now(),a=i=>{const f=i-n,L=Math.min(f/t,1);window.scrollTo(0,o+(r-o)*T(L)),f<t&&requestAnimationFrame(a)},T=i=>i<.5?2*i*i:-1+(4-2*i)*i;requestAnimationFrame(a)},B=document.querySelector(".js-header-menu-btn"),p=document.querySelector(".js-header-menu"),R=document.querySelector(".js-header-order-link"),_=document.querySelector(".header-fixed");B&&p&&(B.addEventListener("click",()=>{p.classList.toggle("isopen")}),p.addEventListener("click",X));R&&R.addEventListener("click",X);function X(e){e.preventDefault();const t=e.target.closest("a");if(!t)return;const s=t.getAttribute("href").substring(1);x(s),p&&p.classList.contains("isopen")&&p.classList.remove("isopen")}window.addEventListener("scroll",()=>{window.scrollY>50?_.classList.add("onscroll"):_.classList.remove("onscroll")});const C=document.querySelector(".js-header-mobile-menu-btn"),ee=document.querySelector(".js-mobile-menu"),D=document.querySelector(".js-mobile-menu-close-btn"),$=document.querySelector(".js-mobile-menu-nav"),H=document.querySelector(".js-mobile-menu-order");C&&C.addEventListener("click",ge);D&&D.addEventListener("click",te);$&&$.addEventListener("click",se);H&&H.addEventListener("click",se);function ge(){ee.classList.add("is-open")}function te(){ee.classList.remove("is-open")}function se(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);x(s),te()}const j="/fullstack-portfolio/assets/symbols-BFynSz_H.svg";function be(e=[]){return e.reduce((t,{title:s,content:o})=>{const r=o.map(n=>`<li class="about-acc-list-item">${n}</li>`).join("");return t+`
      <li class="about-acc-item ac">
        <h3 class="about-acc-header ac-header ac-trigger">
          ${s}
          <button type="button" class="about-acc-button">
            <svg
              class="about-acc-icon"
              aria-label="Arrow icon"
              width="18"
              height="18"
            >
              <use href="${j}#icon-dropdown"></use>
            </svg>
          </button>
        </h3>

        <div class="about-acc-panel ac-panel">
          <ul class="about-acc-text">
            ${r}
          </ul>
        </div>
      </li>
    `},"")}const he=async(e,t)=>{const s=be(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},we=[{title:"About me",content:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"Role",content:["Frontend development","HeadlessCMS, Wordpress","Blender(enjoy)"]},{title:"Education",content:["2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}];let ye;const oe=document.querySelector(".accordion-container");oe&&xe();async function xe(){try{await he(we,oe),ye=new Q(".accordion-container",{duration:500,openOnInit:[0]})}catch(e){console.log(e.message)}}const u=new E(".about-skills-container",{modules:[M,I],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},keyboard:{enabled:!0,onlyInViewport:!0},speed:700,effect:"slide",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",re);u.on("slideChange",re);function re(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}function je(e=[]){return e.reduce((t,{question:s,answer:o})=>t+`
  <li class="ac faq-acc-item">
    <h3 class="faq-acc-header ac-header ac-trigger">
     ${s}
      <button type="button" class="faq-acc-button">
        <svg
          class="faq-acc-icon"
          aria-label="Arrow icon"
          width="18"
          height="18"
        >
          <use href="${j}#icon-dropdown"></use>
        </svg>
      </button>
    </h3>

    <div class="faq-acc-panel ac-panel">
      <p class="faq-acc-text">
       ${o}
      </p>
    </div>
  </li>
  `,"")}const ke=async(e,t)=>{const s=je(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Le=[{question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];let qe;const ne=document.querySelector(".faq-acc-container");ne&&Se();async function Se(){try{await ke(Le,ne),qe=new Q(".faq-acc-container")}catch(e){console.log(e.message)}}function Ee(e=[]){return e.reduce((t,{iconId:s,title:o,description:r})=>t+`
       <li class="benefit-item">
          <div class="benefit-icon-wrap">
            <svg class="benefit-icon" width="24" height="24">
              <use href="${j}#${s}"></use>
            </svg>
          </div>
          <h3 class="benefit-title">${o}</h3>
          <p class="benefit-description">
           ${r}
          </p>
        </li>
      `,"")}const Me=async(e,t)=>{const s=Ee(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Ie=[{iconId:"icon-user",title:"Expertise",description:"As a highly experienced developer, I have deep knowledge of programming and website development."},{iconId:"icon-dialog",title:"Communication",description:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{iconId:"icon-pencil",title:"Art",description:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life."},{iconId:"icon-hourglass",title:"Urgent execution",description:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],V=document.querySelector(".benefits-list");V&&Me(Ie,V);const z=document.querySelector(".js-project-order");z&&z.addEventListener("click",Pe);function Pe(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);x(s)}function Ae(e=[]){return e.reduce((t,{url1x:s,url2x:o})=>t+`
       <li class="projects-item swiper-slide">
        <div class="project-info-container">
          <ul class="project-lang-list">
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#react</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#node js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#git</span>
            </li>
          </ul>
          <div class="project-description-wrapper">
            <p class="project-description">
              Programming Across Borders: Ideas, Technologies, Innovations
            </p>
           <a href="https://github.com/VPresich/fullstack-portfolio" class="project-link js-project-link" target="_blank">See project</a>
          </div>
        </div>
        <div class="projects-img-wrapper">
          <picture>
            <source
              srcset="
                ${s} 1x,
                ${o} 2x
              "
              type="image/webp"
            />
            <img
              class="projects-img lazy"
              src="${s}"
              alt="Project 01 main page"
              loading="lazy"
            />
          </picture>
        </div>
      </li>
      `,"")}const Te=async(e,t)=>{const s=Ae(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Be="/fullstack-portfolio/assets/project13@1x-D5Ae1P1v.webp",Re="/fullstack-portfolio/assets/project13@2x-D8klBtoi.webp",_e="/fullstack-portfolio/assets/project11@1x-ticSGbVE.webp",Ce="/fullstack-portfolio/assets/project11@2x-BNlS8ZLJ.webp",De="/fullstack-portfolio/assets/project12@1x-DX7EZF19.webp",$e="/fullstack-portfolio/assets/project12@2x-D5j4c6uV.webp",He="/fullstack-portfolio/assets/project01@1x-Ye2u9QvY.webp",Ve="/fullstack-portfolio/assets/project01@2x-CGnU-NZM.webp",ze="/fullstack-portfolio/assets/project02@1x-dj219-w_.webp",Ne="/fullstack-portfolio/assets/project02@2x-R_GplPUq.webp",Oe="/fullstack-portfolio/assets/project03@1x-CuhbSDYE.webp",We="/fullstack-portfolio/assets/project03@2x-DFdgcKJ5.webp",Fe="/fullstack-portfolio/assets/project04@1x-Doff4Zlc.webp",Ue="/fullstack-portfolio/assets/project04@2x-D8suiMQa.webp",Ye="/fullstack-portfolio/assets/project05@1x-NId4RxqZ.webp",Ze="/fullstack-portfolio/assets/project05@2x-wvuiV8Po.webp",Ge="/fullstack-portfolio/assets/project06@1x-C_lFZmue.webp",Ke="/fullstack-portfolio/assets/project06@2x-DCqSTG3_.webp",Je="/fullstack-portfolio/assets/project07@1x-B3QnrJNm.webp",Qe="/fullstack-portfolio/assets/project07@2x-C0-TBLLl.webp",Xe="/fullstack-portfolio/assets/project08@1x-4Vi569Pq.webp",et="/fullstack-portfolio/assets/project08@2x-DDEYTNWW.webp",tt="/fullstack-portfolio/assets/project09@1x-BaB1ldRA.webp",st="/fullstack-portfolio/assets/project09@2x-uHr6DaSI.webp",ot="/fullstack-portfolio/assets/project10@1x-D4mJW1Ez.webp",rt="/fullstack-portfolio/assets/project10@2x-D6jge__s.webp",ce=[{url1x:Be,url2x:Re},{url1x:_e,url2x:Ce},{url1x:De,url2x:$e},{url1x:He,url2x:Ve},{url1x:ze,url2x:Ne},{url1x:Oe,url2x:We},{url1x:Fe,url2x:Ue},{url1x:Ye,url2x:Ze},{url1x:Ge,url2x:Ke},{url1x:Je,url2x:Qe},{url1x:Xe,url2x:et},{url1x:tt,url2x:st},{url1x:ot,url2x:rt}];let h;const ae=document.querySelector(".projects-list");ae&&nt();async function nt(){try{await Te(ce,ae),h=new E(".projects-swiper-container",{modules:[M,I],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},speed:1e3,effect:"slide",on:{init:N,slideChange:N},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function N(){if(!h)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");h.isBeginning?e.disabled=!0:e.disabled=!1,h.isEnd?t.disabled=!0:t.disabled=!1}function ct(e=[]){const t=(a=0)=>[...e.slice(a),...e.slice(0,a)].reduce((i,{url1x:f,url2x:L})=>i+`<li>        
          <picture covers-marquee-picture>
            <source
              srcset="
                ${f} 1x,
                ${L} 2x               
              "
              type="image/webp"
            />
            <img
              class="covers-marquee-img"
              src="${f}"
              alt="Project image"
              loading="lazy"
            />
          </picture>
        </li>
        `,""),s=t(0),o=t(2),r=t(4),n=t(6);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${o}</ul>
      <ul class="covers-marquee-line">${r}</ul>
      <ul class="covers-marquee-line">${n}</ul>
    </div>
  `}const at=async(e,t)=>{const s=ct(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},it=document.querySelector(".covers-marquee");at(ce,it);const lt=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("animate-covers"):t.target.classList.remove("animate-covers")})},{threshold:.5}),O=document.querySelector(".covers-section");O&&lt.observe(O);function ut(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:o="Anonymous",avatar_url:r="default-avatar.png",review:n="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${r}"
          alt="${o} avatar"
          
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${W(o)}</h3>
          <p class="reviews-list-text">
            ${W(n)}
          </p>
        </div>
      </li>
      `,"")}function W(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const dt=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=ut(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},pt="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e";function q(e){ue.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${pt}`,iconColor:"#fafafb"})}const ie=de.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),ft=document.querySelector(".reviews-list");let F=[];async function mt(){var e;try{const t=await ie.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?F=t.data:q("Reviews not found"):q("Invalid response")}catch{q("Fetch Error!")}finally{dt(F,ft)}}let w;mt().then(()=>{gt&&(w=new E(".reviews-swiper-container",{modules:[M,I],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"slide",on:{init:U,slideChange:U},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function U(){if(!w)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");w.isBeginning?e.disabled=!0:e.disabled=!1,w.isEnd?t.disabled=!0:t.disabled=!1}function vt(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function gt(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),o=document.querySelector(".reviews-btn-next"),r=e.querySelector(".reviews-list-item");return!e||!t||!s||!o||!r?(vt(),!1):!0}let Y=50;const k="data-original";function bt(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",wt),t.addEventListener("focus",yt),t.addEventListener("blur",xt)})}function Z(e){let t="";return e&&(e.hasAttribute(k)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function G(e){e&&e.hasAttribute(k)&&(e.dataset.original="")}function ht(e,t){return e.length>t?e.slice(0,t)+"...":e}function wt(e){const t=e.target,s=t.value.trim();t.hasAttribute(k)&&(t.dataset.original=s)}function yt(e){const t=e.target;t.hasAttribute(k)&&(t.value=t.dataset.original)}function xt(e){const t=e.target,s=t.value;s.length>Y&&(t.value=ht(s,Y))}function jt({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${j}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const kt=async(e,t)=>{const s=jt(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Lt=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),qt="Escape",St=e=>{e.innerHTML=""};let m=document.querySelector(".modal-backdrop");m&&m.addEventListener("click",Mt);let S;function Et(){m.classList.add("is-open"),window.addEventListener("keydown",le),S=document.querySelector(".modal-close-btn"),S&&S.addEventListener("click",P)}function le(e){e.code===qt&&P()}function Mt(e){e.currentTarget===e.target&&P()}function P(e){window.removeEventListener("keydown",le),m.classList.remove("is-open"),St(m)}document.addEventListener("DOMContentLoaded",bt);const v=document.querySelector(".footer-form"),c=v.querySelector(".footer-email"),l=v.querySelector(".footer-comment"),It=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),g=document.querySelector(".footer-comment-error"),K=document.querySelector(".js-footer-scroll-up");K&&K.addEventListener("click",()=>{x("id-hero",3e3)});const y=document.querySelector(".footer-email-success");v&&v.addEventListener("submit",At);const Pt=[c,l];Pt.forEach(e=>{e&&(e.addEventListener("input",Tt),e.addEventListener("input",A),e.addEventListener("keydown",J),e.addEventListener("focus",J))});async function At(e){e.preventDefault();const t=Z(c);if(!t){b(d,c);return}const s=Z(l);if(!s){b(g,l);return}if(!Lt(t)){b(d,c);return}const o={email:t,comment:s};try{const r=await ie.post("requests",o);r&&r.status>=200&&r.status<300&&(await kt(r.data,document.querySelector(".modal-backdrop")),Et(),G(c),G(l),y&&y.classList.add("visible"),c&&c.classList.add("success"),v.reset())}catch{b(d,c)}finally{A()}}function A(){It.disabled=!c.value.trim()||!l.value.trim()}function Tt(){d&&d.classList.remove("visible"),g&&g.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error")}function J(){d&&d.classList.remove("visible"),g&&g.classList.remove("visible"),y&&y.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error"),c&&c.classList.remove("success")}function b(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error")}A();
//# sourceMappingURL=commonHelpers.js.map
