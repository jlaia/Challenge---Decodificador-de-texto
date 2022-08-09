//e --> enter//
//i --> imes//
//a --> ai//
//o --> ober//
//u --> ufat//

function criptografar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var txtCriptografado = texto.replace(/e/, "enter");
	var txtCriptografado = txtCriptografado.replace(/i/, "imes");
	var txtCriptografado = txtCriptografado.replace(/a/, "ai");
	var txtCriptografado = txtCriptografado.replace(/o/, "ober");
	var txtCriptografado = txtCriptografado.replace(/u/, "ufat");

	document.getElementById("imgRight").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCriptografado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function desencriptografar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var txtCriptografado = texto.replace(/enter/, "e");
	var txtCriptografado = txtCriptografado.replace(/imes/, "i");
	var txtCriptografado = txtCriptografado.replace(/ai/, "a");
	var txtCriptografado = txtCriptografado.replace(/ober/, "o");
	var txtCriptografado = txtCriptografado.replace(/ufat/, "u");

	document.getElementById("imgRight").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCriptografado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}
function copy(){
	var conteudo = document.querySelector("#texto2");
	conteudo.select();
	document.execCommand("copy");
	alert("Copiado");
}