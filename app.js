import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema.js';
import root from './graphql/resolvers.js';

// import indexRouter from './routes/index.js';
// import expensesRouter from './routes/expense.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// app.use('/', indexRouter);
// app.use('/expenses', expensesRouter);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);

});

export default app;
