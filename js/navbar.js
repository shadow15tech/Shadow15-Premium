/*==========================================================

            SHADOW15 NAVBAR

            VERSION 1.0

==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*======================================
    ELEMENTS
    ======================================*/

    const navbar = document.querySelector(".s15-navbar");

    const menuButton = document.querySelector(".s15-menu-toggle");

    const navigation = document.querySelector(".s15-nav");

    const navLinks = document.querySelectorAll(".s15-nav-link");



    /*======================================
    NAVBAR SCROLL
    ======================================*/

    function handleNavbarScroll(){

        if(window.scrollY > 40){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    }

    handleNavbarScroll();

    window.addEventListener("scroll", handleNavbarScroll);



    /*======================================
    MOBILE MENU
    ======================================*/

    function closeMenu(){

        menuButton.classList.remove("active");

        navigation.classList.remove("active");

        document.body.style.overflow = "";

    }

    function openMenu(){

        menuButton.classList.add("active");

        navigation.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    menuButton.addEventListener("click", () => {

        if(navigation.classList.contains("active")){

            closeMenu();

        }

        else{

            openMenu();

        }

    });



    /*======================================
    CLOSE ON LINK CLICK
    ======================================*/

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            closeMenu();

        });

    });



    /*======================================
    CLICK OUTSIDE
    ======================================*/

    document.addEventListener("click",(event)=>{

        const insideNavbar = navbar.contains(event.target);

        if(!insideNavbar){

            closeMenu();

        }

    });



    /*======================================
    ESC KEY
    ======================================*/

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape"){

            closeMenu();

        }

    });



    /*======================================
    ACTIVE NAVIGATION
    ======================================*/

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink(){

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if(window.scrollY >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    }

    updateActiveLink();

    window.addEventListener("scroll",updateActiveLink);

});