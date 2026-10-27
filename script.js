/* =========================================================
   FLUFF & GO CHICAGO
   WEBSITE JAVASCRIPT
   ========================================================= */

// FAQ ACCORDION — ACCESSIBLE LUXURY DROPDOWNS

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const item = question.closest(".faq-item");
        const answer = item.querySelector(".faq-answer");

        const isOpen = question.getAttribute("aria-expanded") === "true";

        // Close all FAQ items
        document.querySelectorAll(".faq-item").forEach(function (faq) {

            faq.classList.remove("active");

            const faqQuestion = faq.querySelector(".faq-question");
            const faqAnswer = faq.querySelector(".faq-answer");
            const symbol = faq.querySelector(".faq-symbol");

            if (faqQuestion) {
                faqQuestion.setAttribute("aria-expanded", "false");
            }

            if (faqAnswer) {
                faqAnswer.hidden = true;
            }

            if (symbol) {
                symbol.textContent = "+";
            }

        });

        // Open the selected item if it was previously closed
        if (!isOpen) {

            item.classList.add("active");

            question.setAttribute("aria-expanded", "true");

            if (answer) {
                answer.hidden = false;
            }

            const symbol = question.querySelector(".faq-symbol");

            if (symbol) {
                symbol.textContent = "−";
            }

        }

    });

});


// BOOKING FORM
const bookingForm = document.getElementById("booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = bookingForm.querySelector(
            'button[type="submit"]'
        );

        submitButton.disabled = true;
        submitButton.textContent = "Sending Request...";

        try {

            const response = await fetch(bookingForm.action, {
                method: "POST",
                body: new FormData(bookingForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                bookingForm.reset();

                alert(
                    "Thank you! Your grooming request has been sent. " +
                    "We'll contact you at the phone number you provided " +
                    "to confirm your appointment."
                );

            } else {

                alert(
                    "Something went wrong while sending your request. " +
                    "Please call or text Fluff & Go Chicago at " +
                    "(224) 800-9820."
                );

            }

        } catch (error) {

            alert(
                "We couldn't send your request right now. " +
                "Please call or text Fluff & Go Chicago at " +
                "(224) 800-9820."
            );

        }

        submitButton.disabled = false;
        submitButton.textContent = "Request Appointment";

    });

}

// AUTOMATIC COPYRIGHT YEAR
const currentYear = new Date().getFullYear();

const footerBrand = document.querySelector(".footer-brand");

if (footerBrand) {

    const yearText = footerBrand.parentElement.querySelector(
        "p:nth-of-type(4)"
    );

    if (yearText) {

        yearText.textContent =
            "© " +
            currentYear +
            " Fluff & Go Chicago. All Rights Reserved.";

    }

}// AUTOMATIC FOOTER COPYRIGHT YEAR
const footerYear = document.getElementById("footer-year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}