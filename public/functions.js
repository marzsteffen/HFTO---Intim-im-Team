function umfragePage(pageName) {

    let umfragecontent = document.querySelectorAll(".umfragecontent");
    for (let i = 0; i < umfragecontent.length; i++) {
        umfragecontent[i].style.display = "none";
    }
    document.querySelector("#" + pageName).style.display = "block";
    results();
    document.querySelectorAll(".umfragecontent")
}

function umfrageResults(pageName){
    umfragePage(pageName);

    let u1a1= document.querySelector("#u1a1").checked;
    let u1a2= document.querySelector("#u1a2").checked;
    let u1a3= document.querySelector("#u1a3").checked;
    let u1a4= document.querySelector("#u1a4").checked;
    let u1a1= document.querySelector("#u2a1").checked;
    let u1a2= document.querySelector("#u2a2").checked;
    let u1a3= document.querySelector("#u2a3").checked;
    let u1a1= document.querySelector("#u3a1").checked;
    let u1a2= document.querySelector("#u3a2").checked;
    let u1a3= document.querySelector("#u3a3").checked;
    let u1a1= document.querySelector("#u4a1").checked;
    let u1a2= document.querySelector("#u4a2").checked;
    let u1a3= document.querySelector("#u4a3").checked;
    let u1a4= document.querySelector("#u4a4").checked;
    let u1a1= document.querySelector("#u5a1").checked;
    let u1a2= document.querySelector("#u5a2").checked;
    let u1a3= document.querySelector("#u5a3").checked;
    let u1a4= document.querySelector("#u5a4").checked;

    if(u1a1){
        document.querySelector("#antwort1").innerHTML = "Ich empfinde den derzeitigen Stand als sehr gut";
    }
    if(u1a2){
        document.querySelector("#antwort1").innerHTML = "Ich empfinde den derzeitigen Stand als gut";
    }
    if(u1a3){
        document.querySelector("#antwort1").innerHTML = "Ich empfinde den derzeitigen Stand als ausbaufähig";
    }
    if(u1a4){
        document.querySelector("#antwort1").innerHTML = "Ich empfinde den derzeitigen Stand als sehr gut";
    }
}





let points = 0;

function quizPage2(pageName) {
    window.alert("asas");
    let quizcontent = document.querySelectorAll(".quizcontent");
    let checked1 = document.querySelector("#f1a1").checked;
    let checked2 = document.querySelector("#f1a2").checked;
    let checked3 = document.querySelector("#f1a3").checked;




    if (checked1 || checked2 || checked3) {
        for (let i = 0; i < quizcontent.length; i++) {
            quizcontent[i].style.display = "none";

        }
        if (checked1) {
            points++;
        }
        document.querySelector("#" + pageName).style.display = "block";

    }
}

function quizPage3(pageName) {
    let quizcontent = document.querySelectorAll(".quizcontent");
    let checked4 = document.querySelector("#f2a1").checked;
    let checked5 = document.querySelector("#f2a2").checked;
    let checked6 = document.querySelector("#f2a3").checked;




    if (checked4 || checked5 || checked6) {
        for (let i = 0; i < quizcontent.length; i++) {
            quizcontent[i].style.display = "none";

        }
        document.querySelector("#" + pageName).style.display = "block";
        if (checked5) {
            points++;
        }
    }

}

function quizPage4(pageName) {
    let quizcontent = document.querySelectorAll(".quizcontent");

    let checked7 = document.querySelector("#f3a1").checked;
    let checked8 = document.querySelector("#f3a2").checked;
    let checked9 = document.querySelector("#f3a3").checked;




    if (checked7 || checked8 || checked9) {
        for (let i = 0; i < quizcontent.length; i++) {
            quizcontent[i].style.display = "none";

        }
        document.querySelector("#" + pageName).style.display = "block";
        if (checked8) {
            points++;
        }
    }

}

function quizPage5(pageName) {

    let quizcontent = document.querySelectorAll(".quizcontent");
    let checked10 = document.querySelector("#f4a1").checked;
    let checked11 = document.querySelector("#f4a2").checked;
    let checked12 = document.querySelector("#f4a3").checked;




    if (checked10 || checked11 || checked12) {
        for (let i = 0; i < quizcontent.length; i++) {
            quizcontent[i].style.display = "none";

        }
        document.querySelector("#" + pageName).style.display = "block";
        if (checked12) {
            points++;
        }
    }
}

function quizPage6(pageName) {

    let quizcontent = document.querySelectorAll(".quizcontent");
    let checked13 = document.querySelector("#f5a1").checked;
    let checked14 = document.querySelector("#f5a2").checked;
    let checked15 = document.querySelector("#f5a3").checked;



    if (checked13 || checked14 || checked15) {
        for (let i = 0; i < quizcontent.length; i++) {
            quizcontent[i].style.display = "none";

        }
        document.querySelector("#" + pageName).style.display = "block";
        if (checked14) {
            points++;
        }
    }

    document.querySelector('#' + pageName).innerHTML = "<h1>Danke für ihre Teilnahme!</h1> <p> Sie haben " + points + " von 5 Punkten erreicht";
}