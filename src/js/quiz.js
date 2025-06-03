const questions = [
    {
        question: "O que fazer durante uma enchente?",
        answers: [
            { id: 1, text: "Permanecer em um local seguro", correct: true },
            { id: 2, text: "Nadar na correnteza", correct: false },
            { id: 3, text: "Ficar olhando", correct: false },
            { id: 4, text: "Ficar perto da rede elética", correct: false },
        ]
    },
    {
        question: "Por que é importante não entupir os bueiros com lixo?",
        answers: [
            { id: 1, text: "Para evitar o mau cheiro", correct: false },
            { id: 2, text: "Para a água da chuva escoar corretamente e evitar alagamentos", correct: true },
            { id: 3, text: "Para evitar poluição do ar", correct: false },
            { id: 4, text: "Para economizar energia elétrica", correct: false },
        ]
    },
    {
        question: "Que tipo de sistema ajuda a controlar o excesso de água da chuva nas cidades?",
        answers: [
            { id: 1, text: "Usinas nucleares", correct: false },
            { id: 2, text: "Semáforos inteligentes", correct: false },
            { id: 3, text: "Redes de esgoto", correct: false },
            { id: 4, text: "Sistemas de drenagem pluvial", correct: true },
        ]
    },
    {
        question: "Qual destas atitudes ajuda a prevenir enchentes?",
        answers: [
            { id: 1, text: " Jogar lixo na rua", correct: false },
            { id: 2, text: "Concretar todo o quintal", correct: false },
            { id: 3, text: "Plantar árvores e manter áreas verdes", correct: true },
            { id: 4, text: "Construir casas em encostas", correct: false },
        ]
    },
    {
        question: "O que devemos fazer ao receber um aviso de risco de enchente da Defesa Civil?",
        answers: [
            { id: 1, text: "Ignorar e continuar a rotina normalmente", correct: false },
            { id: 2, text: "Esperar a água chegar para decidir o que fazer", correct: false },
            { id: 3, text: "Seguir as orientações, procurar abrigo seguro e ajudar vizinhos que precisam", correct: true },
            { id: 4, text: "Usar eletrodomésticos rapidamente antes que a energia acabe", correct: false },
        ]
    },
    {
        question: "Qual das opções abaixo é uma causa comum de enchentes nas cidades?",
        answers: [
            { id: 1, text: "Plantio de árvores", correct: false },
            { id: 2, text: "Asfalto e concreto que impedem a absorção da água pelo solo", correct: true },
            { id: 3, text: "Construção de parques", correct: false },
            { id: 4, text: "Ventos fortes", correct: false },
        ]
    },
    {
        question: "Em caso de risco de deslizamento de terra, qual é o procedimento correto?",
        answers: [
            { id: 1, text: "Permanecer em casa até a chuva passar", correct: false },
            { id: 2, text: "Esperar um aviso final antes de agir", correct: false },
            { id: 3, text: " Se esconder em áreas baixas", correct: false },
            { id: 4, text: "Sair imediatamente e buscar abrigo em local seguro", correct: true },
        ]
    },
    {
        question: "Quais são os riscos à saúde após uma enchente?",
        answers: [
            { id: 1, text: "Doenças como leptospirose, hepatite e diarreia devido à água contaminada", correct: true },
            { id: 2, text: "Cansaço físico apenas", correct: false },
            { id: 3, text: "Apenas risco de gripe", correct: false },
            { id: 4, text: "Nenhum, a água é limpa", correct: false },
        ]
    },
    {
        question: "Se você estiver em casa e começar a chover forte, o que é prudente fazer?",
        answers: [
            { id: 1, text: "Acompanhar os avisos da Defesa Civil e observar sinais de alagamento ou deslizamento", correct: true },
            { id: 2, text: "Dormir tranquilo sem se preocupar", correct: false },
            { id: 3, text: "Abrir todas as portas para a água sair", correct: false },
            { id: 4, text: "Ignorar, pois a chuva logo passa", correct: false },
        ]
    },
    {
        question: "Por que é importante a participação da comunidade na prevenção de enchentes?",
        answers: [
            { id: 1, text: "Porque é obrigação apenas da prefeitura", correct: false },
            { id: 2, text: "Porque quanto mais lixo, mais água acumula", correct: false },
            { id: 3, text: " Porque juntos podemos adotar práticas como não jogar lixo nas ruas, limpar terrenos e cobrar melhorias", correct: true },
            { id: 4, text: "Não é importante, só os bombeiros resolvem", correct: false },
        ]
    },
]
 
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
 
let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}
 
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn")
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}
 
function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
 
function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}
 
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
 
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
 
startQuiz();