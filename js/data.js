var dataHoje = document.getElementById("data-hoje");

if (dataHoje) {
  var d = new Date();
  var dia = String(d.getDate()).padStart(2, "0");
  var mes = String(d.getMonth() + 1).padStart(2, "0");
  dataHoje.textContent = dia + "/" + mes + "/" + d.getFullYear();
}
