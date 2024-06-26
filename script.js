// Array com mensagens para cada dian
const messages = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
];

// Data e hora alvo
const targetDate = new Date("2024-04-15T03:00:00").getTime();

// Elementos do DOM
const countdownText = document.getElementById("countdown-text");
const imageContainer = document.getElementById("image-container");

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        countdownText.innerHTML = "Bem vinda.. ótimo retorno, minha estrela!!!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        const messageIndex = messages.length - days-2;
        const message = messages[messageIndex];

        countdownText.innerHTML = `Faltam ${days} dias ${hours} horas e ${minutes} minutos  para minha estrela voltar<br> <br> <strong>${message}</strong> <br>`;

        // Adicione uma imagem com base no dia (certifique-se de que as imagens estejam na pasta 'imagens')
        const imageSrc = `imagens/imagem${messageIndex}.jpg`;
        const imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.style.maxWidth = "93%"; // A imagem terá no máximo a largura da tela do celular
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    }
}

// Atualize a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chame a função para iniciar a contagem regressiva
updateCountdown();
