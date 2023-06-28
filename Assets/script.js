// Quiz structural variables
var questionQ = document.getElementById("quizQ")
var btnA = document.getElementById("a")
var btnB = document.getElementById("b")
var btnC = document.getElementById("c")
var btnD = document.getElementById("d")
var selection = document.getElementById("selection")
var timer = document.querySelector(".timer")
var start = document.querySelector(".start")
var back = document.querySelector(".go-back")
var showHide = document.getElementById("showHide")
var disp = document.getElementById("cardDisplay")


// Set Default Display
disp.style = ("display: none;")
back.style = ("display: none;")


// quiz array index counter
var count = 0;


// code-related quiz
var quiz = [

    {
        question: "What does JS stand for?",
        a: "Just Sayin'",
        b: "Java Slipped",
        c: "JavaScript",
        d: "Jose Sanchez",
        correct: "c"
    },

    {
        question: "What data type holds list items in a specific order?",
        a: "int",
        b: "array",
        c: "bool",
        d: "char",
        correct: "b"
    },

    {
        question: "var num = '6' is a...",
        a: "string",
        b: "number",
        c: "list",
        d: "data.frame",
        correct: "a"
    },

    {
        question: "Python is a...",
        a: "snake",
        b: "coding language",
        c: "cool nickname",
        d: "all the above",
        correct: "d"
    }
]


// quiz fuctions
// cycles to the next question 
function displayQuiz() {
    questionQ.innerHTML = quiz[count].question
    btnA.innerHTML = quiz[count].a
    btnB.innerHTML = quiz[count].b
    btnC.innerHTML = quiz[count].c
    btnD.innerHTML = quiz[count].d
}

//answer function with timer modifier
function answer(pick) {
    if (count >= 4) {
        alert("That's all Folks. Press Return to try again.")
        showHide.style = ("display:none")
        count = 0
    } else if(pick.target.matches(".btn")) {
        // right-wrong.innerText = "That's Right!"
        count++
        displayQuiz()
    }
    else {
        // right-wrong.innerText = "No. You lost time!"
        count++
        time = time-10;
        displayQuiz()
    }
}

//on click execute answer function
selection.addEventListener("click", answer)

//start button
start.onclick = function () {
    count=0;
    displayQuiz()
    var time = 60
    //timer 
    setInterval(function () {
    timer.innerText = time
    if (time <= 0) {
        timer.innerText = "You're out of time!"
    } else {
        time--
    }}, 1000)
    disp.style = "display: block;"
    showHide.style = ("display:block;")
    start.style = ("display: none;")
    back.style = ("display: ;")

}

//Return button
back.onclick = function() {
    timer.innerText = "60"
    disp.style = "display: none;"
    start.style = ("display: ;")
    back.style = ("display: none;")
}

//future leaderboard display
// var highscores = document.querySelector(".highscore")
// highscores.onclick = function() {
//     //display of previous quiz attempts
// }