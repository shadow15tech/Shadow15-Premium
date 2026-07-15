/*==========================================================
                    SHADOW15 PORTFOLIO V1
==========================================================*/

/*==========================================================
                    DOM CACHE
==========================================================*/

const portfolioSection =

    document.querySelector(".portfolio");

const projectCards =

    [...document.querySelectorAll(".project-card")];

const projectPreview =

    document.querySelector(".project-preview");

const metricCards =

    [...document.querySelectorAll(".metric-card")];

const showcase =

    document.querySelector(".portfolio-showcase");

/*==========================================================
                    PROJECT DATA
==========================================================*/

const portfolioProjects = {

    neurologist:{

        image:"assets/images/portfolio/neurologist-preview.webp"

    },

    hotel:{

        image:"assets/images/portfolio/hotel-preview.webp"

    },

    travel:{

        image:"assets/images/portfolio/travel-preview.webp"

    },

    interior:{

        image:"assets/images/portfolio/interior-preview.webp"

    },

    restaurant:{

        image:"assets/images/portfolio/restaurant-preview.webp"

    },

    ecommerce:{

        image:"assets/images/portfolio/ecommerce-preview.webp"

    }

};

/*==========================================================
                    STATE
==========================================================*/

const portfolioState = {

    initialized:false,

    activeProject:"neurologist"

};

/*==========================================================
                    HELPERS
==========================================================*/

function removeActiveProjects(){

    projectCards.forEach(card=>{

        card.classList.remove("active");

    });

}

function activateProject(card){

    removeActiveProjects();

    card.classList.add("active");

    portfolioState.activeProject =

    card.dataset.project;

}
/*==========================================================
                    UPDATE PREVIEW
==========================================================*/

function updatePreview(project){

    const data =

        portfolioProjects[project];

    if(!data || !projectPreview) return;

    if(projectPreview.src.includes(data.image)){

        return;

    }

    if(typeof gsap !== "undefined"){

        gsap.to(

            projectPreview,

            {

                opacity:0,

                scale:.98,

                duration:.18,

                onComplete:()=>{

                    projectPreview.src =

                        data.image;

                    gsap.to(

                        projectPreview,

                        {

                            opacity:1,

                            scale:1,

                            duration:.35,

                            ease:"power2.out"

                        }

                    );

                }

            }

        );

    }

    else{

        projectPreview.src =

            data.image;

    }

}

/*==========================================================
                    SWITCH PROJECT
==========================================================*/

function switchProject(card){

    if(!card) return;

    const project =

        card.dataset.project;

    if(

        portfolioState.activeProject === project

    ){

        return;

    }

    activateProject(card);

    updatePreview(project);

}

/*==========================================================
                    EVENTS
==========================================================*/

projectCards.forEach(card=>{

    card.addEventListener(

        "click",

        ()=>{

            switchProject(card);

        }

    );

    card.addEventListener(

        "mouseenter",

        ()=>{

            switchProject(card);

        }

    );

});
/*==========================================================
                    METRIC ANIMATION
==========================================================*/

function animateMetrics(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        metricCards,

        {

            opacity:0,

            y:40,

            scale:.96

        },

        {

            opacity:1,

            y:0,

            scale:1,

            duration:.7,

            stagger:.12,

            ease:"power3.out"

        }

    );

}

/*==========================================================
                    SHOWCASE ANIMATION
==========================================================*/

function animateShowcase(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        showcase,

        {

            opacity:0,

            x:-70,

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

const portfolioTimeline =

    gsap.timeline({

        paused:true,

        defaults:{

            ease:"power3.out",

            duration:.7

        }

    });

portfolioTimeline

.from(

    ".portfolio-header",

    {

        opacity:0,

        y:70

    }

)

.from(

    ".portfolio-showcase",

    {

        opacity:0,

        x:-80

    },

    "-=.3"

)

.from(

    ".project-card",

    {

        opacity:0,

        x:60,

        stagger:.10

    },

    "-=.5"

)

.from(

    ".portfolio-metrics",

    {

        opacity:0,

        y:60

    },

    "-=.3"

)

.from(

    ".portfolio-cta",

    {

        opacity:0,

        y:70

    },

    "-=.2"

);

/*==========================================================
                    MAIN TRIGGER
==========================================================*/

ScrollTrigger.create({

    trigger:".portfolio",

    start:"top 70%",

    once:true,

    animation:portfolioTimeline,

    onEnter:()=>{

        animateShowcase();

        animateMetrics();

    }

});

/*==========================================================
                    INITIALIZE
==========================================================*/

function initializePortfolio(){

    if(

        portfolioState.initialized

    ){

        return;

    }

    activateProject(

        document.querySelector(

            '.project-card[data-project="neurologist"]'

        )

    );

    updatePreview(

        "neurologist"

    );

    portfolioState.initialized = true;

}

/*==========================================================
                    DOM READY
==========================================================*/

if(

    document.readyState === "loading"

){

    document.addEventListener(

        "DOMContentLoaded",

        initializePortfolio

    );

}

else{

    initializePortfolio();

}