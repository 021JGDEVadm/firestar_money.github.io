const buttonNo = document.querySelector(".no");

function sendMessage(accepted) {
    if (accepted) {
        alert("Tbm te amo, minha princesa");
        return;
    }

    // Garante que o botão esteja 'fixed' e usa posições definidas
    buttonNo.style.position = "fixed";

    // Pega a posição atual do botão (usando getBoundingClientRect)
    const rect = buttonNo.getBoundingClientRect();
    let currentX = rect.left;
    let currentY = rect.top;

    // Pega o tamanho do botão
    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;

    // Define limites da tela visível
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Gera posições aleatórias
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Velocidade do movimento
    const speed = 2; // Quanto maior o número, mais rápido o botão vai

    function moveButton() {
        // Calcula a direção e a distância até a posição final
        const deltaX = randomX - currentX;
        const deltaY = randomY - currentY;

        // Se o botão já chegou na posição final, para o movimento
        if (Math.abs(deltaX) < speed && Math.abs(deltaY) < speed) {
            buttonNo.style.left = `${randomX}px`;
            buttonNo.style.top = `${randomY}px`;
            return;
        }

        // Move o botão em direção à posição aleatória
        currentX += Math.sign(deltaX) * speed;
        currentY += Math.sign(deltaY) * speed;

        // Atualiza a posição do botão
        buttonNo.style.left = `${currentX}px`;
        buttonNo.style.top = `${currentY}px`;

        // Chama a função novamente para continuar o movimento
        requestAnimationFrame(moveButton);
    }

    // Inicia o movimento
    moveButton();
}
