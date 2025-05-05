
const buttonNo = document.querySelector(".no");

function sendMessage(accepted) {
    if (accepted) {
        alert("Também te amo, minha princesa, fiz até um site pra vc! ❤️❤️❤️");
        return;
    }

    const computedStyle = window.getComputedStyle(buttonNo);

    if (computedStyle.position == "absolute") {
        buttonNo.style.position = "fixed";   
        buttonNo.style.right = "-123px";
    }
    else if (computedStyle.position == "fixed") {
        buttonNo.style.position = "absolute";   
        buttonNo.style.right = "-180px";
    }

}
