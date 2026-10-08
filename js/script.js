document.querySelector("#SignUp").addEventListener("click", () => {
  window.location.href = "signUp.html";
});
document.querySelector("#LogIn").addEventListener("click", () => {
  window.location.href = "logIn.html";
});

// LOCAL STORAGE
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");
const passkey = document.querySelector("#passkey")
const telephone = document.querySelector("#telephone");
const tipo = document.querySelector("#tipo");
const documento = document.querySelector("#documento");
const data = document.querySelector("#data").value;
const [dia, mes, ano] = data.split("-");
console.log(`${dia}/${mes}/${ano}`);

nome.value = localStorage.getItem("nome");
sobrenome.value = localStorage.getItem("sobrenome");
data_nasc.value = localStorage.getItem("aniversario");
telephone.value = localStorage.getItem("telephone");
email.value = localStorage.getItem("email");
passkey.value = localStorage.getItem("passkey");

//CONFIRMAR MUDA A PÁGINA
document.querySelector("#confirmation").addEventListener("click", () => {
window.location.href = "password.html";});

//CONFIRMAR SALVA DADOS
formulario.addEventListener("submit", function(event){
  event.preventDefault();
  localStorage.setItem("dadosUsuario", JSON.stringify(dados));
  alert("Dados salvos!");
});


  tipo.addEventListener("change", () => {
    const ehCpf = tipo.value === "cpf";
    documento.placeholder = ehCpf
      ? "Digite o CPF"
      : "Digite o CNPJ";
    documento.maxLength = ehCpf ? 14 : 18;
    documento.value = "";
  });
  

