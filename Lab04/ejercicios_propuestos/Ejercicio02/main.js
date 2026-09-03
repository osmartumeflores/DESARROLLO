const estudiantes = [
    { nombre: "Andrea", nota: 17 },
    { nombre: "Carlos", nota: 11 },
    { nombre: "Lucia", nota: 19 },
    { nombre: "Mateo", nota: 8 },
    { nombre: "Valeria", nota: 14 }
];

const nombres = estudiantes.map(estudiante => estudiante.nombre);
const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 13);
const lucia = estudiantes.find(estudiante => estudiante.nombre === "Lucia");
const sumaNotas = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
const promedio = sumaNotas / estudiantes.length;
const desaprobados = estudiantes.filter(estudiante => estudiante.nota < 13).length;
const estudiantesConEstado = estudiantes.map(estudiante => ({
    ...estudiante,
    estado: estudiante.nota >= 13 ? "Aprobado" : "Desaprobado"
}));

console.log("Nombres:", nombres);
console.log("Aprobados:", aprobados);
console.log("Estudiante Lucia:", lucia);
console.log("Promedio general:", promedio);
console.log("Cantidad de desaprobados:", desaprobados);
console.log("Estudiantes con estado:", estudiantesConEstado);
