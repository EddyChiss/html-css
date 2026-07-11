var nome = prompt("Qual é o seu nome? ").toLowerCase().trim()
var texto = document.querySelector("#NOME")



if (nome ===""){
				texto.innerHTML=`Olá desconhecido!`
}

else {
				texto.innerHTML=`Olá ${nome}!`
}



function verificar(){
				
				const anotext = document.querySelector("#ano")
				const chat = document.querySelector("#chat")
				
				const ano = Number(anotext.value)
				
				/*
				if (!ano){
								text.innerHTML="Nunhum ano foi digitado"
				}
				*/
				
				const usuario = document.createElement("div");
				usuario.classList.add("mensagem", "usuario");
				usuario.textContent = ano;
				chat.appendChild(usuario);
				
				const sistema = document.createElement("div");
				sistema.classList.add("mensagem", "sistema");
				
				if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 == 0)){
								sistema.textContent= ` O ano ${ano} é bissexto`;
				}
				else{
								sistema.textContent=` O ano ${ano} não é bissexto`;
				}
				chat.appendChild(sistema);
				anotext.value = "";
}

				
				
				
				
				