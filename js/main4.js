/*
4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
*/

let sumNum = (...numbers) => {

    if (numbers.length == 0) {
    return `Usted no ha ingresado ningún número por lo que es imposible sumar`;
    }

    let total = 0;

    for(let i = 0; i <= numbers.length; i++)
        total += numbers[i];
    
    return `La suma de todos los números es ${total}`;
}

console.log (sumNum(1, 2, 25, 8, 21, 3));
