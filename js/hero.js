/*==================================================
            SHADOW15 HERO COMPONENT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHero();

});

function initHero(){

    heroCounter();

    dashboardParallax();

    chartAnimation();

    metricHover();

    badgePulse();

}

/*==================================================
            COUNTER ANIMATION
==================================================*/

function heroCounter(){

    const values = document.querySelectorAll(".metric-value");

    values.forEach(item=>{

        const original = item.textContent.trim();

        const number = parseInt(original);

        if(isNaN(number)) return;

        let current = 0;

        const speed = Math.max(1, Math.floor(number / 40));

        const interval = setInterval(()=>{

            current += speed;

            if(current >= number){

                current = number;

                clearInterval(interval);

            }

            item.textContent = current + original.replace(/[0-9]/g,'');

        },25);

    });

}

/*==================================================
            CARD PARALLAX
==================================================*/

function dashboardParallax(){

    const card = document.querySelector(".dashboard-card");

    if(!card) return;

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x/rect.width)-0.5)*10;

        const rotateX = ((y/rect.height)-0.5)*-10;

        card.style.transform =

        `perspective(1200px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-6px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "perspective(1200px) rotateX(0) rotateY(0)";

    });

}

/*==================================================
            SVG CHART DRAW
==================================================*/

function chartAnimation(){

    const line=document.querySelector(".chart-line");

    if(!line) return;

    const length=line.getTotalLength();

    line.style.strokeDasharray=length;

    line.style.strokeDashoffset=length;

    setTimeout(()=>{

        line.style.transition="stroke-dashoffset 2s ease";

        line.style.strokeDashoffset=0;

    },300);

}

/*==================================================
            KPI HOVER
==================================================*/

function metricHover(){

    const cards=document.querySelectorAll(".metric-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.background=

            `radial-gradient(circle at ${x}px ${y}px,

            rgba(34,211,238,.18),

            #182B3F 60%)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background="";

        });

    });

}

/*==================================================
            LIVE BADGE
==================================================*/

function badgePulse(){

    const badge=document.querySelector(".dashboard-live");

    if(!badge) return;

    setInterval(()=>{

        badge.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.05)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:1200

        });

    },2500);

}