

function umfragePage(pageName) {

    let umfragecontent = document.querySelectorAll(".umfragecontent");
    for (let i = 0; i < umfragecontent.length; i++) {
        umfragecontent[i].style.display = "none";
    }
    document.querySelector("#" + pageName).style.display = "block";
    results();

    let f1 = document.querySelector("#f1");
    let f2 = document.querySelector("#f2");
    let f3 = document.querySelector("#f3");
    let f4 = document.querySelector("#f4");
    let f5 = document.querySelector("#f5");
    
    

}

function results() {

}

let points = 0;
function quizPage(pageName) {
    
    
    let quizcontent = document.querySelectorAll(".quizcontent");
    let checked1 = document.querySelector("#f1a1").checked;
    let checked2 = document.querySelector("#f1a2").checked;
    let checked3 = document.querySelector("#f1a3").checked;
    
    if(checked1 || checked2 ||checked3){
        for (let i = 0; i < quizcontent.length; i++) {
            quizcontent[i].style.display = "none";
        }
        document.querySelector("#" + pageName).style.display = "block";
    }
    if(checked1){
        points++;
        window.alert(points);
    }
    

}
