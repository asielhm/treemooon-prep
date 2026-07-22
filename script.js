// ===============================
// TREEMOOON LLC
// script.js
// ===============================

// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 3px 12px rgba(0,0,0,.15)";

    }else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,.08)";

    }

});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Quote Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');

    if(name.value.trim() === ""){

        alert("Please enter your name.");
        return;

    }

    if(email.value.trim() === ""){

        alert("Please enter your email.");
        return;

    }

    alert("Thank you! Your quote request has been received. We will contact you shortly.");

    form.reset();

});


// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#0056b3";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.boxShadow = "0 4px 10px rgba(0,0,0,.2)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===============================
// Smooth Hover Effect on Cards
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";
        card.style.transition=".3s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// ===============================
// Console Welcome
// ===============================

console.log("Treemooon LLC Website Loaded Successfully.");
