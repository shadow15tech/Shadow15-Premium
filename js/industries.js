/*==========================================================

                SHADOW15

            INDUSTRIES V3

                industries.js

==========================================================*/

'use strict';


/*==========================================================

                DOM

==========================================================*/

const industrySection = document.querySelector('.industries');

if (!industrySection) return;

const cards = industrySection.querySelectorAll('.industry-card');

const engine = industrySection.querySelector('.engine-wrapper');

const core = industrySection.querySelector('.engine-core');

const rings = industrySection.querySelectorAll('.engine-ring');

const particles = industrySection.querySelectorAll('.engine-particle');

const metrics = industrySection.querySelectorAll('.engine-metric');

const labels = industrySection.querySelectorAll('.engine-label');

const networkLines = industrySection.querySelectorAll('.network-line');

/*==========================================================

                CARD TILT

==========================================================*/

cards.forEach(card=>{

    card.addEventListener('mousemove',(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (rect.height/2 - y)/18;

        const rotateY = (x - rect.width/2)/18;

        card.style.transform =

        `

        perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-12px)

        `;

    });

    card.addEventListener('mouseleave',()=>{

        card.style.transform='';

    });

});

/*==========================================================

                ENGINE PARALLAX

==========================================================*/

industrySection.addEventListener('mousemove',(e)=>{

    const rect = engine.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const moveX =

    (x-rect.width/2)/35;

    const moveY =

    (y-rect.height/2)/35;

    core.style.transform=

    `translate(${moveX}px,${moveY}px)`;

});


industrySection.addEventListener('mouseleave',()=>{

    core.style.transform='translate(0,0)';

});


/*==========================================================

            NETWORK ACTIVATION

==========================================================*/

cards.forEach((card,index)=>{

    card.addEventListener('mouseenter',()=>{

        if(networkLines[index]){

            networkLines[index].classList.add('active');

        }

        core.classList.add('engine-active');

    });

    card.addEventListener('mouseleave',()=>{

        networkLines.forEach(line=>{

            line.classList.remove('active');

        });

        core.classList.remove('engine-active');

    });

});

/*==========================================================

                ENGINE PULSE

==========================================================*/

cards.forEach(card=>{

    card.addEventListener('mouseenter',()=>{

        core.classList.remove('pulse');

        void core.offsetWidth;

        core.classList.add('pulse');

    });

});

/*==========================================================

            FLOATING PARTICLES

==========================================================*/

particles.forEach((particle,index)=>{

    particle.animate(

    [

        {

            transform:'translateY(0px)'

        },

        {

            transform:'translateY(-12px)'

        },

        {

            transform:'translateY(0px)'

        }

    ],

    {

        duration:

        1800+(index*350),

        iterations:Infinity,

        direction:'alternate',

        easing:'ease-in-out'

    });

});




/*==========================================================

            COUNTERS

==========================================================*/

const counters=document.querySelectorAll('.metric-value');

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const target=+entry.target.dataset.target;

        let value=0;

        const step=Math.ceil(target/40);

        const update=()=>{

            value+=step;

            if(value>=target){

                value=target;

            }

            entry.target.textContent=value+"+";

            if(value<target){

                requestAnimationFrame(update);

            }

        };

        update();

        observer.unobserve(entry.target);

    });

});

counters.forEach(counter=>observer.observe(counter));



/*==========================================================

            DATA FLOW

==========================================================*/

const packet = document.querySelector('.data-packet');

cards.forEach(card=>{

    card.addEventListener('mouseenter',()=>{

        sendPacket(card);

    });

});


function sendPacket(card){

    if(!packet) return;

    const cardRect = card.getBoundingClientRect();

    const engineRect = engine.getBoundingClientRect();

    const startX =
    cardRect.left + cardRect.width/2;

    const startY =
    cardRect.top + cardRect.height/2;

    const endX =
    engineRect.left + engineRect.width/2;

    const endY =
    engineRect.top + engineRect.height/2;

    packet.style.opacity = "1";

    packet.style.left =
    (startX-engineRect.left)+"px";

    packet.style.top =
    (startY-engineRect.top)+"px";

    packet.animate(

    [

        {

            left:(startX-engineRect.left)+"px",

            top:(startY-engineRect.top)+"px",

            transform:"scale(.4)",

            opacity:0

        },

        {

            opacity:1,

            offset:.2

        },

        {

            left:(endX-engineRect.left)+"px",

            top:(endY-engineRect.top)+"px",

            transform:"scale(1)",

            opacity:1

        }

    ],

    {

        duration:650,

        easing:"cubic-bezier(.22,1,.36,1)"

    });

    setTimeout(()=>{

        packet.style.opacity="0";

        core.classList.remove("pulse");

        void core.offsetWidth;

        core.classList.add("pulse");

    },650);

}


/*==========================================================

            MAGNETIC ENGINE

==========================================================*/

industrySection.addEventListener('mousemove',(e)=>{

    const rect = engine.getBoundingClientRect();

    const dx = e.clientX-(rect.left+rect.width/2);

    const dy = e.clientY-(rect.top+rect.height/2);

    const distance=Math.sqrt(dx*dx+dy*dy);

    if(distance<280){

        engine.style.transform=

        `translate(${dx*.03}px,${dy*.03}px)`;

    }

});


industrySection.addEventListener('mouseleave',()=>{

    engine.style.transform="translate(0,0)";

});


/*==========================================================

            CARD REVEAL

==========================================================*/

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-card");

        }

    });

},{
    threshold:.15
});

cards.forEach(card=>{

    revealObserver.observe(card);

});



