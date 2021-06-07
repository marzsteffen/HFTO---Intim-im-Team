function quizPage(pageName) {
    let quizcontent = document.querySelectorAll(".quizcontent");
    for (let i = 0; i < quizcontent.length; i++) {
        quizcontent[i].style.display = "none";
    }
    let quizpage =  document.querySelector("#"+pageName);
    quizpage.style.display = "block";
}