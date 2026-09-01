// ============================================
// EXPERIENCIA 01: PRIMER CONTACTO CON JAVASCRIPT
// ============================================

console.log("===== PARTE 2: FORMAS DE INCORPORAR JAVASCRIPT =====");
console.log("JavaScript desde un archivo externo");

console.log("\n===== PARTE 3: VARIABLES, CONSTANTES Y TIPOS =====");

// Declarar variables y constantes
const nombreProducto = "Teclado mecánico";
let precio = 180;
let stock = 5;
const disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(stock);
console.log(disponible);

// Verificar tipos de datos
console.log("\n--- Tipos de datos ---");
console.log("Tipo de nombreProducto:", typeof nombreProducto);
console.log("Tipo de precio:", typeof precio);
console.log("Tipo de stock:", typeof stock);
console.log("Tipo de disponible:", typeof disponible);

// Cambiar tipo de dato - tipado dinámico
precio = "180";
console.log("\nDespués de asignar precio = '180':");
console.log("Tipo de precio:", typeof precio);

// Restaurar el valor original como número
precio = 180;

console.log("\n===== PARTE 4: CONST, LET Y SCOPE =====");

if (stock > 0) {
    const mensaje = "Producto disponible";
    let unidades = stock;
    console.log(mensaje);
    console.log(unidades);
}

// Esto causaría un error: console.log(mensaje); // ReferenceError

console.log("Stock fuera del bloque:", stock);

console.log("\n===== PARTE 5: EXPLORANDO HOISTING =====");

// Hoisting con var
console.log("Valor de cantidad (antes de declarar):", cantidad); // undefined
var cantidad = 10;
console.log("Valor de cantidad (después de declarar):", cantidad); // 10

// Hoisting con let - comentado porque causaría error
// console.log(descuento); // ReferenceError
// let descuento = 20;

console.log("\n===== PARTE 6: NUEVAS VARIABLES Y CÁLCULOS =====");

const nombreCliente = "Andrea";
const cantidadProductos = 3;
const precioUnitario = 120;
const importe = cantidadProductos * precioUnitario;

console.log("\n--- Detalles de la compra ---");
console.log("Cliente:", nombreCliente);
console.log("Cantidad:", cantidadProductos);
console.log("Precio unitario:", precioUnitario);
console.log("Importe:", importe);
