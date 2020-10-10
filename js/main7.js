/*
7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
*/

let formatPhoneNumber = (num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) => `El formato telefónico del número ingresado es (${num1}${num2}${num3}) ${num4}${num5}${num6}-${num7}${num8}${num9}${num10}`;

console.log (formatPhoneNumber (0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log (formatPhoneNumber (9 , 8, 7, 6, 5, 4, 3, 2, 1, 0));

