const button=document.getElementById('submission');

button.addEventListener('click',function(){
    const expense=document.getElementById('expense').value;
    const description=document.getElementById('description').value;
    const category=document.getElementById('category').value;
    
    const allExpense={
        expense:expense,
        description:description,
        category:category
    }
    axios.post('http://localhost:3000/add-expense',allExpense).then(result=>{
        console.log(result)
    }).catch(err=>console.log(err))
})
