function umfragePage(pageName) {

    let umfragecontent = document.querySelectorAll(".umfragecontent");
    for (let i = 0; i < umfragecontent.length; i++) {
        umfragecontent[i].style.display = "none";
    }
    document.querySelector("#" + pageName).style.display = "block";
    results();

}

function results() {

}

function quizPage(pageName) {
    results();
    let quizcontent = document.querySelectorAll(".quizcontent");
    for (let i = 0; i < quizcontent.length; i++) {
        quizcontent[i].style.display = "none";
    }
    document.querySelector("#" + pageName).style.display = "block";

}