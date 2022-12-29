
//Para la proxima entrega añadir funciones de borrar libros, librosleidos y librosrepetidos
// y corregir errores de que no se repita la lista de libros a listar

const listar = (flag) => {
    
    let librosStorage = JSON.parse(localStorage.getItem("librosStorage"));
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    librosStorage.forEach(libro => {
        let li = document.createElement("li");
        li.innerHTML = `
        Libro: ${libro.nombre}
        Editorial: ${libro.editorial}
        `;
        lista.append(li); 
    });
};

const guardar = (inputs, flag) => {
    let flag1 = flag;
    let libro = { //añado al objeto libro los valores de los inputs 
        nombre: inputs[1].value,
        editorial: inputs[3].value
    }

    let librosStorage = JSON.parse(localStorage.getItem("librosStorage"));
    
    //verifico si existen o no libros guardados
    if(librosStorage){
        librosNuevos = librosStorage;
    } else {
        librosNuevos = [];
    }

    librosNuevos.push(libro);
    localStorage.setItem("librosStorage", JSON.stringify(librosNuevos));
    inputs[1].value = ""; //limpio los inputs 
    inputs[3].value = "";
    
    listar(flag1);
};
let flag = true;
let librosNuevos;
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children; //obtengo los valores de los inputs dentro del formulario
    guardar(inputs, flag); // guardar libros en localstorage
});




