document.addEventListener("DOMContentLoaded", () => {

    initCTAButtons();

    initCTAParallax();

});

/*==========================================================
                    BUTTON INTERACTION
==========================================================*/

function initCTAButtons(){

    const buttons=document.querySelectorAll(".scta-btn");

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="translateY(-6px) scale(1.03)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="translateY(0) scale(1)";

        });

    });

}

/*==========================================================
                    PARALLAX
==========================================================*/

function initCTAParallax(){

    if(window.innerWidth<992) return;

    const card=document.querySelector(".scta-card");

    if(!card) return;

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*18;

        const y=(e.clientY/window.innerHeight-.5)*18;

        gsap.to(card,{

            x,

            y,

            rotationY:x*.25,

            rotationX:-y*.25,

            duration:1.2,

            ease:"power3.out"

        });

    });

    document.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            x:0,

            y:0,

            rotationX:0,

            rotationY:0,

            duration:1,

            ease:"power3.out"

        });

    });

}

/*==========================================================
                    RESET
==========================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth<992){

        gsap.set(".scta-card",{

            clearProps:"transform"

        });

    }

});