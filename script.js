const slides = document.querySelectorAll(".slide");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
let indiceAtual = 0;

function mostrarSlide(indice) {
    slides.forEach((slide) => slide.classList.remove("ativo"));
    slides[indice].classList.add("ativo");
}

botaoProximo.addEventListener("click", () => {
    indiceAtual++;
    if (indiceAtual >= slides.length) {
        indiceAtual = 0;
    }
    mostrarSlide(indiceAtual);
});

botaoAnterior.addEventListener("click", () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = slides.length - 1;
    }
    mostrarSlide(indiceAtual);
});

setInterval(() => {
    indiceAtual++;
    if (indiceAtual >= slides.length) {
        indiceAtual = 0;
    }
    mostrarSlide(indiceAtual);
}, 5000);

const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
        const resposta = pergunta.nextElementSibling;
        const aberta = resposta.style.display === "block";

    document.querySelectorAll(".faq-resposta").forEach((item) => {
        item.style.display = "none";
    });

    if (!aberta) {
        resposta.style.display = "block";
    }
    });
});