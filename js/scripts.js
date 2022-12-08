var doc = window.document;

function lerTexto(texto) {
	var resultado = [];

	for (var i = 0; i < texto.length; i++) {
		if (texto[i].charCodeAt() >= 65 && texto[i].charCodeAt() <= 122) {
			if (texto[i].charCodeAt() < 97) {
				resultado[i] = texto[i].charCodeAt() - 65;
			} else {
				resultado[i] = texto[i].charCodeAt() - 97;
			}
		} else {
			return false;
		}
	}

	return resultado;
}

function processarChave(chaveNumerica, entradaNumerica) {
	var chaveNumericaFinal = [];

	if (chaveNumerica.length <= entradaNumerica.length) {
		for (var i = 0; i < entradaNumerica.length; i++) {
			chaveNumericaFinal[i] = chaveNumerica[i % chaveNumerica.length];
		}
	} else {
		alert("Erro! Informe uma chave menor ou uma entrada maior.");
	}

	return chaveNumericaFinal;
}

function vigenere(funcao) {
	var chave = doc.getElementById("texto_chave").value;
	var entrada = doc.getElementById("texto_entrada").value;

	var chaveNumerica = lerTexto(chave) ? chaveNumerica = lerTexto(chave) :
		alert("Erro ao ler chave! Informe apenas letras de A-Z.");
  
	var entradaNumerica = lerTexto(entrada) ? entradaNumerica = lerTexto(entrada) :
		alert("Erro ao ler entrada! Informe apenas letras de A-Z.");
);

	var chaveNumericaFinal = processarChave(chaveNumerica, entradaNumerica);

	var resultado = '';
	var resultadoNumerico = [];

	for (var i = 0; i < entradaNumerica.length; i++) {
		if (funcao == "E") {
			resultadoNumerico[i] = (entradaNumerica[i] + chaveNumericaFinal[i]) % 26;
		} else {
			resultadoNumerico[i] = ((entradaNumerica[i] - chaveNumericaFinal[i]) % 26) < 0 ?
				resultadoNumerico[i] = ((entradaNumerica[i] - chaveNumericaFinal[i]) % 26) + 26 :
				resultadoNumerico[i] = ((entradaNumerica[i] - chaveNumericaFinal[i]) % 26);
		}
		resultado += String.fromCharCode(resultadoNumerico[i] + 65);
	}



	doc.getElementById("saida").style.display = 'block';
	doc.getElementById("resultado").innerHTML = '<span id="texto_resultado">' + resultado + '</span>';
}