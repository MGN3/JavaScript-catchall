//mostar un mensaje con ***template literals***
let name = "Camilo";
let lastName = "Saavedra";
console.log(`Mi nombre completo es ${name} ${lastName}`);

//mostar un mensaje con ***concatenación strings***
let nombre = "Marcelino";
let apellidos = "Gil Nombela";
console.log("Mi nombre es " + nombre + " " + apellidos);


const name1 = "Juan David";
const lastname1 = "Castro Gallego";
const completeName1 = name1 + lastname1;
const nickname1 = "juandc";

console.log("Mi nombre es " + completeName1 + ", pero prefiero que me digas " + nickname1 + ".");

function funcionNombre(nombre, apellidos) {
	let nombreFinal;
	nombreFinal = `${nombre} ${apellidos}`;
	return nombreFinal
};

let pruebaNombre = funcionNombre("Marce", "Gil");
console.log(pruebaNombre);

pruebaNombre = pruebaNombre.toLowerCase();
console.log(pruebaNombre);
console.log(pruebaNombre.toUpperCase());

let typeSuscripción = ["Free", "Basic", "Expert", "ExpertPlus"];
let infoSuscripción = [
  "solo puedes tomar los cursos gratis",
  "puedes tomar casi todos los cursos de Platzi durante un mes",
  "puedes tomar casi todos los cursos de Platzi durante un año",
  "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
];

let userSuscription = "Free";
let counter = 0;
let encontrado;

while (counter < typeSuscripción.length && !encontrado) {
  if (userSuscription == typeSuscripción[counter]) {
    console.log(infoSuscripción[counter]);
	encontrado = true;
  }
  counter++;
}