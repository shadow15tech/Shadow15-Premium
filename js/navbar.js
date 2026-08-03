/*==================================================
    SHADOW15 NAVIGATION SYSTEM
==================================================*/

"use strict";

(() => {

    /*==========================================
        ELEMENTS
    ==========================================*/

    const dock = document.getElementById("s15xDock");
    const drawer = document.getElementById("s15xDrawer");
    const backdrop = document.getElementById("s15xBackdrop");
    const hamburger = document.getElementById("s15xHamburger");
    const drawerClose = document.getElementById("s15xDrawerClose");

    const accordions = document.querySelectorAll(".s15x-mobile-dropdown");
    const drawerLinks = drawer.querySelectorAll("a");

    /*==========================================
        SCROLL EFFECT
    ==========================================*/

    function updateNavbar(){

        dock.classList.toggle(
            "is-scrolled",
            window.scrollY > 20
        );

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive:true }
    );

    updateNavbar();

    /*==========================================
        BODY LOCK
    ==========================================*/

    function lockBody(){

        document.body.style.overflow = "hidden";
        document.body.classList.add("drawer-open");

    }

    function unlockBody(){

        document.body.style.overflow = "";
        document.body.classList.remove("drawer-open");

    }

    /*==========================================
        OPEN DRAWER
    ==========================================*/

    function openDrawer(){

        if(drawer.classList.contains("is-active")) return;

        drawer.classList.add("is-active");
        backdrop.classList.add("is-active");
        hamburger.classList.add("is-active");

        hamburger.setAttribute(
            "aria-expanded",
            "true"
        );

        drawer.setAttribute(
            "aria-hidden",
            "false"
        );

        lockBody();

    }

    /*==========================================
        CLOSE DRAWER
    ==========================================*/

    function closeDrawer(){

        drawer.classList.remove("is-active");
        backdrop.classList.remove("is-active");
        hamburger.classList.remove("is-active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

        drawer.setAttribute(
            "aria-hidden",
            "true"
        );

        unlockBody();

        /* Close all accordions */

        accordions.forEach(item=>{

            item.classList.remove("is-open");

        });

    }

    /*==========================================
        BUTTON EVENTS
    ==========================================*/

    hamburger.addEventListener(
        "click",
        openDrawer
    );

    drawerClose.addEventListener(
        "click",
        closeDrawer
    );

    backdrop.addEventListener(
        "click",
        closeDrawer
    );

    /*==========================================
        CLOSE AFTER CLICKING A LINK
    ==========================================*/

    drawerLinks.forEach(link=>{

        link.addEventListener(
            "click",
            closeDrawer
        );

    });

    /*==========================================
        ESC KEY
    ==========================================*/

    document.addEventListener(
        "keydown",
        e=>{

            if(
                e.key==="Escape" &&
                drawer.classList.contains("is-active")
            ){

                closeDrawer();

            }

        }
    );

    /*==========================================
        MOBILE ACCORDION
    ==========================================*/

    accordions.forEach(item=>{

        const trigger = item.querySelector(
            ".s15x-mobile-trigger"
        );

        if(!trigger) return;

        trigger.addEventListener(
            "click",
            ()=>{

                accordions.forEach(other=>{

                    if(other!==item){

                        other.classList.remove(
                            "is-open"
                        );

                    }

                });

                item.classList.toggle(
                    "is-open"
                );

            }
        );

    });

    /*==========================================
        RESET ON DESKTOP
    ==========================================*/

    window.addEventListener(
        "resize",
        ()=>{

            if(window.innerWidth > 1024){

                closeDrawer();

            }

        }
    );

})();