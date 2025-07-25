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

const teams = [
    {
        id: 0,
        nome: 'Blue Exorcists',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        id: 1,
        nome: 'Purple Butteflies',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        id: 2,
        nome: 'Yellow Pidgeons',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        id: 3,
        nome: 'Red Devils',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        id: 4,
        nome: 'Rose Roses',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        id: 5,
        nome: 'Green Forest',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        id: 6,
        nome: 'Black Mambas',
        punti_fatti: 0,
        falli_subiti: 0
    }
]


for (let i = 0; i < teams.length; i++) {

    let thisTeam = teams[i]
    thisTeam.punti_fatti = Math.floor(Math.random() * 100)
    thisTeam.falli_subiti = Math.floor(Math.random() * 100)
}


let final_array = []
for (let i = 0; i < teams.length; i++) {
    let thisTeam = teams[i]
    let obj = {}
    obj['nome'] = thisTeam.nome
    obj['falli'] = thisTeam.falli_subiti
    final_array.push(obj)
}

console.log(final_array)
