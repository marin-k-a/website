import"./hoisted.ChkmJnts.js";document.addEventListener("astro:page-load",()=>{const t=document.querySelector(".copy-url-button");t?.addEventListener("click",async()=>{await r(t)});async function r(e){let a=e.getAttribute("data-url")||"",n=e.innerText;await navigator.clipboard.writeText(a),e.innerText="Copied",setTimeout(()=>{e.innerText=n},2500)}});
