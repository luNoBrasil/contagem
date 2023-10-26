// Array com mensagens para cada dian
const messages = [
    "Cantar parabens pro Bibi",
    "Participar de festa da Isabela",
    "Receber massagem da mamae",
    "Petit gateau no Bartô",
    "Não precisar fazer comida pra poder almoçar",
    "Praia",
    "Conhecer minha casinha",
    "Comer strogonoff da mamãe",
    "Passear na Paulista",
    "Costurar na máquina de costura",
    "O melhor brigadeiro do mundo",
    "Assistir Timmy com a mamãe",
    "Ir em brechó",
    "Picanha",
    "Ser chamada de baixinha pelo Bibi pessoalmente",
    "Abraço de uuuuupaaaaa",
    "Spa",
    "Andar de carro",
    "Jogar pontinho",
    "Livantto",
    "Unha na Jô",
    "Acordar no meu pertinho",
    "Coxinha",
    "Olhar pro lado esquerdo pra atravessar",
    "Chorar no aeroporto",
    "Melhor café da manhã com pão francês",
    "Cabelinho cortadinho",
    "Verão",
    "Pão de queijo",
    "Bater corda pro Woodynho",
    "Detonar o Lucas no Coup",
    "Brasileiros que abraçam, beijam e falam alto",
    "Falar falar falar falar falar falar falar falar falar sem um telefone entre nós",
    "Dormir no meu pertinho",
    "Bater palma pras apresentações da Isabela e gritar.. Isabela Isabela Isabela",
    "Pão na chapa",
    "Meu armário é seu, seu armário é meu",
    "Retardada",
    "Assistir Friends com a mamãe",
    "Museu do Ipiranga",
    "Dormir de mão dada",
    "Caipirinha",
    "Sexta com Lulu",
    "Ter mãe fotografando todos seus momentos",
    "Fazer brownie pra mamãe",
    "Tatooooo",
    "Beijo de boa noite presencial",
    "Montinho na Lulu",
    "Abraços e beijinhos e carinho sem ter fim que é pra acabar com esse negócio de você longe de mim",
    "Tu vens tu vens... Eu já escuto teus sinais",
    "Lulu chegou!!!",
    
];

// Data e hora alvo
const targetDate = new Date("2023-12-16T07:10:00").getTime();

// Elementos do DOM
const countdownText = document.getElementById("countdown-text");
const imageContainer = document.getElementById("image-container");

// Função para atualizar a contagem regressiva
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
        imageElement.style.maxWidth = "100%"; // A imagem terá no máximo a largura da tela do celular
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    }
}

// Atualize a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chame a função para iniciar a contagem regressiva
updateCountdown();
