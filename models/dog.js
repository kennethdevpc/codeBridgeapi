const Sequelize = require('sequelize');
const db = require('../config/database');

const Dog = db.define('dog', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,

    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tail_length: {
        type: Sequelize.INTEGER,
        validate: {
            isValidInteger(value) {
                if (!Number.isInteger(value)) {
                    throw new Error('Tail_length has to be an integer');
                }
            },
            min: {
                args: [0],
                msg: 'It can not be less than zero'
            }
        }
    },
    weight: {
        type: Sequelize.INTEGER,
        validate: {
            isValidInteger(value) {
                if (!Number.isInteger(value)) {
                    throw new Error('Tail_length has to be an integer');
                }
            },
            min: {
                args: [0],
                msg: 'It can not be less than zero'
            }
        }
    }
});

module.exports = Dog;