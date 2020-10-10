/*
1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
*/

let persona = (firstName, lastName, age) => `Hola! Mi nombre es ${firstName} ${lastName} y mi edad ${age} años`;   

console.log (persona('Sebastián', 'Yabiku', 33));
console.log (persona('Rolando', 'Arenas', 44));
