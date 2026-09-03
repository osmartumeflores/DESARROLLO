function crearGeneradorCodigo(prefijo) {
    let contador = 0;
    const prefijoNormalizado = String(prefijo).toUpperCase();

    return function generarCodigo() {
        contador++;
        return `${prefijoNormalizado}-${contador}`;
    };
}

const generarAlumno = crearGeneradorCodigo("ALU");
const generarDocente = crearGeneradorCodigo("DOC");

console.log(generarAlumno());
console.log(generarAlumno());
console.log(generarDocente());
console.log(generarAlumno());
console.log(generarDocente());
