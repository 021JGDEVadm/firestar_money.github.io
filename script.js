const buttonNo = document.querySelector(".no");

function sendMessage(accepted) {
    if (accepted) {
        alert("Tbm te amo, minha princesa");
        return;
    }

    // Garante que o botão tenha posição 'absolute' ou 'fixed'
    buttonNo.style.position = "fixed";

    // Tamanho da tela visível
    const maxWidth = window.innerWidth - buttonNo.offsetWidth;
    const maxHeight = window.innerHeight - buttonNo.offsetHeight;

    // Gera posições aleatórias dentro dos limites da tela
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Aplica as posições
    buttonNo.style.left = `${randomX}px`;
    buttonNo.style.top = `${randomY}px`;
}
