let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
let anioNacimientoTexto = prompt("¿En qué año naciste?");
let ciudadUsuario = prompt("¿En qué ciudad vives actualmente?");

const anioActual = 2026;

let anioNacimiento = parseInt (anioNacimientoTexto);

let edadCalculada = anioActual - anioNacimiento;

const mensajeFinal = "¡Hola, " + nombreUsuario + "! Hemos calculado que tienes (o cumplirás) " + edadCalculada + " años. Nos alegra saber que eres de "  + ciudadUsuario + ".";

console.log("--- Resumen del Proceso ---");
console.log("Nombre introducido: " + nombreUsuario);
console.log("Edad procesada: " + edadCalculada);
console.log("Ciudad: " + ciudadUsuario);

alert(mensajeFinal);