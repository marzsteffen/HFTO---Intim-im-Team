function quizPage(evt, pageName) {
    evt.currentTarget.classList.add("active")
    let quizcontent = document.querySelectorAll(".quizcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        quizcontent[i].style.display = "none";
    }
    document.querySelector("#" + pageName).style.display = "block";
}