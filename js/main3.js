/*
3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
*/

let valueTypeOf = (value) => {
    let valueType = typeof (value);
    return `El valor ingresado ${value} es de tipo ${valueType}`;
}

console.log (valueTypeOf (5));
console.log (valueTypeOf ('Rolando'));
console.log (valueTypeOf (true));
console.log (valueTypeOf ());
console.log (valueTypeOf (null));
console.log (valueTypeOf ([2,3,4,5]));

