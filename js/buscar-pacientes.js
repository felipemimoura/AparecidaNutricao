var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function () {
  console.log('busando pacientes');
  //buscando dados de API
  var xhr = new XMLHttpRequest();

  //qual soliticação vamos fazer e da onde
  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', function () {
    var erroAjax = document.querySelector('#erro-ajax');
    if (xhr.status == 200) {
      var resposta = xhr.responseText; //os dados vão chegar com string

      var pacientes = JSON.parse(resposta); //convertendo para array

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      erroAjax.classList.remove('invisivel');
    }
  });

  xhr.send();
});
