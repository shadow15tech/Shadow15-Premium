/*==========================================================

                TRUSTED SECTION

                VERSION 1.0

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const cards=document.querySelectorAll(".trusted-card");

    const heading=document.querySelector(".trusted-heading");



    /*======================================
    GSAP
    ======================================*/

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

        gsap.from(cards,{

            opacity:0,

            y:80,

            duration:1,

            stagger:.15,

            ease:"power3.out",

            scrollTrigger:{

                trigger:".trusted-grid-box",

                start:"top 80%"

            }

        });

    }



    /*======================================
    COUNTERS
    ======================================*/

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const title=entry.target.querySelector("h3");

            const finalText=title.innerText;

            const value=parseInt(finalText);

            if(isNaN(value)) return;

            let current=0;

            const timer=setInterval(()=>{

                current++;

                title.innerText=finalText.includes("%")

                    ? current+"%"

                    : current+"+";

                if(current>=value){

                    clearInterval(timer);

                    title.innerText=finalText;

                }

            },18);

            observer.unobserve(entry.target);

        });

    },{

        threshold:.4

    });

    cards.forEach(card=>observer.observe(card));

});