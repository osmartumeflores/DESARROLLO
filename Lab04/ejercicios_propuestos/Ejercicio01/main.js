function calcularEnvio(peso, tipo = "normal") {
    const pesoNumerico = Number(peso);

    if (!Number.isFinite(pesoNumerico) || pesoNumerico <= 0) {
        throw new Error("El peso debe ser un numero mayor que cero");
    }

    if (tipo !== "normal" && tipo !== "express") {
        throw new Error("El tipo debe ser normal o express");
    }

    const costoBase = pesoNumerico <= 2
        ? 8
        : pesoNumerico <= 5
            ? 12
            : 18;
    const costoFinal = tipo === "express" ? costoBase * 1.4 : costoBase;

    return {
        peso: pesoNumerico,
        tipo,
        costoBase,
        costoFinal: Number(costoFinal.toFixed(2))
    };
}

console.log("Envio normal:", calcularEnvio(1.5));
console.log("Envio express:", calcularEnvio(4, "express"));

try {
    calcularEnvio("abc");
} catch (error) {
    console.error("Error de envio:", error.message);
}
