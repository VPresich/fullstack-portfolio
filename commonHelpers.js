import{A as b,S as g,N as h}from"./assets/vendor-DBKAMmJG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const d=o=>{const t=document.getElementById(o);t&&t.scrollIntoView({behavior:"smooth"})},l=document.querySelector(".js-header-menu-btn"),s=document.querySelector(".js-header-menu");l&&l.addEventListener("click",m);s&&s.addEventListener("click",y);function m(){s&&s.classList.toggle("isopen")}function y(o){o.preventDefault();const t=o.target;if(!t.matches("a"))return;const r=t.getAttribute("href").substring(1);d(r),m()}const u=document.querySelector(".js-header-mobile-menu-btn"),f=document.querySelector(".js-mobile-menu"),v=document.querySelector(".js-mobile-menu-close-btn"),a=document.querySelector(".js-mobile-menu-nav");u&&u.addEventListener("click",w);v.addEventListener("click",p);a&&a.addEventListener("click",L);function w(){f.classList.add("is-open")}function p(){f.classList.remove("is-open")}function L(o){o.preventDefault();const t=o.target;if(console.log("item:",t),!t.matches("a"))return;const r=t.getAttribute("href").substring(1);d(r),p()}new b(".accordion-container");new g(".swiper",{modules:[h],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".swiper-button-next"},breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});
//# sourceMappingURL=commonHelpers.js.map
