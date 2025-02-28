document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === "block";

            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

            answer.style.display = isOpen ? "none" : "block";
        });
    });
});
