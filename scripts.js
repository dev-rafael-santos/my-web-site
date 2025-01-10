function AplicativoPadraoEmail() {
    var mailtoLink = "mailto:rafaelantonio18@hotmail.com.br";
    window.location.href = mailtoLink;
}

function openModal(src) {
document.getElementById("modal").style.display = "flex"; // Mostra o modal
document.getElementById("modalImg").src = src; // Define a imagem no modal
}

function closeModal() {
document.getElementById("modal").style.display = "none"; // Esconde o modal
}