import Expense from "../models/Expense.js"
const root = {
    hello: () => {
        return 'Hello World'
    },
    createExpense: async ({expenseInput}, req) => {
        const expense = {
            concept: expenseInput.concept,
            amount: expenseInput.amount,
            createdBy: expenseInput.createdBy
        };
        console.log('expense to be created: ', expense)
        try{
            const newExpense = await Expense.create(expense);
            return newExpense;
        }
        catch(error){
            console.log('error: ', error)
        }
    },
    expenses: async () => {
        try {
            const expenses = await Expense.findAll();
            return expenses;
        } catch (error) {
            console.log('error: ', error)
        }
    }
}

export default root; 