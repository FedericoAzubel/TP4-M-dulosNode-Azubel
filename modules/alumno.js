class Alumno {
    constructor(username, DNI) {
        this.username = username;
        this.DNI = DNI;
    }
}

function CrearAlumno(username, DNI) {
    let alumno = new Alumno(username, DNI);
    console.log(`
        Nombre: ${alumno.username}
        DNI: ${alumno.DNI}
    `);
}

module.exports = CrearAlumno;