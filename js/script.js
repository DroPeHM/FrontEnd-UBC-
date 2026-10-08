document.querySelector("#SignUp").addEventListener("click", () => {
  window.location.href = "signUp.html";
});
document.querySelector("#LogIn").addEventListener("click", () => {
  window.location.href = "logIn.html";
});

const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const tipo = document.querySelector("#tipo");
const documento = document.querySelector("#documento");

const data = document.querySelector("#data").value;
const [ano, mes, dia] = data.split("-");
console.log(`${dia}/${mes}/${ano}`);

formulario.addEventListener("submit", function(event){
  event.preventDefault();
  localStorage.setItem("dadosUsuario", JSON.stringify(dados));
  alert("Dados salvos!");
});

document.querySelector("#confirm").addEventListener("click", () => {
  window.location.href = "password.html";
});



  tipo.addEventListener("change", () => {
    const ehCpf = tipo.value === "cpf";
    documento.placeholder = ehCpf
      ? "Digite o CPF"
      : "Digite o CNPJ";
    documento.maxLength = ehCpf ? 14 : 18;
    documento.value = "";
  });
  

nome.value = localStorage.getItem("nome");
sobrenome.value = localStorage.getItem("sobrenome");
data_nasc.value = localStorage.getItem("aniversario");
telephone.value = localStorage.getItem("telephone");

/*Botão de ver a senha*/ 
const senha = document.querySelector("#passkey");
const confirmation = document.querySelector("#confirmation");
const checkbox = document.querySelector("#verSenha");

botao.addEventListener("click", () => {
  const visivel = senha.type === "text";

  senha.type = visivel ? "text" : "password";
  confirmation.type = visivel ? "text" : "password";
});