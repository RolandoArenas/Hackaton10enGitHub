/*
5. Crear una función que reciba un array de valores y filtre los valores que no son string
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

