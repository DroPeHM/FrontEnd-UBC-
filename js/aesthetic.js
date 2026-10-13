function mudarPlaceholder() {
  const tipo = document.getElementById("tipo");
  const documento = document.getElementById("documento");
  if (!tipo || !documento) return;

  documento.disabled = tipo.value === "";
  documento.placeholder = tipo.value === "CPF"
    ? "Digite seu CPF"
    : tipo.value === "CNPJ" ? "Digite seu CNPJ" : "Escolha uma opção";

  if (tipo.value === "") documento.value = "";
}

function mascaraDocumento(valor, tipo) {
  const numeros = valor.replace(/\D/g, "");

  if (tipo === "CPF") {
    return numeros.substring(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  if (tipo === "CNPJ") {
    return numeros.substring(0, 14)
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }

  return numeros;
}

function mascaraTelefone(valor) {
  return valor.replace(/\D/g, "").substring(0, 11)
    .replace(/(\d{2})(\d)/, "$1 $2")
    .replace(/(\d{5})(\d)/, "$1 $2");
}

const tipoDocumento = document.getElementById("tipo");
const documento = document.getElementById("documento");
const telefone = document.getElementById("telephone");

