var nome_usuario = document.querySelector("#nome");
var email_usuario = document.querySelector("#email");

function next_page(){
    nome = String(nome_usuario.value)
    email = String(email_usuario.value)
    console.log(`Ola ${nome} o seu email é ${email}`);
}