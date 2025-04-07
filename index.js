// EJ 1)
// const strings = require('./modules/strings');
// strings("hola","chau");

// EJ 2)

// const mate = require('./modules/matematica');

// mate.sumar(2,3);
// mate.restar(2,3);
// mate.mult(2,3);
// mate.PI();

// EJ 3)

// const alumno = require('./modules/alumno');

// alumno("Azubel Federico", 123456);

// EJ 4)

// const fs = require('fs');

// let archivoViejo = './texto.txt'
// function Copiar(archivoViejo, nuevoNobre) {
//     const contenido = fs.readFileSync('texto.txt', 'utf8');
//     fs.writeFileSync(nuevoNobre, contenido);
// }

// Copiar(archivoViejo, "NuevoNombre.txt");

//EJ 5)

//Ver este ej

// const { URL } = require('url');

// function parsearUrl(url) {
//   const miUrl = new URL(url);
  
//   // Obtener los parámetros de la URL
//   const parametros = {};
//   miUrl.searchParams.forEach((value, key) => {
//     parametros[key] = value;
//   });

//   // Crear el objeto que contiene los datos solicitados
//   const objeto = {
//     host: miUrl.origin,  // Esto incluye el esquema, host y puerto (si existe)
//     pathname: miUrl.pathname,  // La ruta de la URL
//     parametros: parametros  // Los parámetros de la URL en formato objeto
//   };

//   return objeto;
// }

// // Ejemplo de uso
// let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");

// console.log(objeto);

// EJ 6)

// const { URL } = require('url');

// function parsearUrl(url) {
//   try {
//     const miUrl = new URL(url);
    
//     // Obtener los parámetros de la URL
//     const parametros = {};
//     miUrl.searchParams.forEach((value, key) => {
//       parametros[key] = value;
//     });

//     // Crear el objeto que contiene los datos solicitados
//     const objeto = {
//       host: miUrl.origin,       // Incluye esquema, host y puerto (si existe)
//       pathname: miUrl.pathname, // Ruta de la URL
//       parametros: parametros    // Parámetros en formato objeto
//     };

//     return objeto;
//   } catch (error) {
//     console.error("Se produjo un error al parsear la URL:", error.message);
//     return null; // Devuelvo null para manejarlo como quiera (en mi caso solo lo muestro)
//   }
// }

// // Ejemplo de uso
// let objetoValidado = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
// console.log(objetoValidado);


// let objetoValidado2 = parsearUrl("esto-no-es-una-URL");
// console.log(objetoValidado2);

// EJ 7)

// const obtenerMoneda = require('./modules/moneda');

// // Ejemplo de uso
// let moneda = obtenerMoneda("AR");

// console.log(moneda); // Debería imprimir: "Argentine Peso"





