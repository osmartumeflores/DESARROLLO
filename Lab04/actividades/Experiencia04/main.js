// ============================================
// EXPERIENCIA 04: VALIDACIÓN Y MANEJO DE ERRORES
// ============================================

console.log("===== PARTE 1: EL PROBLEMA =====");

function calcularVenta(precio, cantidad) {
    return precio * cantidad;
}

console.log("Cálculo válido 100 x 3:", calcularVenta(100, 3));
console.log("Cálculo con string 'abc' x 3:", calcularVenta("abc", 3)); // Resultado: NaN

console.log("\n===== PARTE 2: CONVERSIÓN Y VALIDACIÓN =====");

function calcularVenta2(precio, cantidad) {
    precio = Number(precio);
    cantidad = Number(cantidad);
    
    if (precio <= 0 || cantidad <= 0) {
        return "Datos no válidos";
    }
    
    return precio * cantidad;
}

console.log("Prueba 1 - Strings válidos:", calcularVenta2("100", "3"));
console.log("Prueba 2 - Precio negativo:", calcularVenta2(-20, 3));
console.log("Prueba 3 - Cantidad cero:", calcularVenta2(100, 0));

console.log("\n===== PARTE 3: DETECTANDO NaN =====");

function calcularVenta3(precio, cantidad) {
    precio = Number(precio);
    cantidad = Number(cantidad);
    
    if (Number.isNaN(precio) || Number.isNaN(cantidad)) {
        return "Debe ingresar valores numéricos";
    }
    
    if (precio <= 0 || cantidad <= 0) {
        return "Los valores deben ser mayores que cero";
    }
    
    return precio * cantidad;
}

console.log("Prueba 1 - 'abc' x 3:", calcularVenta3("abc", 3));
console.log("Prueba 2 - 100 x 3:", calcularVenta3(100, 3));
console.log("Prueba 3 - -20 x 3:", calcularVenta3(-20, 3));

console.log("\n===== PARTE 4: LANZANDO UNA EXCEPCIÓN =====");

function calcularVenta4(precio, cantidad) {
    precio = Number(precio);
    cantidad = Number(cantidad);
    
    if (Number.isNaN(precio) || Number.isNaN(cantidad)) {
        throw new Error("Precio y cantidad deben ser numéricos");
    }
    
    if (precio <= 0 || cantidad <= 0) {
        throw new Error("Los valores deben ser mayores que cero");
    }
    
    return precio * cantidad;
}

console.log("Función definida con throw. Pruebas en siguiente sección...");

console.log("\n===== PARTE 5: TRY...CATCH =====");

console.log("--- Intento 1: Datos inválidos ('abc', 3) ---");
try {
    const total = calcularVenta4("abc", 3);
    console.log("Total:", total);
} catch (error) {
    console.error("Error capturado:", error.message);
}

console.log("\n--- Intento 2: Datos válidos (100, 3) ---");
try {
    const total = calcularVenta4(100, 3);
    console.log("Total:", total);
} catch (error) {
    console.error("Error capturado:", error.message);
}

console.log("\n--- Intento 3: Precio negativo (-20, 3) ---");
try {
    const total = calcularVenta4(-20, 3);
    console.log("Total:", total);
} catch (error) {
    console.error("Error capturado:", error.message);
}

console.log("\n===== PARTE 6: FINALLY =====");

function ejemploFinally(esValido) {
    try {
        console.log("Procesando venta...");
        if (!esValido) {
            throw new Error("Datos no válidos");
        }
        console.log("Venta procesada correctamente");
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Proceso de venta finalizado");
    }
}

console.log("--- Con datos válidos ---");
ejemploFinally(true);

console.log("\n--- Con datos inválidos ---");
ejemploFinally(false);

console.log("\n===== PARTE 7: CREAR PROPIA EXCEPCIÓN =====");

function registrarProducto(nombre, precio, stock) {
    // Validar nombre
    if (!nombre || nombre.trim() === "") {
        throw new Error("El nombre del producto no puede estar vacío");
    }
    
    // Validar precio
    precio = Number(precio);
    if (Number.isNaN(precio) || precio <= 0) {
        throw new Error("El precio debe ser numérico y mayor que cero");
    }
    
    // Validar stock
    stock = Number(stock);
    if (Number.isNaN(stock) || stock < 0) {
        throw new Error("El stock debe ser numérico y no negativo");
    }
    
    // Si todo es válido, retornar objeto
    return {
        nombre: nombre.trim(),
        precio: precio,
        stock: stock
    };
}

console.log("--- Prueba 1: Producto válido ---");
try {
    const p1 = registrarProducto("Monitor 27\"", 850, 5);
    console.log("Producto registrado:", p1);
} catch (error) {
    console.error("Error:", error.message);
}

console.log("\n--- Prueba 2: Precio inválido ---");
try {
    const p2 = registrarProducto("Teclado", "abc", 10);
    console.log("Producto registrado:", p2);
} catch (error) {
    console.error("Error:", error.message);
}

console.log("\n--- Prueba 3: Stock negativo ---");
try {
    const p3 = registrarProducto("Mouse", 75, -5);
    console.log("Producto registrado:", p3);
} catch (error) {
    console.error("Error:", error.message);
}

console.log("\n--- Prueba 4: Nombre vacío ---");
try {
    const p4 = registrarProducto("", 100, 10);
    console.log("Producto registrado:", p4);
} catch (error) {
    console.error("Error:", error.message);
}

console.log("\n===== FIN DE LA EXPERIENCIA 04 =====");
