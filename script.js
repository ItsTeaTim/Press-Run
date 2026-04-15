const stages = [
  "File Setup",
  "Prepress",
  "Plate Making",
  "Ink Setup",
  "Offset Press",
  "Finishing"
];

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const feedbackSection = document.getElementById("feedback-section");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const scoreDisplay = document.getElementById("score");
const streakDisplay = document.getElementById("streak");
const stageLabel = document.getElementById("stage-label");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const pointsEarned = document.getElementById("points-earned");

const resultTitle = document.getElementById("result-title");
const finalScoreText = document.getElementById("final-score-text");
const finalMessage = document.getElementById("final-message");

const paperIcon = document.getElementById("paper-icon");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let correctAnswers = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", restartGame);

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  streak = 0;
  correctAnswers = 0;

  updateScoreDisplay();
  buildGameQuestions();

  startScreen.classList.remove("active");
  startScreen.classList.add("hidden");

  resultsScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  gameScreen.classList.add("active");

  feedbackSection.classList.add("hidden");

  movePaperIcon(currentQuestionIndex);
  loadQuestion();
}

function buildGameQuestions() {
  questions = stages.map((stage) => {
    const stageQuestions = questionBank[stage];
    const randomIndex = Math.floor(Math.random() * stageQuestions.length);

    return {
      stage: stage,
      ...stageQuestions[randomIndex]
    };
  });
  console.log("=== New Game Questions ===");
  questions.forEach((q, i) => {
    console.log(`${i + 1}. ${q.stage} -> ${q.question}`);
  });
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const shuffledChoices = shuffleArray(currentQuestion.choices);

  console.log("Stage:", currentQuestion.stage);
  console.log("Original choices:", currentQuestion.choices);
  console.log("Shuffled choices:", shuffledChoices);

  stageLabel.textContent = `Stage ${currentQuestionIndex + 1}: ${currentQuestion.stage}`;
  questionText.textContent = currentQuestion.question;

  answerButtons.innerHTML = "";

  shuffledChoices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => handleAnswer(choice, button));
    answerButtons.appendChild(button);
  });

  answerButtons.classList.remove("hidden");
  feedbackSection.classList.add("hidden");
}

function handleAnswer(selectedChoice, button) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedChoice === currentQuestion.correctAnswer;

  let earnedPoints = 0;

  if (isCorrect) {
    streak++;
    correctAnswers++;
    earnedPoints = 100 * Math.pow(2, streak - 1);
    score += earnedPoints;

    feedbackTitle.textContent = "Correct!";
    feedbackText.textContent = currentQuestion.explanation;
    pointsEarned.textContent = `+${earnedPoints} points`;
  } else {
    streak = 0;

    feedbackTitle.textContent = "Incorrect";
    feedbackText.textContent = `Correct answer: ${currentQuestion.correctAnswer}. ${currentQuestion.explanation}`;
    pointsEarned.textContent = `+0 points`;
  }

  updateScoreDisplay();

  button.style.backgroundColor = isCorrect ? "#22C55E" : "#EF4444";

  setTimeout(() => {
    answerButtons.classList.add("hidden");
    feedbackSection.classList.remove("hidden");
  }, 400);
}

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    movePaperIcon(currentQuestionIndex);
    loadQuestion();
  } else {
    showResults();
  }
}

function updateScoreDisplay() {
  scoreDisplay.textContent = score;
  streakDisplay.textContent = streak;
}

function movePaperIcon(stageIndex) {
  const stageMarkers = document.querySelectorAll(".stage-marker");

  if (stageMarkers.length === 0 || stageIndex >= stageMarkers.length) return;

  const targetMarker = stageMarkers[stageIndex];
  paperIcon.style.left = `${targetMarker.offsetLeft + targetMarker.offsetWidth / 2 - 12}px`;
}

function showResults() {
  gameScreen.classList.remove("active");
  gameScreen.classList.add("hidden");

  resultsScreen.classList.remove("hidden");
  resultsScreen.classList.add("active");

  finalScoreText.textContent = `Final Score: ${score}`;

  if (correctAnswers === questions.length) {
    resultTitle.textContent = "Perfect Print!";
    finalMessage.textContent = "You ran a flawless print job from setup to finishing!";
  } else if (correctAnswers >= 4) {
    resultTitle.textContent = "Strong Press Run";
    finalMessage.textContent = "A few issues showed up, but the print job turned out well overall!";
  } else if (correctAnswers >= 2) {
    resultTitle.textContent = "Usable but Flawed";
    finalMessage.textContent = "The job made it through, but several production mistakes hurt the result.";
  } else {
    resultTitle.textContent = "Press Breakdown";
    finalMessage.textContent = "This print run ran into major issues. Time for another pass...";
  }
}

function restartGame() {
  resultsScreen.classList.remove("active");
  resultsScreen.classList.add("hidden");

  startScreen.classList.remove("hidden");
  startScreen.classList.add("active");
}