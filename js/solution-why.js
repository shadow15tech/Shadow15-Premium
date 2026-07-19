document.addEventListener("DOMContentLoaded", () => {

    initWhyCards();

    initWhyParallax();

});

/*==========================================================
                    CARD HOVER
==========================================================*/

function initWhyCards() {

    const cards = document.querySelectorAll(".scw-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("active");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("active");

        });

    });

}

/*==========================================================
                MOUSE PARALLAX
==========================================================*/

function initWhyParallax() {

    if (typeof gsap === "undefined") return;

    if (window.innerWidth < 992) return;

    const wrapper = document.querySelector(".scw-wrapper");

    const core = document.querySelector(".scw-core");

    const rings = document.querySelectorAll(".scw-ring");

    const cards = document.querySelectorAll(".scw-card");

    if (!wrapper || !core) return;

    wrapper.addEventListener("mousemove", (e) => {

        const rect = wrapper.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;

        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(core, {

            x: x * 20,

            y: y * 20,

            duration: .8,

            ease: "power2.out"

        });

        gsap.to(rings, {

            x: x * 12,

            y: y * 12,

            duration: 1,

            stagger: .08,

            ease: "power2.out"

        });

        gsap.to(cards, {

            x: x * -10,

            y: y * -10,

            duration: .9,

            stagger: .03,

            ease: "power2.out"

        });

    });

    wrapper.addEventListener("mouseleave", () => {

        gsap.to([core, ...rings, ...cards], {

            x: 0,

            y: 0,

            duration: .9,

            ease: "power3.out"

        });

    });

}

/*==========================================================
                WINDOW RESIZE
==========================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth < 992) {

        gsap.set(".scw-core, .scw-ring, .scw-card", {

            x: 0,

            y: 0

        });

    }

});