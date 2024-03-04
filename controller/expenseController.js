const expenseTable=require('../models/expenses');


exports.AddExpense=async(req,res,next)=>{
    const expense=req.body.expense;
    const description=req.body.description;
    const category=req.body.category;
     const data= await expenseTable.create({
        expense:expense,
        description:description,
        category:category
     })
     res.status(200).json({expense:data})
}
