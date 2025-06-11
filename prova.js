let tarefas = [];
let contador = 0;

while(true){
    let usuario = prompt("Lista de tarefas:\n 1: Adicionar tarefas,\n 2: Listar tarefas,\n 3:Excluir tarefas, \n 4:Marcar concluida,\n 5:Sair");
        if (usuario == "1"){
            let adicionar = prompt("Informe a tarefa:");
            let status = prompt("Informe se a tarefa está concluida ou pendente:")
            let texto = `${contador++} : ${adicionar} - ${status} `
            if(adicionar === ""){
                alert("Campo de terefas vazio.")
            }else{
                tarefas.push(texto);
                alert("Tarefa adicionada com sucesso!"); }}
        else if (usuario == "2"){
            if(tarefas.length === 0){
                alert("Lista de tarefas vazia." )
            }else{
                alert(`{${tarefas.join('\n')}`)}
            }
        else if (usuario == "3"){
            let remover = prompt("Informe a posição da tarefa: ");
            if (remover === ""){
                alert("Informe a quantidade.");
            }else{tarefas.splice(remover,1)
                alert("Tarefa removida com sucesso!");}}
        else if(usuario == "4"){
            let posição_tarefa = prompt("Informe a posição da tarefa:");
            let posicao = Number(posição_tarefa);
                if(posição_tarefa === ""){
                    alert("Informe uma posição válida.");
                }else{
                    let modificar = prompt("Concluida ou pendente:");
                    let partes = tarefas[posicao].split("-");
                    tarefas[posicao] = `${partes[0]} - ${modificar}`
                    alert("Tarefa modificada com sucesso!");
                }}
        else if(usuario == "5"){
            alert("Programa finalizado.");
            break
        }
                
            }