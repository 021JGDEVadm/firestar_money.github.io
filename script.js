const buttonNo = document.querySelector(".no");
let moved = false; // flag para saber se já fugiu

function sendMessage(accepted) {
    if (accepted) {
        alert("Também te amo, minha princesa, fiz até um site pra vc! ❤️❤️❤️");
        return;
    }

    if (!moved) {
        // Captura a posição atual absoluta na TELA
        const rect = buttonNo.getBoundingClientRect();

        // Torna o botão fixo, mas com a mesma posição visual inicial
        buttonNo.style.position = "fixed";
        buttonNo.style.left = `${rect.left}px`;
        buttonNo.style.top = `${rect.top}px`;
        buttonNo.style.right = "auto";
        buttonNo.style.transform = "none";
        moved = true;
    }

    // Evita que saia da tela
    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Gera nova posição aleatória
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplica nova posição
    buttonNo.style.left = `${randomX}px`;
    buttonNo.style.top = `${randomY}px`;
}
