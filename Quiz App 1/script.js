const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame);

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

nextButton.addEventListener('click', () => {
   currentQuestionIndex++;
   setNextQuestion(); 
})

let shuffleQuestions, currentQuestionIndex;

function startGame() {
    console.log('game has been started');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    shuffleQuestions = questions.sort(()=> Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);   
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
    else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    nextButton.classList.remove('hide');
}

function setStatusClass(element,correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong'); 
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]