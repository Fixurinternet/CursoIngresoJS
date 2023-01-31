/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe
	let resultado
	let importeConDescuento

	importe = parseInt(document.getElementById("txtIdImporte").value);

	resultado = importe * 25 / 100 

	importeConDescuento = importe - resultado

	document.getElementById("txtIdResultado").value = importeConDescuento;

	}
