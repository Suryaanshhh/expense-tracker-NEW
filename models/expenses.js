const {Sequelize}=require('sequelize');

const sq=require('../utility/database');

const expenseTable=sq.define('expenses',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    expense:{
        type:Sequelize.INTEGER
    },
    description:{
        type:Sequelize.STRING
    },
    category:{
        type:Sequelize.STRING
    }
});

module.exports=expenseTable;