

const expenseTable = require('../models/expenses');


exports.ShowExpense = (req, res, next) => {
    expenseTable.findAll().then(response => {
        console.log(response);
        res.status(200).json({ expense: response })
    })
}


exports.AddExpense = async (req, res, next) => {
    const expense = req.body.expense;
    const description = req.body.description;
    const category = req.body.category;
    const data = await expenseTable.create({
        expense: expense,
        description: description,
        category: category
    })
    res.status(200).json({ expense: data })
}

exports.DeleteExpense = (req, res, next) => {
    const uId = req.params.id;
    //console.log(uId);
    expenseTable.destroy({ where: { id: uId } }).then((result) => {
        console.log(result)
        res.status(200).json({ message: 'Successfull' })
    }).catch(err => console.log(err))
}

exports.EditExpense = async (req, res, next) => {
    const uId = req.params.id;
    const updatedExpense = req.body.expense;
    const updatedDescription = req.body.description;
    const updatedCategory = req.body.category;
    const expenses = await expenseTable.findOne({ where: { id: uId } });
    expenseTable.expense = updatedExpense;
    expenseTable.description = updatedDescription;
    expenseTable.category = updatedCategory;

    await expenses.save()
}