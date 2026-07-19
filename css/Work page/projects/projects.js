/*==========================================================
                    FEATURED PROJECTS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initProjectTilt();

    initProjectParallax();

});

/*==========================================================
                    PROJECT TILT
==========================================================*/

function initProjectTilt(){

    const projects=document.querySelectorAll(".wp-project");

    projects.forEach(project=>{

        project.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=project.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*8;

            const rotateX=((y/rect.height)-0.5)*-8;

            gsap.to(project,{

                rotationY:rotateY,

                rotationX:rotateX,

                z:40,

                transformPerspective:1200,

                transformOrigin:"center center",

                duration:.45,

                ease:"power3.out"

            });

            const image=project.querySelector(".wp-image img");

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

        project.addEventListener("mouseleave",()=>{

            gsap.to(project,{

                rotationX:0,

                rotationY:0,

                z:0,

                duration:.6,

                ease:"power3.out"

            });

            const image=project.querySelector(".wp-image img");

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

function initProjectParallax(){

    if(window.innerWidth<992) return;

    const list=document.querySelector(".wp-list");

    const glowOne=document.querySelector(".wp-glow-1");

    const glowTwo=document.querySelector(".wp-glow-2");

    if(!list) return;

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth)-0.5;

        const y=(e.clientY/window.innerHeight)-0.5;

        gsap.to(list,{

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
                    BUTTON MAGNET
==========================================================*/

document.querySelectorAll(".wp-buttons a").forEach(button=>{

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

            duration:.45,

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

            ".wp-project",

            ".wp-list",

            ".wp-buttons a",

            ".wp-glow-1",

            ".wp-glow-2"

        ],{

            clearProps:"transform"

        });

    }

});