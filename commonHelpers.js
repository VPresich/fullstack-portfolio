import{A as Q,S,N as E,K as P,i as le,a as ue}from"./assets/vendor-CZdjGj8m.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function de(e){const t=window.innerWidth,s=window.devicePixelRatio||1;let o;return t>=1440?o=s>1?e.dataset.bgrSrcDesktop2x:e.dataset.bgrSrcDesktop1x:t>=768?o=s>1?e.dataset.bgrSrcTablet2x:e.dataset.bgrSrcTablet1x:o=s>1?e.dataset.bgrSrcMobile2x:e.dataset.bgrSrcMobile1x,o}function pe(e,t){e.forEach(s=>{if(s.isIntersecting){const o=s.target;if(o.dataset.bgSrcDesktop1x){const r=de(o);r&&(o.style.backgroundImage=`url(${r})`),o.classList.remove("lazy-bgr")}o.dataset.src&&(o.src=o.dataset.src),t.unobserve(o)}})}const fe=document.querySelectorAll(".lazy-bgr, [data-src]"),me=new IntersectionObserver(pe);fe.forEach(e=>me.observe(e));const x=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const o=window.scrollY,r=s.getBoundingClientRect().top+o,n=performance.now(),i=a=>{const f=a-n,L=Math.min(f/t,1);window.scrollTo(0,o+(r-o)*T(L)),f<t&&requestAnimationFrame(i)},T=a=>a<.5?2*a*a:-1+(4-2*a)*a;requestAnimationFrame(i)},R=document.querySelector(".js-header-menu-btn"),p=document.querySelector(".js-header-menu"),_=document.querySelector(".js-header-order-link"),A=document.querySelector(".header-fixed");R&&p&&(R.addEventListener("click",()=>{p.classList.toggle("isopen")}),p.addEventListener("click",X));_&&_.addEventListener("click",X);function X(e){e.preventDefault();const t=e.target.closest("a");if(!t)return;const s=t.getAttribute("href").substring(1);x(s),p&&p.classList.contains("isopen")&&p.classList.remove("isopen")}window.addEventListener("scroll",()=>{window.scrollY>50?A.classList.add("onscroll"):A.classList.remove("onscroll")});const C=document.querySelector(".js-header-mobile-menu-btn"),ee=document.querySelector(".js-mobile-menu"),D=document.querySelector(".js-mobile-menu-close-btn"),$=document.querySelector(".js-mobile-menu-nav"),V=document.querySelector(".js-mobile-menu-order");C&&C.addEventListener("click",ve);D&&D.addEventListener("click",te);$&&$.addEventListener("click",se);V&&V.addEventListener("click",se);function ve(){ee.classList.add("is-open")}function te(){ee.classList.remove("is-open")}function se(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);x(s),te()}new Q(".accordion-container",{duration:500,openOnInit:[0]});const u=new S(".about-skills-container",{modules:[E,P],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},keyboard:{enabled:!0,onlyInViewport:!0},speed:700,effect:"slide",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",oe);u.on("slideChange",oe);function oe(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}const M="/fullstack-portfolio/assets/symbols-BFynSz_H.svg";function ge(e=[]){return e.reduce((t,{question:s,answer:o})=>t+`
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
          <use href="${M}#icon-dropdown"></use>
        </svg>
      </button>
    </h3>

    <div class="faq-acc-panel ac-panel">
      <p class="faq-acc-text">
       ${o}
      </p>
    </div>
  </li>
      `,"")}const be=async(e,t)=>{const s=ge(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},he=[{question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];let we;const re=document.querySelector(".faq-acc-container");re&&ye();async function ye(){try{await be(he,re),we=new Q(".faq-acc-container")}catch(e){console.log(e.message)}}function xe(e=[]){return e.reduce((t,{iconId:s,title:o,description:r})=>t+`
       <li class="benefit-item">
          <div class="benefit-icon-wrap">
            <svg class="benefit-icon" width="24" height="24">
              <use href="${M}#${s}"></use>
            </svg>
          </div>
          <h3 class="benefit-title">${o}</h3>
          <p class="benefit-description">
           ${r}
          </p>
        </li>
      `,"")}const je=async(e,t)=>{const s=xe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Le=[{iconId:"icon-user",title:"Expertise",description:"As a highly experienced developer, I have deep knowledge of programming and website development."},{iconId:"icon-dialog",title:"Communication",description:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{iconId:"icon-pencil",title:"Art",description:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life."},{iconId:"icon-hourglass",title:"Urgent execution",description:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],z=document.querySelector(".benefits-list");z&&je(Le,z);const H=document.querySelector(".js-project-order");H&&H.addEventListener("click",ke);function ke(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);x(s)}function qe(e=[]){return e.reduce((t,{url1x:s,url2x:o})=>t+`
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
      `,"")}const Se=async(e,t)=>{const s=qe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Ee="/fullstack-portfolio/assets/project13@1x-D5Ae1P1v.webp",Pe="/fullstack-portfolio/assets/project13@2x-D8klBtoi.webp",Me="/fullstack-portfolio/assets/project11@1x-ticSGbVE.webp",Ie="/fullstack-portfolio/assets/project11@2x-BNlS8ZLJ.webp",Be="/fullstack-portfolio/assets/project12@1x-DX7EZF19.webp",Te="/fullstack-portfolio/assets/project12@2x-D5j4c6uV.webp",Re="/fullstack-portfolio/assets/project01@1x-Ye2u9QvY.webp",_e="/fullstack-portfolio/assets/project01@2x-CGnU-NZM.webp",Ae="/fullstack-portfolio/assets/project02@1x-dj219-w_.webp",Ce="/fullstack-portfolio/assets/project02@2x-R_GplPUq.webp",De="/fullstack-portfolio/assets/project03@1x-CuhbSDYE.webp",$e="/fullstack-portfolio/assets/project03@2x-DFdgcKJ5.webp",Ve="/fullstack-portfolio/assets/project04@1x-Doff4Zlc.webp",ze="/fullstack-portfolio/assets/project04@2x-D8suiMQa.webp",He="/fullstack-portfolio/assets/project05@1x-NId4RxqZ.webp",Oe="/fullstack-portfolio/assets/project05@2x-wvuiV8Po.webp",Ne="/fullstack-portfolio/assets/project06@1x-C_lFZmue.webp",We="/fullstack-portfolio/assets/project06@2x-DCqSTG3_.webp",Fe="/fullstack-portfolio/assets/project07@1x-B3QnrJNm.webp",Ue="/fullstack-portfolio/assets/project07@2x-C0-TBLLl.webp",Ze="/fullstack-portfolio/assets/project08@1x-4Vi569Pq.webp",Ye="/fullstack-portfolio/assets/project08@2x-DDEYTNWW.webp",Ke="/fullstack-portfolio/assets/project09@1x-BaB1ldRA.webp",Ge="/fullstack-portfolio/assets/project09@2x-uHr6DaSI.webp",Je="/fullstack-portfolio/assets/project10@1x-D4mJW1Ez.webp",Qe="/fullstack-portfolio/assets/project10@2x-D6jge__s.webp",ne=[{url1x:Ee,url2x:Pe},{url1x:Me,url2x:Ie},{url1x:Be,url2x:Te},{url1x:Re,url2x:_e},{url1x:Ae,url2x:Ce},{url1x:De,url2x:$e},{url1x:Ve,url2x:ze},{url1x:He,url2x:Oe},{url1x:Ne,url2x:We},{url1x:Fe,url2x:Ue},{url1x:Ze,url2x:Ye},{url1x:Ke,url2x:Ge},{url1x:Je,url2x:Qe}];let h;const ce=document.querySelector(".projects-list");ce&&Xe();async function Xe(){try{await Se(ne,ce),h=new S(".projects-swiper-container",{modules:[E,P],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},speed:1e3,effect:"slide",on:{init:O,slideChange:O},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function O(){if(!h)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");h.isBeginning?e.disabled=!0:e.disabled=!1,h.isEnd?t.disabled=!0:t.disabled=!1}function et(e=[]){const t=(i=0)=>[...e.slice(i),...e.slice(0,i)].reduce((a,{url1x:f,url2x:L})=>a+`<li>        
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
  `}const tt=async(e,t)=>{const s=et(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},st=document.querySelector(".covers-marquee");tt(ne,st);const ot=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("animate-covers"):t.target.classList.remove("animate-covers")})},{threshold:.5}),N=document.querySelector(".covers-section");N&&ot.observe(N);function rt(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:o="Anonymous",avatar_url:r="default-avatar.png",review:n="No review provided"})=>t+`
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
      `,"")}function W(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const nt=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=rt(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},ct="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e";function k(e){le.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ct}`,iconColor:"#fafafb"})}const ie=ue.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),it=document.querySelector(".reviews-list");let F=[];async function at(){var e;try{const t=await ie.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?F=t.data:k("Reviews not found"):k("Invalid response")}catch{k("Fetch Error!")}finally{nt(F,it)}}let w;at().then(()=>{ut&&(w=new S(".reviews-swiper-container",{modules:[E,P],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"slide",on:{init:U,slideChange:U},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function U(){if(!w)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");w.isBeginning?e.disabled=!0:e.disabled=!1,w.isEnd?t.disabled=!0:t.disabled=!1}function lt(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function ut(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),o=document.querySelector(".reviews-btn-next"),r=e.querySelector(".reviews-list-item");return!e||!t||!s||!o||!r?(lt(),!1):!0}let Z=50;const j="data-original";function dt(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",ft),t.addEventListener("focus",mt),t.addEventListener("blur",vt)})}function Y(e){let t="";return e&&(e.hasAttribute(j)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function K(e){e&&e.hasAttribute(j)&&(e.dataset.original="")}function pt(e,t){return e.length>t?e.slice(0,t)+"...":e}function ft(e){const t=e.target,s=t.value.trim();t.hasAttribute(j)&&(t.dataset.original=s)}function mt(e){const t=e.target;t.hasAttribute(j)&&(t.value=t.dataset.original)}function vt(e){const t=e.target,s=t.value;s.length>Z&&(t.value=pt(s,Z))}function gt({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${M}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const bt=async(e,t)=>{const s=gt(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},ht=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),wt="Escape",yt=e=>{e.innerHTML=""};let m=document.querySelector(".modal-backdrop");m&&m.addEventListener("click",jt);let q;function xt(){m.classList.add("is-open"),window.addEventListener("keydown",ae),q=document.querySelector(".modal-close-btn"),q&&q.addEventListener("click",I)}function ae(e){e.code===wt&&I()}function jt(e){e.currentTarget===e.target&&I()}function I(e){window.removeEventListener("keydown",ae),m.classList.remove("is-open"),yt(m)}document.addEventListener("DOMContentLoaded",dt);const v=document.querySelector(".footer-form"),c=v.querySelector(".footer-email"),l=v.querySelector(".footer-comment"),Lt=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),g=document.querySelector(".footer-comment-error"),G=document.querySelector(".js-footer-scroll-up");G&&G.addEventListener("click",()=>{x("id-hero",3e3)});const y=document.querySelector(".footer-email-success");v&&v.addEventListener("submit",qt);const kt=[c,l];kt.forEach(e=>{e&&(e.addEventListener("input",St),e.addEventListener("input",B),e.addEventListener("keydown",J),e.addEventListener("focus",J))});async function qt(e){e.preventDefault();const t=Y(c);if(!t){b(d,c);return}const s=Y(l);if(!s){b(g,l);return}if(!ht(t)){b(d,c);return}const o={email:t,comment:s};try{const r=await ie.post("requests",o);r&&r.status>=200&&r.status<300&&(await bt(r.data,document.querySelector(".modal-backdrop")),xt(),K(c),K(l),y&&y.classList.add("visible"),c&&c.classList.add("success"),v.reset())}catch{b(d,c)}finally{B()}}function B(){Lt.disabled=!c.value.trim()||!l.value.trim()}function St(){d&&d.classList.remove("visible"),g&&g.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error")}function J(){d&&d.classList.remove("visible"),g&&g.classList.remove("visible"),y&&y.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error"),c&&c.classList.remove("success")}function b(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error")}B();
//# sourceMappingURL=commonHelpers.js.map
