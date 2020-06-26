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
        type: Number,
    },
    vegan: {
        type: Boolean,
    }
});



module.exports = Recipe;
