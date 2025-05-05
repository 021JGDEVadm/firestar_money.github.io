const buttonNo = document.querySelector(".no");

function sendMessage(accepted) {
    if (accepted) {
        alert("Tbm te amo, minha princesa");
        return;
    }

    // Garante que o botão esteja 'fixed' e usa posições definidas
    buttonNo.style.position = "fixed";

    // Pega o tamanho do botão
    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;

    // Posições iniciais, caso o botão não tenha sido movido antes
    const currentX = parseInt(buttonNo.style.left || window.innerWidth / 2 - buttonWidth / 2);
    const currentY = parseInt(buttonNo.style.top || window.innerHeight / 2 - buttonHeight / 2);

    // Define limites da tela visível
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Gera posições aleatórias
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Velocidade do movimento
    const speed = 5; // Quanto maior o número, mais rápido o botão vai

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
