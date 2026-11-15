// guarda os elementos do formulário que o script vai usar
var campoData = document.getElementById("data");
var avisoData = document.getElementById("aviso-data");
var horarios = document.querySelectorAll('input[name="horario"]');

// devolve a data de hoje no formato aaaa-mm-dd, que o campo de data entende
function hoje() {
  var d = new Date();
  var mes = String(d.getMonth() + 1).padStart(2, "0");
  var dia = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + mes + "-" + dia;
}

// ajusta os horários conforme o dia: domingo fechado e sábado com horário menor
function atualizarHorarios() {
  // descobre o dia da semana da data escolhida (0 é domingo e 6 é sábado)
  var diaSemana = null;
  if (campoData.value !== "") {
    diaSemana = new Date(campoData.value + "T00:00:00").getDay();
  }

  // guarda se o dia escolhido é domingo ou sábado
  var domingo = diaSemana === 0;
  var sabado = diaSemana === 6;

  // no domingo mostra o aviso e impede o envio do formulário
  if (domingo) {
    avisoData.textContent = "A clínica não abre aos domingos. Escolha outro dia.";
    campoData.setCustomValidity("Escolha um dia de segunda a sábado.");
  } else {
    avisoData.textContent = "";
    campoData.setCustomValidity("");
  }

  // passa por todos os horários e bloqueia os que não podem ser escolhidos
  for (var i = 0; i < horarios.length; i++) {
    var h = horarios[i];
    // sábado só abre das 8h às 12h e domingo fica tudo fechado
    var fechado = domingo || (sabado && (h.value < "08:00" || h.value >= "12:00"));
    // bloqueia o horário se já está ocupado ou se a clínica está fechada
    h.disabled = h.hasAttribute("data-ocupado") || fechado;
    // horário bloqueado não pode continuar marcado
    if (h.disabled) {
      h.checked = false;
    }
  }
}

// não deixa escolher uma data que já passou
campoData.min = hoje();
// quando o cliente muda a data, os horários são calculados de novo
campoData.addEventListener("change", atualizarHorarios);
// roda uma vez ao abrir a página, para os horários já começarem certos
atualizarHorarios();
