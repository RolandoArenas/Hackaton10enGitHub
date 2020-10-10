JAVASCRIPT & HTTP


RETO 1:

Utilizar JavaScript para definir algoritmos


PROBLEMA:

En este caso, definiremos una serie de problemas para resolverlos utilizando el lenguaje JavaScript.
1. Crea una función que retorne la suma de dos números.
2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3
5. Crea una función llamada calculator que recibe 3 parámetros, dos números y
una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4


PREGUNTAS:

1. ¿Como defines una función?
    En JavaScript, una función es una porción de código que puede ser reutlizada y que puede o no tener parámetros. 
    Para definir sus partes, utilizemos la siguiente función:
        function sumar (num1, num2) {
            let suma = num1 + num2;
            return suma;
        }
    En este caso:
    - Palabra reservada en JavaScript para definir una función: function.
    - Nombre que le damos a la función: sumar
    - Parametro o nombre de cada argumento que se pasará a la función: num1, num2
    - Instrucciones: todo el cuerpo, es decir lo que está entre llaves {}
    Cabe señalar que todos los argumentos señalados tienen que figurar en las instrucciones. Además, cuando la función tiene que devolver algo, se usa la palabra "return". Todas las líneas de las instrucciones que vengán después de aquella donde está el "return", no son consideradas. 

2. ¿Hasta cuantos argumentos puedes declarar en una función?
    Una función puede tener hasta 255 argumentos.



