const db = require('./dbConfig');
const Sequelize = require('sequelize');
const {UUID, UUIDV4} = Sequelize

const Recipe = db.define('Recipe', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        defaultValue: 'cereal',
        validate:
        {
            notEmpty: true,
        }
    },
    cookTime: {
        type:Sequelize.INTEGER,
        validate:
        {
            min: 1,
            max: 60
        }
    },
    vegan: {
        type: Sequelize.BOOLEAN,
    },
    foodGroup: {
        type: Sequelize.ENUM,
        values: ['vegetable','meat','dairy','grain','fruit']
    }

});



module.exports = Recipe;
