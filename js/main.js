const faq_questions = document.getElementsByClassName("question");

for (let i = 0; i < faq_questions.length; i++) {
    const button = faq_questions[i].querySelector("button");
    button.addEventListener("click", () => {
        faq_questions[i].classList.toggle("active");
    });
}