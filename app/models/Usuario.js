import Sequelize from 'sequelize';
import database from './db.js';

const Usuario = database.define('usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Usuario;