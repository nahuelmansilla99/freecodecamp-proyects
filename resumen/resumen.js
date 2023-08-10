const nombre = "Nahuel"
const apellido = "Mansilla"
var edad = 23 
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`)



/*
=============== 
BOTON MOSTRAR/OCULTAR FUNCIONES
===============
*/

const mostrarFuncion = document.getElementById("miFuncion");
let logFuncion = true;

mostrarFuncion.addEventListener("click", function(){
  if(logFuncion){
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);
  }
})

/*
=============== 
BOTON LIMPIAR CONSOLA
===============
*/
/* SONIDO */
var audio = new Audio('POP CARTOON.mp3'); 
play = document.getElementById('miConsola');
play.addEventListener('click', ()=>{audio.play()});
/* SONIDO */

const limpiarConsola = document.getElementById("miConsola");
let logConsola = true;

limpiarConsola.addEventListener("click", function(){
  if(logConsola){
    console.clear()
  }
})



/*
=============== 
ARRAYS - ARRAYS - ARRAYS
===============
*/

//               0  1  2  3 [0   1    2]        total: 4
const arrays1 = [1, 2, 3, ["A", "B", "C"]];
console.log(arrays1);

console.log(arrays1.length);//Devuelve el numero de elementos(4)

console.log(arrays1[2]);//Devuelve el elemento en esa posicion( el numero 3)
console.log(arrays1[0]);//Devuelve el elemento en esa posicion( el numero 1)

console.log(arrays1[3][2]);//Devuelve el elemento que esta dentro del elemento 3 (la letra "C")
console.log(arrays1[3][0]);//Devuelve el elemento que esta dentro del elemento 3 (la letra "A")

const arrays2 = Array.of("X", "Y", "Z", 7, 8, 9);
console.log(arrays2)

const arrays3 = Array(20).fill(false);//el Array me da 20 objetos en False
console.log(arrays3)


const arrays0 = ["cosas", "dentro", "entre comillas", "separado por comas "]

//ARRAYS multiples

const arraysMultiples = [["son arrays", 1],["dentro de otros arrays", 2]]

console.log(arrays0 + arraysMultiples)


//Metodo forEach
/* Es un método que se utiliza para iterar sobre los elementos de un array y realizar una acción en cada uno de ellos. */
const array = [1, 2, 3, 4, 5];
array.forEach(function(elemento) {
  console.log(elemento);
});
//Tambien:
const array4 = [1, 2, 3, 4, 5];
array4.forEach(function(elemento, indice) {
  console.log(`El numero ${elemento} esta en la posicion ${indice}`);
});

const colores = ["Rojo", "Verde", "Azul"]
colores.forEach(function(el){
  console.log(`<li>${el}</li>`)
})


/*
=============== 
BOTON MOSTRAR/OCULTAR ARRAYS
===============
*/

const mostrarArrays = document.getElementById("miArray");
let logArrays = true;

mostrarArrays.addEventListener("click", function() {
  if (logArrays) {
    console.log(arrays1);
    console.log(arrays1.length);
    console.log(arrays1[2]);
    console.log(arrays1[0]);
    console.log(arrays1[3][2]);
    console.log(arrays1[3][0]);
    console.log(arrays2);
    console.log(arrays3);
    console.log(arrays0 + arraysMultiples);
    const array = [1, 2, 3, 4, 5];
    array.forEach(function(elemento) {
      console.log(elemento);
    });
    array4.forEach(function(elemento, indice) {
      console.log(`El numero ${elemento} esta en la posicion ${indice}`);
    });
    const colores = ["Rojo", "Verde", "Azul"]
    colores.forEach(function(el){
      console.log(`<li>${el}</li>`)
    })
  }
});


/* 
================
CONDICIONALES
================
*/
/*EJERCICIO: Se trata de escribir un script que diga si un número es par o es impar.
Recordemos que un número es par si al dividirlo por 2 da como resto 0. */
// let parImpar = 10;
// let divicion = parImpar%2;

// if (divicion === 0){
// console.log("El numero es PAR")
// }else{
// console.log("El numero es IMPAR")
// }

/* Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */
// let ejCondicional2 = (-1);
// if(ejCondicional2 > -1){
//   console.log("Positivo");
// }else {
//   console.log("Negativo");
// };

/* var numero = parseInt(prompt("Teclea un  número"));//parseInt redondea el numero a un numero ENTERO
if (numero>=0){
    alert(numero +" es positivo");
}else{
    alert(numero +" es negativo");
} */

/* En este ejercicio debes pedri dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error */
// let num1 = parseInt(prompt("Nº a dividir"));
// let num2 = parseInt(prompt("Nº divisor"));

// if(num2 != 0){
//   let divicion1 = num1/num2;
//   console.log(num1 +"/" +num2+ " = " +divicion1)
// }else{
//   console.log("No se puede dividir entre 0")
// }

/* Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó... */

// let letra = prompt("Teclee: A - B - C - D.")
// if(letra === "A" || letra === "a" ){
//   console.log(`Letra "${letra}" correcta`)
// }else{
//   console.log(`Letra "${letra}" incorrecta`)
// }


/* En este ejemplo el usuario entrará dos números. Debe devolver la diferencia entre el mayor y el menor
Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5) */

// let nume1 = parseInt(prompt("numero 1"));
// let nume2 = parseInt(prompt("numero 2"));
// let resultado;
// if(nume1 > nume2){
//   resultado = nume1-nume2;
//   console.log(`Hay una diferencia de ${resultado}`);
// }else {
//   resultado = nume2-nume1;
//   console.log(`Hay una diferencia de ${resultado}`)
// }



/* SWITCH - CASE  */

// let dia1 = parseInt(prompt("Elija dia del 1 al 7"));
// switch (dia1) {
//   case 1:
//     console.log(" Domingo")
//     break;
//   case 2:
//     console.log("Lunes ")
//     break;
//   case 3:
//     console.log("Martes ")
//     break;
//   case 4:
//     console.log("Miercoles ")
//     break;
//   case 5:
//     console.log("Jueves ")
//     break;
//   case 6:
//     console.log("Viernes ")
//     break;
//   case 7:
//     console.log("Sabado ")
//     break;

//   default:
//     console.log("El dia no existe")
//     break;
// }




/*
=============== 
BOTON CONDICIONALES MOSTRAR/OCULTAR 
===============
*/


const mostrarCondicional = document.getElementById("miCondicional");
let logCondicional = true;

mostrarCondicional.addEventListener("click", function(){
  if (logCondicional){
    let condicionales = prompt(`Inserte un numero:
    1 - PAR O IMPAR
    2 - POSITIVO O NEGATIVO
    3 - DIVICION
    4 - LETRA CORRECTA
    5 - DIFERENCIA NUMERICA
    6 - MAYOR DE EDAD`);
    if(condicionales === "1"){
      /* Nº PAR o IMPAR */
      let parImpar = prompt("Numero par o impar:");
      let divicion = parImpar%2;
      if (divicion === 0){
      console.log(`El numero ${parImpar} del PROMPT es PAR`)
      }else{
      console.log(`El numero ${parImpar} del PROMPT es IMPAR`)
      }
    }else if (condicionales === "2"){
      /* Nº POSITIVO o NEGATIVO */
      let ejCondicional2 = prompt("Numero negativo(-2) o positovo(4)");
      if(ejCondicional2 > -1){
        console.log(`El numero ${ejCondicional2} del PROMPT es POSITIVO`);
      }else {
        console.log(`El numero ${ejCondicional2} del PROMPT es NEGATIVO`);
      };
    }else if(condicionales === "3" ){
      /* DIVICION */
      let dividendo = parseInt(prompt("Nº Dividendo"));
      let divisor  = parseInt(prompt("Nº Divisor"));
      if (divisor != 0){
        cociente = dividendo/divisor;
        console.log(`${dividendo}/${divisor} = ${cociente}`);
      }
      else{
        console.log("No puedes dividir entre 0");
      }
    }else if(condicionales === "4"){
      /* LETRA CORRECTA */
      let letra = prompt("Teclee: A - B - C - D.")
      if(letra === "A" || letra === "a" ){
        console.log(`Letra "${letra}" correcta`)
      }else{
        console.log(`Letra "${letra}" incorrecta`)
      }
    }else if(condicionales === "5"){
      /* DIFERENCIA NUMERICA */
      let nume1 = parseInt(prompt("numero 1"));
      let nume2 = parseInt(prompt("numero 2"));
      let resultado;
      if(nume1 > nume2){
        resultado = nume1-nume2;
        console.log(`Hay una diferencia de ${resultado}`);
      }else {
        resultado = nume2-nume1;
        console.log(`Hay una diferencia de ${resultado}`)
      }
    }else if(condicionales === "6"){
      /* OPERADOR TERNARIO (condicion) "?" = verdadero ":" = falso */
      let eresMayor = (prompt("ingere su EDAD") >= 18)
      ?"Eres MAYOR de edad"
      :"Eres MENOR de edad";

      console.log(`Codigo (operador ternario):
      let eresMayor = (prompt("ingere su EDAD") >= 18)
      ?"Eres mayor de edad"
      :"Eres menor de edad";`)
      console.log(eresMayor)
      
    }else{
      console.log("Numero incorrecto")
    }

  }
});



/* 
==============
CICLOS (LOOPS)
==============
*/
// let contador = 0;
// while (contador < 10){
//   console.log(contador);
//   contador++;
// }
// do{
//   console.log("do while " + contador)
//   contador++;
// }while(contador < 10)


/* ====== FOR ======= */
// for (inicializacion de variable; condicion; decremento o incremento) {
//   const element = array[index];
// }
for (let i = 0; i < 10 ; i++) {
  console.log("for "+ i);
}

let numeritos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < numeritos.length; i++) {
  console.log(numeritos[i]);
}
/* FOR IN */
const nahu = {
  nombre: "Nahuel",
  apellido: "Mansilla",
  edad: 23
}
for (const propiedad in nahu){
  console.log(`Key: ${propiedad}, Value: ${nahu[propiedad]}`)
}

/* FOR OF */
for(const elemento of numeritos){
  console.log(elemento)
}

let cadena = "Hola Mundo";
for(const caracter of cadena){
  console.log(caracter)
}



/* 
=========
NULL - UNDEFINED - NAN
=========
 */



/* 
===========
FUNCIONES DE ORDEN SUPERIOR
===========
*/

function ordenSuperior(operacion, num1, num2){
  return operacion(num1, num2)
}

function sumar(a, b){
  return a + b;
}
function restar(a, b){
  return a - b;
}
function multiplicar(a, b){
  return a * b;
}
function dividir(a, b){
  return a / b;
}

console.log(ordenSuperior(sumar,5,10))
console.log(ordenSuperior(restar,5,10))
console.log(ordenSuperior(multiplicar,5,10))
console.log(ordenSuperior(dividir,5,10))





//VARIABLES LOCALES
// function varLocal(){
//   const localVar = "Esto es una variable local";
//   console.log(localVar);
// }

// /* console.log(localVar); //Esto no debe funcionar porque esta fuera de la funcion varLocal */

//         //VAR LOCALES TIENEN PRIORIDAD 

// const prioridad = "FUERA";
// function varLocal2(){
// const prioridad = "DENTRO";
// console.log("Estoy "+ prioridad + " del varLocal2");
// }


// //BOOLEANOS

// function trueOrFalse(wasThatTrue) {
//     // Cambia solo el código debajo de esta línea
//   if(wasThatTrue){
//     return "Yes, that was true"
//   }
//   return "No, that was false"
  
//     // Cambia solo el código encima de esta línea
  
// }
// trueOrFalse (true);
// trueOrFalse (false);

//     //DESIGUALDAD

// /* El operador de desigualdad (!=) es lo opuesto al operador de igualdad */
// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false

// /* El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. */
// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true


// /* Comparación con el operador "mayor o igual que" */
// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false

// /* Comparación con el operador "menor o igual que" */
// 4   <= 5 // true
// '7' <= 7 // true
// 5   <= 5 // true
// 3   <= 2 // false
// '8' <= 4 // false


// //      AND (&&)

// /* El mismo efecto podría lograrse anidando una sentencia "if" dentro de otra "if". */
// /*  if (num > 5) {
//         if (num < 10) {
//             return "Yes";
//         }
//     }
//     return "No"; */

// /* if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No"; */


//     /* Comparaciones con el operador lógico "or" */
// /* Este código devolverá Sí si num está entre 5 y 10 (5 y 10 incluidos).*/
// /* if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes"; */


// //      "ELSE"
// /* Con la sentencia else, se puede ejecutar un bloque alternativo de código. */
// /* if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// } */

// /* (ANTES) */
// function testElse(val) {
//     let result = "";
//     // Cambia solo el código debajo de esta línea
  
//     if (val > 5) {
//       result = "Bigger than 5";
//     }
  
//     if (val <= 5) {
//       result = "5 or Smaller";
//     }
  
//     // Cambia solo el código encima de esta línea
//     return result;
// }
  
// testElse(4);

// /* (DESPUES) */
// function testElse(val) {
//     let result = "";
//     // Cambia solo el código debajo de esta línea
  
//     if (val > 5) {
//       result = "Bigger than 5";
//     } else {
//       result = "5 or Smaller";
//     }
  
//     // Cambia solo el código encima de esta línea
//     return result;
// }
  
// testElse(4);



// //          ELSE IF
// /* Si tienes múltiples condiciones que necesitan ser resueltas, puedes encadenar sentencias if junto con sentencias else if. */
// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }


// //          IF ELSE
// /* El orden es importante en las sentencias if, else if.
// La función se ejecuta de arriba a abajo, por lo que habrá que tener cuidado con qué sentencia va primero. */

// /* ANTES */
// function orderMyLogic(val) {
//     if (val < 10) {
//       return "Less than 10";
//     } else if (val < 5) {
//       return "Less than 5";
//     } else {
//       return "Greater than or equal to 10";
//     }
// }
// orderMyLogic(7);
// /* DESPUES */
// function orderMyLogic(val) {
//     if (val < 5) {
//       return "Less than 5";
//     } else if (val < 10) {
//       return "Less than 10";
//     } else {
//       return "Greater than or equal to 10";
//     }
// }
// orderMyLogic(7);


// //      EJERCICIO HECHO:
// /* Escribe sentencias if / else if encadenadas para cumplir con las siguientes condiciones:

// num < 5 - devuelve Tiny
// num < 10 - devuelve Small
// num < 15 - devuelve Medium
// num < 20 - devuelve Large
// num >= 20 - devuelve Huge */

// //ANTES
// function testSize(num) {
//     // Cambia solo el código debajo de esta línea


// return "Change Me";
// // Cambia solo el código encima de esta línea
// }
// testSize(7);


// //DESPUES
// function testSize(num) {
//     // Cambia solo el código debajo de esta línea
// if(num <5){
// return "Tiny";
// }else if (num <10){
// return "Small";
// }else if (num <15){
// return "Medium";
// }else if (num <20){
// return "Large";
// }else if (num >=20){
// return "Huge";
// }
// return "Change Me";
// // Cambia solo el código encima de esta línea
// }
// testSize(7);




// //      CODIGO DE GOLF

// /* 
// Strokes (golpes)	  Devuelve
// 1	                  "Hole-in-one!"
// <= par - 2	        "Eagle"
// par - 1	            "Birdie"
// par	                "Par"
// par + 1	            "Bogey"
// par + 2	            "Double Bogey"
// >= par + 3	        "Go Home!"
// */

// /* Antes */
// const names1 = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Cambia solo el código debajo de esta línea

//   return "Change Me";
//   // Cambia solo el código encima de esta línea
// }
// golfScore(5, 4);


// /* Despues */

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Cambia solo el código debajo de esta línea
// if (strokes == 1){
//   return names[0]
// }else if(strokes <=par-2){
//   return names[1]
// }else if(strokes == par-1){
//   return names[2]
// }else if(strokes == par){
//   return names[3]
// }else if(strokes == par+1){
//   return names[4]
// }else if(strokes == par + 2){
//   return names[5]
// }else if(strokes >= par +3){
//   return names[6]
// }
//   return "Change Me";
//   // Cambia solo el código encima de esta línea
// }
// golfScore(5, 4);



// //        SWITCH


// /* Seleccionando entre muchas opciones con declaración switch */
// /* EJEMPLO:
// switch (fruit) {
//   case "apple":
//     console.log("The fruit is an apple");
//     break;
//   case "orange":
//     console.log("The fruit is an orange");
//     break;
// }
//  */


// //EJERCICIO
// /* Escribe una declaración switch que pruebe val y establezca answer con las siguientes condiciones:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta */

// function caseInSwitch(val) {
//   let answer = "";
//   // Cambia solo el código debajo de esta línea
// switch(val){
//   case 1: 
//     answer = "alpha";
//     break;
//   case 2:
//     answer="beta";
//     break;
//   case 3:
//     answer="gamma";
//     break;
//   case 4:
//     answer="delta";
//     break;
// }
//   // Cambia solo el código encima de esta línea
//   return answer;
// }
// caseInSwitch(1);



// /* Reemplazando cadenas de "If Else" por "Switch" */

// //      ANTES

// if (val === "bob") {
//   answer = "Marley";
// } else if (val === 42) {
//   answer = "The Answer";
// } else if (val === 1) {
//   answer = "There is no #1";
// } else if (val === 99) {
//   answer = "Missed me by this much!";
// } else if (val === 7) {
//   answer = "Ate Nine";
// }

// //      DESPUES
// switch (val) {
//   case "bob":
//     answer = "Marley";
//     break;
//     case 42:
//     answer = "The Answer";
//     break;
//   case 1:
//     answer = "There is no #1";
//     break;
//   case 99:
//     answer = "Missed me by this much!";
//     break;
//  case 7:
//     answer = "Ate Nine";
//     break;
// }



// //    OBJETOS

// const myDog2 = {
// "name": "Garabato",
// "legs": 4,
// "tails": 1,
// "friends": ["humanos", "jugar"],
// };

// const anotherObject = {
//   make: "Ford",
//   5: "five",
//   "model": "focus"
// };

// //Accede a propiedades de objetos con notación de puntos
// /* Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y notación de corchetes ([]), similar a un arreglo.*/
// const myObj2 = {
//   prop1: "val1",
//   prop2: "val2"
// };
// const prop1val = myObj2.prop1;
// const prop2val = myObj2.prop2;
// //prop1val tendrá una cadena con valor val1 y prop2val tendrá una cadena con valor val2.


// //Accede a propiedades de objetos con notación de corchete
// /* La segunda manera de acceder a las propiedades de un objeto es con la notación de corchetes ([]). Si la propiedad del objeto al que intentas acceder tiene un espacio en el nombre, necesitarás usar notación de corchetes. */
// const myObj3 = {
//   "Space Name": "Kirk",
//   "More Space": "Spock",
//   "NoSpace": "USS Enterprise"
// };
// myObj3["Space Name"];
// myObj3['More Space'];
// myObj3["NoSpace"];

// const testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };
// const entreeValue = testObj["an entree"];
// const drinkValue = testObj["the drink"]; 
// /* myObj["Space Name"] sería la cadena Kirk, myObj['More Space'] sería la cadena Spock, y myObj["NoSpace"] sería la cadena USS Enterprise.
// Ten en cuenta que los nombres de las propiedades con espacios deben estar entre comillas (simples o dobles). */


// //Accede a propiedades de objetos con variables

// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };
// const myDog3 = "Hunter";
// const myBreed = dogs[myDog3];
// console.log(myBreed);
// // La cadena Doberman se mostrará en la consola.



// // Actualizando las propiedades de un objeto
// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
// myDog.name="Julio"
// /*Vamos a cambiar su nombre por la cadena "Julio". Así es como actualizamos la propiedad del nombre del objeto: myDog.name = "Julio"; o myDog["name"] = "Julio";. Ahora cuando evaluamos myDog.name, en lugar de obtener Coder, vamos a obtener su nuevo nombre, Julio. */



// // Añade nuevas propiedades a un objeto de JavaScript

// /* Puedes añadir nuevas propiedades a los objetos de JavaScript existentes de la misma manera que los modificarías.
// Así es como podríamos agregar una propiedad bark a nuestro objeto ourDog: */
// /* 
// myDog.bark = "bow-wow";
// myDog["bark"] = "bow-wow";
//  */
// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// ourDog.bark = "bow-wow";



// //      ELIMINAR PROPIEDADES EN UN OBJETO de JavaScript

// delete myDog.bark;


// // Usa objetos para hacer búsquedas

// // antes
// function phoneticLookup(val) {
//   var result = "";
//   switch(val) {
//     case "alpha": 
//       result = "Adams";
//       break;
//     case "bravo": 
//       result = "Boston";
//       break;
//     case "charlie": 
//       result = "Chicago";
//       break;
//     case "delta": 
//       result = "Denver";
//       break;
//     case "echo": 
//       result = "Easy";
//       break;
//     case "foxtrot": 
//       result = "Frank";
//   }
//   return result;
// }
// phoneticLookup("charlie");

// // despues
// function phoneticLookup(val) {
//   let result = "";
//   const lookup = {
//     "alpha": "Adams",
//     "bravo":"Boston",
//     "charlie":"Chicago",
//     "delta":"Denver",
//     "echo":"Easy",
//     "foxtrot":"Frank"
//   };
//   result = lookup[val];
//   return result;
// }
// phoneticLookup("charlie");



// // Verifica las propiedades de un objeto

// /* A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método: 
// .hasOwnProperty(propname)
// para determinar si un objeto tiene una propiedad con ese nombre. 
// .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no. */
// const myObj = {
//   top: "hat",
//   bottom: "pants"
// };
// myObj.hasOwnProperty("top");//true
// myObj.hasOwnProperty("middle");//False




// TYPEOF
// TYPEOF
// TYPEOF
// TYPEOF
// TYPEOF
// TYPEOF
// TYPEOF

const MIEDAD = 23;

const mostrarTypeof = document.getElementById('miTypeof');
let logTypeof = true;

mostrarTypeof.addEventListener("click", function(){
  if(logTypeof){
    console.log("Typeof es un operador que nos devuelve el tipo de dato de una variable (number, boolean, string...)")
    console.log('(const MIEDAD = 23)',typeof(MIEDAD));
    console.log('(typeof 42)', typeof 42);
    console.log(`(typeof "Hola Mundo")`, typeof "hola Mundo");
    console.log(`(typeof true)`, typeof true);
    console.log(`(typeof MIEDAD === "number" && MIEDAD > 18)`, typeof MIEDAD === "number" && MIEDAD > 18);
  }
})
