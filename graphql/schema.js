import { buildSchema } from "graphql";

export default buildSchema(`
    type Expense {
        id: ID!
        concept: Int!
        amount: Float!
        createdAt: String!
        createdBy: Int!
    }
    type RootQuery {
        hello: String!
        expenses: [Expense!]!
    }
    input ExpenseInputData {
        concept: Int!
        amount: Float!
        createdBy: Int!
    }
    type RootMutation {
        createExpense(expenseInput: ExpenseInputData): Expense
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }

`)
    