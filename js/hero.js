/*==========================================================

            SHADOW15 HERO

            VERSION 1.0

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*======================================
ELEMENTS
======================================*/

const hero=document.querySelector(".s15-hero");

const orb=document.querySelector(".hero-orb");

const cards=document.querySelectorAll(".hero-card");

const badge=document.querySelector(".hero-badge");

const title=document.querySelector(".hero-title");

const description=document.querySelector(".hero-description");

const buttons=document.querySelector(".hero-buttons");

const stats=document.querySelectorAll(".hero-stat");



/*======================================
MOUSE PARALLAX
======================================*/

hero.addEventListener("mousemove",(e)=>{

const rect=hero.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width-.5;

const y=(e.clientY-rect.top)/rect.height-.5;

orb.style.transform=

`translate(${x*35}px,${y*35}px)`;

cards.forEach((card,index)=>{

const speed=(index+1)*8;

card.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});



/*======================================
RESET
======================================*/

hero.addEventListener("mouseleave",()=>{

orb.style.transform="translate(0,0)";

cards.forEach(card=>{

card.style.transform="translate(0,0)";

});

});



/*======================================
COUNTER
======================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const number=entry.target.querySelector("h2");

const finalValue=number.innerText;

const numeric=parseInt(finalValue);

let count=0;

const interval=setInterval(()=>{

count++;

number.innerText=

finalValue.includes("%")

?count+"%"

:count+"+";

if(count>=numeric){

clearInterval(interval);

number.innerText=finalValue;

}

},25);

observer.unobserve(entry.target);

});

},{threshold:.5});

stats.forEach(stat=>observer.observe(stat));



/*======================================
GSAP
======================================*/

if(typeof gsap!=="undefined"){

gsap.from(badge,{

opacity:0,

y:30,

duration:.8

});

gsap.from(title,{

opacity:0,

y:40,

duration:1,

delay:.2

});

gsap.from(description,{

opacity:0,

y:35,

duration:1,

delay:.4

});

gsap.from(buttons,{

opacity:0,

y:30,

duration:1,

delay:.6

});

gsap.from(stats,{

opacity:0,

y:40,

stagger:.12,

duration:.8,

delay:.8

});

gsap.from(cards,{

opacity:0,

scale:.8,

stagger:.15,

duration:1,

delay:1

});

gsap.from(orb,{

opacity:0,

scale:.6,

duration:1.2,

delay:.7

});

}

});


/*======================================

GENERATE PARTICLES

======================================*/

const particleContainer = document.getElementById("hero-particles");

for(let i=0;i<40;i++){

    const particle=document.createElement("span");

    particle.classList.add("hero-particle");

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDuration=

    (12+Math.random()*18)+"s";

    particle.style.animationDelay=

    (-Math.random()*20)+"s";

    particle.style.opacity=

    (.15+Math.random()*.45);

    particle.style.transform=

    `scale(${.4+Math.random()})`;

    particleContainer.appendChild(particle);

}


