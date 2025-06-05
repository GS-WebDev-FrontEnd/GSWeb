let imagens = [
  'src/assets/imagem1.jpg',
  'src/assets/imagem2.jpg',
  'src/assets/imagem3.jpg'
];

let i = 0;
let tempo = 3000;

function slideShow() { 
const heroSection = document.querySelector('.hero');
if (!heroSection) return; // <-- isso impede erro se não houver .hero

heroSection.style.backgroundImage = `url(${imagens[i]})`;
heroSection.style.backgroundSize = 'cover';
heroSection.style.backgroundPosition = 'center';

i = (i + 1) % imagens.length;
setTimeout(slideShow, tempo);
}

function toggleMenu() {
const menu = document.querySelector('.menu');
menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  slideShow();
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleMenu);
});

function mostrarMapaWindy() {
  const mapa = document.getElementById("windy-widget");
  mapa.style.display = "block";
  mapa.scrollIntoView({ behavior: "smooth" });
}

// funcao alerta
function exibirAlerta(mensagem) {
  const alertaDiv = document.getElementById("alerta-emergencia");
  alertaDiv.textContent = mensagem;
  alertaDiv.style.display = "block";
}

// Função para buscar e processar os dados do JSON
async function verificarSensores() {
  try {
    const resposta = await fetch("./src/data/status_sensores.json");
    const sensores = await resposta.json();

    sensores.forEach(sensor => {
      if (sensor.nivel >= 90) {
        exibirAlerta(`🚨 Alerta Crítico em ${sensor.Nome}: ${sensor.nivel}%`);
      } else if (sensor.nivel >= 70) {
        exibirAlerta(`⚠️ Atenção em ${sensor.Nome}: ${sensor.nivel}%`);
      }
    });

  } catch (erro) {
    console.error("Erro ao buscar dados dos sensores:", erro);
  }
}

// Verifica a cada 30 segundos
setInterval(verificarSensores, 30000);

// Verifica logo que carrega também
verificarSensores();

async function atualizarAlertas() {
  const respSensores = await fetch('./src/data/status_sensores.json');
  const sensores = await respSensores.json();

  sensores.forEach(sensor => {
    if (sensor.nivel >= 90) {
      exibirAlerta(`🚨 ALERTA CRÍTICO: ${sensor.Nome} com ${sensor.nivel}%`);
    }
  });
}

async function exibirLogSimulacao() {
  const respLog = await fetch('./src/data/log_simulacao.json');
  const logs = await respLog.json();
  const painelLog = document.getElementById('simulacao-log');
  painelLog.innerHTML = logs.map(log => `<p>${log}</p>`).join('');
}

setInterval(() => {
  atualizarAlertas();
  exibirLogSimulacao();
}, 30000);

document.addEventListener('DOMContentLoaded', () => {
  atualizarAlertas();
  exibirLogSimulacao();
});
