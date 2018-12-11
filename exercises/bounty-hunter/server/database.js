const uuid = require('uuid')

const database = [
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 4000,
        isJedi: "Jedi",
        id: uuid.v4()
    },{
        firstName: 'Anakin',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 4000000,
        isJedi: "Sith",
        id: uuid.v4()
    },{
        firstName: 'Obi-wan',
        lastName: 'Kenobi',
        living: false,
        bountyAmount: 20000,
        isJedi: "Jedi",
        id: uuid.v4()
    }
]

module.exports = database