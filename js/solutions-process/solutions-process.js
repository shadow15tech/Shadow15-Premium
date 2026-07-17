/*==========================================================
                SOLUTIONS PROCESS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initProcessCardHover();

    initProcessParallax();

});

/*==========================================================
                CARD INTERACTION
==========================================================*/

function initProcessCardHover(){

    const cards = document.querySelectorAll(".sp-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("active");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("active");

        });

    });

}

/*==========================================================
                MOUSE PARALLAX
==========================================================*/

function initProcessParallax(){

    if(window.innerWidth < 992) return;

    if(typeof gsap === "undefined") return;

    const section = document.querySelector(".solutions-process");

    if(!section) return;

    const timeline = section.querySelector(".sp-timeline");

    const cards = section.querySelectorAll(".sp-card");

    section.addEventListener("mousemove",(e)=>{

        const rect = section.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - .5;

        const y = (e.clientY - rect.top) / rect.height - .5;

        gsap.to(timeline,{

            x:x*12,

            y:y*12,

            duration:.8,

            ease:"power2.out"

        });

        cards.forEach((card,index)=>{

            gsap.to(card,{

                x:x*(6+(index%3)*2),

                y:y*(6+(index%2)*2),

                duration:.8,

                ease:"power2.out"

            });

        });

    });

    section.addEventListener("mouseleave",()=>{

        gsap.to([timeline,...cards],{

            x:0,

            y:0,

            duration:.8,

            ease:"power2.out"

        });

    });

}