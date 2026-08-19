/*==================================================
    SHADOW15 — MASTER JAVASCRIPT
    File: js/main.js

    PURPOSE
    --------------------------------------------------
    Single JavaScript entry point for Shadow15.

    RESPONSIBILITIES
    --------------------------------------------------
    • Load all existing JS files
    • Preserve classic global scope
    • Maintain correct execution order
    • Load loader before application initialization
    • Load navbar before page interactions
    • Load app.js LAST
    • Initialize Shadow15 after all scripts are ready

    IMPORTANT
    --------------------------------------------------
    This file is NOT a module.

    HTML:
    <script src="js/main.js"></script>
==================================================*/

"use strict";


/*==================================================
    01 — SHADOW15 JAVASCRIPT FILE ORDER
==================================================*/

const SHADOW15_SCRIPTS = [

    /*================================================
        01 — LOADER
        HIGHEST PRIORITY
    ================================================*/

    "js/loader.js",


    /*================================================
        02 — GLOBAL CONFIGURATION
    ================================================*/

    "js/config.js",


    /*================================================
        03 — GLOBAL NAVIGATION
    ================================================*/

    "js/navbar.js",


    /*================================================
        04 — GLOBAL INTERACTION
    ================================================*/

    "js/cursor.js",

    "js/smooth-scroll.js",


    /*================================================
        05 — HERO
    ================================================*/

    "js/hero.js",

    "js/three/hero-scene.js",


    /*================================================
        06 — TRUST / STATS / INDUSTRIES
    ================================================*/

    "js/trusted.js",

    "js/stats.js",

    "js/industries.js",


    /*================================================
        07 — SERVICES
    ================================================*/

    "js/services.js",


    /*================================================
        08 — PORTFOLIO
    ================================================*/

    "js/portfolio.js",

    "js/portfolio/portfolio.js",


    /*================================================
        09 — PROCESS
    ================================================*/

    "js/process/process.js",


    /*================================================
        10 — METRICS
    ================================================*/

    "js/metrics/metrics.js",


    /*================================================
        11 — TESTIMONIALS
    ================================================*/

    "js/testimonials/testimonials.js",


    /*================================================
        12 — FAQ
    ================================================*/

    "js/faq.js",

    "js/FAQ/faq.js",


    /*================================================
        13 — SOLUTIONS
    ================================================*/

    "js/solutions.js",

    "js/solutions-process/solutions-process.js",

    "js/solution-why.js",

    "js/solutions-projects.js",

    "js/solutions-cta.js",


    /*================================================
        14 — WORK PAGE
    ================================================*/

    "css/Work page/hero section/hero.js",

    "css/Work page/projects/projects.js",

    "css/Work page/case study/case-study.js",

    "css/Work page/technology/technology.js",


    /*================================================
        15 — FOOTER
    ================================================*/

    "js/footer/footer.js",


    /*================================================
        16 — APPLICATION
        ALWAYS LAST
    ================================================*/

    "js/app.js"

];


/*==================================================
    02 — SCRIPT LOADER
==================================================*/

/**
 * Loads one JavaScript file.
 *
 * Scripts are intentionally loaded sequentially.
 * This preserves the existing global-script
 * architecture and dependency order.
 */

function loadShadow15Script(src) {

    return new Promise((resolve) => {

        /*--------------------------------------------
            Prevent duplicate loading
        --------------------------------------------*/

        const alreadyLoaded =
            document.querySelector(
                `script[data-shadow15-src="${src}"]`
            );

        if (alreadyLoaded) {

            console.log(
                `%cSHADOW15 ↻ Already loaded: ${src}`,
                "color:#8FA6B8;"
            );

            resolve();

            return;

        }


        /*--------------------------------------------
            Create script element
        --------------------------------------------*/

        const script =
            document.createElement("script");


        script.src = src;


        /*
            IMPORTANT

            Keep async disabled.

            This guarantees scripts execute
            in the exact order defined above.
        */

        script.async = false;


        script.dataset.shadow15Src = src;


        /*--------------------------------------------
            SUCCESS
        --------------------------------------------*/

        script.onload = () => {

            console.log(
                `%cSHADOW15 ✓ ${src}`,
                "color:#00E7D4;"
            );

            resolve();

        };


        /*--------------------------------------------
            ERROR
        --------------------------------------------*/

        script.onerror = () => {

            console.error(
                `%cSHADOW15 ✕ Failed to load: ${src}`,
                "color:#ff5f56;font-weight:700;"
            );

            /*
                Do NOT stop the complete website
                because one optional script failed.

                Continue with the next script.
            */

            resolve();

        };


        /*--------------------------------------------
            Add script to document
        --------------------------------------------*/

        document.head.appendChild(script);

    });

}


/*==================================================
    03 — LOAD ALL SHADOW15 SCRIPTS
==================================================*/

async function loadShadow15Scripts() {

    console.log(
        "%cSHADOW15",
        "color:#00E7D4;font-size:20px;font-weight:800;"
    );

    console.log(
        "%cStarting JavaScript system...",
        "color:#8FA6B8;"
    );


    /*----------------------------------------------
        Sequential loading
    ----------------------------------------------*/

    for (
        const src of SHADOW15_SCRIPTS
    ) {

        await loadShadow15Script(src);

    }


    /*----------------------------------------------
        All scripts loaded
    ----------------------------------------------*/

    console.log(
        "%cSHADOW15 ✓ All JavaScript files loaded",
        "color:#00E7D4;font-weight:700;"
    );


    /*----------------------------------------------
        Initialize application
    ----------------------------------------------*/

    initializeShadow15();

}


/*==================================================
    04 — APPLICATION INITIALIZATION
==================================================*/

function initializeShadow15() {

    /*
        Prevent duplicate initialization.
    */

    if (
        window.__SHADOW15_INITIALIZED__
    ) {

        console.log(
            "%cSHADOW15 ↻ Application already initialized",
            "color:#8FA6B8;"
        );

        return;

    }


    /*----------------------------------------------
        Wait for DOM if necessary
    ----------------------------------------------*/

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            runShadow15Application,
            {
                once: true
            }
        );

        return;

    }


    /*----------------------------------------------
        DOM already available
    ----------------------------------------------*/

    runShadow15Application();

}


/*==================================================
    05 — RUN SHADOW15 APPLICATION
==================================================*/

function runShadow15Application() {

    /*
        Final safety guard.
    */

    if (
        window.__SHADOW15_INITIALIZED__
    ) {

        return;

    }


    /*----------------------------------------------
        Check Shadow15 application
    ----------------------------------------------*/

    if (
        typeof window.Shadow15 === "undefined"
    ) {

        console.warn(
            "SHADOW15: Shadow15 application object was not found."
        );

        return;

    }


    /*----------------------------------------------
        Check init method
    ----------------------------------------------*/

    if (
        typeof window.Shadow15.init !== "function"
    ) {

        console.warn(
            "SHADOW15: Shadow15.init() was not found."
        );

        return;

    }


    /*----------------------------------------------
        Initialize
    ----------------------------------------------*/

    try {

        window.Shadow15.init();


        window.__SHADOW15_INITIALIZED__ = true;


        console.log(
            "%cSHADOW15 ✓ Application initialized",
            "color:#00E7D4;font-weight:800;"
        );

    }

    catch (error) {

        console.error(
            "SHADOW15: Application initialization failed.",
            error
        );

    }


    /*----------------------------------------------
        Dispatch custom ready event
    ----------------------------------------------*/

    document.dispatchEvent(
        new CustomEvent(
            "shadow15:ready"
        )
    );


    console.log(
        "%cSHADOW15 ✓ SYSTEM READY",
        "color:#00E7D4;font-size:16px;font-weight:800;"
    );

}


/*==================================================
    06 — START MASTER SYSTEM
==================================================*/

/*
    IMPORTANT:

    Do NOT wrap the entire loader in another
    DOMContentLoaded listener.

    main.js is responsible for loading the
    scripts first.

    After loading:
        initializeShadow15()
            ↓
        DOM ready check
            ↓
        Shadow15.init()
*/

loadShadow15Scripts();


/*==================================================
    END OF SHADOW15 MASTER JAVASCRIPT
==================================================*/