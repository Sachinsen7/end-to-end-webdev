document.addEventListener("DOMContentLoaded", () => {
  const FIXED_MARKS = 2;
  const quiz = [
    {
      question: " What is the capital of Canada?",
      choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: "Ottawa",
      marks: 2,
    },
    {
      question: " Which movie features the quote, 'I'm the king of the world?'",
      choices: ["Titanic", "The Lion King", "Avatar", "Braveheart"],
      answer: "Titanic",
      marks: 2,
    },
    {
      question: "Who directed the movie Inception?",
      choices: [
        "Christopher Nolan",
        "Steven Spielberg",
        "James Cameron",
        "Quentin Tarantino",
      ],
      answer: "Christopher Nolan",
      marks: 2,
    },
    {
      question: "What is the chemical symbol for gold?",
      choices: ["Ag", "Au", "Gd", "Pt"],
      answer: "Au",
      marks: 2,
    },
    {
      question: "What is the boiling point of water at sea level?",
      choices: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C",
      marks: 2,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      choices: [
        "Charles Dickens",
        "William Shakespeare",
        "Leo Tolstoy",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 2,
    },
    {
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      answer: "Mitochondria",
      marks: 2,
    },
    {
      question:
        "In which country is it a tradition to eat 12 grapes at midnight for good luck?",
      choices: ["Italy", "Spain", "Brazil", "Greece"],
      answer: "Spain",
      marks: 2,
    },
    {
      question:
        "Which country celebrates the Lunar New Year with dragon and lion dances?",
      choices: ["Japan", "China", "Thailand", "Vietnam"],
      answer: "China",
      marks: 2,
    },
    {
      question: "Which movie franchise features the character 'Jack Sparrow'?",
      choices: [
        "Harry Potter",
        "The Lord of the Rings",
        "Pirates of the Caribbean",
        " Star Wars",
      ],
      answer: "Pirates of the Caribbean",
      marks: 2,
    },
  ];

  let answerQuiz = JSON.parse(localStorage.getItem("Quiz")) || [];

  const startBtn = document.getElementById("start-quiz");
  const questionContainer = document.getElementById("quiz-container");
  const restartQuiz = document.getElementById("restart-btn");
  const nxtButton = document.getElementById("next-btn");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const nextButton = document.getElementById("nxt-btn");
  const previousBtn = document.getElementById("previous-btn");
  const submitButton = document.getElementById("submit-btn");
  const quizDescription = document.getElementById("quiz-description");
  const startQuizContainer = document.getElementById("start-screen");

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
      showQuestion();
      previousBtn.classList.remove("hidden");
    } else {
      nextButton.classList.add("hidden");
      submitButton.classList.remove("hidden");
      showResult();
    }

    localStorageMethod();
  });

  quizDescription.classList.remove("hidden");

  previousBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();

      if (currentQuestionIndex === 0) {
        previousBtn.classList.add("hidden");
      }
      submitButton.classList.add("hidden");
      nextButton.classList.remove("hidden");
    }
  });

  submitButton.addEventListener("click", showResult);

  function startQuiz() {
    console.log("startQuiz called");
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    questionText.classList.remove("hidden");
    restartQuiz.classList.add("hidden");

    quizDescription.classList.add("hidden");
    currentQuestionIndex = 0;

    showQuestion();

    localStorageMethod();
  }

  function showQuestion() {
    console.log("showquestion called");
    nextButton.classList.remove("hidden");
    // previousBtn.classList.remove("hidden");

    questionContainer.classList.remove("hidden");
    questionText.classList.remove("hidden");

    console.log("Current question index:", currentQuestionIndex);
    console.log("Quiz array:", quiz);

    questionText.textContent = `${currentQuestionIndex + 1}. ${
      quiz[currentQuestionIndex].question
    }`;
    choicesList.innerHTML = ""; //clear previous question

    quiz[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(li, choice));
      choicesList.appendChild(li);
    });

    if (currentQuestionIndex === 0) {
      previousBtn.classList.add("hidden");
    } else {
      previousBtn.classList.remove("hidden");
    }

    if (currentQuestionIndex === quiz.length - 1) {
      nextButton.classList.add("hidden");
      submitButton.classList.remove("hidden");
    } else {
      nextButton.classList.remove("hidden");
      submitButton.classList.add("hidden");
    }

    localStorageMethod();
  }

  function selectAnswer(li, choice) {
    Array.from(choicesList.children).forEach((item) => {
      setTimeout(() => {
        item.classList.add("disabled");
        item.style.pointerEvents = "none";
      }, 500);
    });

    li.classList.add("selected");
    const correctAnswer = quiz[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score += FIXED_MARKS;
      li.style.backgroundColor = "green";
    } else {
      li.classList.add("unselected");
      li.style.backgroundColor = "red";
    }

    answerQuiz[currentQuestionIndex] = choice;
    setTimeout(() => {
      // nextButton.classList.remove("hidden");
      previousBtn.classList.remove("hidden");
    }, 500);

    localStorageMethod();
  }

  restartQuiz.classList.add("hidden");

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    const totalMarks = quiz.length * FIXED_MARKS;
    scoreDisplay.textContent = `Your Score: ${score} out of ${totalMarks}`;

    restartQuiz.classList.remove("hidden");

    localStorageMethod();
  }

  restartQuiz.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();

    localStorageMethod();
  });

  function localStorageMethod() {
    const quizState = { currentQuestionIndex, score };
    localStorage.setItem("Quiz", JSON.stringify(quizState));
  }

  window.addEventListener("load", () => {
    const savedState = JSON.parse(localStorage.getItem("Quiz"));
    if (savedState) {
      currentQuestionIndex = savedState.currentQuestionIndex;
      score = savedState.score;
      console.log("Loaded from local storage", savedState);
      showQuestion();
      startQuizContainer.classList.add("hidden");
      questionContainer.classList.remove("hidden");
    }
  });
});
