function insert(num) {
	var numero = document.getElementById('resultado').innerHTML;

	let regexSinais = new RegExp(/[\+\-\*\/]$/); //É colocado em uma variavel os sinais que n pode repetir
	const ultimoCaractereSinal = regexSinais.test(numero.slice(-1)); //Coloca o ultimo valor digitado menos uma casa
	const valorDigitadoSinal = regexSinais.test(num);    
	
	if (!ultimoCaractereSinal || !valorDigitadoSinal) {
	  if (numero == "*" || numero == "-" || numero == "+" || numero == "/") {
		numero = "";
	  }
	  numero += num;
	  console.log(num);
	  console.log(ultimoCaractereSinal);
	  console.log(numero);
	}
	document.getElementById('resultado').innerHTML = numero;
}	


function clean() {
	document.getElementById('resultado').innerHTML = "";
}
function back() {
	var resultado = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
	var resultado = document.getElementById('resultado').innerHTML;
	if (resultado) {
		document.getElementById('resultado').innerHTML = eval(resultado);
	}
	else {
		document.getElementById('resultado').innerHTML = "Nada..."
	}
}
