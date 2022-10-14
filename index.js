const truebtn = document.getElementById("true");
const resetbtn = document.getElementById("reset");
const nextbtn = document.getElementById("next");
const submitbtn = document.getElementById("submit");
let falsebtn;

const totalScore = document.getElementById("total-points");
const questionText = document.getElementById("questions-content");

let currentQuestion = 0;
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const startQuiz = function () {
  currentQuestion = Math.floor(Math.random() * 10);
  //   totalScore.innerText = currentQuestion;

  questionText.innerHTML = questions[currentQuestion].question;
  const quest = questions[currentQuestion].question;
  quest.classList.add("all-questions");
  truebtn.innerHTML = questions[currentQuestion].correct_answer;

  truebtn.addEventListener("onclick", function () {
    if (questions[currentQuestion].correct_answer === truebtn.innerHTML) {
      truebtn.innerHTML = "Correct Answer";
    }
    if (currentQuestion < 2) {
      nextQuestions();
    }
  });

  const incorectanswer = questions[currentQuestion].incorrect_answers;
  const falsebtn = document.createElement("button");
  for (let i = 0; i < incorectanswer.length; i++) {
    const buttonContain = document.getElementById("btn-options");
    buttonContain.appendChild(falsebtn);
    falsebtn.innerHTML = incorectanswer[i];

    falsebtn.addEventListener("onlick", function () {});
  }
};

// startQuiz();

const resetQuestions = function () {
  currentQuestion = 0;
  nextbtn.classList.remove("hide");
  submitbtn.classList.remove("hide");
  truebtn.classList.remove("hide");
  //   falsebtn.classList.remove("hide");

  startQuiz();
};

const nextQuestions = function () {
  currentQuestion = currentQuestion + 1;
  startQuiz();
};

const submitQuestions = function () {
  nextbtn.classList.remove("hide");
  submitbtn.classList.remove("hide");
  truebtn.classList.remove("hide");
  falsebtn.classList.remove("hide");
  questionText.innerHTML = "Thank You";
};

resetbtn.addEventListener("click", resetQuestions);
nextbtn.addEventListener("click", nextQuestions);
submitbtn.addEventListener("click", submitQuestions);