  'use strict';

  let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'netflix', 'status': 'checked'},
    {'tarefa': 'teste', 'status': 'checked'}
  ];

  const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo-item');
    item.innerHTML = `
      <input type="checkbox" ${status}>
      <div>${tarefa}</div>
      <input type="button" value="X">
    `;
    document.getElementById('todoList').appendChild(item);
  }

const limparTarefas = () => {
  const todoList = document.getElementById('todoList');
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild)
  }
}

const atualizarTela = () => {
  limparTarefas();
  banco.forEach (item => criarItem (item.tarefa, item.status)); // vai percorrer todo o array, item a item
}

const inserirItem = (evento) => {
  const tecla = evento.key;
  const texto = evento.target.value;
  if (tecla === 'Enter') {
    banco.push ({'tarefa': texto, 'status': ''})
    atualizarTela();
    evento.target.value = '' //Limpar a tarefa
  }
}

document.getElementById('novoItem').addEventListener('keypress', inserirItem);

atualizarTela();