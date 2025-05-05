const buttonNo = document.querySelector(".no");

function sendMessage(accepted) {
    if (accepted) {
        alert("Também te amo, minha princesa, fiz até um site pra vc! ❤️❤️❤️");
        return;
    }


    // Define a posição como 'fixed' para garantir que se mova pela viewport
    buttonNo.style.position = "fixed";

    // Garante que o botão tem largura e altura corretas
    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;

    // Calcula posições máximas com base no tamanho da tela e do botão
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Gera posições aleatórias dentro desses limites
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplica as novas posições
    buttonNo.style.left = `${randomX}px`;
    buttonNo.style.top = `${randomY}px`;
}
