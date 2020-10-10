/*
8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
*/

let amountPEN = prompt (`Ingrese la cantidad de soles peruanos que desea cambiar`);
let exchangeRate = prompt (`Ingrese el tipo de cambio venta del día`);

let amountPENNumber = Number (amountPEN);
let exchangeRateNumber = Number (exchangeRate);

let amountUSD = (amountPENNumber / exchangeRateNumber);

console.log (`Usted recibiría ${amountUSD} dólares americanos por sus ${amountPENNumber} soles peruanos, si es que el tipo de cambio venta del día es ${exchangeRateNumber}.`);
