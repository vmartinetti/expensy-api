import Expense from '../models/Expense.js';

const getAll = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const create = async (req, res) => {
    const expense = req.body;
    try {
        const newExpense = await Expense.create(expense);
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export { getAll, create };