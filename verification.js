const senha = document.querySelector("#senha");
const confirmacao = document.querySelector("#confirmation");
const botao = document.querySelector("#verSenha");
const icone = document.querySelector("#iconeSenha");

if (botao && senha && confirmacao) {
  botao.addEventListener("click", () => {
    const mostrar = senha.type === "password";

    senha.type = mostrar ? "text" : "password";
    confirmacao.type = mostrar ? "text" : "password";

    if (icone) {
      icone.src = mostrar ? "../img/eye.svg" : "../img/eye-closed.svg";
      icone.alt = mostrar ? "Ocultar senha" : "Mostrar senha";
    }
  });
}
