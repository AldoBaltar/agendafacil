var campoData = document.getElementById("data");
var avisoData = document.getElementById("aviso-data");
var horarios = document.querySelectorAll('input[name="horario"]');

function hoje() {
  var d = new Date();
  var mes = String(d.getMonth() + 1).padStart(2, "0");
  var dia = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + mes + "-" + dia;
}

function atualizarHorarios() {
  var diaSemana = null;
  if (campoData.value !== "") {
    diaSemana = new Date(campoData.value + "T00:00:00").getDay();
  }

  var domingo = diaSemana === 0;
  var sabado = diaSemana === 6;

  if (domingo) {
    avisoData.textContent = "A clínica não abre aos domingos. Escolha outro dia.";
    campoData.setCustomValidity("Escolha um dia de segunda a sábado.");
  } else {
    avisoData.textContent = "";
    campoData.setCustomValidity("");
  }

  for (var i = 0; i < horarios.length; i++) {
    var h = horarios[i];
    var fechado = domingo || (sabado && (h.value < "08:00" || h.value >= "12:00"));
    h.disabled = h.hasAttribute("data-ocupado") || fechado;
    if (h.disabled) {
      h.checked = false;
    }
  }
}

campoData.min = hoje();
campoData.addEventListener("change", atualizarHorarios);
atualizarHorarios();
