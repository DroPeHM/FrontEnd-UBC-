//botão para mostrar a senha
const senha = document.querySelector("#senha");
const confirmacao = document.querySelector("#confirmation");
const botao = document.querySelector("#verSenha");

botao.addEventListener("click", () => {
  const oculto = senha.type === "password";
  const tipo = oculto ? "text" : "password";

  senha.type = tipo;
  confirmacao.type = tipo;

  botao.textContent = oculto
  if (oculto) {
    icone.src = "../img/olho-aberto.png";
    icone.alt = "Ocultar senha";
  } else {
    icone.src = "../img/olho-fechado.png";
    icone.alt = "Mostrar senha";
  }
});