

var allPersons = [];

function guardarPersona(){
    let Nombre = document.getElementById('nombres').value;
    let Apellido = document.getElementById('apellidos').value;
    let Correo = document.getElementById('correo').value;


    if (Nombre=="" ){
        
        document.getElementById('nombres').focus();
        document.getElementById("nombres").classList.add('rojo')

    }
    else if(Apellido == ""){
        alert("te faltan datos ")
        document.getElementById('apellido').focus();
        document.getElementById("apellido").classList.add('rojo')

    }
    else if (Correo==""){
        alert("te faltan datos ")
        document.getElementById('correo').focus();
        document.getElementById("correo").classList.add('rojo')
    } 

    let persona = {
        nombre : Nombre,
        apellido : Apellido,
        correo :Correo
    }

     
    console.log(persona);
    allPersons = [];
    allPersons.push(persona);
    allPersons.forEach(function(person){
        document.getElementById("tabla").innerHTML += ` <tr>
        <td>${person.nombre}</td>
        <td>${person.apellido}</td>
        <td>${person.correo}</td>
        <td><a href="" class="btn btn-danger btn-sm">Eliminar</a></td>
    </tr>`
    });

    
    limpiar();

}

Correo.onblur = function() {
    if (!Correo.value.includes('@')) { 
        Correo.classList.add('invalid');
        error.innerHTML = 'Por favor introduzca un correo válido.'
    }
}

function limpiar(){
    document.getElementById("nombres").value="";
    document.getElementById("apellidos").value="";
    document.getElementById("correo").value="";
}
