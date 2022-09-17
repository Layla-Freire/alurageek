function validaForm(frm) {
    if (frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 10 || frm.nome.value.lenght == 40) {
      alert("Por favor, escreva seu nome completo.")
      frm.name.focus();
      return false;
    }
    if (frm.mensagem.value == "" || frm.mensagem.value == null) {
      alert("Por favor, escreva uma mensagem.")
      frm.mensagem.focus();
      return false;
    }
}

