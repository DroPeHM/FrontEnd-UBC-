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
data.value = localStorage.getItem("aniversario");
telephone.value = localStorage.getItem("telephone");
email.value = localStorage.getItem("email");
passkey.value = localStorage.getItem("passkey");


//CONFIRMA MUDA HTML E SALVA OS DADOS NO LOCAL STORAGE
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
      nome: document.getElementById("nome").value,
      data: document.getElementById("data").value
    };
    localStorage.setItem("dadosUsuario", JSON.stringify(dados));
    window.location.href = "home.html";
  });

form.addEventListener("submit", (event) => {
  if (nome.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o nome.");
  }
  if (sobrenome.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o sobrenome.");
  }
  if (email.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o email.");
  }
  if (telephone.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o Telefone.");
  }
  if (tipo.value.trim() === "") {
    event.preventDefault();
    alert("Escolha um tipo de documento.");
  }
  if (documento.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o documento.");
  }
  if (data.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o documento.");
  }
  if (passkey.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o documento.");
  }
  if (documento.value.trim() === "") {
    event.preventDefault();
    alert("Preencha o documento.");
  }
});

