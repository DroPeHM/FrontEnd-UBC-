
//Mudar o placeholder ao mudar a opção
function mudarPlaceholder() {
  const tipo = document.getElementById("tipo").value;
  const documento = document.getElementById("documento");
  
    if (tipo === "") {
    documento.disabled = true;
    documento.placeholder = "Escolha uma opção";
    documento.value = "";
    return;
  }

  documento.disabled = false;
  

  if (tipo === "CPF") {
    documento.placeholder = "Digite seu CPF";
  } else if (tipo === "CNPJ") {
    documento.placeholder = "Digite seu CNPJ";
  } else {
    ;
  }
}
//Máscara para CPF e CNPJ
documento.addEventListener("input", function () {
if (document.getElementById("tipo").value === "CPF") {
        valor = valor.substring(0, 11);
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    documento.value = valor;

if (document.getElementById("tipo").value === "CNPJ") {
        valor = valor.substring(0, 11);
        valor = valor.replace(/(\d{2})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1/$2");
        valor = valor.replace(/(\d{4})(\d)/, "$1.$2");
    }

    documento.value = valor;
});