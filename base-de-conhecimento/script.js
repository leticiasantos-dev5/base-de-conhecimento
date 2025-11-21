let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    rederizarCards(dados);

}

function rederizarCards(dados) {
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p> <!-- O erro estava aqui, a propriedade correta é "descricao" sem o "ç" e o til. -->
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }

}
