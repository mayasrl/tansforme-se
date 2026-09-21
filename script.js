const slides = document.querySelectorAll(".slide");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
let indiceAtual = 0;

function mostrarSlide(indice) {
    slides.forEach((slide) => slide.classList.remove("ativo"));

    if (slides.length > 0) {
        slides[indice].classList.add("ativo");
    }
}

if (botaoProximo && botaoAnterior && slides.length > 0) {
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
}

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

const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

if (menuMobile && menu) {
    menuMobile.addEventListener("click", () => {
        menu.classList.toggle("aberto");
    });
}
