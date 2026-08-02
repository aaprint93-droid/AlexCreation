const topbar=document.getElementById("topbar");
addEventListener("scroll",()=>topbar.classList.toggle("scrolled",scrollY>30));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn?.addEventListener("click",()=>{
 if(getComputedStyle(nav).display==="none"){nav.style.display="flex";nav.style.position="absolute";nav.style.top="74px";nav.style.right="12px";nav.style.flexDirection="column";nav.style.background="#090909";nav.style.padding="25px";nav.style.border="1px solid #333";nav.style.borderRadius="10px"}
 else nav.style.display="none";
});