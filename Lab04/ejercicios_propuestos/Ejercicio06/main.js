function registrarParticipante(nombre, edad, correo, tipo = "general") {
    const nombreNormalizado = String(nombre).trim();
    const correoNormalizado = String(correo).trim();
    const edadNumerica = Number(edad);

    if (!nombreNormalizado) {
        throw new Error("El nombre no puede estar vacio");
    }

    if (!Number.isFinite(edadNumerica) || edadNumerica < 18) {
        throw new Error("La edad debe ser numerica y mayor o igual a 18");
    }

    if (!correoNormalizado) {
        throw new Error("El correo no puede estar vacio");
    }

    if (tipo !== "general" && tipo !== "estudiante") {
        throw new Error("El tipo debe ser general o estudiante");
    }

    return {
        nombre: nombreNormalizado,
        edad: edadNumerica,
        correo: correoNormalizado,
        tipo,
        costo: tipo === "estudiante" ? 30 : 50
    };
}

const participantes = [];
const datos = [
    ["Andrea", 20, "andrea@correo.com", "estudiante"],
    ["Carlos", 24, "carlos@correo.com", "general"],
    ["Lucia", 19, "lucia@correo.com", "estudiante"],
    ["Mateo", 30, "mateo@correo.com", "general"],
    ["Valeria", 22, "valeria@correo.com", "estudiante"]
];

for (const datosParticipante of datos) {
    try {
        participantes.push(registrarParticipante(...datosParticipante));
    } catch (error) {
        console.error("Error al registrar participante:", error.message);
    }
}

const estudiantes = participantes.filter(participante => participante.tipo === "estudiante");
const nombresEstudiantes = estudiantes.map(participante => participante.nombre);
const totalRecaudado = participantes.reduce(
    (total, participante) => total + participante.costo,
    0
);
const participanteEncontrado = participantes.find(
    participante => participante.correo === "lucia@correo.com"
);

console.log("Participantes estudiantes:", estudiantes);
console.log("Nombres de estudiantes:", nombresEstudiantes);
console.log("Total recaudado: S/", totalRecaudado);
console.log("Participante encontrado:", participanteEncontrado);

try {
    registrarParticipante("", 20, "invalido@correo.com");
} catch (error) {
    console.error("Prueba de validacion:", error.message);
}
