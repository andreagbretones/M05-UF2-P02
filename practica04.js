function inici() {
    var inputNombre = document.forms["formulari"]["inputNombre"];
    inputNombre.addEventListener("keypress", checkNombre, false);
    console.log("Soy Marc2");
}
function checkNombre(event) {
    var inputNombre = event.target;
    console.log(event.keyCode);
    console.log(inputNombre.value);
    checkNombreForm(inputNombre);
	console.log("Soy Andrea");
}
function checkNombreForm(inputNombre) {
    var span = inputNombre.nextElementSibling;
    if (inputNombre.value.length < 3 || inputNombre.value.length > 15) {
        //incorrecte
        span.innerHTML = "INCORRECTE!";
        return false;
    }
    else {
        //correcte
        span.innerHTML = "OK";
        return true;
		console.log("soy manpreet);
    }
}
function validaForm() {
    var inputNombre = document.forms["formulari"]["inputNombre"];
    var correcto = true;
    if (!checkNombreForm(inputNombre)) {
        correcto = false;
    }
    return correcto;
}
