// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


/*==========================================================================================================
| Lógica de programación: Práctica
ONE Oracle Next Education y Alura
| Challenge Amigo Secreto
==========================================================================================================*/

let listaAmigos = [];           // Lista de amigos

// 1. Función que recibe un array de nombres y lista los nombres ingresados por pantalla.
function agregarAmigo() {  //Funcion Adicionar Amigo Secreto a la lista
    let amigo = document.getElementById('amigo').value; //Obtiene el valor del input

    if (amigo != '') { //Valida que no sea un valor vacio
        if (listaAmigos.length > 0 && listaAmigos.include(amigo) == false) { //Valda si el amigo ya fue ingresado a la lista
            listaAmigos.push(document.getElementById('amigo').value);
            document.getElementById('amigo').value = '';
            document.getElementById('amigo').focus();
            console.log(listaAmigos);
        }else if (listaAmigos.length > 0 && listaAmigos.include(amigo) == true) { //Valda si el amigo ya fue ingresado a la lista
            alert(`Amigo(a) ${amigo} ya fue agregado(a)`);
            document.getElementById('amigo').value = '';
            document.getElementById('amigo').focus();

        }
    } else if (document.getElementById('amigo').value == '') { //Ingresar valor diferente a vacio
        alert('Por favor, ingresar un Nombre');
        return;
    }
}


