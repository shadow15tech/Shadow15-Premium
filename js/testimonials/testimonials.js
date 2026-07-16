/*==========================================================
                SHADOW15 TESTIMONIALS V1
==========================================================*/

/*==========================================================
                    DOM CACHE
==========================================================*/

const testimonialsSection =

    document.querySelector(".testimonials");

const testimonialsSlider =

    document.querySelector(".testimonials-slider");

const testimonialCards =

    [...document.querySelectorAll(".testimonial-card")];

const trustItems =

    [...document.querySelectorAll(".trust-item")];

/*==========================================================
                    STATE
==========================================================*/

const testimonialsState = {

    initialized:false,

    swiper:null

};

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
                    CREATE SWIPER
==========================================================*/

function initializeSwiper(){

    if(

        typeof Swiper === "undefined"

    ){

        return;

    }

    testimonialsState.swiper =

    new Swiper(

        ".testimonials-slider",

        {

            slidesPerView:1,

            spaceBetween:30,

            speed:900,

            loop:true,

            grabCursor:true,

            centeredSlides:false,

            autoplay:{

                delay:4500,

                disableOnInteraction:false

            },

            navigation:{

                nextEl:".testimonial-next",

                prevEl:".testimonial-prev"

            },

            pagination:{

                el:".testimonials-pagination",

                clickable:true

            },

            breakpoints:{

                768:{

                    slidesPerView:2

                },

                1200:{

                    slidesPerView:3

                }

            }

        }

    );

}

/*==========================================================
                    CARD ANIMATION
==========================================================*/

function animateCards(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        testimonialCards,

        {

            opacity:0,

            y:60,

            scale:.96

        },

        {

            opacity:1,

            y:0,

            scale:1,

            duration:.8,

            stagger:.15,

            ease:"power3.out"

        }

    );

}

/*==========================================================
                    TRUST BAR
==========================================================*/

function animateTrustBar(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        trustItems,

        {

            opacity:0,

            y:40

        },

        {

            opacity:1,

            y:0,

            duration:.7,

            stagger:.10,

            ease:"power3.out"

        }

    );

}

/*==========================================================
                    MASTER TIMELINE
==========================================================*/

const testimonialsTimeline =

    gsap.timeline({

        paused:true,

        defaults:{

            duration:.7,

            ease:"power3.out"

        }

    });

testimonialsTimeline

.from(

    ".testimonials-header",

    {

        opacity:0,

        y:70

    }

)

.from(

    ".testimonials-slider",

    {

        opacity:0,

        y:70

    },

    "-=.3"

)

.from(

    ".testimonials-trust",

    {

        opacity:0,

        y:60

    },

    "-=.3"

);

/*==========================================================
                    SCROLL TRIGGER
==========================================================*/

ScrollTrigger.create({

    trigger:".testimonials",

    start:"top 70%",

    once:true,

    animation:testimonialsTimeline,

    onEnter:()=>{

        animateCards();

        animateTrustBar();

    }

});
/*==========================================================
                    INITIALIZE
==========================================================*/

function initializeTestimonials(){

    if(

        testimonialsState.initialized

    ){

        return;

    }

    initializeSwiper();

    testimonialsState.initialized = true;

}

/*==========================================================
                    REFRESH ON RESIZE
==========================================================*/

window.addEventListener(

    "resize",

    ()=>{

        if(

            testimonialsState.swiper

        ){

            testimonialsState.swiper.update();

        }

    }

);

/*==========================================================
                    DOM READY
==========================================================*/

if(

    document.readyState === "loading"

){

    document.addEventListener(

        "DOMContentLoaded",

        initializeTestimonials

    );

}

else{

    initializeTestimonials();

}