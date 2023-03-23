/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const names = [
    'paOlo',
    'FaBBBBio',
    'giOvanni',
    'mUCIACCIA',
    'ROCCO',
    'CaToNe'
]

console.log(names);

const newArray = []

names.forEach((word) => {
    const lowcase = word.slice(1)
    const modStr = word[0].toUpperCase() + lowcase.toLowerCase()
    console.log(modStr);
    newArray.push(modStr)
})

console.log(newArray);
