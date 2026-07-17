/*==========================================================
                SOLUTIONS HERO
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initNodeHover();

    initMouseParallax();

});

/*==========================================================
                NODE HOVER
==========================================================*/

function initNodeHover(){

    const nodes=document.querySelectorAll(".ecosystem-node");

    nodes.forEach(node=>{

        node.addEventListener("mouseenter",()=>{

            node.classList.add("active");

        });

        node.addEventListener("mouseleave",()=>{

            node.classList.remove("active");

        });

    });

}

/*==========================================================
                PARALLAX
==========================================================*/

function initMouseParallax(){

    if(window.innerWidth<=992) return;

    if(typeof gsap==="undefined") return;

    const network=document.querySelector(".ecosystem-network");

    if(!network) return;

    const core=document.querySelector(".ecosystem-core");

    const nodes=document.querySelectorAll(".ecosystem-node");

    network.addEventListener("mousemove",(e)=>{

        const rect=network.getBoundingClientRect();

        const x=((e.clientX-rect.left)/rect.width-.5);

        const y=((e.clientY-rect.top)/rect.height-.5);

        gsap.to(core,{

            x:x*18,

            y:y*18,

            duration:.5,

            overwrite:true

        });

        nodes.forEach((node,index)=>{

            const power=(index+1)*2;

            gsap.to(node,{

                x:x*power,

                y:y*power,

                duration:.6,

                overwrite:true

            });

        });

    });

    network.addEventListener("mouseleave",()=>{

        gsap.to([core,...nodes],{

            x:0,

            y:0,

            duration:.7,

            ease:"power2.out"

        });

    });

}