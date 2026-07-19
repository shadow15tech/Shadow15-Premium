/*==========================================
        SHADOW15
        AI AUTOMATION JOURNEY
==========================================*/

const journeySteps =
document.querySelectorAll(".s15-step");

const flow =
document.querySelector(".s15-flow-line");

const title =
document.querySelector(".s15-ai-content h3");

const description =
document.querySelector(".s15-ai-content p");

const features =
document.querySelectorAll(".s15-ai-content li");

const metrics =
document.querySelectorAll(".s15-impact-card strong");


/*==========================================
        DATA
==========================================*/

const journeyData=[

{

title:"Website Visitor",

description:
"Every visitor entering your website is instantly detected and analyzed by Shadow15 AI.",

features:[
"Traffic Analysis",
"Heatmap Tracking",
"Intent Detection",
"Session Recording"
],

metrics:[
"2,453",
"0",
"0",
"₹0"
]

},

{

title:"AI Qualification",

description:
"The AI engine understands visitor intent and automatically qualifies high-value leads.",

features:[
"AI Scoring",
"Behavior Tracking",
"Smart Routing",
"Lead Priority"
],

metrics:[
"2,453",
"568",
"0",
"₹0"
]

},

{

title:"WhatsApp Automation",

description:
"Qualified leads instantly receive intelligent WhatsApp conversations with AI responses.",

features:[
"Instant Replies",
"Smart Templates",
"Follow-up",
"24×7 AI Chat"
],

metrics:[
"2,453",
"1,856",
"92",
"₹1.2M"
]

},

{

title:"CRM Automation",

description:
"Every interaction automatically syncs into CRM without manual work.",

features:[
"Auto Sync",
"Lead History",
"Pipeline",
"Sales Tracking"
],

metrics:[
"2,453",
"1,856",
"218",
"₹2.7M"
]

},

{

title:"Appointment Booking",

description:
"AI schedules appointments automatically based on availability and customer preferences.",

features:[
"Calendar Sync",
"Reminder",
"Availability",
"Confirmation"
],

metrics:[
"2,453",
"1,856",
"320",
"₹4.2M"
]

},

{

title:"Successful Customer",

description:
"The customer completes the journey while AI continues optimizing future conversions.",

features:[
"Feedback",
"Retention",
"Remarketing",
"Learning AI"
],

metrics:[
"2,453",
"1,856",
"320",
"₹4.82M"
]

}

];



/*==========================================
        UPDATE UI
==========================================*/

function updateJourney(index){

    journeySteps.forEach(step=>{

        step.classList.remove("active");

    });

    journeySteps[index].classList.add("active");



    title.style.opacity=0;

    description.style.opacity=0;



    setTimeout(()=>{

        title.textContent=
        journeyData[index].title;

        description.textContent=
        journeyData[index].description;



        features.forEach((item,i)=>{

            item.textContent=
            journeyData[index].features[i];

        });



        metrics.forEach((item,i)=>{

            item.textContent=
            journeyData[index].metrics[i];

        });



        title.style.opacity=1;

        description.style.opacity=1;

    },180);



    if(flow){

        flow.style.setProperty(

        "--progress",

        `${((index+1)/6)*100}%`

        );

    }

}



/*==========================================
        CLICK
==========================================*/

journeySteps.forEach((step,index)=>{

    step.addEventListener(

    "click",

    ()=>{

        current=index;

        updateJourney(current);

    });

});



/*==========================================
        AUTOPLAY
==========================================*/

let current=0;

let autoplay=

setInterval(nextStep,5000);



function nextStep(){

    current++;

    if(current>=journeySteps.length){

        current=0;

    }

    updateJourney(current);

}



/*==========================================
        PAUSE
==========================================*/

const journey=

document.querySelector(".s15-journey");

journey.addEventListener(

"mouseenter",

()=>{

clearInterval(autoplay);

});

journey.addEventListener(

"mouseleave",

()=>{

autoplay=

setInterval(nextStep,5000);

});


/*==========================================
        INITIAL
==========================================*/

updateJourney(0);