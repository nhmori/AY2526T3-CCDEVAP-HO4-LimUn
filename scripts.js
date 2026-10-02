let num1, num2, operator, correctAnswer; 
let score = 0;

const operators = ["+", "-", "*"]

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    operator = operators[Math.floor(Math.random() * operators.length)];

    switch (operator) {
        case "+":
            correctAnswer = num1 + num2;
            break;
        case "-":
            correctAnswer = num1 - num2;
            break;
        case "*":
            correctAnswer = num1 * num2;
            break;
    }
    document.getElementById("question").innerText = `${num1} ${operator} ${num2} = ?`;
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const messageDiv = document.getElementById("message");
    const userAnswer = parseInt(answerInput.value);

    if (answerInput.value === "") {
        messageDiv.innerText = "Please enter an answer.";
        messageDiv.style.color = "red";
        return;
    }

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
        messageDiv.innerText = "Correct!";
        messageDiv.style.color = "green"

        if (score == 5) {
            document.getElementById("div-questions").style.display = "none";
            document.getElementById("div-success").style.display = "block";
        } else {
            generateQuestion();
        } 
    } else {
        messageDiv.innerText = "Incorrect. Try again!";
        messageDiv.style.color = "red";
    }

    answerInput.value = "";
}

function playAgain() {
    score = 0;
    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("message").innerText = "";
    document.getElementById("answer").value = "";

    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";

    generateQuestion();
}

document.getElementById("answer").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

generateQuestion();
