function ingresar() {
    // Get the checkbox
    var checkBox = document.getElementById("btnradio1");
    if (checkBox.checked == true){
        window.location.href = "cliente.html";
    } else {
      window.location.href = "admin.html";
    }
  }