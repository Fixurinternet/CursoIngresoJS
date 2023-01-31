/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNumero
	let segundoNumero 
	let resultado

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerNumero + segundoNumero

	alert("La suma es " + resultado);
}

function restar()
{
	let primerNumero
	let segundoNumero 
	let resultado

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = primerNumero - segundoNumero

	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	let primerNumero
	let segundoNumero
	let resultado 

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = primerNumero * segundoNumero

	alert("La multiplicacion es " + resultado);
}

function dividir()
{
	let primerNumero
	let segundoNumero 
	let resultado

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = primerNumero / segundoNumero

	alert("La division es " + resultado);
}

