// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


/*==========================================================================================================
| Lógica de programación: Práctica
ONE Oracle Next Education y Alura
| Challenge Amigo Secreto
==========================================================================================================*/

let listaAmigos = [];           // Lista de amigos

// 1. Función que recibe un array de nombres y lista los nombres ingresados por pantalla.
function agregarAmigo() {  //Funcion Adicionar Amigo Secreto a la lista
    if (document.getElementById('amigo').value != '') { //Valda que no sea un valor vacio
        listaAmigosCompleta.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();
        console.log(listaAmigos);
    } else if (document.getElementById('amigo').value == '') { //Valda si añade un valor vacio
        alert('Por favor, ingresar un Nombre');
        return;
    }
}


