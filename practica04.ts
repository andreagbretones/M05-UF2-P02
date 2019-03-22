
function inici() {
    let inputNombre = <HTMLInputElement>document.forms["formulari"]["inputNombre"];
    inputNombre.addEventListener("keypress",checkNombre,false);
}
function checkNombre(event){
    let inputNombre =<HTMLInputElement>event.target;
     
    console.log(event.keyCode);
    console.log(inputNombre.value);
    checkNombreForm(inputNombre);
    console.log("Hola Andrea")
}
function checkNombreForm(inputNombre){
    let span = inputNombre.nextElementSibling;

    if(inputNombre.value.length<3 || inputNombre.value.length>15){
        //incorrecte
        span.innerHTML="INCORRECTE!";
        return false;
    }else{
        //correcte
        span.innerHTML="OK";
        return true;
    }
}
function validaForm(){
    let inputNombre = document.forms["formulari"]["inputNombre"];
    let correcto=true;
    
    if(!checkNombreForm(inputNombre)){
        correcto= false;
    }
    

    return correcto;

}