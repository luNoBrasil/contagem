// Array com mensagens para cada dian
const messages = [
    "Cantar parabens pro Bibi",
    "Participar de festa da Isabela",
    "Receber massagem da mamae",
    "Petit gateau no Bart�",
    "N�o precisar fazer comida pra poder almo�ar",
    "Praia",
    "Conhecer minha casinha",
    "Comer strogonoff da mam�e",
    "Passear na Paulista",
    "Costurar na m�quina de costura",
    "O melhor brigadeiro do mundo",
    "Assistir Timmy com a mam�e",
    "Ir em brech�",
    "Picanha",
    "Ser chamada de baixinha pelo Bibi pessoalmente",
    "Abra�o de uuuuupaaaaa",
    "Spa",
    "Andar de carro",
    "Jogar pontinho",
    "Livantto",
    "Unha na J�",
    "Acordar no meu pertinho",
    "Coxinha",
    "Olhar pro lado esquerdo pra atravessar",
    "Chorar no aeroporto",
    "Melhor caf� da manh� com p�o franc�s",
    "Cabelinho cortadinho",
    "Ver�o",
    "P�o de queijo",
    "Bater corda pro Woodynho",
    "Detonar o Lucas no Coup",
    "Brasileiros que abra�am, beijam e falam alto",
    "Falar falar falar falar falar falar falar falar falar sem um telefone entre n�s",
    "Dormir no meu pertinho",
    "Bater palma pras apresenta��es da Isabela e gritar.. Isabela Isabela Isabela",
    "P�o na chapa",
    "Meu arm�rio � seu, seu arm�rio � meu",
    "Retardada",
    "Assistir Friends com a mam�e",
    "Museu do Ipiranga",
    "Dormir de m�o dada",
    "Caipirinha",
    "Sexta com Lulu",
    "Ter m�e fotografando todos seus momentos",
    "Fazer brownie pra mam�e",
    "Tatooooo",
    "Beijo de boa noite presencial",
    "Montinho na Lulu",
    "Abra�os e beijinhos e carinho sem ter fim que � pra acabar com esse neg�cio de voc� longe de mim",
    "Tu vens tu vens... Eu j� escuto teus sinais",
    "Lulu chegou!!!",
    
];

// Data e hora alvo
const targetDate = new Date("2023-12-16T07:10:00").getTime();

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

        const messageIndex = messages.length - days-1;
        const message = messages[messageIndex];

        countdownText.innerHTML = `Faltam ${days} dias ${hours} horas e ${minutes} minutos  para...<br> <br> <strong>${message}</strong> <br>`;

        // Adicione uma imagem com base no dia (certifique-se de que as imagens estejam na pasta 'imagens')
        const imageSrc = `imagens/imagem${messageIndex}.jpg`;
        const imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.style.maxWidth = "100%"; // A imagem ter� no m�ximo a largura da tela do celular
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    }
}

// Atualize a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chame a fun��o para iniciar a contagem regressiva
updateCountdown();
