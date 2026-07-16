/*==========================================================
                    SHADOW15 FAQ
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================================
                        DOM
    ==========================================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) return;

    /*==========================================================
                        ACCORDION
    ==========================================================*/

    faqItems.forEach((item, index) => {

        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon i");

        if (!button || !answer) return;

        if (index === 0) {

            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";

            if (icon) {

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        } else {

            answer.style.maxHeight = "0px";

        }

        button.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach((faq) => {

                faq.classList.remove("active");

                const ans = faq.querySelector(".faq-answer");
                const ic = faq.querySelector(".faq-icon i");

                if (ans) {

                    ans.style.maxHeight = "0px";

                }

                if (ic) {

                    ic.classList.remove("fa-minus");
                    ic.classList.add("fa-plus");

                }

            });

            if (!isActive) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

                if (icon) {

                    icon.classList.remove("fa-plus");
                    icon.classList.add("fa-minus");

                }

            }

        });

    });

    /*==========================================================
                        GSAP
==========================================================*/

if (

    typeof gsap !== "undefined" &&

    typeof ScrollTrigger !== "undefined"

) {

    gsap.registerPlugin(ScrollTrigger);

    const faqTimeline = gsap.timeline({

        paused: true,

        defaults: {

            ease: "power3.out"

        }

    });

    faqTimeline

    .from(

        ".faq-header",

        {

            opacity: 0,

            y: 70,

            duration: .8

        }

    )

    .from(

        ".faq-support",

        {

            opacity: 0,

            x: -60,

            duration: .8

        },

        "-=.35"

    )

    .from(

        ".faq-item",

        {

            opacity: 0,

            y: 40,

            stagger: .12,

            duration: .6

        },

        "-=.45"

    );

    ScrollTrigger.create({

        trigger: ".faq",

        start: "top 75%",

        once: true,

        animation: faqTimeline

    });

}
    /*==========================================================
                        RESIZE
    ==========================================================*/

    window.addEventListener("resize", () => {

        const active = document.querySelector(".faq-item.active");

        if (!active) return;

        const answer = active.querySelector(".faq-answer");

        if (!answer) return;

        answer.style.maxHeight = answer.scrollHeight + "px";

    });

});