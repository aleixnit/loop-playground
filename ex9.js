/**
 * El bucle infinito
 *
 * El siguiente bucle 'while', no acaba nunca. ¿Por qué?
 * Porque en la condición, i siempre es más pequeño que n, por tanto se ejecuta el bucle infinitamente.
 * Arreglalo para que la palabra "Ejecutar!" se muestre 10 veces por el terminal
 */

let n=10;
let i=0;

while(i<n) {
    console.log("Ejecutar!")
    i++
}

