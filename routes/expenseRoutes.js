const express=require('express');

const router=express.Router();

const expenseController=require('../controller/expenseController');

router.get('/show-expense',expenseController.ShowExpense);

router.post('/add-expense',expenseController.AddExpense);

router.delete('/delete-expense/:id',expenseController.DeleteExpense);

module.exports=router;
