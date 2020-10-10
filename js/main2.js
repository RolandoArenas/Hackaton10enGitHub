/*
2. Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/

let sumOfCubes = (num1, num2, num3) => {
    let sum = ((num1**3) + (num2**3) + (num3**3));
    return `La suma de los cubos de los números ${num1}, ${num2} y ${num3} es ${sum}`;
}

console.log (sumOfCubes (1, 5, 9));
console.log (sumOfCubes (3 , 4, 5));


