const tarefas = []
const senhaDefault = "senha"

function adicionarTarefa() {
  const nome = document.getElementById("nome").value
  const data = document.getElementById("data").value
  const prioridade = document.getElementById("prioridade").value
  const descricao = document.getElementById("descricao").value
  const senha = document.getElementById("senha").value

  if (!validarTarefa(nome, data, prioridade, descricao, senha)) {
    return
  }
  
  const tarefa = {
    nome,
    data,
    prioridade,
    descricao,
    senha
  }
  tarefas.push(tarefa)
  console.log(tarefas)
  exibirTarefas()
}

function validarTarefa(nome, data, prioridade, descricao, senha) {
    if (nome === null || nome === "" || nome.length < 4) {
        alert("Nome incorreto, verifique se tem mais de 4 digitos e não está vazio.")
        return false
    }
    if (descricao === null || descricao === "") {
        alert("Descrição incorreta, verifique se ela não está vazia.")
        return false
    }
    if (senha !== senhaDefault || senha === "") {
        alert("Senha incorreta.")
        return false
      }
    
    if (data === null || data === "") {
        alert("Data inválida")
        return false
    }

    if (prioridade === null || prioridade === "") {
        alert("Prioridade inválida")
        return false
    } 
    return true
}

function removerTarefa() {
  tarefas.pop()
  exibirTarefas()
}

function exibirTarefas() {
  const tarefasDiv = document.getElementById("tarefas-display")
  tarefasDiv.innerHTML = "<p>Tarefas criadas: " + tarefas.length + "</p>"
  
  for (const tarefa of tarefas) {
    tarefasDiv.innerHTML += `<p>
      <strong>Nome:</strong> ${tarefa.nome} <br>
      <strong>Data de Vencimento:</strong> ${tarefa.data} <br>
      <strong>Prioridade:</strong> ${tarefa.prioridade} <br>
      <strong>Descrição:</strong> ${tarefa.descricao} <br><br>
    </p>`;
  }
}

exibirTarefas()