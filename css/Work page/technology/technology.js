/*==========================================================
                    TECHNOLOGY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initTechTilt();

    initTechCards();

    initTechParallax();

    initCoreGlow();

});

/*==========================================================
                    CORE TILT
==========================================================*/

function initTechTilt(){

    if(window.innerWidth<992) return;

    const core=document.querySelector(".wt-core");

    if(!core) return;

    core.addEventListener("mousemove",(e)=>{

        const rect=core.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*18;

        const rotateX=((y/rect.height)-0.5)*-18;

        gsap.to(core,{

            rotationY:rotateY,

            rotationX:rotateX,

            transformPerspective:1200,

            transformOrigin:"center",

            duration:.5,

            ease:"power3.out"

        });

    });

    core.addEventListener("mouseleave",()=>{

        gsap.to(core,{

            rotationX:0,

            rotationY:0,

            duration:.6,

            ease:"power3.out"

        });

    });

}

/*==========================================================
                MAGNETIC TECH CARDS
==========================================================*/

function initTechCards(){

    if(window.innerWidth<992) return;

    const cards=document.querySelectorAll(".wt-tech");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left-rect.width/2;

            const y=e.clientY-rect.top-rect.height/2;

            gsap.to(card,{

                x:x*.18,

                y:y*.18,

                scale:1.08,

                duration:.35,

                ease:"power3.out"

            });

        });

        card.addEventListener("mouseleave",()=>{

            gsap.to(card,{

                x:0,

                y:0,

                scale:1,

                duration:.45,

                ease:"power3.out"

            });

        });

    });

}

/*==========================================================
                SECTION PARALLAX
==========================================================*/

function initTechParallax(){

    if(window.innerWidth<992) return;

    const showcase=document.querySelector(".wt-showcase");

    const glowOne=document.querySelector(".wt-glow-1");

    const glowTwo=document.querySelector(".wt-glow-2");

    if(!showcase) return;

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth)-0.5;

        const y=(e.clientY/window.innerHeight)-0.5;

        gsap.to(showcase,{

            x:x*20,

            y:y*14,

            duration:1.2,

            ease:"power3.out"

        });

        if(glowOne){

            gsap.to(glowOne,{

                x:x*70,

                y:y*45,

                duration:2,

                ease:"power3.out"

            });

        }

        if(glowTwo){

            gsap.to(glowTwo,{

                x:-x*70,

                y:-y*45,

                duration:2,

                ease:"power3.out"

            });

        }

    });

}

/*==========================================================
                    CORE PULSE
==========================================================*/

function initCoreGlow(){

    const logo=document.querySelector(".wt-logo");

    if(!logo) return;

    gsap.to(logo,{

        boxShadow:"0 0 60px rgba(0,229,255,.45)",

        repeat:-1,

        yoyo:true,

        duration:2.5,

        ease:"sine.inOut"

    });

}

/*==========================================================
                FEATURE CARD HOVER
==========================================================*/

const featureCards=document.querySelectorAll(".wt-feature");

featureCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{

            y:-12,

            duration:.35,

            ease:"power3.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            y:0,

            duration:.4,

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

            ".wt-showcase",

            ".wt-core",

            ".wt-tech",

            ".wt-feature",

            ".wt-glow-1",

            ".wt-glow-2"

        ],{

            clearProps:"transform"

        });

    }

});