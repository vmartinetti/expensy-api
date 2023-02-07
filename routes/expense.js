import express from 'express';
import { getAll, create } from '../controllers/expense.js';
const router = express.Router();

router.get('/', (req, res, next) => {
  getAll(req, res);
});

router.post('/', (req, res, next) => {
  create(req, res);
});


export default router;
