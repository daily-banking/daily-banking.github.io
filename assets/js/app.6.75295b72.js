(()=>{"use strict";const e=(e,t,n)=>{let i,o;e.addEventListener("wheel",(e=>{if(e.deltaX<-10){if(i)return window.clearTimeout(i),void(i=window.setTimeout((()=>{i=void 0}),50));t(),o=void 0,i=window.setTimeout((()=>{i=void 0}),50)}if(e.deltaX>10){if(o)return window.clearTimeout(o),void(o=window.setTimeout((()=>{o=void 0}),50));n(),i=void 0,o=window.setTimeout((()=>{o=void 0}),50)}}))},t=e=>[...new Array(e).keys()],n=window.matchMedia("(min-width: 800px)"),i=document.querySelector("section.events"),o=i.querySelector("ul.bar"),s=i.querySelector(".container"),d=s.querySelectorAll(".card"),r=s.querySelector(".card-placeholder"),c=s.querySelector(".picture"),a=i.querySelector(".pagination"),l=a.querySelector("button.left"),h=a.querySelector("button.right"),u=a.querySelector(".page-number"),m=[...Array(d.length)].map((e=>document.createElement("li")));let y=0;const w=()=>{m.forEach(((e,t)=>{switch(!0){case t===y:e.dataset.class="active";break;case 1===Math.abs(t-y):e.dataset.class="near";break;default:e.dataset.class="far"}}))},v=()=>{const e=d[y],t=getComputedStyle(e),i=Number.parseInt(t.height,10),o=d[y].querySelector(".text"),s=o.offsetHeight;d.forEach(((e,t)=>{t===y?e.classList.remove("hidden"):e.classList.add("hidden")})),n.matches?(o.dataset.overflow=s>=i?"auto":"hidden",r.style.removeProperty("height")):(o.dataset.overflow="hidden",r.style.setProperty("height",`${s+96}px`)),c.dataset.index=y},g=()=>{u.innerText=`${y+1} из ${d.length}`,y<=0&&l.classList.add("hidden"),y>0&&l.classList.remove("hidden"),y>=d.length-1&&h.classList.add("hidden"),y<d.length-1&&h.classList.remove("hidden")},p=()=>{y<=0||(y-=1,w(),v(),g())},f=()=>{y>=d.length-1||(y+=1,w(),v(),g())},L=document.querySelector("section.recommendations"),S=L.querySelector(".container"),q=L.querySelectorAll(".card"),x=L.querySelectorAll(".thumbnail");let b=0;const E=window.matchMedia("(min-width: 800px)"),T=window.matchMedia("(min-width: 1224px)");let k=0;const $=new ResizeObserver((e=>{window.clearTimeout(k),k=window.setTimeout((()=>{const n=e.find((e=>e.target===S));n&&(e=>{b=e.contentRect.width;for(const e in t(q.length)){const t=q[e];t&&(t.classList.contains("hidden")?M(e):t.style.setProperty("width",`${b}px`))}})(n)}),250)})),A=()=>{E.matches?$.observe(S):$.unobserve(S)},M=e=>{const t=q[e],n=x[e];if(t&&n){const i=n.getBoundingClientRect(),o=n.offsetTop-253,s=T.matches?0:i.left-32,d=e%2==0?0:i.width+64,r=T.matches?d:0;t.style.cssText=`\n      left: ${s}px;\n      top: ${o}px;\n      margin-left: ${r}px;\n      width: ${i.width}px;\n      height: ${i.height}px;\n      opacity: 0;\n    `}},C=e=>{"keydown"===e.type&&"Escape"===e.key&&I()},P=e=>{const t=q[e];t&&(I(),t.classList.remove("hidden"),window.setTimeout((()=>{(e=>{const t=q[e],n=x[e];if(t&&n){const e=T.matches?0:n.offsetTop-253;t.style.cssText=`\n      left: 0;\n      top: ${e}px;\n      margin-left: 0;\n      width: ${b}px;\n      height: 696px;\n      opacity: 1;\n    `}})(e)}),0),window.addEventListener("keydown",C))},I=()=>{for(const e in t(q.length))R(e)},R=e=>{const t=q[e];t&&!t.classList.contains("hidden")&&(M(e),setTimeout((()=>{t.classList.add("hidden")}),250)),window.removeEventListener("keydown",C)},B=window.matchMedia("(min-width: 800px)"),H=document.querySelector("section.advices"),N=H.querySelector(".container"),O=N.querySelectorAll(".card"),X=N.querySelector(".card-placeholder"),z=N.querySelector(".picture"),D=H.querySelector(".pagination"),j=D.querySelector("button.left"),F=D.querySelector("button.right");let G=0;const J=()=>{const e=O[G],t=getComputedStyle(e),n=Number.parseInt(t.height,10),i=O[G].querySelector(".content"),o=i.offsetHeight;O.forEach(((e,t)=>{t===G?e.classList.remove("hidden"):e.classList.add("hidden")})),B.matches?(i.dataset.overflow=o>=n?"auto":"hidden",X.style.removeProperty("height")):(i.dataset.overflow="hidden",X.style.setProperty("height",`${o+48}px`)),z.dataset.index=G},K=()=>{G<=0&&j.classList.add("hidden"),G>0&&j.classList.remove("hidden"),G>=O.length-1&&F.classList.add("hidden"),G<O.length-1&&F.classList.remove("hidden")},Q=()=>{G<=0||(G-=1,J(),K())},U=()=>{G>=O.length-1||(G+=1,J(),K())};document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.getElementById("navToggle");if(!e)return;const t=document.querySelector("section.title");e.addEventListener("click",(()=>{t.classList.toggle("mobile-nav-visible")}))})(),setTimeout((()=>{o.replaceChildren(...m),w(),v(),g(),n.addEventListener("change",v),l.addEventListener("click",p),h.addEventListener("click",f),e(i,p,f),a.classList.remove("hidden"),(()=>{console.log("recommendation init"),A(),E.addEventListener("change",A);for(const e in t(q.length))M(e),q[e].classList.add("hidden"),q[e].querySelector("button").addEventListener("click",(()=>{R(e)})),x[e].querySelector("button").addEventListener("click",(()=>{P(e)}));const e=S.querySelector(".cards");e&&(e.style.display="block")})(),J(),K(),B.addEventListener("change",J),j.addEventListener("click",Q),F.addEventListener("click",U),e(H,Q,U),D.classList.remove("hidden")}),100)}))})();