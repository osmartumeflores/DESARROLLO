function pipeline(...transformaciones) {
    return function ejecutarPipeline(valorInicial) {
        return transformaciones.reduce(
            (valor, transformacion) => transformacion(valor),
            valorInicial
        );
    };
}

const duplicar = numero => numero * 2;
const sumarDiez = numero => numero + 10;
const cuadrado = numero => numero ** 2;

const operacion = pipeline(duplicar, sumarDiez, cuadrado);
const otraOperacion = pipeline(sumarDiez, duplicar);

console.log("Pipeline principal con 5:", operacion(5));
console.log("Segundo pipeline con 5:", otraOperacion(5));
