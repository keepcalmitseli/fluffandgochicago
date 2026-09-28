/* =========================================================
   FLUFF & GO CHICAGO
   WEBSITE JAVASCRIPT
   ========================================================= */

// FAQ ACCORDION
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const item = question.parentElement;
        const isOpen = item.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach(function (faq) {

            faq.classList.remove("active");

            const symbol = faq.querySelector(".faq-symbol");

            if (symbol) {
                symbol.textContent = "+";
            }

        });

        if (!isOpen) {

            item.classList.add("active");

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

}