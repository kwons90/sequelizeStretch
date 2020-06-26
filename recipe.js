const db = require('./dbConfig');
const {Sequelize, UUID, UUIDV4} = require('sequelize');

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
});



module.exports = Recipe;
