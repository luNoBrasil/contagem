// Array com mensagens para cada dian
const messages = [
    "Sua missao comeca hoje...",
    "Cantar parabens pro Bibi",
    "Participar de festa da Isabela",
    "Receber massagem da mamae",
    "Petit gateau no Bart�",
    "Nao precisar fazer comida pra poder almo�ar",
    "Praia",
    "Conhecer nossa casinha",
    "Comer strogonoff da mamae",
    "Passear na Paulista",
    "Costurar na maquina de costura",
    "O melhor brigadeiro do mundo",
    "Assistir Timmy com a mam�e",
    "Ir em brech�",
    "Picanha",
    "Ser chamada de baixinha pelo Bibi pessoalmente",
    "Abra�o de uuuuupaaaaa",

    
];

// Data e hora alvo
const targetDate = new Date("2024-04-15T07:10:00").getTime();

// Elementos do DOM
const countdownText = document.getElementById("countdown-text");
const imageContainer = document.getElementById("image-container");

// Fun��o para atualizar a contagem regressiva
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        countdownText.innerHTML = "Chegou o grande DIAAAA!!!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        const messageIndex = messages.length - days-2;
        const message = messages[messageIndex];

        countdownText.innerHTML = `Faltam ${days} dias ${hours} horas e ${minutes} minutos  para...<br> <br> <strong>${message}</strong> <br>`;

        // Adicione uma imagem com base no dia (certifique-se de que as imagens estejam na pasta 'imagens')
        const imageSrc = `imagens/imagem${messageIndex}.jpeg`;
        const imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.style.maxWidth = "93%"; // A imagem ter� no m�ximo a largura da tela do celular
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    }
}

// Atualize a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chame a fun��o para iniciar a contagem regressiva
updateCountdown();
