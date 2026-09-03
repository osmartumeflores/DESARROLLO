// ============================================
// EXPERIENCIA 03: OBJETOS Y ARRAYS
// ============================================

console.log("===== PARTE 1: REPRESENTANDO UN PRODUCTO =====");

const producto = {
    id: 1,
    nombre: "Teclado",
    precio: 120,
    stock: 8
};

console.log("Nombre del producto:", producto.nombre);
console.log("Precio del producto:", producto.precio);

// Agregar nueva propiedad
producto.categoria = "Periféricos";
console.log("Categoría agregada:", producto.categoria);

// Modificar propiedad
producto.stock = 10;

// Mostrar objeto completo
console.log("Producto completo:", producto);

// Agregar método al objeto
producto.calcularValorStock = function() {
    return this.precio * this.stock;
};

console.log("Valor total del stock:", producto.calcularValorStock());

console.log("\n===== PARTE 2: CREANDO UN INVENTARIO =====");

const productos = [
    {
        id: 1,
        nombre: "Teclado",
        precio: 120,
        stock: 8
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 70,
        stock: 15
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 850,
        stock: 4
    },
    {
        id: 4,
        nombre: "Webcam",
        precio: 160,
        stock: 0
    }
];

console.log("Cantidad de productos:", productos.length);
console.log("Precio del Monitor (índice 2):", productos[2].precio);

console.log("\n===== PARTE 3: FOREACH() =====");

console.log("--- Listado de productos ---");
productos.forEach(producto => {
    console.log(`${producto.nombre} | S/ ${producto.precio} | Stock: ${producto.stock}`);
});

console.log("\n===== PARTE 4: MAP() - TRANSFORMAR =====");

// Array solo con nombres
const nombres = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombres);

// Array con precios incrementados en 10%
const preciosIncrementados = productos.map(
    producto => ({
        nombre: producto.nombre,
        precioOriginal: producto.precio,
        precioNuevo: producto.precio * 1.10
    })
);
console.log("Precios incrementados en 10%:", preciosIncrementados);

console.log("\n===== PARTE 5: FILTER() - SELECCIONAR =====");

// Productos con stock bajo
const bajoStock = productos.filter(producto => producto.stock < 10);
console.log("Productos con stock bajo (< 10):", bajoStock);

// Productos disponibles (stock > 0)
const disponibles = productos.filter(producto => producto.stock > 0);
console.log("Productos disponibles:", disponibles);

console.log("\n===== PARTE 6: FIND() - BUSCAR =====");

// Buscar producto con ID 3
const encontrado = productos.find(producto => producto.id === 3);
console.log("Producto con ID 3:", encontrado);

// Buscar producto con ID inexistente
const noEncontrado = productos.find(producto => producto.id === 15);
console.log("Producto con ID 15:", noEncontrado);

console.log("\n===== PARTE 7: REDUCE() - ACUMULAR =====");

// Calcular valor total del inventario
const totalInventario = productos.reduce(
    (total, producto) => total + (producto.precio * producto.stock),
    0
);
console.log("Valor total del inventario: S/", totalInventario);

// Verificación manual:
// Teclado: 120 * 8 = 960
// Mouse: 70 * 15 = 1050
// Monitor: 850 * 4 = 3400
// Webcam: 160 * 0 = 0
// Total: 960 + 1050 + 3400 + 0 = 5410

console.log("\n===== PARTE 8: PRÁCTICA - PRODUCTOS ADICIONALES =====");

// Agregar dos productos propios
productos.push({
    id: 5,
    nombre: "Headphones",
    precio: 200,
    stock: 12
});

productos.push({
    id: 6,
    nombre: "Micrófono",
    precio: 180,
    stock: 6
});

console.log("Inventario actualizado con 2 productos nuevos");

// 1. Productos con precio mayor a S/ 150
const preciosAltos = productos.filter(p => p.precio > 150);
console.log("\n1. Productos con precio > S/ 150:", preciosAltos);

// 2. Nombres de todos los productos
const todosLosNombres = productos.map(p => p.nombre);
console.log("2. Nombres de todos los productos:", todosLosNombres);

// 3. Producto con ID elegido (por ejemplo, ID 5)
const productoId5 = productos.find(p => p.id === 5);
console.log("3. Producto con ID 5:", productoId5);

// 4. Valor total actualizado del inventario
const totalActualizado = productos.reduce(
    (total, p) => total + (p.precio * p.stock),
    0
);
console.log("4. Valor total del inventario (actualizado): S/", totalActualizado);

console.log("\n===== FIN DE LA EXPERIENCIA 03 =====");
