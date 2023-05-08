// N°1
/* let numero = 7;
for (let i = 1; i <= 10; i++) {
	console.log(`${numero} x ${i} = ${numero * i}`);
}
console.log("Fin"); */

// N°2
/* let numeroIngresado = Number(
	prompt("Ingresa un numero para meterlo a la caja:")
);
const listaNumeros = [];

while (numeroIngresado > 0) {
	numeroIngresado = Number(prompt("Ingresa un numero"));
	listaNumeros.push(numeroIngresado);
}
console.log(listaNumeros); */

// N°3
/* let numeros2 = parseInt(prompt("ingrese un numero"));
let finBucle = true;
let contador = 0;
while (numeros2 >= 1 && numeros2 <= 100 && finBucle) {
	contador++;
	if (numeros2 < listaNumeros[listaNumeros.length - 2]) {
		numeros2 = parseInt(prompt("ingrese un numero, el incognito es menor"));
	} else if (numeros2 > listaNumeros[listaNumeros.length - 2]) {
		numeros2 = parseInt(prompt("ingrese un numero, el incognito es mayor"));
	} else if (numeros2 === listaNumeros[listaNumeros.length - 2]) {
		finBucle = false;
		alert(`ganaste, te tomo ${contador} intentos`);
	}
}  */

// N°4
/* const primo = [];
let numero = Number(prompt("Escribe un numero"));
primo.push(numero);
console.log(numero);
for (let i = 1; i <= primo.length; i++) {
	const esPrimo = primo[i];
	if (primo[1] % i === 0) {
		esPrimo.push(primo[i]);
		console.log("Es primo");
	}
} */

//5
/* let numeroIngresado = Number(prompt("ingresa tu numero:"))
let divisores = []

for(let i = 1; i <= numeroIngresado; i++){
    if(numeroIngresado % i === 0){
        divisores.push(i)
    } 
}
alert(`tus divisores son: ${divisores}`) */

// N°6
/* const nombres = [
	"Mateo",
	"Joaco",
	"Franco",
	"Nico es un crack",
	"fede es un papucho",
	"armanco",
	"mbappe mbappe",
	"el dibu",
	"di mariaaaa",
	"Gonzalooooo",
];
for (let i = 0; 1 <= nombres.length; i++);
console.log(nombres(i)); */

//N°7
/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 9; i++) {
	console.log(`${numeros[i]}` * 2);
} */

// N°8
/* const familia = [
	{ nombre: "Joaquin", edad: 18, pais: "Argentina", ciudad: "Ramos Mejia" },
	{ nombre: "Mateo", edad: 22, pais: "Argentina", ciudad: "Rio Negro" },
	{ nombre: "Franco", edad: 19, pais: "Argentina", ciudad: "Haedo" },
	{ nombre: "la abuela", edad: 70, pais: "Argentina", ciudad: "Ramos Mejia" },
	{ nombre: "el abuelo", edad: 73, pais: "Argentina", ciudad: "Ramos Mejia" },
];

for (let i = 0; i <= familia.length; i++) {
	const miembros = familia[i];
	console.log(
		`Hola soy ${miembros.nombre}. Tengo ${miembros.edad} años, y soy de ${miembros.pais}.`
	);
} */

// N°9
/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
	const numero = numeros[i];
	if (numero % 2 !== 0) {
		console.log(numero);
	}
} */

//N°10
/* let numero;
let resultadoPares = 0;
let resultadoImpares = 0;

do {
	numero = Number(prompt("Ingrese un número:"));
	if (numero !== 0) {
		if (numero % 2 === 0) {
			resultadoPares += numero;
		} else if (numero % 2 !== 0) {
			resultadoImpares += numero;
		}
	}
} while (numero !== 0);

console.log(`La suma de los números pares es ${resultadoPares}`);
console.log(`La suma de los números impares es ${resultadoImpares}`); */

//N°11
/* let numeros = [4, 7, 1, 9, 2, 8, 3, 10, 5, 6];
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
	if (numeros[i] > mayor) {
		mayor = numeros[i];
	}
}
console.log(mayor); */

//N°12
/* let numeros = [4, 7, 1, 9, 2, 8, 3, 10, 5, 6];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
	if (numeros[i] < menor) {
		menor = numeros[i];
	}
}
console.log(menor); */

//N°13
/* let jugador1 = prompt("Escriba el nombre del jugador 1:");
let jugador2 = prompt("Escriba el nombre del jugador 2:");

function jueguito() {
	do {
		jugador1 = prompt("Jugador 1: ¿Piedra, papel o tijera?");
		jugador2 = prompt("Jugador 2: ¿Piedra, papel o tijera?");

		if (jugador1 === jugador2) {
			alert("Empate, sigan jugando.");
		}
	} while (jugador1 === jugador2);

	if (
		(jugador1 === "piedra" && jugador2 === "tijera") ||
		(jugador1 === "papel" && jugador2 === "piedra") ||
		(jugador1 === "tijera" && jugador2 === "papel")
	) {
		console.log(`¡${jugador1} gana!`);
	} else {
		console.log(`¡${jugador2} gana!`);
	}
}

jueguito(); */

//N°14

/* for (let i = 1; i <= 5; i++) {       
    console.log('*'.repeat(i));       
}
 */

// N°15
/* for (let i = 5; i >= 1; i--) {       
    console.log('*'.repeat(i));        
   */

//N°16 Tengo que volver a intentarlo y practicar aun no lo pude sacar
