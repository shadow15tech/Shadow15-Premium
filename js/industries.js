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