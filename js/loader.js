/*==========================================================
    SHADOW15 OFFICIAL WEBSITE
    Premium Loader
==========================================================*/

"use strict";

function initLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    const logo = loader.querySelector(".loader-logo");
    const title = loader.querySelector(".loader-title");
    const tagline = loader.querySelector(".loader-tagline");

    const progressBar = loader.querySelector(".loader-progress span");
    const percent = loader.querySelector(".loader-percent");

    let progress = 0;

    /*---------------------------------------
        INTRO ANIMATION
    ---------------------------------------*/

    const intro = gsap.timeline();

    intro

    .to(logo,{
        opacity:1,
        y:0,
        scale:1,
        duration:.8,
        ease:"power3.out"
    })

    .to(title,{
        opacity:1,
        y:0,
        duration:.7
    },"-=0.3")

    .to(tagline,{
        opacity:1,
        y:0,
        duration:.6
    },"-=0.4");


    /*---------------------------------------
        LOADING
    ---------------------------------------*/

    const loading = setInterval(()=>{

        progress++;

        percent.textContent = progress + "%";

        progressBar.style.width = progress + "%";

        if(progress >= 100){

            clearInterval(loading);

            finishLoader();

        }

    },18);

}

/*==========================================================
    FINISH LOADER
==========================================================*/

function finishLoader(){

    const loader = document.querySelector(".loader");

    const tl = gsap.timeline({

        delay:.3

    });

    tl.to(".loader-content",{

        opacity:0,

        y:-40,

        duration:.8,

        ease:"power3.inOut"

    })

    .to(loader,{

        yPercent:-100,

        duration:1.2,

        ease:"power4.inOut"

    })

    .set(loader,{

        display:"none"

    })

    .from("#header",{

        opacity:0,

        y:-60,

        duration:.8

    })

    .from("#main-content",{

        opacity:0,

        y:60,

        duration:1,

        ease:"power3.out"

    },"-=0.4");

}