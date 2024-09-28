document.addEventListener('DOMContentLoaded', function () {
  // Cada constante armazena o elemento correspondente
  const instructions = document.getElementById('instructions');
  const part1 = document.getElementById('part1');
  const part2 = document.getElementById('part2');
  const result = document.getElementById('result');
  const progrese = document.getElementById('progresuo');
  const temperamentDetails = document.getElementById('temperament-details');

  // remover css hidden para tornar o elemento visível em instrucions
  progrese.classList.add('hidden');
  instructions.classList.remove('hidden');

  // evento ao usuário clicar no botão, as instruções são ocultadas e a primeira parte do conteúdo é exibida.
  document.getElementById('start-part1').addEventListener('click', function () {
      
      instructions.classList.add('hidden');
      progrese.classList.remove('hidden');
      part1.classList.remove('hidden');
  });
  
  // ao clicar no elemento 'submit-part1', a primeira parte do conteúdo é ocultada, e a segunda parte é exibida.
  document.getElementById('submit-part1').addEventListener('click', function () {
      const part1Inputs = part1.querySelectorAll('input');
      const numInputs = part1Inputs.length;
      let numMarkedInputs = 0; 
      
      part1Inputs.forEach((input) => {
          if (input.checked) { 
              numMarkedInputs++;
          }
      });
      
      if (numMarkedInputs >= numInputs / 2) { 
          part1.classList.add('hidden');
          part2.classList.remove('hidden');
      } else {
          alert('Por favor responda todas as questões :D');
      }
  });
  
  // segunda parte do teste é exibida
  document.getElementById('submit-part2').addEventListener('click', function () {
      const part2Inputs = part2.querySelectorAll('input'); 
      const numInputs = part2Inputs.length; 
      let numMarkedInputs = 0; 
      
      part2Inputs.forEach((input) => {
          if (input.checked) {
              numMarkedInputs++;
          }
      });
      
      if (numMarkedInputs >= numInputs / 2) { 
          part2.classList.add('hidden');
          result.classList.remove('hidden');
          progrese.classList.add('hidden');
          showResult();
      } else {
          alert('Por favor responda todas as questões :D');
      }
  });
  
  // teste finalizado vodika agua de coco
  document.getElementById('finish-test').addEventListener('click', function () {
      alert('Teste finalizado.');
      location.reload();
  });

    function showResult() {
        // Contadores para as respostas da Parte 1 e Parte 2
        let countA1 = 0, countB1 = 0;
        let countA2 = 0, countB2 = 0;

        // Verifica as respostas da Primeira Parte
        for (let i = 1; i <= 19; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA1++;
            } else if (answer && answer.value === 'B') {
                countB1++;
            }
        }

        // Verifica as respostas da Segunda Parte
        for (let i = 20; i <= 32; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA2++;
            } else if (answer && answer.value === 'B') {
                countB2++;
            }
        }

        // Determina o temperamento
        let temperament = '';

        if (countA1 > countB1 && countA2 > countB2) {
            temperament = "Sanguíneo";
        } else if (countA1 > countB1 && countB2 > countA2) {
            temperament = "Colérico";
        } else if (countB1 > countA1 && countA2 > countB2) {
            temperament = "Fleumático";
        } else if (countB1 > countA1 && countB2 > countA2) {
            temperament = "Melancólico";
        }

        // Exibe o resultado
        switch (temperament) {
          case 'Sanguíneo':
            temperamentDetails.innerHTML = '<h3>Você é Sanguíneo.</h3><p>O temperamento sanguíneo é caracterizado por sua sociabilidade, entusiasmo e expressividade emocional. Essas características tornam as pessoas sanguíneas ótimas comunicadoras e amigas leais, capazes de lidar com opiniões divergentes de forma leve e natural.</p>';

            break;
          case 'Colérico':
            temperamentDetails.innerHTML = '<h3>Você é Colérico.</h3><p>O temperamento colérico é caracterizado por liderança, determinação e emoções intensas. Embora possam ser desafiadores nas interações sociais devido à sua franqueza e impulsividade, os coléricos também têm o potencial de motivar e inspirar aqueles ao seu redor a alcançar grandes feitos.</p>';
            break;
          case 'Melancólico':
            temperamentDetails.innerHTML = '<h3>Você é Melancólico.</h3><p>O temperamento melancólico é marcado por uma combinação de sensibilidade emocional, profundidade de pensamento e uma busca constante pela perfeição. Embora esses traços possam levar a desafios como a procrastinação e o isolamento, eles também conferem uma rica capacidade criativa e analítica.</p>';
            break;
          case 'Fleumático':
            temperamentDetails.innerHTML = '<h3>Você é Fleumático.</h3><p>O temperamento fleumático é marcado por uma combinação de calma, paciência e empatia. Embora possam enfrentar desafios como a apatia e a dificuldade em tomar decisões, sua habilidade de manter a serenidade em situações difíceis os torna valiosos como amigos e mediadores em conflitos.</p>';
            break;
          default:
            temperamentDetails.innerHTML = '<p>Temperamento não identificado.</p>';
            break;
        }

        let params = {
        particleCount: 500, 
        spread: 90, 
        startVelocity: 70, 
        origin: { x: 0, y: 0.5 }, 
        angle: 45 
    };
      let meuSom = document.getElementById("meuSom");

      meuSom.play();
      
      confetti(params);

      params.origin.x = 1;
      params.angle = 135;
      confetti(params);


}


});

const questionsPart1 = document.querySelectorAll('#questions-part1 div');
const questionsPart2 = document.querySelectorAll('#questions-part2 div');

// Função para verificar se a questão é par ou ímpar
function addClassBasedOnQuestionNumber(question) {
  const questionNumber = parseInt(question.textContent.match(/Questão (\d+)/)[1]);
  if (questionNumber % 2 === 0) {
    question.classList.add('par');
  } else {
    question.classList.add('impar');
  }
}

// Chamar a função para cada questão
questionsPart1.forEach(addClassBasedOnQuestionNumber);
questionsPart2.forEach(addClassBasedOnQuestionNumber);

const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const questions = document.querySelectorAll('input[type="radio"]');

let answeredQuestions = 0;
let answeredQuestionsArray = [];

questions.forEach(question => {
  question.addEventListener('change', () => {
    const questionId = question.name;
    if (!answeredQuestionsArray.includes(questionId)) {
      answeredQuestions++;
      answeredQuestionsArray.push(questionId);
    }
    const progress = (answeredQuestions / 31) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${answeredQuestions}/31`;
  });
});

// Selecione todos os containers de perguntas e radios saudade da visa quando era só andar de bicicleta e jogar laranja podre nos carros 
const questionsPart1e = document.querySelectorAll('#questions-part1 > div');
const radiosPart1 = document.querySelectorAll('#questions-part1 input[type="radio"]');
const questionsPart2e = document.querySelectorAll('#questions-part2 > div');
const radiosPart2 = document.querySelectorAll('#questions-part2 input[type="radio"]');

// Função para lidar com a mudança de radio
function handleRadioChange(questions, radios) {
  radios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      questions.forEach((question) => {
        question.style.opacity = 0.5;
      });
      const selectedRadio = e.target;
      selectedRadio.style.opacity = 1;
      const nextQuestion = selectedRadio.parentNode.parentNode.nextElementSibling;
      if (nextQuestion) {
        nextQuestion.style.opacity = 1;
        nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

document.getElementById('submit-part1').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('questions-part2').scrollIntoView({ top: 0, behavior: 'smooth' });
});


handleRadioChange(questionsPart1e, radiosPart1);
handleRadioChange(questionsPart2e, radiosPart2);




//acabo ebaaaaaaaaaaaaaaaaaaaa
