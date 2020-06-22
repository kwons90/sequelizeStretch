const db = require('./dbConfig');
const Sequelize = require('sequelize');

const Recipe = db.define('Lasagne', {
    name: {
        type: Sequelize.STRING,
        defaultValue: 'cereal',
        validate: 
        {notEmpty: true,
        }
    },
    cookTime: {
        type: Number,
    },
});


module.exports = Recipe;
