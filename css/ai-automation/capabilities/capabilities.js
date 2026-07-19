/*==========================================
        SHADOW15 AI SHOWCASE
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const modules = document.querySelectorAll(".s15-module");
    const screens = document.querySelectorAll(".s15-console-screen");

    if (!modules.length || !screens.length) return;

    /*======================================
            SWITCH CONSOLE
    ======================================*/

    const activateModule = (target) => {

        modules.forEach((module) => {

            module.classList.remove("is-active");

        });

        screens.forEach((screen) => {

            screen.classList.remove("is-active");

        });

        const activeModule = document.querySelector(

            `.s15-module[data-view="${target}"]`

        );

        const activeScreen = document.getElementById(target);

        if (activeModule) {

            activeModule.classList.add("is-active");

        }

        if (activeScreen) {

            activeScreen.classList.add("is-active");

        }

    };

    /*======================================
            CLICK EVENTS
    ======================================*/

    modules.forEach((module) => {

        module.addEventListener("click", () => {

            activateModule(module.dataset.view);

        });

    });

    /*======================================
            AUTO PLAY
    ======================================*/

    let current = 0;

    const autoPlay = () => {

        current++;

        if (current >= modules.length) {

            current = 0;

        }

        activateModule(modules[current].dataset.view);

    };

    let autoSlide = setInterval(autoPlay, 5000);

    /*======================================
            PAUSE ON HOVER
    ======================================*/

    const showcase = document.querySelector(".s15-ai-showcase");

    showcase.addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });

    showcase.addEventListener("mouseleave", () => {

        autoSlide = setInterval(autoPlay, 5000);

    });

    /*======================================
            MOUSE PARALLAX
    ======================================*/

    const consoleBox = document.querySelector(".s15-console");

    showcase.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 992) return;

        const rect = showcase.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        consoleBox.style.transform = `rotateY(${x * 6}deg)
                                      rotateX(${y * -6}deg)
                                      translateZ(0)`;

    });

    showcase.addEventListener("mouseleave", () => {

        consoleBox.style.transform = "";

    });

});