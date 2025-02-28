const questions = [
  {
    img: "./assets/kucing.jpg",
    question: "kucing",
  },
  {
    img: "./assets/jeruk.png",
    question: "jeruk",
  },
  {
    img: "./assets/anggur.jpg",
    question: "anggur",
  },
  {
    img: "./assets/kelapa.jpg",
    question: "kelapa",
  },
  {
    img: "./assets/strawberry.png",
    question: "strawberry",
  },
];

const imageEl = document.querySelector("figure img");
const inputAnswer = document.querySelector(".input-answer");
const questionEl = document.querySelector(".question");
let isCorrect = false;
const answerIndicator = document.querySelector(".answer-indicator");

const generateQuestion = () => {
  const getRandom = Math.floor(Math.random() * questions.length);

  return {
    question: questions[getRandom].question,
    image: questions[getRandom].img,
  };
};

answerIndicator.innerText = "";

const result = generateQuestion();

const hideString = (string) => {
  if (string.length <= 2) return string;

  const getFirstString = string.substring(0, 1);
  const getLastString = string.substring(string.length - 1);
  const decoration = "_".repeat(string.length - 2);

  return getFirstString + decoration + getLastString;
};

if (Object.keys(result).length) {
  imageEl.src = result.image;
  questionEl.innerText = hideString(result.question);
}

inputAnswer.addEventListener("input", () => {
  if (inputAnswer.value === result.question) {
    answerIndicator.innerText = "benar!";
    inputAnswer.value = "";
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else {
    if (inputAnswer.value.length === result.question.length) {
      answerIndicator.innerText = "salah!";
    } else {
      answerIndicator.innerText = "";
    }
  }
});
