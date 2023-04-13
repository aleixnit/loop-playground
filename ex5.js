/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca. 
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * 
 * No se ejecuta porque el valor de veces es 5, y el valor de i se inicializa en 5 por lo tanto la condicion i<veces es false y el codigo no se ejecuta
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces. 
 * Reestricción: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

 let veces = 5;

 for (let i=0; i<veces; i++) {
     console.log("No me voy a ejecutar...")
 }