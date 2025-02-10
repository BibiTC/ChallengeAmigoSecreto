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
 
        if (listaAmigos.includes(amigo) == false) { //Valda si el amigo ya fue ingresado a la lista
            listaAmigos.push(amigo);
            limpiarNombre();
            console.log(listaAmigos);
        }else if (listaAmigos.includes(amigo) == true) { //Valda si el amigo ya fue ingresado a la lista
            alert(`Amigo(a) ${amigo} ya fue agregado(a)`);
            limpiarNombre();

            return false;
        }

    }else if (document.getElementById('amigo').value == '') { //Ingresar valor diferente a vacio
        alert('Por favor, ingresar un Nombre');
        
    }
}

function limpiarNombre() { //Funcion Limpiar Texto
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

// 2. Función que recibe un array de nombres y los lista en pantalla.

function mostrarAmigos(){//Funcion Mostrar Amigos
    let mostrarLista = document.getElementById('listaAmigos'); 
    mostrarLista.innerHTML = "" // Limpia la lista antes de mostrarla
    
    if (listaAmigos.length === 0) { // Si no hay amigos en la lista
        mostrarLista.innerHTML = "<li>No hay amigos en la lista aún.</li>";
        return;
    }
    
    for (let i = 0; i < listaAmigos.length; i++) {
        const element = listaAmigos[i];
        mostrarLista.innerHTML += `<li>${element}</li>`;
    }

    /*
        listaAmigos.forEach(listaAmigos => { 
            let li = document.createElement('li'); // Crear elemento <li>
            li.textContent = listaAmigos; // Agregar el nombre del amigo como texto
            mostrarLista.appendChild(li); // Añadir el <li> al ul
        });
    */
   } 

function seleccionarAmigo() { //Funcion Seleccionar Amigo Secreto
    let mostrarAmigoSecreto = document.getElementById('aresultado'); //Lista donde se muestra el amigo secreto
    
    if (listaAmigos.length >= 2) { //Valida que haya al menos 2 amigos en la lista
        let idAmigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)+1]; //Selecciona un amigo aleatorio
        const amigoAsignado = listaAmigos[idAmigoSecreto]; //Obtiene el amigo seleccionado
        mostrarAmigoSecreto.innerHTML = `<li>'Amigo Secreto:' + ${amigoAsignado}</li>`;
    }else if (listaAmigos.length == 0) { //Valida que la lista no este vacia
        alert('La lista de amigos esta vacia');
        return false;
    }else if (listaAmigos.length == 1) {//Valida que la lista no tenga un solo valor
        alert('No hay suficientes amigos en la lista');
        return false;
    }

}
