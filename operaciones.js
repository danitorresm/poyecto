function operaciones() {

    let operaciones = document.getElementById('operacion').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if(num1 == ""){
                alert("continue con el procesoo");
    }
    else if(num1==" "){
        console.log("aqui va")
       alert("hola");
    }
    else if(num2==" "){
        console.log("aqui va")
        alert("hola");
    }
    else if(operaciones==" "){
        console.log("aqui va")
        alert("hola");
    }



     
    if (operaciones == 'suma') {resultado = parseInt(num1) + parseInt(num2);}
    else if (operaciones == 'resta') {resultado = parseInt(num1) - parseInt(num2);}
    else if (operaciones == 'multi') {resultado = parseInt(num1) * parseInt(num2);}
    else if (operaciones == 'divi') {resultado = parseInt(num1) / parseInt(num2);}
    else if (operaciones == 'pot') {resultado = parseInt(num1) ** parseInt(num2);}
    console.log(document.getElementById('resultado').innerText = `Su resultado es:_ ${resultado}`);
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operacion').value = "";
    }


