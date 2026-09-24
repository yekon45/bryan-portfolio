// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        // Check that all fields are filled

        if (!name || !email || !subject || !message) {

            formMessage.textContent =
                "Please fill in all the fields.";

            return;
        }


        // Check email format

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            return;
        }


        // Display message

        formMessage.textContent =
            "Thank you! Your message is ready to be sent.";


        // Clear form

        contactForm.reset();

    });

}


// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// =========================================
// TYPING EFFECT
// =========================================

const typingText = document.getElementById("typing-text");

const text =
    "Computer Science Student & Software Developer";

let index = 0;


if (typingText) {

    function typeText() {

        if (index < text.length) {

            typingText.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 60);

        }

    }


    typeText();

}