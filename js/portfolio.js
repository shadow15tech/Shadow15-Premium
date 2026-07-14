/*==========================================================

                PORTFOLIO

                VERSION 1.0

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const heading=document.querySelector(".portfolio-heading");

const studies=document.querySelectorAll(".case-study");



if(typeof gsap!=="undefined"){


gsap.from(heading,{

opacity:0,

y:60,

duration:1,

ease:"power3.out",

scrollTrigger:{

trigger:heading,

start:"top 80%"

}

});


gsap.from(studies,{

opacity:0,

y:100,

duration:1,

stagger:.25,

ease:"power3.out",

scrollTrigger:{

trigger:".portfolio-list",

start:"top 75%"

}

});


studies.forEach(study=>{

study.addEventListener("mousemove",(e)=>{

const rect=study.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width-.5;

const y=(e.clientY-rect.top)/rect.height-.5;

const image=study.querySelector("img");

image.style.transform=

`perspective(1200px)
rotateY(${x*8}deg)
rotateX(${-y*8}deg)
scale(1.03)`;

});


study.addEventListener("mouseleave",()=>{

const image=study.querySelector("img");

image.style.transform=

"perspective(1200px) rotateX(0) rotateY(0) scale(1)";

});

});


}

});