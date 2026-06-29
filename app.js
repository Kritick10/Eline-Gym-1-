gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".reveal", {
y:80,
opacity:0,
stagger:0.2,
duration:1
});

// SCROLL ANIMATIONS
gsap.utils.toArray(".section").forEach(sec => {
gsap.from(sec, {
scrollTrigger:{
trigger:sec,
start:"top 80%"
},
opacity:0,
y:50,
duration:1
});
});

// LEAD FORM (LOCAL STORAGE VERSION)
document.getElementById("leadForm").addEventListener("submit", function(e){
e.preventDefault();

let name = this[0].value;
let phone = this[1].value;

let leads = JSON.parse(localStorage.getItem("leads") || "[]");
leads.push({name, phone, time:Date.now()});

localStorage.setItem("leads", JSON.stringify(leads));

alert("Booking received!");
});
