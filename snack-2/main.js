/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const names = [
    'pLiuu',
    'fsaF',
    'PFSFA'
]

/* const toUpperCase = names[0].toUpperCase() + str.slice(1);

console.log(toUpperCase); */

names.forEach((word) => {
    const modStr = word[1].toUpperCase() + word.toLowerCase(1)
    console.log(modStr);
})
