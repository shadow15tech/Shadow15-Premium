/*==========================================================
                    CASE STUDIES
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initCaseStudyTilt();

    initCaseStudyParallax();

    initCaseStudyMagnet();

});

/*==========================================================
                    CARD TILT
==========================================================*/

function initCaseStudyTilt(){

    if(window.innerWidth<992) return;

    const cards=document.querySelectorAll(".wcs-card");

    cards.forEach(card=>{

        const image=card.querySelector(".wcs-preview img");

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*8;

            const rotateX=((y/rect.height)-0.5)*-8;

            gsap.to(card,{

                rotationY:rotateY,

                rotationX:rotateX,

                z:40,

                transformPerspective:1200,

                transformOrigin:"center center",

                duration:.45,

                ease:"power3.out"

            });

            if(image){

                const imgX=((x/rect.width)-0.5)*18;

                const imgY=((y/rect.height)-0.5)*18;

                gsap.to(image,{

                    x:imgX,

                    y:imgY,

                    scale:1.08,

                    duration:.45,

                    ease:"power3.out"

                });

            }

        });

        card.addEventListener("mouseleave",()=>{

            gsap.to(card,{

                rotationX:0,

                rotationY:0,

                z:0,

                duration:.6,

                ease:"power3.out"

            });

            if(image){

                gsap.to(image,{

                    x:0,

                    y:0,

                    scale:1,

                    duration:.6,

                    ease:"power3.out"

                });

            }

        });

    });

}

/*==========================================================
                    SECTION PARALLAX
==========================================================*/

function initCaseStudyParallax(){

    if(window.innerWidth<992) return;

    const container=document.querySelector(".wcs-container");

    const glowOne=document.querySelector(".wcs-glow-1");

    const glowTwo=document.querySelector(".wcs-glow-2");

    if(!container) return;

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth)-0.5;

        const y=(e.clientY/window.innerHeight)-0.5;

        gsap.to(container,{

            x:x*18,

            y:y*12,

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
                    MAGNETIC BUTTON
==========================================================*/

function initCaseStudyMagnet(){

    if(window.innerWidth<992) return;

    const buttons=document.querySelectorAll(".wcs-content>a");

    buttons.forEach(button=>{

        button.addEventListener("mousemove",(e)=>{

            const rect=button.getBoundingClientRect();

            const x=e.clientX-rect.left-rect.width/2;

            const y=e.clientY-rect.top-rect.height/2;

            gsap.to(button,{

                x:x*.18,

                y:y*.18,

                duration:.35,

                ease:"power3.out"

            });

        });

        button.addEventListener("mouseleave",()=>{

            gsap.to(button,{

                x:0,

                y:0,

                duration:.45,

                ease:"power3.out"

            });

        });

    });

}

/*==========================================================
                    RESET
==========================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth<992){

        gsap.set([

            ".wcs-card",

            ".wcs-container",

            ".wcs-preview img",

            ".wcs-content>a",

            ".wcs-glow-1",

            ".wcs-glow-2"

        ],{

            clearProps:"transform"

        });

    }

});