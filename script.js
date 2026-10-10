
/* ------- Mobile Navigation ------- */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    const menuIcon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-xmark", isOpen);
        }
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            if (menuIcon) {
                menuIcon.classList.add("fa-bars");
                menuIcon.classList.remove("fa-xmark");
            }
        });
    });
}


/* ------- Smooth Scrolling ------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", targetId);
        }
    });
});


/* ------- Active Navigation Link ------- */

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {
    let currentSection = "home";

    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 150) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        const isActive =
            link.getAttribute("href") === `#${currentSection}`;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


/* ------- Testimonials Slider ------- */

const testimonialsContainer =
    document.querySelector(".testimonials-container");

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

const previousButton =
    document.querySelector(".testimonial-arrow.prev");

const nextButton =
    document.querySelector(".testimonial-arrow.next");

const testimonialDots =
    document.querySelectorAll(".testimonial-dots .dot");

if (
    testimonialsContainer &&
    testimonialCards.length > 0 &&
    previousButton &&
    nextButton
) {
    let currentIndex = 0;

    function getVisibleCards() {
        if (testimonialCards.length < 2) return 1;

        const containerWidth = testimonialsContainer.clientWidth;
        const cardWidth = testimonialCards[0].getBoundingClientRect().width;
        const gap = parseFloat(
            getComputedStyle(testimonialsContainer).gap
        ) || 0;

        return Math.max(
            1,
            Math.round((containerWidth + gap) / (cardWidth + gap))
        );
    }

    function getMaxIndex() {
        return Math.max(
            0,
            testimonialCards.length - getVisibleCards()
        );
    }

    function getDotIndex() {
        if (testimonialDots.length <= 1) return 0;

        return Math.round(
            currentIndex / getMaxIndex() *
            (testimonialDots.length - 1)
        ) || 0;
    }

    function updateSlider() {
        currentIndex = Math.max(
            0,
            Math.min(currentIndex, getMaxIndex())
        );

        const cardPosition =
            testimonialCards[currentIndex].offsetLeft -
            testimonialCards[0].offsetLeft;

        testimonialsContainer.scrollTo({
            left: cardPosition,
            behavior: "smooth"
        });

        testimonialDots.forEach((dot, index) => {
            dot.classList.toggle(
                "active",
                index === getDotIndex()
            );
        });

        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === getMaxIndex();
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < getMaxIndex()) {
            currentIndex++;
            updateSlider();
        }
    });

    previousButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            const maxIndex = getMaxIndex();

            currentIndex = testimonialDots.length > 1
                ? Math.round(
                    index * maxIndex / (testimonialDots.length - 1)
                )
                : 0;

            updateSlider();
        });
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
}


/* ------- FAQ Accordion ------- */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
        if (item.open) {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.open = false;
                }
            });
        }
    });
});


/* ------- Contact Form ------- */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    const formMessage = document.createElement("p");

    formMessage.classList.add("form-message");
    formMessage.setAttribute("role", "status");
    formMessage.setAttribute("aria-live", "polite");

    contactForm.after(formMessage);

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formMessage.textContent =
            "Thank you! Your form is valid. This demo does not send your details yet.";

        contactForm.reset();
    });
}