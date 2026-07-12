// AIHubTools - Day 1

const searchBox = document.querySelector("input");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", () => {

const value = searchBox.value.toLowerCase();

cards.forEach(card => {

const title = card.querySelector("h2").innerText.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

btn.addEventListener("click",()=>{

alert("This page will be added in Day 2 🚀");

});

});
