//Scrivi un programma che
// stampi i numeri da 1 a 100 ma per i multipli di
// 3 stampi “Fizz” al posto del numero e per i
// multipli di 5 stampi Buzz. Per i numeri che
// sono sia multipli di 3 che di 5 stampi
// FizzBuzz.

// //Stampo i numeri da 1 a 100
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }

//Multipli assieme

// var fizz = 3;
// var buzz = 5;
//
// for (i = 1; i <= 100; i++) {
//   if ((i % fizz) == 0) {
//     console.log('Fizz');
//   }
//   else {
//     if ((i % buzz) == 0) {
//     console.log('Buzz');
//     }
//     else {
//     console.log(i);
//     }
//   }
//  }

//Multipli assieme al comune in un unica lista

var fizz = 3;
var buzz = 5;

for (i = 1; i <= 100; i++) {
  if (i % (fizz*buzz) == 0 )
  console.log('FizzBuzz');
else {
  if ((i % buzz) == 0) {
  console.log('Buzz');
  }
else {
  if ((i % fizz) == 0) {
  console.log('Fizz');
  }
else {
  console.log(i);
    }
  }
 }
}

//Stampo FIZZ per i MULTIPLI di 3 anzichè il numero
//è un multiplo di 3 se e solo se il resto della divisione è = 0 ( vero )
//altrimenti se il resto è diverso da 0 è falso

// var fizz = 3;
//
//  for (i = 1; i <= 100; i++) {
//    if ((i % fizz) == 0) {
//      console.log('Fizz');
//    }
//    else {
//    console.log(i);
//    }
//   }
// //
//
// //Stampo Buzz per i MULTIPLI di 5 anzichè il numero
// //è un multiplo di 5 se l ultimo valore numerico è = a 0 //o a 5//
// //
// var buzz = 5;
//
//  for (i = 1; i <= 100; i++) {
//      if ((i % buzz) == 0) {
//      console.log('Buzz');
//    }
//    else {
//    console.log(i);
//    }
//   }

//Stampo FizzBuzz per i MULTIPLI SIA di 3 CHE di 5
//i multipli di 3 e di 5 da 1 a 100 posso definirli in un array tanto non cambiano

  // var array = [15, 30, 45, 60, 75, 90,];
  // var array = false;

//Con il While sarà : "finchè" i num da 1 a minore o uguale a 100
//se il numero è divisibile per 3 e da come resto 0 E il numero è divisibile per 5 e da come resto 0


//primo tentativo
//
// var numero = (15, 30, 45, 60, 75, 90);
// // [15,30,45,60,75,90]; ----> i valore numerico in un array?!
//
// while (numero = false ) {
//
//   if (numero % 3 === 0 && numero % 5 === 0 ) {
//    console.log('FizzBuzz');
//   }
//   else {
//   console.log(i);
//   }
//   var numero = true;
//   numero++;
// }

//secondo tentativo

// var contenitore = [15, 30, 45, 60, 75, 90];
// var numero = (15,30,45,60,75,90);
//
// if (contenitore.includes(numero) == true) {
//   console.log('FizzBuzz');
// }
