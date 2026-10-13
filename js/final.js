const abrirMenu = document.getElementById("abrirMenu");
const fecharMenu = document.getElementById("fecharMenu");
const barraLateral = document.getElementById("barraLateral");
const botaoSair = document.getElementById("sair");

if (abrirMenu && barraLateral) {
  abrirMenu.addEventListener("click", () => {
    barraLateral.classList.add("aberta");
  });
}

if (fecharMenu && barraLateral) {
  fecharMenu.addEventListener("click", () => {
    barraLateral.classList.remove("aberta");
  });
}

if (botaoSair) {
  botaoSair.addEventListener("click", () => {
    if (confirm("Deseja realmente sair?")) {
      localStorage.removeItem("usuarioAtual");
      window.location.href = "logIn.html";
    }
  });
}

const formLogin = document.getElementById("formLogin");

if (formLogin) {
  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    formLogin.querySelectorAll("input").forEach((campo) => {
      campo.disabled = false;
    });

    const email = document.getElementById("emailLogin").value.trim().toLowerCase();
    const senha = document.getElementById("senhaLogin").value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find((item) => item.email.toLowerCase() === email);

    if (!usuario) {
      alert("Usuário não existe.");
      document.getElementById("senhaLogin").value = "";
      document.getElementById("emailLogin").focus();
      return;
    }

    if (usuario.senha !== senha) {
      alert("Senha incorreta.");
      document.getElementById("senhaLogin").value = "";
      document.getElementById("senhaLogin").focus();
      return;
    }

    localStorage.setItem("usuarioAtual", JSON.stringify(usuario));
    window.location.href = "home.html";
  });
}
