const search = document.querySelector("input");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Card animation
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Button click
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Tool page coming in Day 3 🚀");
  });
});

// Smooth page load
window.onload = () => {
  document.body.style.opacity = "1";
};
// Theme Toggle
const toggle=document.getElementById("themeToggle");

toggle.onclick=()=>{
document.body.classList.toggle("light");

toggle.textContent=
document.body.classList.contains("light")
?"☀":"🌙";
};

// Fade Animation
document.querySelectorAll(".card").forEach(card=>{
card.classList.add("fade");
});

// Back To Top
const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};
document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("dblclick",()=>{

alert("Tool page coming in Day 5 🚀");

});

});
console.log("AIHubTools Day 6 Loaded");
const filterButtons = document.querySelectorAll(".category");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

const filter = button.dataset.filter;

document.querySelectorAll(".card").forEach(card => {

if(filter === "all"){

card.style.display = "block";

}else{
document.querySelectorAll(".featured-card").forEach(card=>{

card.addEventListener("click",()=>{

card.animate([
{transform:"scale(1)"},
{transform:"scale(1.05)"},
{transform:"scale(1)"}
],{
duration:300
});

});

});
if(card.dataset.category === filter){

card.style.display = "block";

}else{

card.style.display = "none";

}

}

});

});

});
document.querySelectorAll(".featured-card").forEach(card=>{

card.addEventListener("click",()=>{

card.animate([
{transform:"scale(1)"},
{transform:"scale(1.05)"},
{transform:"scale(1)"}
],{
duration:300
});

});

});
window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("loader-hide");

},1200);

});
const stats=document.querySelectorAll(".stat h2");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([
{opacity:0,transform:"translateY(20px)"},
{opacity:1,transform:"translateY(0)"}
],{
duration:700,
fill:"forwards"
});

}

});

});

stats.forEach(stat=>observer.observe(stat));
document.querySelectorAll(".trend-card").forEach(card=>{

card.addEventListener("click",()=>{

card.animate([
{transform:"scale(1)"},
{transform:"scale(1.05)"},
{transform:"scale(1)"}
],{
duration:250
});

});

});
document.querySelectorAll(".featured-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});
document.querySelectorAll(".tool-icon").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.animate([
{transform:"rotate(0deg)"},
{transform:"rotate(10deg) scale(1.1)"},
{transform:"rotate(-10deg) scale(1.1)"},
{transform:"rotate(0deg)"}
],{
duration:500
});

});

});
document.querySelectorAll(".card").forEach(card => {

card.addEventListener("click", () => {

card.animate([
{transform:"scale(1)"},
{transform:"scale(0.98)"},
{transform:"scale(1)"}
],{
duration:200
});

});

});
const resultCount = document.getElementById("resultCount");

function updateCount() {
  let visible = 0;

  document.querySelectorAll(".card").forEach(card => {
    if (card.style.display !== "none") {
      visible++;
    }
  });

  resultCount.textContent = visible + " AI Tools Found";
}

updateCount();

search.addEventListener("keyup", updateCount);
