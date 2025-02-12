// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada

    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear os amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indiceAleatorio] === amigos[i]); // Garante que ninguém tire a si mesmo

        resultado.push(`${amigos[i]} -> ${sorteio[indiceAleatorio]}`);
        sorteio.splice(indiceAleatorio, 1);
    }

    mostrarResultado(resultado);
}

// Função para exibir o resultado na tela
function mostrarResultado(listaSorteio) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    listaSorteio.forEach(par => {
        let li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}