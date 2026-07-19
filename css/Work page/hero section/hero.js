/*==========================================================
                    WORK HERO
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeroTilt();

    initHeroParallax();

});

/*==========================================================
                    CARD TILT
==========================================================*/

function initHeroTilt(){

    const cards=document.querySelectorAll(".wh-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*12;

            const rotateX=((y/rect.height)-0.5)*-12;

            gsap.to(card,{

                rotationX:rotateX,

                rotationY:rotateY,

                z:40,

                duration:.45,

                ease:"power3.out"

            });

        });

        card.addEventListener("mouseleave",()=>{

            gsap.to(card,{

                rotationX:0,

                rotationY:0,

                z:0,

                duration:.6,

                ease:"power3.out"

            });

        });

    });

}

/*==========================================================
                    HERO PARALLAX
==========================================================*/

function initHeroParallax(){

    if(window.innerWidth<992) return;

    const showcase=document.querySelector(".wh-showcase");

    const glowOne=document.querySelector(".wh-glow-1");

    const glowTwo=document.querySelector(".wh-glow-2");

    if(!showcase) return;

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5);

        const y=(e.clientY/window.innerHeight-.5);

        gsap.to(showcase,{

            x:x*30,

            y:y*20,

            duration:1.2,

            ease:"power3.out"

        });

        if(glowOne){

            gsap.to(glowOne,{

                x:x*60,

                y:y*40,

                duration:2,

                ease:"power3.out"

            });

        }

        if(glowTwo){

            gsap.to(glowTwo,{

                x:-x*60,

                y:-y*40,

                duration:2,

                ease:"power3.out"

            });

        }

    });

}

/*==========================================================
                    BUTTON MAGNET
==========================================================*/

document.querySelectorAll(".wh-btn").forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        if(window.innerWidth<992) return;

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;

        const y=e.clientY-rect.top-rect.height/2;

        gsap.to(button,{

            x:x*.15,

            y:y*.15,

            duration:.35,

            ease:"power3.out"

        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            x:0,

            y:0,

            duration:.5,

            ease:"power3.out"

        });

    });

});

/*==========================================================
                    RESET
==========================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth<992){

        gsap.set([

            ".wh-card",

            ".wh-showcase",

            ".wh-btn",

            ".wh-glow-1",

            ".wh-glow-2"

        ],{

            clearProps:"transform"

        });

    }

});