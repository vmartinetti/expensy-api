// sequelize expense model
import Sequelize from 'sequelize';
import db from '../config/database.js';

class Expense extends Sequelize.Model {}
Expense.init(
    {
        
        concept: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true
        },
        createdBy: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'expense',
        timestamps: false,
        tableName: 'Expenses'
    }
);

export default Expense;