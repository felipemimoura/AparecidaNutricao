var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

//Informaçãoes do paciente
var pacientes = document.querySelectorAll('.paciente');
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  /* informação do Peso */
  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;
  /* informação da Altura */
  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  /* Calculo do imc */

  var tdImc = paciente.querySelector('.info-imc');

  /* Validação do dado */
  var pesoEhValido = validaPeso(peso);
  var alturaEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    console.log('Peso Invalido');
    pesoEhValido = false;
    tdImc.textContent = 'Peso Invalido';
    paciente.classList.add('paciente-invalido');
  }

  if (!alturaEhValido) {
    console.log('altura Invalido');
    alturaEhValido = false;
    tdImc.textContent = 'Altura Inválido';
    paciente.classList.add('paciente-invalido');
  }
  if (alturaEhValido && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
