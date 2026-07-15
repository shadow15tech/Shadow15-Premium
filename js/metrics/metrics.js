/*==========================================================
                    SHADOW15 METRICS V1
==========================================================*/

/*==========================================================
                    DOM CACHE
==========================================================*/

const metricsSection =

    document.querySelector(".metrics");

const metricItems =

    [...document.querySelectorAll(".metric-item")];

const metricValues =

    [...document.querySelectorAll(".metric-value")];

const progressRing =

    document.querySelector(".ring-progress");

const ringNumber =

    document.querySelector(".ring-number");

const metricsDashboard =

    document.querySelector(".metrics-dashboard");

/*==========================================================
                    STATE
==========================================================*/

const metricsState = {

    initialized:false,

    progress:98

};

/*==========================================================
                    SVG VALUES
==========================================================*/

const ringRadius = 90;

const ringCircumference =

    2 * Math.PI * ringRadius;

/*==========================================================
                    INITIALIZE RING
==========================================================*/

function prepareRing(){

    if(!progressRing) return;

    progressRing.style.strokeDasharray =

        ringCircumference;

    progressRing.style.strokeDashoffset =

        ringCircumference;

}

/*==========================================================
                    HELPERS
==========================================================*/

function percentageOffset(value){

    return ringCircumference -

    (

        value / 100

    ) * ringCircumference;

}
/*==========================================================
                    RING ANIMATION
==========================================================*/

function animateRing(){

    if(

        typeof gsap === "undefined" ||

        !progressRing

    ){

        return;

    }

    gsap.to(

        progressRing,

        {

            strokeDashoffset:

            percentageOffset(

                metricsState.progress

            ),

            duration:2,

            ease:"power3.out"

        }

    );

}

/*==========================================================
                    CENTER NUMBER
==========================================================*/

function animateRingNumber(){

    if(

        typeof gsap === "undefined" ||

        !ringNumber

    ){

        return;

    }

    const counter = {

        value:0

    };

    gsap.to(

        counter,

        {

            value:metricsState.progress,

            duration:2,

            ease:"power3.out",

            snap:{

                value:1

            },

            onUpdate:()=>{

                ringNumber.textContent =

                counter.value + "%";

            }

        }

    );

}

/*==========================================================
                    METRIC COUNTERS
==========================================================*/

function animateMetricCounters(){

    if(typeof gsap === "undefined") return;

    metricValues.forEach(value=>{

        const text =

            value.textContent.trim();

        const number =

            parseInt(text);

        if(isNaN(number)) return;

        const suffix =

            text.replace(number,"");

        const counter = {

            value:0

        };

        gsap.to(

            counter,

            {

                value:number,

                duration:1.6,

                ease:"power3.out",

                snap:{

                    value:1

                },

                onUpdate:()=>{

                    value.textContent =

                    counter.value + suffix;

                }

            }

        );

    });

}

/*==========================================================
                    DASHBOARD
==========================================================*/

function animateDashboard(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        metricsDashboard,

        {

            opacity:0,

            y:60

        },

        {

            opacity:1,

            y:0,

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

const metricsTimeline =

    gsap.timeline({

        paused:true,

        defaults:{

            ease:"power3.out",

            duration:.7

        }

    });

metricsTimeline

.from(

    ".metrics-header",

    {

        opacity:0,

        y:70

    }

)

.from(

    ".metrics-column:first-child .metric-item",

    {

        opacity:0,

        x:-60,

        stagger:.12

    },

    "-=.3"

)

.from(

    ".metrics-center",

    {

        opacity:0,

        scale:.8

    },

    "-=.4"

)

.from(

    ".metrics-column:last-child .metric-item",

    {

        opacity:0,

        x:60,

        stagger:.12

    },

    "-=.5"

)

.from(

    ".metrics-cta",

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

    trigger:".metrics",

    start:"top 70%",

    once:true,

    animation:metricsTimeline,

    onEnter:()=>{

        animateDashboard();

        animateRing();

        animateRingNumber();

        animateMetricCounters();

    }

});

/*==========================================================
                    INITIALIZE
==========================================================*/

function initializeMetrics(){

    if(

        metricsState.initialized

    ){

        return;

    }

    prepareRing();

    metricsState.initialized = true;

}

/*==========================================================
                    DOM READY
==========================================================*/

if(

    document.readyState === "loading"

){

    document.addEventListener(

        "DOMContentLoaded",

        initializeMetrics

    );

}

else{

    initializeMetrics();

}