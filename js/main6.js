/*
6. Cree una función que tome una matriz de números y devuelva los números mínimos y
máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/

let minMax = (...numbers) => {

    if (numbers.length == 0) {
    return `Usted no ha ingresado ningún número`;
    }

    let max = numbers[0];
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
        if(numbers[i] < min) {
            min = numbers[i];
        }
    }

    return `El menor de los números ingresados es ${min} y el mayor ${max}`;
}

console.log (minMax (10, 48, 25, 8, 21, 2));
console.log (minMax ());

