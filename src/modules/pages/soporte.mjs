import { showAlert } from "../ui/alerts.mjs";

export default function initSupportPage() {
    console.log("Support Page Loaded");

    initSupportForm();
    initFAQ();
}

/* ===========================
   CONTACT FORM
=========================== */
function initSupportForm() {
    const form = document.querySelector("#support-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        showAlert("Your message has been sent! 💐");
        form.reset();
    });
}

/* ===========================
   FAQ ACCORDION
=========================== */
function initFAQ() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(q => {
        q.addEventListener("click", () => {
            const answer = q.nextElementSibling;
            answer.classList.toggle("open");
        });
    });
}
