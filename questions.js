var questions = [
    ["The capital of Denmark.", "This famous children’s toy originates from Denmark.", "This government is found in Denmark, as well as many other countries.", "The most common form of transportation in Denmark.", "Denmark belongs to this group of countries in Northern Europe.", "The Danes roll these down hills on easter."], // [1][1-6]
    ["Denmark is located in this hemisphere.", "This export from Denmark is commonly used as a medium for art, primarily on sidewalks.", "This people group originated from Denmark, as well as other Scandinavian countries.", "The group of countries on the Atlantic of which Denmark was a founding member.", "This flag has a red border and a white cross", "You can only fly this flag in Denmark according to Danish law."], // [2][1-6]
    ["This country shares a land border with Denmark.", "Denmark produces few of these gases.", "This is required in Denmark from ages 6 to 16.", "A group of people trying to take over the Danish government.", "This phenomenon causes the Danish climate to be less extreme.", "The Danes are into making pancakes with this alcoholic beverage."], // [3][1-6]
    ["The Danish terrain is very ___.", "Denmark exports these grains, commonly found in breakfast foods.", "The amount of people in an area, 137 people per kilometer in Denmark.", "Denmark is home to around 55 different species classified as this", "Denmark has 4 of these in it’s government.", "This animal is protected in Denmark according to Danish custom."], // [4][1-6]
    ["The Danish mainland  is located here.", "Denmark has little of this harmful substance.", "This statistic states that 99% of the Danish population can read.", "Denmark is one of the leading countries when it comes to reducing these things.", "The Danes ended the rule of the Monarchs with the signing of this document.", "When someone turns 25 in Denmark, their friends pull them into the street and cover them with this spice if they are single."], // [5][1-6]
];

var answers = [
    ["what is copenhagen?", "what is lego?", "what is a constitutional monarchy?", "what are bikes?", "what is scandinavia?", "what are eggs?"], // [1][1-6]
    ["what is the northern hemisphere?", "what is chalk?", "what are the vikings?", "what is nato?", "what is the danish flag?", "what is the flag of denmark?"], // [2][1-6]
    ["what is germany?", "what are greenhouse gases?", "what is education?", "what are anarchists?", "what is the gulf stream?", "what is beer?"], // [3][1-6]
    ["what is flat?", "what are cereal crops?", "what is population density?", "what are endangered species?", "what are political parties?", "what is the bat?"], // [4][1-6]
    ["what is the jutland peninsula?", "what is pollution?", "what is the literacy rate?", "what is pollution and greenhouse gases?", "what is the constitution of denmark?", "what is cinnamon?"], // [5][1-6]
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
        document.getElementById("getHints").hidden = false;
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
    document.getElementById("getHints").hidden = true;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}