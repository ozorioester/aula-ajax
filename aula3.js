function maiusculas()
{
  var input = document.getElementById("texto");
  var resultado = document.getElementById("resultado");

  var texto = input.value

  resultado.innerHTML = texto.toUpperCase();

  console.log(input, resultado);
}


function cidade()
{
  var cidade = document.getElementById("cidade");
  var lista = document.getElementById("lista");

  var novo = '<li>'+ cidade.value + '</li>';
  
  console.log(cidade, lista);

  lista.innerHTML += novo;

}
