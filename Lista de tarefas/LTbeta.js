    let tarefa = document.querySelector(".InputTarefa");
    let table = document.getElementById("Tabela");
    let descricao = document.querySelector(".TextDescricao");
    let botaoCriar = document.querySelector(".BotaoCriarTabela");

    function add(){
        let linha = document.createElement("tr");
        let tituloTarefa = document.createElement("th");
        let tituloDescricao = document.createElement("th");
        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";

        tituloTarefa.innerHTML = tarefa.value;
        tituloDescricao.innerHTML = descricao.value;

        linha.appendChild(tituloTarefa);
        linha.appendChild(tituloDescricao);
        linha.appendChild(botaoExcluir);

        table.appendChild(linha);

        botaoExcluir.addEventListener("click", function() {
            linha.remove();
        });        
    }
    botaoCriar.addEventListener("click" , add);