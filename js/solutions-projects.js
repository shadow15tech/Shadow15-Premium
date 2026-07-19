document.addEventListener("DOMContentLoaded", () => {

    initProjectCards();

    initProjectParallax();

});

/*==========================================================
                    CARD HOVER
==========================================================*/

function initProjectCards() {

    const cards = document.querySelectorAll(".scp-card");

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

function initProjectParallax() {

    if (typeof gsap === "undefined") return;

    if (window.innerWidth < 992) return;

    const wrapper = document.querySelector(".scp-grid");

    const cards = document.querySelectorAll(".scp-card");

    const images = document.querySelectorAll(".scp-image img");

    if (!wrapper || !cards.length) return;

    wrapper.addEventListener("mousemove", (e) => {

        const rect = wrapper.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;

        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(cards, {

            x: x * -12,

            y: y * -12,

            duration: .8,

            stagger: .05,

            ease: "power2.out"

        });

        gsap.to(images, {

            x: x * 10,

            y: y * 10,

            duration: 1,

            stagger: .05,

            ease: "power2.out"

        });

    });

    wrapper.addEventListener("mouseleave", () => {

        gsap.to([...cards, ...images], {

            x: 0,

            y: 0,

            duration: .9,

            ease: "power3.out"

        });

    });

}

/*==========================================================
                ACTIVE CARD EFFECT
==========================================================*/

document.querySelectorAll(".scp-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        if (window.innerWidth < 992) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;

        const rotateX = ((y / rect.height) - 0.5) * -8;

        gsap.to(card, {

            rotationY: rotateY,

            rotationX: rotateX,

            transformPerspective: 1000,

            transformOrigin: "center",

            duration: .4,

            ease: "power2.out"

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            rotationX: 0,

            rotationY: 0,

            duration: .6,

            ease: "power3.out"

        });

    });

});

/*==========================================================
                WINDOW RESIZE
==========================================================*/

window.addEventListener("resize", () => {

    if (typeof gsap === "undefined") return;

    if (window.innerWidth < 992) {

        gsap.set(".scp-card", {

            x: 0,

            y: 0,

            rotationX: 0,

            rotationY: 0

        });

        gsap.set(".scp-image img", {

            x: 0,

            y: 0

        });

    }

});