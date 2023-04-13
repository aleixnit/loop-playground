/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * escriba 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Porque?
 * Lo escribe 6 veces porqué la condicion contaba i<=veces y veces es = a 5. Por lo tanto, al empezar a sumar i desde 0, existen 6 posiciones del 0 al 5. Cambio la condicion del bucle while en vez de veces a 4 para que se ejecute el console.log 5 veces. (5 posiciones del 0 al 4).
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5
let i = 0

while (i<=4) {
    console.log("Ejecuto!")
    i++
}