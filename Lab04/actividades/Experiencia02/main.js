// ============================================
// EXPERIENCIA 02: FUNCIONES REUTILIZABLES
// ============================================

console.log("===== PARTE 1: NUESTRA PRIMERA FUNCIÓN =====");

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

console.log("Subtotal 120 x 3:", calcularSubtotal(120, 3));
console.log("Subtotal 80 x 5:", calcularSubtotal(80, 5));

console.log("\n===== PARTE 2: COMPARANDO FORMAS DE DEFINIR FUNCIONES =====");

// Forma 2: Expresión de función
const calcularSubtotal2 = function(precio, cantidad) {
    return precio * cantidad;
};

console.log("Expresión - Subtotal 120 x 3:", calcularSubtotal2(120, 3));

// Forma 3: Función flecha
const calcularSubtotal3 = (precio, cantidad) => precio * cantidad;

console.log("Función flecha - Subtotal 120 x 3:", calcularSubtotal3(120, 3));

console.log("\n===== PARTE 3: PARÁMETROS PREDETERMINADOS =====");

function calcularTotal(precio, cantidad = 1, descuento = 0) {
    const subtotal = precio * cantidad;
    return subtotal - subtotal * descuento / 100;
}

console.log("Total(100) - sin cantidad ni descuento:", calcularTotal(100));
console.log("Total(100, 3) - sin descuento:", calcularTotal(100, 3));
console.log("Total(100, 3, 10) - con descuento de 10%:", calcularTotal(100, 3, 10));

console.log("\n===== PARTE 4: PARÁMETROS REST =====");

function sumarImportes(...importes) {
    console.log("Argumentos recibidos:", importes);
    return importes.reduce(
        (total, importe) => total + importe,
        0
    );
}

console.log("Suma de 100 + 50:", sumarImportes(100, 50));
console.log("Suma de 100 + 50 + 80 + 25:", sumarImportes(100, 50, 80, 25));

console.log("\n===== PARTE 5: FUNCIONES COMO ARGUMENTOS =====");

const aplicarDescuento = precio => precio * 0.90;
const aplicarIGV = precio => precio * 1.18;

function procesarPrecio(precio, operacion) {
    return operacion(precio);
}

console.log("Precio 100 con descuento:", procesarPrecio(100, aplicarDescuento));
console.log("Precio 100 con IGV:", procesarPrecio(100, aplicarIGV));

console.log("\n===== PARTE 6: FUNCIÓN CALCULAR VENTA =====");

function calcularVenta(precio, cantidad, descuento = 0) {
    const subtotal = precio * cantidad;
    const total = subtotal - (subtotal * descuento / 100);
    return total;
}

// Pruebas
console.log("\n--- Ventas de prueba ---");
console.log("Venta 1 (150 x 2, sin descuento):", calcularVenta(150, 2));
console.log("Venta 2 (100 x 3, descuento 10%):", calcularVenta(100, 3, 10));
console.log("Venta 3 (75 x 5, descuento 15%):", calcularVenta(75, 5, 15));
