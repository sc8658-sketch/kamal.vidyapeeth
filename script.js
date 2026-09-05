const menuToggle=document.querySelector(".menu-toggle"),navLinks=document.querySelector(".nav-links");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));
const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
document.getElementById("enquiryForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const course=document.getElementById("course").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const message=document.getElementById("message").value.trim();
  const text=`Hello Kamal Vidyapeeth,%0A%0AName: ${encodeURIComponent(name)}%0AClass/Course: ${encodeURIComponent(course)}%0AContact Number: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message||"I would like more information about classes.")}`;
  window.open(`https://wa.me/916395516630?text=${text}`,"_blank","noopener");
});
