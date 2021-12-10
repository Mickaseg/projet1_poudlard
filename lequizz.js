
class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Le plus beau compliment pour vous", ["Tu es le css de mon html", "Trop balaise", "Tu as la patience de bouddha", "Tu es un seigneur"], "tu es le css demon html", "Tu as la patience de bouddha"),
    new Question("Quel est votre projet", ["Dominer le monde pardi", "Devenir un grand sorcier du dev", "Avoir un robot domestique", "Avoir un fauteuil massant"], "Devenir un grand sorcier du dev"),
    new Question("Vous n'aimez pas vraiment", ["Patienter", "Prendre des intiatives", "Chercher", "Abandonner"], "Abandonner"),
    new Question("Quel est votre animal favori", ["Le serpent", "Le blaireau", "Le lion", "L'aigle"], "Le lion"),
    new Question("Quel votre plus grand defaut", ["Je suis trop curieux, Curieuse","Je suis peureux", "Je suis un peut naif", "Je suis radin"], "Je suis trop curieux, Curieuse"),
    new Question("Quel pouvoir vous fait rever", ["Imperium","Crac badaboum","Allohomora","Crache limace"], "Allohomora"),
    new Question("Quelle est votre couleur favorite", ["Or","vert", "Le marron", "Bleu"], "Le doré")
  ];
  
  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>les jeux sont fait le choixpeau vous attends</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  
  console.log(quiz);
  