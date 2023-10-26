// Data alvo da contagem regressiva (16/12/2023)
const targetDate = new Date('2023-12-16T07:10:00');

var phrases = [
    "52 Linha de teste 52",
    "51 Linha de teste 51",
    "50 Cantar parab�ns pro Bibi",
    "49 Participar de festa da Isabela",
    "48 Receber massagem da mam�e",
    "47 Petit gateau no Bart�",
    "46 N�o precisar fazer comida pra poder almo�ar",
    "45 Praia",
    "44 Conhecer minha casinha",
    "43 Comer strogonoff da mam�e",
    "42 Passear na Paulista",
    "41 Costurar na m�quina de costura",
    "40 O melhor brigadeiro do mundo",
    "39 Assistir Timmy com a mam�e",
    "38 Ir em brech�",
    "37 Picanha",
    "36 Ser chamada de baixinha pelo Bibi pessoalmente",
    "35 Abra�o de uuuuupaaaaa",
    "34 Spa",
    "33 Andar de carro",
    "32 Jogar pontinho",
    "31 Livantto",
    "30 Unha na J�",
    "29 Acordar no meu pertinho",
    "28 Coxinha",
    "27 Olhar pro lado esquerdo pra atravessar",
    "26 Chorar no aeroporto",
    "25 Melhor caf� da manh� com p�o franc�s",
    "24 Cabelinho cortadinho",
    "23 Ver�o",
    "22 P�o de queijo",
    "21 Bater corda pro Woodynho",
    "20 Detonar o Lucas no Coup",
    "19 Brasileiros que abra�am, beijam e falam alto",
    "18 Falar falar falar falar falar falar falar falar falar sem um telefone entre n�s",
    "17 Dormir no meu pertinho",
    "16 Bater palma pras apresenta��es da Isabela e gritar.. Isabela Isabela Isabela",
    "15 P�o na chapa",
    "14 Meu arm�rio � seu, seu arm�rio � meu",
    "13 Retardada",
    "12 Assistir Friends com a mam�e",
    "11 Museu do Ipiranga",
    "10 Dormir de m�o dada",
    "9 Caipirinha",
    "8 Sexta com Lulu",
    "7 Ter m�e fotografando todos seus momentos",
    "6 Fazer brownie pra mam�e",
    "5 Tatooooo",
    "4 Beijo de boa noite presencial",
    "3 Montinho na Lulu",
    "2 Abra�os e beijinhos e carinho sem ter fim que � pra acabar com esse neg�cio de voc� longe de mim",
    "1 Tu vens tu vens... Eu j� escuto teus sinais",
    "0 Lulu chegou!!!"
];

// Fun��o para calcular o tempo restante e atualizar a exibi��o
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        const countdownText = `Faltam ${days} dias, ${hours} horas e ${minutes} minutos para 16/12/2023.`;
        document.getElementById('countdown-text').textContent = countdownText;

        // Trocar a imagem a cada dia
        const currentDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;
        const imageContainer = document.getElementById('image-container');
        const dailyImage = document.getElementById('daily-image');
        dailyImage.src = `imagens/imagem${currentDay}.jpg`; // Substitua pelo caminho correto das suas imagens
        dailyImage.alt = `Imagem do Dia ${currentDay}`;

        // Exibir a frase do dia
        const dailyPhrase = document.getElementById('daily-phrase');
        dailyPhrase.textContent = phrases[currentDay - 1]; // Subtrai 1 para corresponder ao �ndice do array
    } else {
        document.getElementById('countdown-text').textContent = "Chegou o grande dia!";
    }
}

// Atualizar a contagem regressiva a cada minuto
updateCountdown();
setInterval(updateCountdown, 60000);