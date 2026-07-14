/*==========================================================
    SHADOW15 OFFICIAL WEBSITE
    Main Application
    Version : 1.0
==========================================================*/

"use strict";

/*==========================================================
    APPLICATION
==========================================================*/

const Shadow15 = {

    /*-----------------------------------------
        INITIALIZE WEBSITE
    -----------------------------------------*/

    init() {

        this.registerPlugins();

        this.initLenis();

        this.initLoader();

        this.initNavbar();

        this.initCursor();

        this.initScrollProgress();

        this.initRevealAnimation();

        this.initCounters();

        this.initPortfolio();

        this.initTestimonials();

        this.initHero();

        this.initEvents();

        console.log(
            "%cShadow15 Official Website Loaded",
            "color:#00E7D4;font-size:14px;font-weight:bold;"
        );

    },

    /*-----------------------------------------
        GSAP
    -----------------------------------------*/

    registerPlugins() {

        if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

            gsap.registerPlugin(ScrollTrigger);

        }

    },

    /*-----------------------------------------
        LENIS SMOOTH SCROLL
    -----------------------------------------*/

    initLenis() {

        if (typeof Lenis === "undefined") return;

        const lenis = new Lenis({

            duration: 1.2,

            smoothWheel: true,

            smoothTouch: false

        });

        function raf(time) {

            lenis.raf(time);

            requestAnimationFrame(raf);

        }

        requestAnimationFrame(raf);

    },

    /*-----------------------------------------
        LOADER
    -----------------------------------------*/

    initLoader() {

        if (typeof initLoader === "function") {

            initLoader();

        }

    },

    /*-----------------------------------------
        NAVBAR
    -----------------------------------------*/

    initNavbar() {

        if (typeof initNavbar === "function") {

            initNavbar();

        }

    },

    /*-----------------------------------------
        HERO
    -----------------------------------------*/

    initHero() {

        if (typeof initHero === "function") {

            initHero();

        }

    },

    /*-----------------------------------------
        CURSOR
    -----------------------------------------*/

    initCursor() {

        if (typeof initCursor === "function") {

            initCursor();

        }

    },

    /*-----------------------------------------
        COUNTERS
    -----------------------------------------*/

    initCounters() {

        if (typeof initCounters === "function") {

            initCounters();

        }

    },

    /*-----------------------------------------
        PORTFOLIO
    -----------------------------------------*/

    initPortfolio() {

        if (typeof initPortfolio === "function") {

            initPortfolio();

        }

    },

    /*-----------------------------------------
        TESTIMONIALS
    -----------------------------------------*/

    initTestimonials() {

        if (typeof initTestimonials === "function") {

            initTestimonials();

        }

    },

    /*-----------------------------------------
        SCROLL PROGRESS
    -----------------------------------------*/

    initScrollProgress() {

        const progress = document.querySelector(".scroll-progress");

        if (!progress) return;

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const height =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const width = (scrollTop / height) * 100;

            progress.style.width = width + "%";

        });

    },

    /*-----------------------------------------
        REVEAL ANIMATION
    -----------------------------------------*/

    initRevealAnimation() {

        const elements = document.querySelectorAll(".reveal");

        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        }, {

            threshold: .15

        });

        elements.forEach(el => observer.observe(el));

    },

    /*-----------------------------------------
        EVENTS
    -----------------------------------------*/

    initEvents() {

        window.addEventListener("resize", () => {

            ScrollTrigger.refresh();

        });

    }

};

/*==========================================================
    START APPLICATION
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    Shadow15.init();

});