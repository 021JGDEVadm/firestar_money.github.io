const buttonNo = document.querySelector(".no");

function sendMessage(accepted) {
    if (accepted) {
        alert("Tbm te amo, minha princesa");
        return;
    }

    // Garante que o botão está fixo na tela
    buttonNo.style.position = "fixed";

    // Remove transform que pode estar centralizando
    buttonNo.style.transform = "none";

    // Pega tamanho do botão
    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;

    // Define limites da tela visível
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Gera posição aleatória
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplica posição
    buttonNo.style.left = `${randomX}px`;
    buttonNo.style.top = `${randomY}px`;
}
