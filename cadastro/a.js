var nome = document.querySelector("#nome");
var idade = document.querySelector("#idade");

var table_nome = document.querySelector("#t_nome");
var table_idade = document.querySelector("#t_idade");

var nomes = "";
var idades = "";

function submeter(){
  nomes = String(nome.value);
  idades = Number(idade.value);

  nome.value = "";
  idade.value = "";
  nome.focus();
}

function resultado(){
  table_nome.textContent = nomes;
  table_idade.textContent = idades;
}