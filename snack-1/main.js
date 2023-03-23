/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */

const cars = [
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'benzina',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'diesel',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'gpl',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'benzina',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'metano',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'diesel',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'gpl',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'elettrico',
    },
    {
        brand: 'Ferrari',
        model: '458 Italia',
        fuelType: 'metano',
    },

]
console.log(cars);

const benzina = cars.filter((fuelType) => {
    if (fuelType.fuelType == 'benzina') {
        return true
    }
    })

console.log(benzina);

const diesel = cars.filter((fuelType) => {
    if (fuelType.fuelType == 'diesel') {
        return true
    }
    })

console.log(diesel);

const others = cars.filter((fuelType) => {
    if (fuelType.fuelType !== 'diesel' && fuelType.fuelType !== 'benzina') {
        return true
    }
    })

console.log(others);

