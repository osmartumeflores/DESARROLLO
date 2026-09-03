const funciones = [
    { id: 1, pelicula: "Interstellar", sala: 1, precio: 18, disponibles: 12 },
    { id: 2, pelicula: "Dune", sala: 2, precio: 20, disponibles: 5 },
    { id: 3, pelicula: "Avengers", sala: 3, precio: 16, disponibles: 0 },
    { id: 4, pelicula: "Inception", sala: 1, precio: 18, disponibles: 8 }
];

function buscarFuncion(id) {
    const funcion = funciones.find(item => item.id === Number(id));

    if (!funcion) {
        throw new Error("No existe una funcion con ese ID");
    }

    return funcion;
}

function funcionesDisponibles() {
    return funciones.filter(funcion => funcion.disponibles > 0);
}

function comprarEntradas(id, cantidad) {
    const funcion = buscarFuncion(id);
    const cantidadNumerica = Number(cantidad);

    if (!Number.isInteger(cantidadNumerica) || cantidadNumerica <= 0) {
        throw new Error("La cantidad debe ser un entero mayor que cero");
    }

    if (cantidadNumerica > funcion.disponibles) {
        throw new Error("No hay suficientes entradas disponibles");
    }

    funcion.disponibles -= cantidadNumerica;

    return {
        pelicula: funcion.pelicula,
        cantidad: cantidadNumerica,
        total: funcion.precio * cantidadNumerica
    };
}

console.log("Funciones disponibles:", funcionesDisponibles());
console.log("Compra valida:", comprarEntradas(2, 2));

try {
    comprarEntradas(2, 10);
} catch (error) {
    console.error("Error de compra:", error.message);
}

try {
    buscarFuncion(99);
} catch (error) {
    console.error("Error de busqueda:", error.message);
}
