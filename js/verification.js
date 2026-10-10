//botão para mostrar a senha
const senha = document.querySelector("#senha");
const confirmacao = document.querySelector("#confirmation");
const botao = document.querySelector("#verSenha");
const icone = document.querySelector("#iconeSenha")
botao.addEventListener("click", () => {
  const oculto = senha.type === "password";
  const tipo = oculto ? "text" : "password";

  senha.type = tipo;
  confirmacao.type = tipo;

  if (oculto) {
    icone.src = "../img/eye.svg";
    icone.alt = "Ocultar senha";
  } else {
    icone.src = "../img/eye-closed.svg";
    icone.alt = "Mostrar senha";
  }
});

//VERIFICADOR DE IGUALDADE DAS SENHAS
const formulario = document.querySelector("#formSenha");

formulario.addEventListener("submit", (event) => {
  if (senha.value !== confirmacao.value) {
    event.preventDefault();
    alert("As senhas não coincidem.");
    confirmacao.focus();
    return;
  }

  window.location.href = "home.html";
});