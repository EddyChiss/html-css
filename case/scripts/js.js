var nome = prompt("Qual é o seu nome? ");
var texto = document.querySelector("#NOME");

let name = nome.trim();
let naame = name.toLowerCase();

if (naame == "eddy"){
				texto.innerHTML= `criador`
}
else{
				texto.innerHTML= `bosta`
}