// procura na página o lugar onde a data de hoje vai aparecer
var dataHoje = document.getElementById("data-hoje");

if (dataHoje) {
  // pega a data de hoje e monta o texto no formato dd/mm/aaaa
  var d = new Date();
  var dia = String(d.getDate()).padStart(2, "0");
  var mes = String(d.getMonth() + 1).padStart(2, "0");
  // escreve a data no lugar encontrado
  dataHoje.textContent = dia + "/" + mes + "/" + d.getFullYear();
}
