const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    right: "4",
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    right: "4",
  },
  //   {
  //     category: "Science: Computers",
  //     type: "boolean",
  //     difficulty: "easy",
  //     question: "The logo for Snapchat is a Bell.",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //   },
  //   {
  //     category: "Science: Computers",
  //     type: "boolean",
  //     difficulty: "easy",
  //     question: "Pointers were not used in the original C programming language; they were added later on in C++.",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //   },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    right: "4",
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
    right: "4",
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    right: "4",
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    right: "4",
  },
  //   {
  //     category: "Science: Computers",
  //     type: "boolean",
  //     difficulty: "easy",
  //     question: "Linux was first created as an alternative to Windows XP.",
  //     correct_answer: "False",
  //     incorrect_answers: ["True"],
  //   },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    right: "4",
  },
];

let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

const quizSpace = document.getElementById("container");
const questionTitle = document.getElementById("questions-content");
const userScore = document.getElementById("user-points");
const totalScore = document.getElementById("total-points");
const answer1 = document.getElementById("option1");
const answer2 = document.getElementById("option2");
const answer3 = document.getElementById("option3");
const answer4 = document.getElementById("option4");
const next = document.getElementById("next");
const result = document.getElementById("result");
const allradios = document.querySelectorAll("input[name='option']");

totalScore.textContent = questions.length * 10;

const loadQuestion = function (questionIndex) {
  const questionTodisplay = questions[questionIndex];
  questionTitle.textContent = questionTodisplay.question;
  answer1.textContent = questionTodisplay.incorrect_answers[0];
  answer2.textContent = questionTodisplay.incorrect_answers[1];
  answer3.textContent = questionTodisplay.incorrect_answers[2];
  answer4.textContent = questionTodisplay.correct_answer;
};

const nextQuestion = function () {
  const selectRadio = document.querySelector("input[type=radio]:checked");
  if (!selectRadio) {
    alert("Please Select an answer");
  }

  const correctAnswer = selectRadio.value;
  if (correctAnswer === questions[currentQuestion].right) {
    score = score + 10;
    userScore.textContent = score;
  }
  selectRadio.checked = false;
  currentQuestion++;
  if (currentQuestion === totalQuestions - 1) {
    next.textContent = "Finish";
  }
  if (currentQuestion === totalQuestions) {
    quizSpace.style.display = "none";
    result.style.display = "block";
    result.textContent = "Bravo" + score;
  }

  loadQuestion(currentQuestion);
};

loadQuestion(currentQuestion);

next.addEventListener("click", nextQuestion);
