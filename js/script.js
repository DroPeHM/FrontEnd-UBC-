document.querySelector("#SignUp").addEventListener("click", () => {
  window.location.href = "signUp.html";
});

const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const cep = document.querySelector("#cep");
const tipo = document.querySelector("#tipo");
  const documento = document.querySelector("#documento");

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
