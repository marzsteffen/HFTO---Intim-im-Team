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

let points = 0;

function quizPage(pageName) {

    let quizcontent = document.querySelectorAll(".quizcontent");
    let checked1 = document.querySelector("#f1a1").checked;
    let checked2 = document.querySelector("#f1a2").checked;
    let checked3 = document.querySelector("#f1a3").checked;
    let checked4 = document.querySelector("#f2a1").checked;
    let checked5 = document.querySelector("#f2a2").checked;
    let checked6 = document.querySelector("#f2a3").checked;
    let checked7 = document.querySelector("#f3a1").checked;
    let checked8 = document.querySelector("#f3a2").checked;
    let checked9 = document.querySelector("#f3a3").checked;
    let checked10 = document.querySelector("#f4a1").checked;
    let checked11 = document.querySelector("#f4a2").checked;
    let checked12 = document.querySelector("#f4a3").checked;
    let checked13 = document.querySelector("#f5a1").checked;
    let checked14 = document.querySelector("#f5a2").checked;
    let checked15 = document.querySelector("#f5a3").checked;



    if (checked1 || checked2 || checked3) {
        for (let i = 0; i < quizcontent.length; i++) {
            quizcontent[i].style.display = "none";

        }
        document.querySelector("#" + pageName).style.display = "block";
        if (checked1 || checked5 || checked8 || checked12 || checked14) {
            points++;
            window.alert(points);
        }
    }
}