import request from 'supertest';
import app from "./app.js";

test('should return all expenses', async () => {
    const response = await request(app)
        .post('/graphql')
        .send({
            query: `
                query {
                    expenses {
                        id
                        concept
                        amount
                        createdAt
                        createdBy
                    }
                }
            `
        })
        .expect(200);
        
    // console.log(response.body);
});

test('should create a new expense', async () => {
    const response = await request(app)
        .post('/graphql')
        .send({
            query: `
                mutation {
                    createExpense(expenseInput: {
                        concept: 1,
                        amount: 100.00,
                        createdBy: 1
                    }) {
                        id
                        concept
                        amount
                        createdAt
                        createdBy
                    }
                }
            `
        })
        .expect(200);
    // console.log(response.body);
});

// test('should update an expense', async () => {
//     const response = await request(app)
//         .post('/graphql')
//         .send({
//             query: `
//                 mutation {
//                     updateExpense(id: "5f1e9b9c7e0f8a0d7c8d1e1f", expenseInput: {
//                         concept: 1,
//                         amount: 100.00,
//                         createdBy: 1
//                     }) {
//                         _id
//                         concept
//                         amount
//                         createdAt
//                         createdBy
//                     }
//                 }
//             `
//         })
//         .expect(200);
//     console.log(response.body);
// });

// test('should delete an expense', async () => {
//     const response = await request(app)
//         .post('/graphql')
//         .send({
//             query: `
//                 mutation {
//                     deleteExpense(id: "5f1e9b9c7e0f8a0d7c8d1e1f")
//                 }
//             `
//         })
//         .expect(200);
//     console.log(response.body);
// });

// test('should return an expense', async () => {
//     const response = await request(app)
//         .post('/graphql')
//         .send({
//             query: `
//                 query {
//                     expense(id: "5f1e9b9c7e0f8a0d7c8d1e1f") {
//                         id
//                         concept
//                         amount
//                         createdAt
//                         createdBy
//                     }
//                 }
//             `
//         })
//         .expect(200);
//     console.log(response.body);
// });

