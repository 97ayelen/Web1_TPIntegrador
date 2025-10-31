function validarFormulario() {
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const telefono = document.getElementById('telefono')
const email = document.getElementById('mail')
const mensaje = document.getElementById('mensaje')

if(nombre.value === ''){
    //alert ("el nombre no puede ir vacio");
    nombre.style.borderColor = 'red';
    return false;
}else{
    nombre.style.borderColor = 'black';
}

if(apellido.value === ''){
    //alert ("el nombre no puede ir vacio");
    apellido.style.borderColor = 'red';
    return false;
}else{
    apellido.style.borderColor = 'black';
}

if(telefono.value === ''){
    //alert ("el nombre no puede ir vacio");
    telefono.style.borderColor = 'red';
    return false;
}else{
    telefono.style.borderColor = 'black';
}

if(email.value === ''){
    //alert ("el nombre no puede ir vacio");
    email.style.borderColor = 'red';
    return false;
}else{
    email.style.borderColor = 'black';
}

if(mensaje.value === ''){
    //alert ("el nombre no puede ir vacio");
    mensaje.style.borderColor = 'red';
    return false;
}else{
    mensaje.style.borderColor = 'black';
}
}