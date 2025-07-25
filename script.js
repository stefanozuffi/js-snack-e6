// Snack 1

const bikes = [
{
    id: 1,
    nome : 'Graziella',
    peso: 12
},
{
    id: 2,
    nome : 'Franca',
    peso: 34
},
{
    id: 3,
    nome : 'Penny',
    peso: 38
},
{
    id: 4,
    nome : 'Sbalunzola',
    peso: 27
},
{
    id: 5,
    nome : 'Crambina',
    peso: 67
}
]


let min_weight = Infinity
for (let i = 0; i < bikes.length; i++) {
    const thisBikeW = bikes[i].peso 
    if (thisBikeW <= min_weight) {
        min_weight = thisBikeW
    }
}

document.writeln(min_weight)



// Snack 2

