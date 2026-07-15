/*==========================================================
                    SHADOW15 INDUSTRIES V3
                    PRODUCTION VERSION
==========================================================*/

/*==========================================================
                    DOM CACHE
==========================================================*/

const industries = {

    section:
        document.querySelector(".industries"),

    pills:
        [...document.querySelectorAll(".industry-pill")],

    modules:
        [...document.querySelectorAll(".growth-module")],

    nodes:
        [...document.querySelectorAll(".node")],

    paths:
        [...document.querySelectorAll(".path-glow")],

    counters:
        [...document.querySelectorAll(".metric-item strong")]

};

/*==========================================================
                    MODULES
==========================================================*/

const modules = {

    website:
        document.querySelector(".website-module"),

    seo:
        document.querySelector(".seo-module"),

    ads:
        document.querySelector(".ads-module"),

    brand:
        document.querySelector(".brand-module"),

    outcome:
        document.querySelector(".outcome-module")

};

/*==========================================================
                    STATE
==========================================================*/

const state = {

    activeIndustry:"healthcare",

    initialized:false

};

/*==========================================================
                    INDUSTRY DATA
==========================================================*/

const industryData = {

    healthcare:{

        website:{
            label:"FOUNDATION",
            title:"Healthcare Website",
            description:"Premium clinic websites engineered to build trust and increase appointments.",
            status:"Active"
        },

        seo:{
            label:"ORGANIC",
            title:"Medical SEO",
            description:"Increase patient visibility with local healthcare SEO.",
            status:"Optimizing"
        },

        ads:{
            label:"PERFORMANCE",
            title:"Patient Acquisition",
            description:"Google & Meta campaigns that generate appointment enquiries.",
            status:"Running"
        },

        branding:{
            label:"BRAND",
            title:"Healthcare Branding",
            description:"Build a trusted medical brand across every touchpoint.",
            status:"Connected"
        },

        outcome:{
            label:"BUSINESS OUTCOME",
            title:"Patient Growth",
            description:"Connected systems focused on sustainable patient acquisition.",
            status:"Growth Engine Running",
            metrics:[
                {
                    value:"520+",
                    label:"Appointments"
                },
                {
                    value:"81%",
                    label:"Conversion"
                },
                {
                    value:"96%",
                    label:"Visibility"
                }
            ]
        }

    },

    hospitality:{

        website:{
            label:"FOUNDATION",
            title:"Hotel Website",
            description:"Luxury hotel websites designed for direct bookings.",
            status:"Active"
        },

        seo:{
            label:"LOCAL SEO",
            title:"Hotel SEO",
            description:"Rank your hotel higher on Google and Maps.",
            status:"Optimizing"
        },

        ads:{
            label:"BOOKINGS",
            title:"Booking Campaigns",
            description:"Campaigns focused on increasing reservations.",
            status:"Running"
        },

        branding:{
            label:"BRAND",
            title:"Luxury Branding",
            description:"Create memorable guest experiences online.",
            status:"Connected"
        },

        outcome:{
            label:"BUSINESS OUTCOME",
            title:"Direct Bookings",
            description:"Reduce OTA dependency through premium digital marketing.",
            status:"Scaling",
            metrics:[
                {
                    value:"84%",
                    label:"Bookings"
                },
                {
                    value:"310+",
                    label:"Guests"
                },
                {
                    value:"4.9",
                    label:"Rating"
                }
            ]
        }

    },

    education:{

        website:{
            label:"FOUNDATION",
            title:"Institute Website",
            description:"Admission-focused education websites.",
            status:"Active"
        },

        seo:{
            label:"SEO",
            title:"Education SEO",
            description:"Rank your institute for student searches.",
            status:"Optimizing"
        },

        ads:{
            label:"ADMISSIONS",
            title:"Admission Campaigns",
            description:"Generate quality student enquiries.",
            status:"Running"
        },

        branding:{
            label:"BRAND",
            title:"Academic Branding",
            description:"Build authority for your institution.",
            status:"Connected"
        },

        outcome:{
            label:"BUSINESS OUTCOME",
            title:"Student Enquiries",
            description:"Digital ecosystem focused on admissions.",
            status:"Growing",
            metrics:[
                {
                    value:"650+",
                    label:"Enquiries"
                },
                {
                    value:"72%",
                    label:"Admissions"
                },
                {
                    value:"95%",
                    label:"Reach"
                }
            ]
        }

    },
    realestate:{

        website:{
            label:"FOUNDATION",
            title:"Property Website",
            description:"Modern real estate websites designed to generate high-quality buyer enquiries.",
            status:"Active"
        },

        seo:{
            label:"LOCAL SEO",
            title:"Property SEO",
            description:"Rank projects higher in local property searches.",
            status:"Optimizing"
        },

        ads:{
            label:"LEADS",
            title:"Property Campaigns",
            description:"Lead generation campaigns for residential and commercial projects.",
            status:"Running"
        },

        branding:{
            label:"BRAND",
            title:"Developer Branding",
            description:"Build trust among buyers and investors.",
            status:"Connected"
        },

        outcome:{
            label:"BUSINESS OUTCOME",
            title:"Qualified Leads",
            description:"Complete lead generation ecosystem for real estate.",
            status:"Growing",
            metrics:[
                {
                    value:"440+",
                    label:"Leads"
                },
                {
                    value:"61%",
                    label:"Qualified"
                },
                {
                    value:"89%",
                    label:"Visibility"
                }
            ]
        }

    },

    ecommerce:{

        website:{
            label:"FOUNDATION",
            title:"E-Commerce Store",
            description:"High-converting online stores built for scalable sales.",
            status:"Active"
        },

        seo:{
            label:"PRODUCT SEO",
            title:"Product SEO",
            description:"Rank products higher for purchase intent keywords.",
            status:"Optimizing"
        },

        ads:{
            label:"SALES",
            title:"Shopping Ads",
            description:"Google Shopping & Meta campaigns that maximize ROAS.",
            status:"Scaling"
        },

        branding:{
            label:"BRAND",
            title:"Brand Experience",
            description:"Deliver a premium shopping experience across every channel.",
            status:"Connected"
        },

        outcome:{
            label:"BUSINESS OUTCOME",
            title:"Online Sales",
            description:"Digital commerce ecosystem built for profitable growth.",
            status:"Growing",
            metrics:[
                {
                    value:"980+",
                    label:"Orders"
                },
                {
                    value:"12X",
                    label:"ROAS"
                },
                {
                    value:"94%",
                    label:"Retention"
                }
            ]
        }

    },

    travel:{

        website:{
            label:"FOUNDATION",
            title:"Travel Website",
            description:"Beautiful travel websites built to inspire and convert visitors into bookings.",
            status:"Active"
        },

        seo:{
            label:"TRAVEL SEO",
            title:"Destination SEO",
            description:"Improve rankings for destinations and travel packages.",
            status:"Optimizing"
        },

        ads:{
            label:"BOOKINGS",
            title:"Holiday Campaigns",
            description:"Performance campaigns focused on travel bookings.",
            status:"Running"
        },

        branding:{
            label:"BRAND",
            title:"Destination Branding",
            description:"Create unforgettable travel experiences through strong branding.",
            status:"Connected"
        },

        outcome:{
            label:"BUSINESS OUTCOME",
            title:"Travel Bookings",
            description:"Integrated marketing system focused on year-round bookings.",
            status:"Growing",
            metrics:[
                {
                    value:"720+",
                    label:"Bookings"
                },
                {
                    value:"88%",
                    label:"Occupancy"
                },
                {
                    value:"97%",
                    label:"Reach"
                }
            ]
        }

    }

};

/*==========================================================
                    RESET
==========================================================*/

function resetActive(){

    industries.pills.forEach(

        pill=>pill.classList.remove("active")

    );

    industries.modules.forEach(

        module=>module.classList.remove("active")

    );

    industries.nodes.forEach(

        node=>node.classList.remove("active")

    );

    industries.paths.forEach(

        path=>path.classList.remove("active")

    );

}

/*==========================================================
                    ACTIVATE
==========================================================*/

function activateBlueprint(industry){

    document

    .querySelector(

        `.industry-pill[data-industry="${industry}"]`

    )

    ?.classList.add("active");

    industries.modules.forEach(

        module=>module.classList.add("active")

    );

    industries.nodes.forEach(

        node=>node.classList.add("active")

    );

    industries.paths.forEach(

        path=>path.classList.add("active")

    );

}



/*==========================================================
                    UPDATE MODULE
==========================================================*/

function updateModule(module,data){

    if(!module || !data) return;

    module.querySelector(

        ".module-label"

    ).textContent = data.label;

    module.querySelector(

        ".module-title"

    ).textContent = data.title;

    module.querySelector(

        ".module-description"

    ).textContent = data.description;

    module.querySelector(

        ".module-status span:last-child"

    ).textContent = data.status;

}

/*==========================================================
                    UPDATE OUTCOME
==========================================================*/

function updateOutcome(module,data){

    if(!module || !data) return;

    module.querySelector(

        ".module-label"

    ).textContent = data.label;

    module.querySelector(

        ".module-title"

    ).textContent = data.title;

    module.querySelector(

        ".module-description"

    ).textContent = data.description;

    module.querySelector(

        ".module-status span:last-child"

    ).textContent = data.status;

    const metrics =

        module.querySelectorAll(

            ".metric-item"

        );

    data.metrics.forEach((metric,index)=>{

        if(!metrics[index]) return;

        metrics[index]

        .querySelector("strong")

        .textContent = metric.value;

        metrics[index]

        .querySelector("span")

        .textContent = metric.label;

    });

}

/*==========================================================
                    UPDATE CONTENT
==========================================================*/

function updateContent(industry){

    const data =

        industryData[industry];

    if(!data) return;

    updateModule(

        modules.website,

        data.website

    );

    updateModule(

        modules.seo,

        data.seo

    );

    updateModule(

        modules.ads,

        data.ads

    );

    updateModule(

        modules.brand,

        data.branding

    );

    updateOutcome(

        modules.outcome,

        data.outcome

    );

}

/*==========================================================
                    SWITCH INDUSTRY
==========================================================*/

function switchIndustry(industry){

    if(

        state.activeIndustry === industry ||

        !industryData[industry]

    ){

        return;

    }

    state.activeIndustry = industry;

    resetActive();

    activateBlueprint(industry);

    updateContent(industry);

    animateCards();

    animateSVG();

}

/*==========================================================
                    EVENTS
==========================================================*/

industries.pills.forEach(pill=>{

    pill.addEventListener(

        "click",

        ()=>{

            switchIndustry(

                pill.dataset.industry

            );

        }

    );

});




/*==========================================================
                    CARD ANIMATION
==========================================================*/

function animateCards(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        ".growth-module",

        {

            y:25,

            opacity:.7,

            scale:.97

        },

        {

            y:0,

            opacity:1,

            scale:1,

            duration:.55,

            stagger:.08,

            ease:"power3.out"

        }

    );

}

/*==========================================================
                    SVG ANIMATION
==========================================================*/

function animateSVG(){

    if(typeof gsap === "undefined") return;

    gsap.fromTo(

        ".path-glow",

        {

            strokeDashoffset:1000

        },

        {

            strokeDashoffset:0,

            duration:1,

            stagger:.08,

            ease:"power2.out"

        }

    );

    gsap.fromTo(

        ".node",

        {

            scale:0

        },

        {

            scale:1,

            duration:.45,

            stagger:.05,

            ease:"back.out(2)"

        }

    );

}

/*==========================================================
                    COUNTERS
==========================================================*/

function animateCounters(){

    if(typeof gsap === "undefined") return;

    industries.counters.forEach(counter=>{

        const value =

            counter.textContent;

        const number =

            parseInt(value);

        if(isNaN(number)) return;

        const suffix =

            value.replace(number,"");

        gsap.fromTo(

            counter,

            {

                innerText:0

            },

            {

                innerText:number,

                duration:1.2,

                ease:"power2.out",

                snap:{

                    innerText:1

                },

                onUpdate:function(){

                    counter.textContent =

                        Math.round(

                            this.targets()[0].innerText

                        ) + suffix;

                }

            }

        );

    });

}

/*==========================================================
                    GSAP TIMELINE
==========================================================*/

if(

    typeof gsap !== "undefined" &&

    typeof ScrollTrigger !== "undefined"

){

    gsap.registerPlugin(

        ScrollTrigger

    );

    const timeline =

        gsap.timeline({

            paused:true,

            defaults:{

                ease:"power3.out",

                duration:.65

            }

        });

    timeline

    .from(

        ".industries-header",

        {

            y:60,

            opacity:0

        }

    )

    .from(

        ".industry-pill",

        {

            y:20,

            opacity:0,

            stagger:.08

        },

        "-=.35"

    )

    .from(

        ".growth-module",

        {

            y:60,

            opacity:0,

            stagger:.1

        },

        "-=.25"

    )

    .from(

        ".industries-cta",

        {

            y:60,

            opacity:0

        },

        "-=.2"

    );

    ScrollTrigger.create({

        trigger:".industries",

        start:"top 70%",

        once:true,

        animation:timeline,

        onEnter:()=>{

            animateSVG();

            animateCounters();

        }

    });

}

/*==========================================================
                    INITIALIZE
==========================================================*/

function initializeIndustries(){

    updateContent(

        state.activeIndustry

    );

    activateBlueprint(

        state.activeIndustry

    );

    state.initialized = true;

}

/*==========================================================
                    DOM READY
==========================================================*/

if(

    document.readyState === "loading"

){

    document.addEventListener(

        "DOMContentLoaded",

        initializeIndustries

    );

}

else{

    initializeIndustries();

}