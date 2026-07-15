/*==========================================================
                    SHADOW15 PROCESS V1
==========================================================*/

/*==========================================================
                    DOM CACHE
==========================================================*/

const processSection =

    document.querySelector(".process");

const processSteps =

    [...document.querySelectorAll(".process-step")];

const progressBars =

    [...document.querySelectorAll(".status-bar span")];

const summaryCards =

    [...document.querySelectorAll(".summary-card")];

const processPanel =

    document.querySelector(".process-panel");

/*==========================================================
                    STATE
==========================================================*/

const processState = {

    initialized:false,

    activeStep:0

};

/*==========================================================
                    HELPERS
==========================================================*/

function removeActiveSteps(){

    processSteps.forEach(step=>{

        step.classList.remove("active");

    });

}

function activateStep(index){

    if(!processSteps[index]) return;

    processSteps[index]

    .classList.add("active");

    processState.activeStep = index;

}

/*==========================================================
                    RESET
==========================================================*/

function resetTimeline(){

    removeActiveSteps();

}

/*==========================================================
                    PROGRESS BAR PREP
==========================================================*/

function prepareProgressBars(){

    progressBars.forEach(bar=>{

        const width =

            bar.style.width;

        bar.dataset.width = width;

        bar.style.width = "0%";

    });

}


/*==========================================================
                    PROGRESS BAR ANIMATION
==========================================================*/

function animateProgressBars(){

    if(typeof gsap === "undefined") return;

    progressBars.forEach(bar=>{

        gsap.to(

            bar,

            {

                width:bar.dataset.width,

                duration:1.2,

                ease:"power3.out"

            }

        );

    });

}

/*==========================================================
                    STEP ANIMATION
==========================================================*/

function animateSteps(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        ".process-step",

        {

            opacity:0,

            y:50

        },

        {

            opacity:1,

            y:0,

            duration:.7,

            stagger:.15,

            ease:"power3.out"

        }

    );

}

/*==========================================================
                    PANEL ANIMATION
==========================================================*/

function animatePanel(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        processPanel,

        {

            opacity:0,

            x:60,

            scale:.96

        },

        {

            opacity:1,

            x:0,

            scale:1,

            duration:.9,

            ease:"power3.out"

        }

    );

}

/*==========================================================
                    SUMMARY CARD ANIMATION
==========================================================*/

function animateSummaryCards(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        summaryCards,

        {

            opacity:0,

            y:30

        },

        {

            opacity:1,

            y:0,

            duration:.6,

            stagger:.1,

            ease:"power2.out"

        }

    );

}


/*==========================================================
                    GSAP
==========================================================*/

if(

    typeof gsap !== "undefined" &&

    typeof ScrollTrigger !== "undefined"

){

    gsap.registerPlugin(

        ScrollTrigger

    );

}

/*==========================================================
                    MASTER TIMELINE
==========================================================*/

const processTimeline =

    gsap.timeline({

        paused:true,

        defaults:{

            ease:"power3.out",

            duration:.7

        }

    });

processTimeline

.from(

    ".process-header",

    {

        opacity:0,

        y:70

    }

)

.from(

    ".process-step",

    {

        opacity:0,

        x:-60,

        stagger:.14

    },

    "-=.2"

)

.from(

    ".process-panel",

    {

        opacity:0,

        x:60,

        scale:.96

    },

    "-=.6"

)

.from(

    ".process-cta",

    {

        opacity:0,

        y:70

    },

    "-=.3"

);

/*==========================================================
                    STEP REVEAL
==========================================================*/

processSteps.forEach((step,index)=>{

    ScrollTrigger.create({

        trigger:step,

        start:"top 55%",

        onEnter:()=>{

            resetTimeline();

            activateStep(index);

        },

        onEnterBack:()=>{

            resetTimeline();
            
            activateStep(index);

        }

    });

});

/*==========================================================
                    MAIN TRIGGER
==========================================================*/

ScrollTrigger.create({

    trigger:".process",

    start:"top 70%",

    once:true,

    animation:processTimeline,

    onEnter:()=>{

        animateSteps();

        animatePanel();

        animateProgressBars();

        animateSummaryCards();

    }

});

/*==========================================================
                    INITIALIZE
==========================================================*/

function initializeProcess(){

    if(processState.initialized) return;

    prepareProgressBars();

    activateStep(0);

    processState.initialized = true;

}

/*==========================================================
                    DOM READY
==========================================================*/

if(

    document.readyState === "loading"

){

    document.addEventListener(

        "DOMContentLoaded",

        initializeProcess

    );

}

else{

    initializeProcess();

}