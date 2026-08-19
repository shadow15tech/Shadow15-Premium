/*==================================================
    SHADOW15 — MASTER JAVASCRIPT LOADER
    File: js/main.js

    PURPOSE:
    --------------------------------------------------
    Single JavaScript entry point for Shadow15.

    IMPORTANT:
    --------------------------------------------------
    • Loads existing JS files in controlled order.
    • Preserves classic-script global scope.
    • Prevents execution-order problems.
    • Uses only paths that actually exist.
    • Empty JS files are intentionally included.
    • Do NOT convert this file to type="module".
==================================================*/

"use strict";


/*==================================================
    01 — JAVASCRIPT FILE MAP
==================================================*/

const SHADOW15_JS = [

    /*================================================
        CORE CONFIGURATION
    ================================================*/

    "js/config.js",


    /*================================================
        GLOBAL / FOUNDATION
    ================================================*/

    "js/loader.js",

    "js/navbar.js",

    "js/cursor.js",

    "js/smooth-scroll.js",


    /*================================================
        HOME — HERO
    ================================================*/

    "js/hero.js",

    "js/three/hero-scene.js",


    /*================================================
        HOME — CORE APPLICATION
    ================================================*/

    "js/app.js",


    /*================================================
        HOME — TRUST / STATS / INDUSTRIES
    ================================================*/

    "js/trusted.js",

    "js/stats.js",

    "js/industries.js",


    /*================================================
        HOME — SERVICES
    ================================================*/

    "js/services.js",


    /*================================================
        HOME — PORTFOLIO
    ================================================*/

    "js/portfolio.js",

    "js/portfolio/portfolio.js",


    /*================================================
        HOME — PROCESS
    ================================================*/

    "js/process/process.js",


    /*================================================
        HOME — METRICS
    ================================================*/

    "js/metrics/metrics.js",


    /*================================================
        HOME — TESTIMONIALS
    ================================================*/

    "js/testimonials/testimonials.js",


    /*================================================
        HOME — FAQ
    ================================================*/

    "js/faq.js",

    "js/FAQ/faq.js",


    /*================================================
        GLOBAL FOOTER
    ================================================*/

    "js/footer/footer.js",


    /*================================================
        SOLUTIONS PAGE
    ================================================*/

    "js/solutions.js",

    "js/solutions-process/solutions-process.js",

    "js/solution-why.js",

    "js/solutions-projects.js",

    "js/solutions-cta.js",


    /*================================================
        WORK PAGE
    ================================================*/

    "css/Work page/hero section/hero.js",

    "css/Work page/projects/projects.js",

    "css/Work page/case study/case-study.js",

    "css/Work page/technology/technology.js",


    /*================================================
        AI AUTOMATION — EXISTING JS
    ================================================*/

    /*
        The ZIP does NOT contain:

        css/ai-automation/hero/hero.js
        css/ai-automation/capabilities/capabilities.js
        css/ai-automation/automation-journey/journey.js

        Therefore they are intentionally NOT imported.
    */


    /*================================================
        LEGACY / RESERVED FILES
    ================================================*/

    "js/animations.js",

    "js/contact.js",

    "js/faq.js",

    "js/loader.timeline.js",

    "js/slider.js"

];


/*==================================================
    02 — DUPLICATE / RESERVED FILE NOTE
==================================================*/

/*
    These files physically exist but are currently empty:

        js/animations.js
        js/contact.js
        js/cursor.js
        js/faq.js
        js/loader.timeline.js
        js/services.js
        js/slider.js
        js/smooth-scroll.js
        js/stats.js
        js/three/hero-scene.js

    Empty files are safe to load.

    Some are already represented by active
    implementations elsewhere in the repository.
*/


/*==================================================
    03 — SCRIPT LOADER
==================================================*/

function loadShadow15Script(src) {

    return new Promise((resolve, reject) => {

        /*--------------------------------------------
            Prevent duplicate loading
        --------------------------------------------*/

        const existing =
            document.querySelector(
                `script[data-shadow15-src="${src}"]`
            );

        if (existing) {

            resolve();

            return;

        }


        /*--------------------------------------------
            Create script
        --------------------------------------------*/

        const script =
            document.createElement("script");


        script.src = src;


        script.async = false;


        script.dataset.shadow15Src = src;


        /*--------------------------------------------
            Success
        --------------------------------------------*/

        script.onload = () => {

            resolve();

        };


        /*--------------------------------------------
            Failure
        --------------------------------------------*/

        script.onerror = () => {

            reject(
                new Error(
                    `SHADOW15 JS failed to load: ${src}`
                )
            );

        };


        /*--------------------------------------------
            Append
        --------------------------------------------*/

        document.body.appendChild(script);

    });

}


/*==================================================
    04 — SEQUENTIAL LOADING
==================================================*/

async function loadShadow15Scripts() {

    for (
        const src
        of SHADOW15_JS
    ) {

        try {

            await loadShadow15Script(src);

            console.log(
                `%cSHADOW15 JS ✓ ${src}`,
                "color:#00E7D4;"
            );

        }

        catch (error) {

            console.error(
                error
            );

        }

    }


    /*--------------------------------------------
        Complete
    --------------------------------------------*/

    document.dispatchEvent(
        new CustomEvent(
            "shadow15:js-ready"
        )
    );


    console.log(
        "%cSHADOW15 — JavaScript System Ready",
        "color:#00E7D4;font-weight:700;"
    );

}


/*==================================================
    05 — START
==================================================*/

/*
    main.js should be loaded at the bottom of
    <body>, after the navbar HTML exists.
*/

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        loadShadow15Scripts,
        {
            once: true
        }
    );

}
else {

    loadShadow15Scripts();

}