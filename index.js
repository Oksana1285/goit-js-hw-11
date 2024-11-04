import{i as d,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const l={Info:"Please enter a value in the search field!",Warning:"Sorry, there are no images matching your search query. Please try again!",Error:"Sorry, there are no connection to the server. Please try again later! ",Exception:"Exception: We have some issue with connection. Please try again later! "},c={green:"#14b454",yellow:"#e52a2a",red:"#e5c32a"};function f(r,t){d.info({position:"topRight",backgroundColor:`${t}`,message:`${r}`})}const g={method:"GET"},y="46849284-22f4e981648a1afff2e3fd4a3",h="https://pixabay.com/api/?";async function L(r){try{const t=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=await fetch(h+t,g).then();if(!a.ok){f(l.Error,c.yellow);return}return await a.json()}catch(t){f(`${l.Exception} ERROR: ${t}`,c.yellow)}}const w=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function E(r,t){t.innerHTML=P(r),w.refresh()}function P(r){return r.hits.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:n,comments:s,downloads:p})=>`<li class="gallery-item">
					<a class="gallery-link" href="${a}">
						<figure class="gallery-figure ">
							<img class="gallery-image" src="${t}" alt="${o}" loading="lazy">
									<ul class="img-wrap">
									<li>Likes<span>${e}</span></li>
									<li>Views<span>${n}</span></li>
									<li>Comments<span>${s}</span></li>
									<li>Downloads<span>${p}</span></li>
								</ul>
						</figure>
					</a>
				</li>
		`).join("")}const $=document.querySelector(".search-form"),i=document.querySelector(".gallery"),u=document.createElement("div");$.addEventListener("submit",b);async function b(r){r.preventDefault(),d.destroy(),i.innerHTML="",S();const t=new FormData(r.target),{search:a}=Object.fromEntries(t.entries());if(!a.trim()){f(l.Info,c.green),i.innerHTML="";return}try{const o=await L(a.trim());v(o)&&E(o,i)}catch(o){f(l.Exception+o,c.yellow)}r.target.reset()}function S(){u.classList.add("loader"),i.append(u)}function v(r){return r?r&&r.totalHits===0?(f(l.Warning,c.red),i.innerHTML="",!1):!0:(gallery.innerHTML="",!1)}
//# sourceMappingURL=index.js.map
