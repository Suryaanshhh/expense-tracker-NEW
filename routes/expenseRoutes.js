const express=require('express');

const router=express.Router();

const expenseController=require('../controller/expenseController');

router.post('/add-expense',expenseController.AddExpense);

module.exports=router;
