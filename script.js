/* =====================================================
   ARVEA NATURE
   SCRIPT.JS
   VERSION 1
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MENU MOBILE
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("mobile-active");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");

            }

        });

    }

    /* ==========================
       HEADER AU SCROLL
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    });

    /* ==========================
       APPARITION AU SCROLL
    ========================== */

    const elements = document.querySelectorAll(
        ".hero, .categories, .category-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    /* ==========================
       FERMER LE MENU MOBILE
    ========================== */

    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("mobile-active");

            const icon = menuToggle?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

    });

});

/* =====================================================
   BOUTON WHATSAPP FLOTTANT
===================================================== */

const whatsapp = document.createElement("a");

whatsapp.href =
"https://wa.me/22898530693?text=Bonjour,%20je%20souhaite%20obtenir%20des%20informations%20sur%20les%20produits%20ARVEA.";

whatsapp.target = "_blank";

whatsapp.className = "whatsapp-float";

whatsapp.innerHTML = '<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

/* =====================================================
   MENU MOBILE PREMIUM
===================================================== */

const mobileMenu=document.querySelector(".mobile-menu");
const overlay=document.querySelector(".overlay");
const openMenu=document.querySelector(".menu-toggle");
const closeMenu=document.querySelector(".close-menu");

if(openMenu){

openMenu.addEventListener("click",()=>{

mobileMenu.classList.add("active");
overlay.classList.add("active");

});

}

if(closeMenu){

closeMenu.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
overlay.classList.remove("active");

});

}

if(overlay){

overlay.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
overlay.classList.remove("active");

});

}

/* ===========================
   RECHERCHE PRODUITS
=========================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ===========================
   FAQ
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {

        question.addEventListener("click", () => {

            const item = question.parentElement;

            item.classList.toggle("active");

        });

    });

});
