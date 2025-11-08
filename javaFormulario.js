const formulario = document.getElementById("formularioContacto")

formulario.addEventListener("submit", function (e) {
        e.preventDefault(); //hace que no se envie y recargue
        var msjAnteriores = document.getElementById("msjResultado");

if (msjAnteriores) {
    msjAnteriores.remove();
}

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const email = document.getElementById('mail');
const mensaje = document.getElementById('mensaje');


  // limpiar estilos
[nombre, apellido, telefono, email, mensaje].forEach(el => el.style.borderColor = '');

var errores = []; 

if(nombre.value === '' || nombre.value.length > 25){
    nombre.style.borderColor = 'red';
    errores.push("El nombre no puede estar vacio ni superar los 25 caracteres.");
} else{
    nombre.style.borderColor = 'black';
}

if(apellido.value === '' || apellido.value.length > 25){
    apellido.style.borderColor = 'red';
    errores.push("El apellido no puede estar vacio ni superar los 25 caracteres.");
}else{
    apellido.style.borderColor = 'black';
}

const patronTel = /^\d{10}$/
if(telefono.value === '' || !patronTel.test(telefono.value)){
    errores.push("Ingrese un telefono valido.");
    telefono.style.borderColor = 'red';
} else{

    telefono.style.borderColor = 'black';
}

const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(email.value === '' || !patronEmail.test(email.value) ){
    errores.push("Ingrese un mail valido.");
    email.style.borderColor = 'red';
} else{

    email.style.borderColor = 'black';
}

if (mensaje.value === '' || mensaje.value.length > 200) {
    errores.push("Ingrese un mensaje")
    mensaje.style.borderColor = 'red';
} else{

    mensaje.style.borderColor = 'black';
}

var resultado = document.createElement("div");
resultado.id = "msjResultado"//creo el div con id para mostrar y personalizar resultado

if (errores.length > 0) {
            var lista = document.createElement("ul");
            resultado.style.backgroundColor = "#ffe5e5";
            resultado.style.color = "red";

            for (var i = 0; i < errores.length; i++) { //recorro arreglo y levanto errores
                var item = document.createElement("li");
                item.textContent = errores[i];
                lista.appendChild(item);
            }
            resultado.appendChild(lista);//los sumo al resultado
        } else {
            resultado.style.backgroundColor = "#e5ffe5";
            resultado.style.color = "green";
            resultado.innerHTML = ` <br>
                                    <strong>Formulario enviado.</strong><br>
                                    <br>
                        <strong>Nombre completo:</strong> ${nombre.value} ${apellido.value}<br>
                                <strong>Teléfono:</strong> ${telefono.value}<br>
                                <strong>Email:</strong> ${email.value}<br>
                                <strong>Mensaje:</strong> ${mensaje.value}
                                `;
        }

        formulario.appendChild(resultado);//agrega resultado al body

    });  