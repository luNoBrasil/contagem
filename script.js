// Data alvo da contagem regressiva (16/12/2023)
const targetDate = new Date('2023-12-16T07:10:00');

var phrases = [
    "52 Linha de teste 52",
    "51 Linha de teste 51",
    "50 Cantar parabéns pro Bibi",
    "49 Participar de festa da Isabela",
    "48 Receber massagem da mamãe",
    "47 Petit gateau no Bartô",
    "46 Não precisar fazer comida pra poder almoçar",
    "45 Praia",
    "44 Conhecer minha casinha",
    "43 Comer strogonoff da mamãe",
    "42 Passear na Paulista",
    "41 Costurar na máquina de costura",
    "40 O melhor brigadeiro do mundo",
    "39 Assistir Timmy com a mamãe",
    "38 Ir em brechó",
    "37 Picanha",
    "36 Ser chamada de baixinha pelo Bibi pessoalmente",
    "35 Abraço de uuuuupaaaaa",
    "34 Spa",
    "33 Andar de carro",
    "32 Jogar pontinho",
    "31 Livantto",
    "30 Unha na Jô",
    "29 Acordar no meu pertinho",
    "28 Coxinha",
    "27 Olhar pro lado esquerdo pra atravessar",
    "26 Chorar no aeroporto",
    "25 Melhor café da manhã com pão francês",
    "24 Cabelinho cortadinho",
    "23 Verão",
    "22 Pão de queijo",
    "21 Bater corda pro Woodynho",
    "20 Detonar o Lucas no Coup",
    "19 Brasileiros que abraçam, beijam e falam alto",
    "18 Falar falar falar falar falar falar falar falar falar sem um telefone entre nós",
    "17 Dormir no meu pertinho",
    "16 Bater palma pras apresentações da Isabela e gritar.. Isabela Isabela Isabela",
    "15 Pão na chapa",
    "14 Meu armário é seu, seu armário é meu",
    "13 Retardada",
    "12 Assistir Friends com a mamãe",
    "11 Museu do Ipiranga",
    "10 Dormir de mão dada",
    "9 Caipirinha",
    "8 Sexta com Lulu",
    "7 Ter mãe fotografando todos seus momentos",
    "6 Fazer brownie pra mamãe",
    "5 Tatooooo",
    "4 Beijo de boa noite presencial",
    "3 Montinho na Lulu",
    "2 Abraços e beijinhos e carinho sem ter fim que é pra acabar com esse negócio de você longe de mim",
    "1 Tu vens tu vens... Eu já escuto teus sinais",
    "0 Lulu chegou!!!"
];

// Função para calcular o tempo restante e atualizar a exibição
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
        dailyPhrase.textContent = phrases[currentDay - 1]; // Subtrai 1 para corresponder ao índice do array
    } else {
        document.getElementById('countdown-text').textContent = "Chegou o grande dia!";
    }
}

// Atualizar a contagem regressiva a cada minuto
updateCountdown();
setInterval(updateCountdown, 60000);