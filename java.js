// Interação com o nome
const nameElement = document.getElementById('name');

nameElement.addEventListener('mouseover', () => {
    nameElement.style.transform = 'translateX(10px)'; // Move para a direita
});

nameElement.addEventListener('mouseout', () => {
    nameElement.style.transform = 'translateX(0)'; // Volta ao normal
});

// Interação com o botão
const actionButton = document.getElementById('actionButton');
const hiddenMessage = document.getElementById('hiddenMessage');

actionButton.addEventListener('click', () => {
    hiddenMessage.classList.toggle('hidden'); // Exibe ou esconde a mensagem
});