/*==========================================================
                    HERO
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".aa-hero");

    if (!hero) return;

    initCounters();
    initWorkflow();
    initTilt();
    initObserver();

});

/*==========================================================
                COUNTERS
==========================================================*/

function initCounters() {

    const numbers = document.querySelectorAll("[data-counter]");

    numbers.forEach(number => {

        const target = parseFloat(number.dataset.counter);
        const suffix = number.dataset.suffix || "";
        const decimals = target % 1 !== 0;

        let current = 0;

        const update = () => {

            current += target / 60;

            if (current >= target) {

                number.textContent = target + suffix;
                return;

            }

            number.textContent =
                (decimals ? current.toFixed(1) : Math.floor(current))
                + suffix;

            requestAnimationFrame(update);

        };

        update();

    });

}

/*==========================================================
                WORKFLOW
==========================================================*/

function initWorkflow() {

    const steps = document.querySelectorAll(".aa-step");

    if (!steps.length) return;

    let active = 0;

    setInterval(() => {

        steps.forEach(step => step.classList.remove("active"));

        steps[active].classList.add("active");

        active++;

        if (active >= steps.length) {

            active = 0;

        }

    }, 2200);

}

/*==========================================================
                    TILT
==========================================================*/

function initTilt() {

    if (window.innerWidth < 992) return;

    const panel = document.querySelector(".aa-panel");

    if (!panel) return;

    panel.addEventListener("mousemove", e => {

        const rect = panel.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 10;
        const rotateX = ((y / rect.height) - .5) * -10;

        panel.style.transform = `
            perspective(1400px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;

    });

    panel.addEventListener("mouseleave", () => {

        panel.style.transform = "";

    });

}

/*==========================================================
            INTERSECTION OBSERVER
==========================================================*/

function initObserver() {

    const hero = document.querySelector(".aa-hero");

    if (!hero) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                hero.classList.add("visible");

            }

        });

    }, {

        threshold: .25

    });

    observer.observe(hero);

}