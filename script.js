/* =========================================================
   TREEMOOON LLC
   Professional Prep Center Website
   script.js
========================================================= */

"use strict";


/* =========================================================
   1. BUSINESS INFORMATION

   Replace this email with the real business email.
========================================================= */

const BUSINESS_EMAIL = "Treemoon20@gmail.com";


/* =========================================================
   2. ELEMENTS
========================================================= */

const body = document.body;

const header = document.getElementById("site-header");

const mobileMenuButton = document.getElementById(
    "mobile-menu-button"
);

const mainNavigation = document.getElementById(
    "main-navigation"
);

const navigationLinks = document.querySelectorAll(
    ".nav-link"
);

const backToTopButton = document.getElementById(
    "back-to-top"
);

const quoteForm = document.getElementById(
    "quote-form"
);

const formMessage = document.getElementById(
    "form-message"
);

const currentYearElement = document.getElementById(
    "current-year"
);


/* =========================================================
   3. CURRENT YEAR
========================================================= */

function updateCurrentYear() {

    if (!currentYearElement) {
        return;
    }

    currentYearElement.textContent =
        new Date().getFullYear();

}

updateCurrentYear();


/* =========================================================
   4. HEADER SCROLL EFFECT
========================================================= */

function updateHeaderOnScroll() {

    if (!header) {
        return;
    }

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeaderOnScroll,
    { passive: true }
);

updateHeaderOnScroll();


/* =========================================================
   5. MOBILE NAVIGATION
========================================================= */

function openMobileMenu() {

    if (!mobileMenuButton || !mainNavigation) {
        return;
    }

    mobileMenuButton.classList.add("is-open");
    mainNavigation.classList.add("is-open");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

    body.classList.add("menu-open");

}


function closeMobileMenu() {

    if (!mobileMenuButton || !mainNavigation) {
        return;
    }

    mobileMenuButton.classList.remove("is-open");
    mainNavigation.classList.remove("is-open");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    body.classList.remove("menu-open");

}


function toggleMobileMenu() {

    if (!mainNavigation) {
        return;
    }

    const isOpen =
        mainNavigation.classList.contains("is-open");

    if (isOpen) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

}


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMobileMenu();

    });

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMobileMenu();

    }

});


document.addEventListener("click", (event) => {

    if (!mainNavigation || !mobileMenuButton) {
        return;
    }

    const menuIsOpen =
        mainNavigation.classList.contains("is-open");

    if (!menuIsOpen) {
        return;
    }

    const clickedInsideMenu =
        mainNavigation.contains(event.target);

    const clickedMenuButton =
        mobileMenuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {

        closeMobileMenu();

    }

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 980) {

        closeMobileMenu();

    }

});


/* =========================================================
   6. ACTIVE NAVIGATION LINK
========================================================= */

const pageSections =
    document.querySelectorAll("main section[id]");


function updateActiveNavigation() {

    let currentSectionId = "";

    const scrollPosition =
        window.scrollY + 180;

    pageSections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSectionId =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        link.removeAttribute("aria-current");

        const linkDestination =
            link.getAttribute("href");

        if (
            linkDestination ===
            `#${currentSectionId}`
        ) {

            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   7. SMOOTH SCROLL FOR INTERNAL LINKS
========================================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');


internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const destination =
            document.querySelector(targetId);

        if (!destination) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            header
                ? header.offsetHeight
                : 0;

        const destinationPosition =
            destination.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            15;

        window.scrollTo({
            top: destinationPosition,
            behavior: "smooth"
        });

        closeMobileMenu();

    });

});


/* =========================================================
   8. BACK TO TOP BUTTON
========================================================= */

function updateBackToTopButton() {

    if (!backToTopButton) {
        return;
    }

    if (window.scrollY > 600) {

        backToTopButton.classList.add(
            "visible"
        );

    } else {

        backToTopButton.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTopButton,
    { passive: true }
);


if (backToTopButton) {

    backToTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}

updateBackToTopButton();


/* =========================================================
   9. SCROLL REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        [
            ".section-heading",
            ".about-images",
            ".about-content",
            ".service-card",
            ".process-step",
            ".gallery-item",
            ".pricing-category",
            ".inclusive-plan",
            ".advantage",
            ".advantages-image",
            ".quote-information",
            ".quote-form-container",
            ".faq-introduction",
            ".faq-item",
            ".contact-card"
        ].join(",")
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================================
   10. FAQ ACCORDION

   Only one FAQ item remains open at a time.
========================================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach((faqItem) => {

    faqItem.addEventListener(
        "toggle",
        () => {

            if (!faqItem.open) {
                return;
            }

            faqItems.forEach((otherItem) => {

                if (otherItem !== faqItem) {

                    otherItem.open = false;

                }

            });

        }
    );

});


/* =========================================================
   11. FORM MESSAGE
========================================================= */

function displayFormMessage(
    message,
    type
) {

    if (!formMessage) {
        return;
    }

    formMessage.textContent = message;

    formMessage.classList.remove(
        "success",
        "error"
    );

    formMessage.classList.add(type);

    formMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function clearFormMessage() {

    if (!formMessage) {
        return;
    }

    formMessage.textContent = "";

    formMessage.classList.remove(
        "success",
        "error"
    );

}


/* =========================================================
   12. QUOTE FORM
========================================================= */

function getSelectedServices() {

    if (!quoteForm) {
        return [];
    }

    const selectedServices =
        quoteForm.querySelectorAll(
            'input[name="services"]:checked'
        );

    return Array.from(selectedServices)
        .map((checkbox) => checkbox.value);

}


function getSelectedShipmentType() {

    if (!quoteForm) {
        return "";
    }

    const selectedShipment =
        quoteForm.querySelector(
            'input[name="shipmentArrival"]:checked'
        );

    return selectedShipment
        ? selectedShipment.value
        : "";

}


function sanitizeFormValue(value) {

    if (typeof value !== "string") {
        return "";
    }

    return value.trim();

}


function buildEmailBody(formData) {

    const services =
        formData.services.length > 0
            ? formData.services.join(", ")
            : "No services selected";

    return [
        "NEW QUOTE REQUEST - TREEMOOON LLC",
        "",
        "CONTACT INFORMATION",
        `Full name: ${formData.fullName}`,
        `Company: ${formData.company || "Not provided"}`,
        `Email: ${formData.email}`,
        `Telephone / WhatsApp: ${formData.phone}`,
        "",
        "BUSINESS INFORMATION",
        `Business type: ${formData.businessType}`,
        `Estimated monthly volume: ${formData.monthlyVolume}`,
        `Shipment arrival: ${formData.shipmentArrival}`,
        "",
        "SERVICES REQUIRED",
        services,
        "",
        "ADDITIONAL INFORMATION",
        formData.additionalInformation ||
            "No additional information provided.",
        "",
        "This request was prepared through the Treemooon LLC website."
    ].join("\n");

}


function submitQuoteForm(event) {

    event.preventDefault();

    clearFormMessage();


    if (!quoteForm) {
        return;
    }


    /*
       Browser validation for required fields,
       email format and required selections.
    */

    if (!quoteForm.checkValidity()) {

        displayFormMessage(
            "Please complete all required fields before submitting your request.",
            "error"
        );

        quoteForm.reportValidity();

        return;

    }


    const selectedServices =
        getSelectedServices();


    if (selectedServices.length === 0) {

        displayFormMessage(
            "Please select at least one service.",
            "error"
        );

        const servicesSection =
            quoteForm.querySelector(
                ".service-checkbox-grid"
            );

        if (servicesSection) {

            servicesSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

        return;

    }


    const formData = {

        fullName: sanitizeFormValue(
            quoteForm.elements.fullName.value
        ),

        company: sanitizeFormValue(
            quoteForm.elements.company.value
        ),

        email: sanitizeFormValue(
            quoteForm.elements.email.value
        ),

        phone: sanitizeFormValue(
            quoteForm.elements.phone.value
        ),

        businessType: sanitizeFormValue(
            quoteForm.elements.businessType.value
        ),

        monthlyVolume: sanitizeFormValue(
            quoteForm.elements.monthlyVolume.value
        ),

        shipmentArrival:
            getSelectedShipmentType(),

        services: selectedServices,

        additionalInformation:
            sanitizeFormValue(
                quoteForm.elements
                    .additionalInformation
                    .value
            )

    };


    const submitButton =
        quoteForm.querySelector(
            'button[type="submit"]'
        );

    const originalButtonContent =
        submitButton
            ? submitButton.innerHTML
            : "";


    if (submitButton) {

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <span>Preparing Request...</span>
            <i class="fa-solid fa-spinner fa-spin"
               aria-hidden="true"></i>
        `;

    }


    const emailSubject =
        `Quote Request - ${formData.fullName}`;


    const emailBody =
        buildEmailBody(formData);


    const mailtoLink =
        `mailto:${BUSINESS_EMAIL}` +
        `?subject=${encodeURIComponent(emailSubject)}` +
        `&body=${encodeURIComponent(emailBody)}`;


    window.setTimeout(() => {

        displayFormMessage(
            "Your email application will open with the quotation information prepared. Review the message and press Send.",
            "success"
        );


        window.location.href = mailtoLink;


        if (submitButton) {

            submitButton.disabled = false;

            submitButton.innerHTML =
                originalButtonContent;

        }

    }, 500);

}


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        submitQuoteForm
    );


    quoteForm.addEventListener(
        "input",
        () => {

            if (
                formMessage &&
                formMessage.classList.contains(
                    "error"
                )
            ) {

                clearFormMessage();

            }

        }
    );

}


/* =========================================================
   13. IMAGE ERROR HANDLING
========================================================= */

const websiteImages =
    document.querySelectorAll("img");


websiteImages.forEach((image) => {

    image.addEventListener("error", () => {

        console.warn(
            `Image could not be loaded: ${image.src}`
        );

        image.classList.add(
            "image-load-error"
        );

    });

});


/* =========================================================
   14. EXTERNAL LINKS SECURITY
========================================================= */

const externalLinks =
    document.querySelectorAll(
        'a[target="_blank"]'
    );


externalLinks.forEach((link) => {

    const currentRel =
        link.getAttribute("rel") || "";

    const relValues =
        new Set(
            currentRel
                .split(" ")
                .filter(Boolean)
        );

    relValues.add("noopener");
    relValues.add("noreferrer");

    link.setAttribute(
        "rel",
        Array.from(relValues).join(" ")
    );

});


/* =========================================================
   15. PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

    body.classList.add("page-loaded");

    updateHeaderOnScroll();
    updateActiveNavigation();
    updateBackToTopButton();

});


console.log(
    "Treemooon LLC website loaded successfully."
);
