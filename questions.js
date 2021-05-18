var questions = [
    ["What is the Capital of Denmark?", "", "", "", "", ""], // [1][1-6]
    ["Which Hemisphere is Denmark located in?", "", "", "", "", ""], // [2][1-6]
    ["Which country shares a land border with Denmark?", "", "", "", "", ""], // [3][1-6]
    ["What is the terrain like in Denmark?", "", "", "", "", ""], // [4][1-6]
    ["Where is the mainland of Denmark located?", "", "", "", "", ""], // [5][1-6]
];

var answers = [
    ["copenhagen", "", "", "", "", ""], // [1][1-6]
    ["the northern hemisphere", "", "", "", "", ""], // [2][1-6]
    ["germany", "", "", "", "", ""], // [3][1-6]
    ["flat", "", "", "", "", ""], // [4][1-6]
    ["the jutland peninsula", "", "", "", "", ""], // [5][1-6]
];

var used = [
    [false, false, false, false, false, false], // [1][1-6]
    [false, false, false, false, false, false], // [2][1-6]
    [false, false, false, false, false, false], // [3][1-6]
    [false, false, false, false, false, false], // [4][1-6]
    [false, false, false, false, false, false], // [5][1-6]
];

var score = 0;

var globalValue;
var globalCategory;

function question(value, category) {
    if (used[value][category] == false) {
        used[value][category] = true;
        document.getElementById(value + "-" + category).innerHTML = "";
        document.getElementById("question-box").hidden = false;
        globalValue = value;
        globalCategory = category;
        console.log(questions[value][category]);
        document.getElementById("question").innerHTML = questions[value][category];
    }
}

function checkAnswer() {
    var answer = document.getElementById("answer").value;
    var lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer == answers[globalValue][globalCategory]) {
        console.log("Correct");
        score += (globalValue + 1) * 200;
        document.getElementById("score").innerHTML = score;
    } else {
        console.log("Incorrect");
        score -= (globalValue + 1) * 200;
        document.getElementById("score").innerHTML = score;
    }
    document.getElementById("answer").value = "";
    document.getElementById("question-box").hidden = true;
}