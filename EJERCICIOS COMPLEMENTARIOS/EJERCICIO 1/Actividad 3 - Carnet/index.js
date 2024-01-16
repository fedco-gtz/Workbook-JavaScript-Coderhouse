let apellido = prompt("Ingrese el apellido del titular de la Licencia de Conducir");
let nombre = prompt("Ingrese el nombre del titular de la Licencia de Conducir");
let fechaNacimiento = prompt ("Ingrese la fecha de nacimiento del titular de la Licencia de Conducir");
let numeroIdentificacion = prompt ("Ingrese el número de DNI del titular de la Licencia de Conducir");
let domicilio = prompt ("Ingrese el domicilio del titular de la Licencia de Conducir");
let provincia = prompt ("Ingrese la provincia de residencia del titular de la Licencia de Conducir");
const pais = "República Argentina";
let donante = prompt ("Indicar si la persona es DONANTE DE ORGANOS");
let grupoSanguineo = prompt ("Indicar grupo sanguineo del titular de la Licencia de Conducir");
let categorias = prompt("Indique las clases que se encuentra habilitado a conducir el titular");

console.log("Datos que se veran en el frente de la Licencia de Conducir");
console.log("5. N° Licencia");
console.log(numeroIdentificacion);
console.log("1. Apellido");
console.log(apellido);
console.log("2. Nombre");
console.log(nombre);
console.log("8. Domicilio");
console.log(domicilio + " - " + provincia + " - " + pais);
console.log("3. Fecha de Nac.");
console.log(fechaNacimiento);
console.log("---------------------------------------------------------");
console.log("Datos que se veran en el dorso de la Licencia de Conducir");
console.log(categorias);
console.log("Donante: " + donante);
console.log("Grupo y factor: " + grupoSanguineo)





