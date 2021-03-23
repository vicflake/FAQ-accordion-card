
let element = document.querySelectorAll(".question-title");
element.forEach(function(element){
    element.addEventListener("click", function(e){
        let question = e.currentTarget.parentElement;
        question.classList.toggle("show-text");

    });
});