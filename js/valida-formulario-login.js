function validaLogin(frm) {
    
    if (frm.login.value == "" || frm.login.value == null || frm.login.value.indexOf("@") == -1 || frm.login.value.indexOf(".") == -1){
      alert("Por favor, escreva seu e-mail corretamente.")
      frm.email.focus();
      return false;
    }
    if (frm.senha.value == "" || frm.senha.value == null) {
      alert("Por favor, escreva uma senha.")
      frm.mensagem.focus();
      return false;
    }
  }