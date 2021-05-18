var questions = [
    ["The capital of Denmark.", "This famous children’s toy originates from Denmark.", "This government is found in Denmark, as well as many other countries.", "", "", ""], // [1][1-6]
    ["Denmark is located in this hemisphere.", "This export from Denmark is commonly used as a medium for art, primarily on sidewalks.", "This people group originated from Denmark, as well as other Scandinavian countries.", "", "", ""], // [2][1-6]
    ["This country shares a land border with Denmark.", "Denmark produces few of these gases.", "This is required in Denmark from ages 6 to 16.", "", "", ""], // [3][1-6]
    ["The Danish terrain is very ___.", "Denmark exports these grains, commonly found in breakfast foods.", "The amount of people in an area, 137 people per kilometer in Denmark.", "", "", ""], // [4][1-6]
    ["The Danish mainland  is located here.", "Denmark has little of this harmful substance.", "This statistic states that 99% of the Danish population can read.", "", "", ""], // [5][1-6]
];

var answers = [
    ["what is copenhagen?", "what is lego?", "what is a constitutional monarchy?", "", "", ""], // [1][1-6]
    ["what is the northern hemisphere?", "what is chalk?", "what are the vikings?", "", "", ""], // [2][1-6]
    ["what is germany?", "what are greenhouse gases?", "what is education?", "", "", ""], // [3][1-6]
    ["what is flat?", "what are cereal crops?", "what is population density?", "", "", ""], // [4][1-6]
    ["what is the jutland peninsula?", "what is pollution?", "what is the literacy rate?", "", "", ""], // [5][1-6]
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
        document.getElementById("board").hidden = true;
        globalValue = value;
        globalCategory = category;
        console.log(questions[value][category]);
        document.getElementById("question").innerHTML = questions[value][category].toUpperCase();
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
    document.getElementById("hints").hidden = true;
    document.getElementById("board").hidden = false;
}

function getHints() {
    document.getElementById("hint1").innerHTML = answers[getRandomInt(0, 4)][getRandomInt(0, 5)];
    document.getElementById("hint2").innerHTML = answers[getRandomInt(0, 4)][getRandomInt(0, 5)];
    document.getElementById("hint3").innerHTML = answers[getRandomInt(0, 4)][getRandomInt(0, 5)];
    document.getElementById("hint4").innerHTML = answers[getRandomInt(0, 4)][getRandomInt(0, 5)];
    document.getElementById("hint"+getRandomInt(1, 4)).innerHTML = answers[globalValue][globalCategory];
    document.getElementById("hints").hidden = false;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}