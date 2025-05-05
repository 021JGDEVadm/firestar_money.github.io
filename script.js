const buttonNo = document.querySelector(".no");
let moved = false; // flag para saber se já fugiu

function sendMessage(accepted) {
    if (accepted) {
        alert("Também te amo, minha princesa, fiz até um site pra vc! ❤️❤️❤️");
        return;
    }

    // Primeira vez: troca para posição fixa e tira do container
    if (!moved) {
        moved = true;
        buttonNo.style.position = "fixed";
        buttonNo.style.right = "auto"; // remove o right
        buttonNo.style.left = `${buttonNo.getBoundingClientRect().left}px`; // mantém a posição atual
        buttonNo.style.top = `${buttonNo.getBoundingClientRect().top}px`;
        buttonNo.style.transform = "none";
    }

    // Define limites da tela visível
    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Gera posição aleatória
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplica nova posição
    buttonNo.style.left = `${randomX}px`;
    buttonNo.style.top = `${randomY}px`;
}
