const signUp = document.querySelector("#SignUp");
const logIn = document.querySelector("#LogIn");

if (signUp) signUp.addEventListener("click", () => {
  window.location.href = "signUp.html";
});

if (logIn) logIn.addEventListener("click", () => {
  window.location.href = "logIn.html";
});

const formulario = document.querySelector("#formulario");

if (formulario) {
  const campos = ["nome", "sobrenome", "aniversario", "email", "telephone", "tipo", "documento"];

  campos.forEach((id) => {
    const campo = document.getElementById(id);
    const valor = localStorage.getItem(id);
    if (campo && valor !== null) campo.value = valor;
  });

  if (typeof mudarPlaceholder === "function") mudarPlaceholder();

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    const dadosUsuario = {};
    campos.forEach((id) => {
      const campo = document.getElementById(id);
      if (campo) {
        localStorage.setItem(id, campo.value);
        dadosUsuario[id] = campo.value;
      }
    });

    localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));

    window.location.href = "password.html";
  });
}

const formSenha = document.querySelector("#formSenha");

if (formSenha) {
  formSenha.addEventListener("submit", (event) => {
    event.preventDefault();

    const campoSenha = document.getElementById("senha");
    const campoConfirmacao = document.getElementById("confirmation");

    campoSenha.disabled = false;
    campoConfirmacao.disabled = false;

    const senha = campoSenha.value;
    const confirmacao = campoConfirmacao.value;

    if (senha !== confirmacao) {
      alert("As senhas não são iguais.");
      campoConfirmacao.value = "";
      campoConfirmacao.focus();
      return;
    }

    const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

    if (!dadosUsuario || !dadosUsuario.email) {
      alert("Dados do cadastro não encontrados. Volte ao cadastro.");
      campoSenha.focus();
      return;
    }

    const usuario = {
      ...dadosUsuario,
      senha: senha
    };

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const emailExiste = usuarios.some((item) => item.email === usuario.email);

    if (emailExiste) {
      alert("Este e-mail já está cadastrado.");
      campoSenha.focus();
      return;
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "logIn.html";
  });
}
